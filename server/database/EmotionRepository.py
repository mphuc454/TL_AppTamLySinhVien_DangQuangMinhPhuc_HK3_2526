from supabase import create_client
from dotenv import load_dotenv
load_dotenv()
import os

class EmotionRepository:
    def data_supabase(self):
        url: str = os.environ.get("SUPABASE_URL")
        key: str = os.environ.get("SUPABASE_KEY")
        supabase = create_client(url, key)
        data = supabase.table("emotion_features").select("*").execute()
        return data