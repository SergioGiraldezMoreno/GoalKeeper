import React from 'react'

const UserAchievedGoalsSection = () => {
  return (
    <section className='mt-4'>
            <div className='row d-flex border-bottom border-2 border-dark pb-1 pt-2'>
                <h3 className='col-12'>Achieved goals</h3>
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
                            <th scope="row">Goal 5</th>
                            <td>100%</td>
                            <td>Detail 1</td>
                            <td>edit btn</td>
                        </tr>
                        <tr>
                            <th scope="row">Goal 12</th>
                            <td>100%</td>
                            <td>Detail 2</td>
                            <td>edit btn</td>
                        </tr>
                        <tr>
                            <th scope="row">Goal 5</th>
                            <td>100%</td>
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

export default UserAchievedGoalsSection