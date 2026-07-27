from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import numpy as np
import pandas as pd
from database.supabase_python import data_supabase

def analytics_emotion ():
    my_data = data_supabase()
    if hasattr(my_data, "data"):
        data = my_data.data
    df = pd.DataFrame(data)
    X = df[['total_log', 'positive_count', 'neutral_count', 'negative_count', 'avg_sentiment']]
    sc = StandardScaler()
    X_scaler = sc.fit_transform(X)
    n = min(3, len(df))
    kmeans = KMeans(n_clusters=n, random_state=42)
    labels = kmeans.fit_predict(X_scaler)
    df['cluster'] = labels
    centers = sc.inverse_transform(kmeans.cluster_centers_)
    centers_df = pd.DataFrame(
    centers,
    columns=[
        "total_log",
        "positive_count",
        "neutral_count",
        "negative_count",
        "avg_sentiment",
    ],
)
    centers_df["cluster"] = range(n)
    centers_df = centers_df.sort_values("avg_sentiment")
    if n == 3:
        labels = ["Nghiêm trọng", "Cần theo dõi", "Ổn định"]
    elif n == 2:
        labels = ["Nghiêm trọng", "Ổn định"]
    else:
        labels = ["Cần theo dõi"] 
    mapping = {}
    for i, row in enumerate(centers_df.itertuples()):
        mapping[row.cluster] = labels[i]    
    df["emotion_status"] = df["cluster"].map(mapping)
    return df[["account_id", "cluster", "emotion_status"]].to_dict(orient="records")
