import { useState} from "react";
import { journalData, moodData } from "../services/HealthcareService";

export default function useHealthCareViewModel(){
    const[selectedMood, setSelectMood] = useState<number | null>(null);
    const [journalText, setJournalText] = useState("");

      const saveMood = () => {
            console.log(selectedMood);
            console.log(journalText);
  };
  return{
    moodData, journalData,selectedMood, setSelectMood, journalText, saveMood, setJournalText, 
  };
}