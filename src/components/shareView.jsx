import '../styles/shareView.css';
export default function ShareView() {
  return (
    <div className="container text-center my-5">
      <div className="fullScreenBackground">
        <div className="overlay" />
      </div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNQxR_RJ5jXWuvYFqen8klBIQrPW3pAIwy-w&usqp=CAU"
        alt="Device Image"
        className="rounded-circle mb-4"
        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
      />
      <h3 style={{ fontWeight: 'bold' }}>Device Name</h3>
      <p>Device Description</p>
      {/* Link cards section */}
      <div className="d-flex mt-5 flex-wrap flex-column justify-content-center align-items-center">
        <div className="col-lg-5 col-md-6 mb-4 col-12">
          <a href="#" className="card-link">
            <div className="card p-3">
              <i className="bi bi-link"></i>
              <span>Link 1</span>
            </div>
          </a>
        </div>
        <div className="col-lg-5 col-md-6 mb-4 col-12">
          <a href="#" className="card-link">
            <div className="card p-3">
              <i className="bi bi-link"></i>
              <span>Link 2</span>
            </div>
          </a>
        </div>
        <div className="col-lg-5 col-md-6 mb-4 col-12">
          <a href="#" className="card-link">
            <div className="card p-3">
              <i className="bi bi-link"></i>
              <span>Link 3</span>
            </div>
          </a>
        </div>
        <div className="col-lg-5 col-md-6 mb-4 col-12">
          <a href="#" className="card-link">
            <div className="card p-3">
              <i className="bi bi-link"></i>
              <span>Link 4</span>
            </div>
          </a>
        </div>
      </div>

      {/* Company logo */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/SLTMobitel_Logo.svg/2560px-SLTMobitel_Logo.svg.png"
        alt="Company Logo"
        style={{ width: '150px', height: 'auto', marginTop: '70px' }}
      />
    </div>
  );
}
