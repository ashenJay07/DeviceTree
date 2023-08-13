import Image from 'next/image';
import styles from '../styles/deviceView.module.css';
import '../styles/shareView.css';

export default function DeviceView() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className={styles.deviceContainer}>
        <Image
          src="/deviceFrame.png" // Replace with the actual path to your device frame image
          alt="Mobile Device Frame"
          width={300} // Set the width of the device frame image
          height={600} // Set the height of the device frame image
        />

        {/* Your content inside the device screen */}
        <div className={styles.content}>
          <div className="container text-center my-2 ">
            <div className="scroll-wrapper">
              <div className="fullScreenBackground">
                <div className={styles.overlay} />
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNQxR_RJ5jXWuvYFqen8klBIQrPW3pAIwy-w&usqp=CAU"
                alt="Device Image"
                className="rounded-circle mb-4"
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
              <h4>Device Name</h4>
              <p style={{ fontSize: '10px' }}>Device Description</p>
              {/* Link cards section */}
              <div className="d-flex  flex-wrap flex-column justify-content-center align-items-center">
                <div
                  className="col-lg-5 col-md-6 mb-2 col-12"
                  style={{ width: '250px' }}
                >
                  <a href="#" className="card-link">
                    <div className="card p-2">
                      <i className="bi bi-link"></i>
                      <span>Link </span>
                    </div>
                  </a>
                </div>
                <div
                  className="col-lg-5 col-md-6 mb-2 col-12"
                  style={{ width: '250px' }}
                >
                  <a href="#" className="card-link">
                    <div className="card p-2">
                      <i className="bi bi-link"></i>
                      <span>Link 2</span>
                    </div>
                  </a>
                </div>
                <div
                  className="col-lg-5 col-md-6 mb-2 col-12"
                  style={{ width: '250px' }}
                >
                  <a href="#" className="card-link">
                    <div className="card p-2">
                      <i className="bi bi-link"></i>
                      <span>Link 3</span>
                    </div>
                  </a>
                </div>
                <div
                  className="col-lg-5 col-md-6 mb-2 col-12"
                  style={{ width: '250px' }}
                >
                  <a href="#" className="card-link">
                    <div className="card p-2">
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
                style={{ width: '100px', height: 'auto', marginTop: '50px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
