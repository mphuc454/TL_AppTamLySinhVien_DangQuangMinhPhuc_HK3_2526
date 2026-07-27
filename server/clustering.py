from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import numpy as np
import pandas as pd
from database.supabase_python import data_supabase
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
mapping = {
    0 : "Nghiêm trọng",
    1 : "Cần theo dõi",
    2 : "Ổn định"
}
df["emotion_status"] = df['cluster'].map(mapping)
print(df[["account_id", "cluster", "emotion_status"]])
