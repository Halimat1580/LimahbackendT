import React from 'react'
import heroImg from'../Assets/WhatsApp Image 2023-11-22 at 12.23.17_a1abe876.jpg'

const Home = () => {
  return (
    <main className='container pt-5'>
        <div className='row justify-content-between align-items-center pb-4'>
            
            <div className='col-sm-12 col-md-4'>
                <img src={heroImg} alt="heroImg" className='img-fluid img-thumbnail rounded' />
            </div>

            <div className='col-sm-12 col-md-6'>
                <h2>Improve Productivity By Managing<span className='text-danger'>Your Users</span></h2>
                <p className='py-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio tempore delectus nisi beatae modi saepe pariatur ipsum rerum natus quae repellendus hic qui atque laudantium tenetur, ab officiis cum officia excepturi ea, amet reiciendis voluptatum? Quia ad impedit officiis, iusto quidem doloremque, soluta voluptatum reprehenderit dicta officia modi vel perferendis!
                </p>
                <div className='d-flex gap-5'>
                    <button className="btn btn-primary btn-lg">
                        + New User
                    </button>
                    <button className="btn btn-primary btn-lg">
                        All User
                        </button>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Home