import Image from 'next/image'
import ScrollToTop from './components/ScrollToTop'

export default function Home() {
  const articles = [
    {
      id: 1,
      image: "/course1.jpg",
      date: "Jan 26, 2023",
      title: "Best LearnPress WordPress Theme Collection For 2023"
    },
    {
      id: 2,
      image: "/course2.jpg", 
      date: "Jan 26, 2023",
      title: "Best LearnPress WordPress Theme Collection For 2023"
    },
    {
      id: 3,
      image: "/course3.jpg",
      date: "Jan 26, 2023", 
      title: "Best LearnPress WordPress Theme Collection For 2023"
    }
  ];

  return (
    <>
      <header className="header">
        <div className="logo">
          <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_1259)">
              <path d="M16.8234 29.4567C11.3396 27.4704 5.70868 26.8829 0 26.5025V1.37463C0.177608 1.57116 0.299517 1.69097 0.40461 1.82443C1.46185 3.16017 2.52855 4.4875 3.55742 5.84321C3.75709 6.10594 3.90422 6.48323 3.90528 6.80902C3.92629 11.7179 3.92629 16.6269 3.90423 21.5358C3.90107 22.1285 3.98935 22.3839 4.67666 22.4585C7.96084 22.82 11.2313 23.2793 14.361 24.4237C14.7593 24.5698 14.9716 24.7884 15.1209 25.1762C15.6558 26.5761 16.2254 27.9622 16.8234 29.4567Z" fill="#FF782D"/>
              <path d="M39.3008 1.36411V26.5025C33.611 26.885 27.9833 27.4599 22.5289 29.4472C22.5857 29.257 22.6214 29.092 22.6834 28.9385C23.1878 27.6743 23.7102 26.4174 24.1978 25.1468C24.3386 24.7789 24.5446 24.5719 24.9177 24.4342C27.4914 23.4894 30.1703 23.027 32.8712 22.6603C33.5059 22.5741 34.1417 22.4585 34.7797 22.4364C35.2904 22.4196 35.3966 22.2147 35.3955 21.7428C35.3797 16.8328 35.3923 11.9239 35.3766 7.01393C35.3745 6.50423 35.4985 6.10382 35.8243 5.70657C36.8626 4.43494 37.8663 3.13283 38.8857 1.84438C38.9939 1.70671 39.1137 1.57955 39.3008 1.36411Z" fill="#FF782D"/>
              <path d="M17.4918 16.8644C17.4834 17.7503 17.9268 18.3683 18.6972 18.7928C18.8832 18.8948 19.1165 19.1365 19.1176 19.3152C19.1417 22.7811 19.1354 26.2471 19.1323 29.7131C19.1323 29.7625 19.1028 29.8129 19.0429 30C18.5816 28.8587 18.1633 27.834 17.7534 26.8062C16.2832 23.129 14.8098 19.4518 13.3584 15.7661C13.2533 15.4971 13.2334 15.1387 13.3111 14.8613C13.7736 13.225 14.2633 11.5971 14.7751 9.97549C14.8991 9.58455 14.8287 9.37226 14.4945 9.13054C11.8461 7.21469 8.8846 5.9935 5.76122 5.11176C5.4617 5.02769 5.14747 4.8196 4.9499 4.57894C3.90842 3.30941 2.90163 2.0115 1.88432 0.722007C1.73824 0.537042 1.60162 0.344721 1.4072 0.0830383C6.42331 0.360485 10.914 1.90746 15.0305 4.56107C16.2748 5.36294 17.4623 6.25308 18.6825 7.09278C19.0041 7.31452 19.1512 7.56885 19.1459 7.98607C19.1228 10.089 19.1281 12.193 19.1428 14.2969C19.1459 14.6585 19.0671 14.8571 18.6993 15.0168C17.9174 15.3563 17.5002 16.0047 17.4918 16.8644Z" fill="#FF782D"/>
              <path d="M37.8694 0.137673C37.7034 0.353114 37.5384 0.569607 37.3702 0.783998C36.3655 2.05878 35.3713 3.34197 34.3446 4.59889C34.1586 4.8259 33.8632 5.02347 33.5805 5.10229C30.4729 5.97142 27.5324 7.19155 24.884 9.06852C24.4921 9.34597 24.4017 9.59084 24.552 10.0564C25.069 11.6559 25.5388 13.2702 26.0043 14.8844C26.0706 15.1146 26.0926 15.4099 26.0075 15.6253C24.141 20.3314 22.2567 25.0301 20.3745 29.7299C20.3545 29.7814 20.3146 29.8266 20.2305 29.959C20.2 29.7572 20.1675 29.6374 20.1675 29.5176C20.1643 26.1704 20.1706 22.8232 20.158 19.477C20.1559 19.1092 20.2515 18.921 20.6109 18.7613C21.3876 18.4145 21.8059 17.7692 21.8132 16.9074C21.8195 16.0173 21.3907 15.3636 20.5889 15.0074C20.2536 14.8581 20.1559 14.6858 20.158 14.34C20.1717 12.1961 20.1569 10.0511 20.178 7.90724C20.1801 7.68234 20.2904 7.37652 20.4575 7.2462C24.3512 4.22056 28.5234 1.72669 33.4208 0.698872C34.8637 0.395152 36.3361 0.229104 37.7948 0C37.819 0.0462412 37.8442 0.0914314 37.8694 0.137673Z" fill="#FF782D"/>
            </g>
            <defs>
              <clipPath id="clip0_1_1259">
                <rect width="39.3008" height="30" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <span>EduPress</span>
        </div>
        <nav className="nav">
          <a href="#">Courses</a>
          <a href="#">Blog</a>
          <a href="#">Pages</a>
          <a href="#">LearnPress Add-On</a>
          <a href="#">Premium Theme</a>
        </nav>
        <div className="auth-buttons">
          <a href="#" className="login">Login</a>
          <span>/</span>
          <a href="#" className="register">Register</a>
        </div>
      </header>
      
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Build Skills With Online Course</h1>
            <p className="hero-description">We discover with righteous indignation and dislike men who are so beguiled and demoralized.</p>
            <a href="#" className="cta-button">Start Learning</a>
          </div>
          <div className="hero-image">
        <Image
              src="/student.png" 
              alt="Happy student" 
              width={500} 
              height={500}
          priority
            />
          </div>
        </section>

        <section className="categories-section">
          <div className="categories-header">
            <div>
              <h2 className="categories-title">Top Categories</h2>
              <p className="categories-subtitle">Explore our Popular Categories</p>
            </div>
            <a href="#" className="all-categories">All Categories</a>
          </div>

          <div className="categories-grid">
            <a href="#" className="category-card">
              <div className="category-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM13 16h-2v2h2v-2zm0-6h-2v4h2v-4z"/>
                </svg>
              </div>
              <h3 className="category-name">Art & Design</h3>
              <span className="course-count">38 Courses</span>
            </a>

            <a href="#" className="category-card">
              <div className="category-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </div>
              <h3 className="category-name">Development</h3>
              <span className="course-count">38 Courses</span>
            </a>

            <a href="#" className="category-card">
              <div className="category-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                </svg>
              </div>
              <h3 className="category-name">Communication</h3>
              <span className="course-count">38 Courses</span>
            </a>

            <a href="#" className="category-card">
              <div className="category-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"/>
                </svg>
              </div>
              <h3 className="category-name">Videography</h3>
              <span className="course-count">38 Courses</span>
            </a>

            <a href="#" className="category-card">
              <div className="category-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                </svg>
              </div>
              <h3 className="category-name">Photography</h3>
              <span className="course-count">38 Courses</span>
            </a>

            <a href="#" className="category-card">
              <div className="category-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-3H7V7h10v2z"/>
                </svg>
              </div>
              <h3 className="category-name">Marketing</h3>
              <span className="course-count">38 Courses</span>
            </a>

            <a href="#" className="category-card">
              <div className="category-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2zm0-3H7v-2h10v2zm0-3H7V7h10v2z"/>
                </svg>
              </div>
              <h3 className="category-name">Content Writing</h3>
              <span className="course-count">38 Courses</span>
            </a>

            <a href="#" className="category-card">
              <div className="category-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                </svg>
              </div>
              <h3 className="category-name">Finance</h3>
              <span className="course-count">38 Courses</span>
            </a>

            <a href="#" className="category-card">
              <div className="category-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                </svg>
              </div>
              <h3 className="category-name">Science</h3>
              <span className="course-count">38 Courses</span>
            </a>

            <a href="#" className="category-card">
              <div className="category-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h3 className="category-name">Network</h3>
              <span className="course-count">38 Courses</span>
          </a>
        </div>
        </section>

        <section className="featured-section">
          <div className="featured-header">
            <div>
              <h2 className="featured-title">Featured Courses</h2>
              <p className="featured-subtitle">Explore our Popular Courses</p>
            </div>
            <a href="#" className="view-more">All Courses</a>
          </div>

          <div className="featured-grid">
            <div className="course-card">
              <div className="course-image">
                <Image
                  src="/course1.jpg"
                  alt="LMS Website Course"
                  width={400}
                  height={200}
                  objectFit="cover"
                />
                <span className="course-tag">Photography</span>
              </div>
              <div className="course-content">
                <div className="course-author">
                  <Image
                    src="/author1.jpg"
                    alt="Author"
                    width={24}
                    height={24}
                  />
                  <span>by DeterminedPixies</span>
                </div>
                <h3 className="course-title">Create An LMS Website With LearnPress</h3>
                <div className="course-meta">
                  <div className="course-stats">
                    <span className="stat">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                      </svg>
                      29 Weeks
                    </span>
                    <span className="stat">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                      </svg>
                      156 Students
                    </span>
                  </div>
                  <span className="course-price price-free">Free</span>
                </div>
              </div>
            </div>

            <div className="course-card">
              <div className="course-image">
                <Image
                  src="/course2.jpg"
                  alt="ThimPress Course"
                  width={400}
                  height={200}
                  objectFit="cover"
                />
                <span className="course-tag">Photography</span>
              </div>
              <div className="course-content">
                <div className="course-author">
          <Image
                    src="/author1.jpg"
                    alt="Author"
                    width={24}
                    height={24}
                  />
                  <span>by DeterminedPixies</span>
                </div>
                <h3 className="course-title">Design a Website With ThimPress</h3>
                <div className="course-meta">
                  <div className="course-stats">
                    <span className="stat">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                      </svg>
                      29 Weeks
                    </span>
                    <span className="stat">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                      </svg>
                      156 Students
                    </span>
                  </div>
                  <span className="course-price">$49.0</span>
                </div>
              </div>
            </div>

            <div className="course-card">
              <div className="course-image">
          <Image
                  src="/course3.jpg"
                  alt="LearnPress Course"
                  width={400}
                  height={200}
                  objectFit="cover"
                />
                <span className="course-tag">Photography</span>
              </div>
              <div className="course-content">
                <div className="course-author">
          <Image
                    src="/author1.jpg"
                    alt="Author"
                    width={24}
                    height={24}
                  />
                  <span>by DeterminedPixies</span>
                </div>
                <h3 className="course-title">Create An LMS Website With LearnPress</h3>
                <div className="course-meta">
                  <div className="course-stats">
                    <span className="stat">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                      </svg>
                      29 Weeks
                    </span>
                    <span className="stat">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                      </svg>
                      156 Students
                    </span>
                  </div>
                  <span className="course-price price-free">Free</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="addon-section">
          <div className="addon-banner">
            <div className="addon-content">
              <h2 className="addon-title">LearnPress Add-Ons</h2>
              <p className="addon-description">You need more? Let's check out LearnPress Add-Ons. These Add-Ons will help you to power and extend your LMS.</p>
              <a href="#" className="addon-button">Check it now</a>
            </div>
            <div className="floating-icons">
              <Image src="/addon-icons/icon1.png" alt="Add-on icon" width={50} height={50} />
              <Image src="/addon-icons/icon2.png" alt="Add-on icon" width={50} height={50} />
              <Image src="/addon-icons/icon3.png" alt="Add-on icon" width={50} height={50} />
              <Image src="/addon-icons/icon4.png" alt="Add-on icon" width={50} height={50} />
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">250+</div>
              <div className="stat-label">Active Members</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">899</div>
              <div className="stat-label">Total Courses</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">156</div>
              <div className="stat-label">Members</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </section>

        <section className="grow-section">
          <div className="grow-content">
            <h2 className="grow-title">Grow Up Your Skill With LearnPress LMS</h2>
            <p className="grow-description">We discover with righteous indignation and dislike men who are so beguiled and demoralized.</p>
            <div className="grow-features">
              <div className="feature-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FF782D">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                <span>Certificate</span>
              </div>
              <div className="feature-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FF782D">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                <span>Certificate</span>
              </div>
              <div className="feature-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FF782D">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                <span>Certificate</span>
              </div>
              <div className="feature-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FF782D">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                <span>Certificate</span>
              </div>
              <a href="#" className="addon-button">Learn More</a>
            </div>
          </div>
          <div className="grow-image">
            <Image src="/grow-illustration.png" alt="Learning illustration" width={500} height={400} />
          </div>
        </section>

        <section className="education-banner">
          <div className="banner-content">
            <p className="banner-label">PROVIDING AMAZING</p>
            <h3 className="banner-title">Education WordPress Theme</h3>
            <p className="banner-description">The next level of LMS WordPress Theme. Learn anytime and anywhere.</p>
            <a href="#" className="banner-button">Explore Course</a>
          </div>
          <Image 
            src="/theme-preview1.png" 
            alt="Education WordPress Theme Preview"
            fill
            className="banner-background"
            priority
          />
        </section>

        <section className="feedback-section">
          <div className="feedback-header">
            <h2 className="feedback-title">Student Feedbacks</h2>
            <p className="feedback-subtitle">What Students Say About Academy LMS</p>
          </div>

          <div className="feedback-grid">
            <div className="feedback-card">
              <div className="quote-icon">"</div>
              <p className="feedback-text">
                I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound
              </p>
              <div className="feedback-author">
                <h4>Roe Smith</h4>
                <p>Designer</p>
              </div>
            </div>

            <div className="feedback-card">
              <div className="quote-icon">"</div>
              <p className="feedback-text">
                I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound
              </p>
              <div className="feedback-author">
                <h4>Roe Smith</h4>
                <p>Designer</p>
              </div>
            </div>

            <div className="feedback-card">
              <div className="quote-icon">"</div>
              <p className="feedback-text">
                I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound
              </p>
              <div className="feedback-author">
                <h4>Roe Smith</h4>
                <p>Designer</p>
              </div>
            </div>

            <div className="feedback-card">
              <div className="quote-icon">"</div>
              <p className="feedback-text">
                I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound
              </p>
              <div className="feedback-author">
                <h4>Roe Smith</h4>
                <p>Designer</p>
              </div>
            </div>
          </div>
        </section>

        <section className="start-section">
          <div className="start-content">
            <div className="start-icon">
              <Image 
                src="/author1.jpg"
                alt="Start Icon"
                width={48}
                height={48}
              />
            </div>
            <h3 className="start-text">Let's Start With Academy LMS</h3>
            <div className="start-buttons">
              <a href="#" className="student-button">I'm a Student</a>
              <a href="#" className="instructor-button">Become An Instructor</a>
            </div>
          </div>
        </section>

        <section className="articles-section">
          <div className="articles-header">
            <div>
              <h2 className="articles-title">Latest Articles</h2>
              <p className="articles-subtitle">Explore our Free Articles</p>
            </div>
            <a href="#" className="all-articles">All Articles</a>
          </div>

          <div className="articles-grid">
            {articles.map((article) => (
              <article key={article.id} className="article-card">
                <div className="article-image">
                  <Image 
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={200}
                  />
                </div>
                <div className="article-content">
                  <p className="article-date">{article.date}</p>
                  <a href="#" className="article-title">
                    {article.title}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.8234 29.4567C11.3396 27.4704 5.70868 26.8829 0 26.5025V1.37463C0.177608 1.57116 0.299517 1.69097 0.40461 1.82443C1.46185 3.16017 2.52855 4.4875 3.55742 5.84321C3.75709 6.10594 3.90422 6.48323 3.90528 6.80902C3.92629 11.7179 3.92629 16.6269 3.90423 21.5358C3.90107 22.1285 3.98935 22.3839 4.67666 22.4585C7.96084 22.82 11.2313 23.2793 14.361 24.4237C14.7593 24.5698 14.9716 24.7884 15.1209 25.1762C15.6558 26.5761 16.2254 27.9622 16.8234 29.4567Z" fill="#FF782D"/>
                <path d="M39.3008 1.36411V26.5025C33.611 26.885 27.9833 27.4599 22.5289 29.4472C22.5857 29.257 22.6214 29.092 22.6834 28.9385C23.1878 27.6743 23.7102 26.4174 24.1978 25.1468C24.3386 24.7789 24.5446 24.5719 24.9177 24.4342C27.4914 23.4894 30.1703 23.027 32.8712 22.6603C33.5059 22.5741 34.1417 22.4585 34.7797 22.4364C35.2904 22.4196 35.3966 22.2147 35.3955 21.7428C35.3797 16.8328 35.3923 11.9239 35.3766 7.01393C35.3745 6.50423 35.4985 6.10382 35.8243 5.70657C36.8626 4.43494 37.8663 3.13283 38.8857 1.84438C38.9939 1.70671 39.1137 1.57955 39.3008 1.36411Z" fill="#FF782D"/>
              </svg>
              <span>EduPress</span>
            </div>
            <p className="footer-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>GET HELP</h3>
            <div className="footer-links">
              <a href="#">Contact Us</a>
              <a href="#">Latest Articles</a>
              <a href="#">FAQ</a>
              <a href="#">Languages</a>
              <a href="#">Programming</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>PROGRAMS</h3>
            <div className="footer-links">
              <a href="#">Art & Design</a>
              <a href="#">Business</a>
              <a href="#">IT & Software</a>
              <a href="#">Languages</a>
              <a href="#">Programming</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>CONTACT US</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>5521 New Design St, Lorem ipsum10</span>
              </div>
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 2H2v20h20V2zM9 19H4v-2h5v2zm11 0h-8v-2h8v2zm0-4H4v-2h16v2zm0-4H4V9h16v2zm0-4H4V5h16v2z"></path>
                </svg>
                <span>support@mail.com</span>
              </div>
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                </svg>
                <span>+1 (234) 567-8900</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2024 LearnPress LMS | Powered by ThimPress</p>
        </div>
      </footer>

      <ScrollToTop />
    </>
  )
}