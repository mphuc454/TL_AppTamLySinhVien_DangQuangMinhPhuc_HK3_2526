from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import numpy as np
import pandas as pd
from database.supabase_python import data_supabase

def rule_based(avg_sentiment):
    if avg_sentiment >= 0.4:
        return "Ổn định"
    elif avg_sentiment >= -1:
        return "Cần theo dõi"
    else:
        return "Nghiêm trọng"
    

def analytics_emotion ():
    my_data = data_supabase()
    if hasattr(my_data, "data"):
        data = my_data.data
    else:
      data =  []
    if not data:
        return []        
    df = pd.DataFrame(data)
    if df.empty: return []
    
    if len(df) < 8:
        df["cluster"] = None
        df['emotion_status'] = df['avg_sentiment'].apply(rule_based)
        return df[["account_id", "cluster", "emotion_status"]].to_dict(orient="records")    

    df["positive_ratio"] = df["positive_count"] / df["total_log"]
    df["neutral_ratio"] = df["neutral_count"] / df["total_log"]
    df["negative_ratio"] = df["negative_count"] / df["total_log"]
    X = df[["positive_ratio", "neutral_ratio", "negative_ratio", "avg_sentiment"]].fillna(0)
    sc = StandardScaler()
    X_scaler = sc.fit_transform(X)
    n = min(3, len(df))
    kmeans = KMeans(n_clusters=n, random_state=42, n_init=10)
    labels = kmeans.fit_predict(X_scaler)
    df["cluster"] = labels
    cluster_avg = df.groupby("cluster")["avg_sentiment"].mean().sort_values()
    
    if n == 3:
        status_labels = ["Nghiêm trọng", "Cần theo dõi", "Ổn định"]
    elif n == 2:
        status_labels = ["Nghiêm trọng", "Ổn định"]
    else:
        status_labels = ["Cần theo dõi"]
        
    mapping = {cluster_id: status_labels[i] for i, cluster_id in enumerate(cluster_avg.index)}
    df["emotion_status"] = df["cluster"].map(mapping)
    return df[["account_id", "cluster", "emotion_status"]].to_dict(orient="records")
    
    

