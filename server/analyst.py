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
    df["cluster"] = None
    df['emotion_status'] = df['avg_sentiment'].apply(rule_based)
    return df[["account_id",    "cluster", "emotion_status"]].to_dict(orient="records")    
    
    

