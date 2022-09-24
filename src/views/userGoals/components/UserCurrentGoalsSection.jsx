import React, { useState, useContext } from 'react'
import { AuthenticationContext } from '../../../firebase/authentication'
import { getUserGoalsPromise } from '../../../firebase/userCollectionOperations';

const UserCurrentGoalsSection = () => {

    const { currentUserInfo, setCurrentUserInfo } = useContext(AuthenticationContext);
    const [goals, setGoals] = useState([]);

    const parseGoals = () =>{
        // LOAD THIS AND SET THE INFORMATION TO THE GOALS STATE
        getUserGoalsPromise(currentUserInfo.id).then(
            function(response){
                console.log('GOALS INFO:')
                console.log(response)
                // const goalsInfo = {...response.docs[0].data(), id: response.docs[0].id}
                // setGoals(goalsInfo)
            },
            function(error){
                console.log('Error code:', error.code)
                console.log('msg: ', error.message)
            }
        )
    }

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
                            <th className='col-5' scope="col">Name</th>
                            <th className='col-2' scope="col">Progress</th>
                            <th className='col-4' scope="col">Details</th>
                            <th className='col-1' scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>

                        { goals.map((item, idx)=>{
                            return <tr>
                                        <th scope="row">Goal</th>
                                        <td>25%</td>
                                        <td>Detail 1</td>
                                        <td>edit btn</td>
                                    </tr>
                        })}
                        <tr>
                            <th scope="row">Goal 1</th>
                            <td>25%</td>
                            <td>Detail 1</td>
                            <td>edit btn</td>
                        </tr>
                        <tr>
                            <th scope="row">Goal 2</th>
                            <td>55%</td>
                            <td>Detail 2</td>
                            <td>edit btn</td>
                        </tr>
                        <tr>
                            <th scope="row">Goal 3</th>
                            <td>15%</td>
                            <td>Detail 3</td>
                            <td>edit btn</td>
                        </tr>
                    </tbody>
                    {/* TODO: IMPLEMENT LIST WITH FOR USING STATE OF GOALS */}
                </table>
            </div>
        </section>
    )
}

export default UserCurrentGoalsSection