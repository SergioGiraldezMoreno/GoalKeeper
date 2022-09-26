import React, { useState, useContext, useEffect } from 'react'
import { AuthenticationContext } from '../../../firebase/authentication'
import { getGoalsStream } from '../../../firebase/userCollectionOperations';
import '../styles/UserGoals.css';
import GoalRow from './GoalRow';

const UserCurrentGoalsSection = () => {

    const { currentUserInfo } = useContext(AuthenticationContext);
    const [goals, setGoals] = useState([]);

    const parseGoals = (snapshot) =>{
        const updatedGoals = snapshot.docs.map(docSnapshot => docSnapshot.data());
        const doneGoals = updatedGoals.filter((goal) => {
            return !goal.done;
        })
        setGoals(doneGoals);
    }

    useEffect(() => {
        if (currentUserInfo) {
            const unsubscribe = getGoalsStream(currentUserInfo.id,
                (querySnapshot) => {
                    parseGoals(querySnapshot)
                },
                (error) => console.log('Failed loading the goals')
            );
            return unsubscribe;
        }
    }, [currentUserInfo, setGoals]);

    return (
        <section className='mt-4'>
            <div className='row d-flex border-bottom border-2 border-dark pb-1 px-1'>
                <h3 className='col-9 col-md-11'>Active goals</h3>
                <button className="col-3 col-md-1 btn btn-dark fw-bold"  data-bs-toggle="modal" data-bs-target="#exampleModal">+</button>
            </div>
            <div>
                <table className='table table-hover border-dark'>
                    <thead>
                        <tr>
                            <th className='col-3' scope="col">Name</th>
                            <th className='col-2' scope="col">Progress</th>
                            <th className='col-5' scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        { goals.map((item, idx)=>{
                            return <GoalRow key={idx} goal={item} />
                            // return <tr key={idx}>
                            //             <th scope="row">{item.title}</th>
                            //             <td>In progress</td>
                            //             <td>{item.description}</td>
                            //         </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default UserCurrentGoalsSection