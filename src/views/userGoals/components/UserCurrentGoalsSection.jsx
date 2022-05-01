import React from 'react'

const UserCurrentGoalsSection = () => {
    return (
        <section className='mt-4'>
            <div className='row d-flex border-bottom border-2 border-dark pb-1'>
                <h3 className='col-11'>Active goals</h3>
                <button className="col-1 btn btn-dark fw-bold"  data-bs-toggle="modal" data-bs-target="#exampleModal">+</button>
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