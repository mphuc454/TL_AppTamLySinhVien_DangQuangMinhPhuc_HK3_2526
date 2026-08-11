import numpy as np
import pandas as pd
from database.EmotionRepository import EmotionRepository

class AnalystEmotion:
    def __init__(self):
        self.repository = EmotionRepository()
        
    def rule_based(self, avg_sentiment):
        if avg_sentiment >= 0.6:
            return "Ổn định"
        elif avg_sentiment >= -1:
            return "Cần theo dõi"
        else:
            return "Nghiêm trọng"
    

    def analytics_emotion (self):
        my_data = self.repository.data_supabase()
        if hasattr(my_data, "data"):
            data = my_data.data
        else:
            data =  []
        if not data:
            return []        
        df = pd.DataFrame(data)
        if df.empty: return []
        df['emotion_status'] = df['avg_sentiment'].apply(self.rule_based)
        return df[["account_id", "emotion_status"]].to_dict(orient="records")    
    
    

