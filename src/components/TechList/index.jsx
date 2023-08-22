import { AiOutlinePlus } from 'react-icons/ai';
import { TechsContext } from './../../providers/techsProvider';
import { useContext } from 'react';
import { TechCard } from './TechCard/index';
import styles from "./style.module.scss"

export const Techlist = () => {
    const { technoList } = useContext(TechsContext)
    return (
        <div className="container">
            <div className={styles.divTechs}>
                <h2 className="title1">Tecnologias</h2>
                <div className={styles.divButton}>
                    <button><AiOutlinePlus size={14} /></button>
                </div>

            </div>
            <ul>
                {technoList.map(techs => (
                    <TechCard key={techs.status} techs={techs} />
                ))}
            </ul>
        </div>
    )
}