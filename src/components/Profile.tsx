import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile(){
    const { level } = useContext(ChallengesContext);
    
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/61164653?s=460&u=694cd9f8b42f33bb3572156ede6e1d0e2b336187&v=4" alt="Wesley da Silva Sousa" />
            <div>
                <strong>Wesley da Silva Sousa</strong>

                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}


