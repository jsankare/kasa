import Dropdown from '../../components/Dropdown';
import Slider from '../../components/Slider'
import data from '../../datas/datas.json';
import style from './housing.module.css';
import Tag from '../../components/Tag'
import { Navigate, useParams } from 'react-router-dom';
import Rating from '../../components/Rating';

function Housing() {

    const idHousing = useParams('id').id
    const currentHousing = data.find(data => data.id === idHousing);

    if (!currentHousing) {
        return (
            <Navigate to="/404"/>
        )
    }

    const {title, location, host, rating, equipments, description, tags, pictures} = currentHousing
    return (
        <section className={style.main}>
            <div className={style.slider}>
            <Slider sliderImage={pictures}/>
            </div>
            <div className={style.infos}>
                <div className={style.flat}>
                    <h2 className={style.title}>{title}</h2>
                    <h3 className={style.location}>{location}</h3>
                    <div className={style.tags}>
                    {tags.map((tag) => (
                        <Tag content={tag}/>
                    ))}
                    </div>
                </div>
                <div className={style.host}>
                    <div className={style.intel}>
                        <span className={style.name}>{host.name}</span>
                        <img className={style.photo} src={host.picture} alt="host" />
                    </div>
                    <div className={style.rating}>
                        <Rating rating={rating}/> 
                    </div>
                </div>
            </div>
            <div className={style.dropdowns}>
                    <Dropdown title="Description"><span>{description}</span></Dropdown>
                    <Dropdown title="Equipements"><ul className={style.equipments}>{equipments.map(element => <li>{element}</li>)}</ul></Dropdown>
                </div>
        </section>
    );
}

export default Housing