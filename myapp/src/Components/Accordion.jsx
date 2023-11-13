import React from 'react';

const cards = [
    {
      name: 'CUNY',
      imagelink: "https://pbs.twimg.com/profile_images/1676600958153904131/OSV4hFd7_400x400.png",
      id: 1,
      text: 'Data Operations',
      twitterlink: 'https://twitter.com/CUNY',
      facebooklink: 'https://www.facebook.com/CUNY',
      linkedin: 'https://www.linkedin.com/school/city-university-of-new-york/',
      instagram: 'https://www.instagram.com/cunyedu/'
    },
    {
      name: 'Zenith Media',
      imagelink: "https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1499942989/c0nvhdutlfq6i6gimwap.png",
      id: 2,
      text: 'Data Operations',
      twitterlink: 'https://twitter.com/ZenithMedia',
      facebooklink: 'https://www.facebook.com/ZenithMedia/',
      linkedin: 'https://www.linkedin.com/company/zenith/',
      instagram: 'https://www.instagram.com/zenithmedia/'
    },
    {
      name: 'Medgar Evers',
      imagelink: "https://user-content.givegab.com/uploads/group/logo/437321/4931efe76192d8b2883decf9c01555a59d3900a1.png",
      id: 3,
      text: 'Data Operations',
      twitterlink: 'https://twitter.com/NewsatMedgar',
      facebooklink: 'https://www.facebook.com/MedgarEversCollege/',
      linkedin: 'https://www.linkedin.com/school/medgar-evers-college/',
      instagram: 'https://www.instagram.com/medgareverscollege/'
    },
    {
      name: 'Wall Street Bound',
      imagelink: "https://media.licdn.com/dms/image/C4D0BAQGjrP2z2BJ3WA/company-logo_200_200/0/1635172316697/wallstreetbound_logo?e=2147483647&v=beta&t=Q73e9VO-e22wLGGj133wfsYZFO6NS5QFM6mi_e6EmL0",
      id: 4,
      text: 'Data Operations',
      twitterlink: 'https://twitter.com/wallstreetbound',
      facebooklink: 'https://www.facebook.com/WallStreetBound.org',
      linkedin: 'https://www.linkedin.com/company/wall-street-bound/',
      instagram: 'https://www.instagram.com/wallstreetbound/'
    },
  ];
  

export const Accordion = () => {
  return (
    <div>
      <div className="p-5 bg-primary">
        <div className="text-center">
          <h2 className="text-emphasis text-white">Experience</h2>
          <p className="text-white">
            Can I make these websites for your company? Of course I can!
          </p>
        </div>

        <div className="container text-center">
          <div className="row g-4">
            {cards.map(item => (
              <div key={item.id} className="col-md-6 col-lg-3">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <img
                      src={item.imagelink}
                      alt=""
                      className="card-img rounded-circle mb-3 p-3"
                    ></img>

                    <h2 className="card-title mb-3">{item.name}</h2>

                    <p className="card-text">{item.text}</p>

                    <a href={item.twitterlink} className="bi bi-twitter text-dark mx-1" target="_blank" rel="noopener noreferrer"></a>
                    <a href={item.facebooklink} className="bi bi-facebook text-dark mx-1" target="_blank" rel="noopener noreferrer"></a>
                    <a href={item.linkedin} className="bi bi-linkedin text-dark mx-1" target="_blank" rel="noopener noreferrer"></a>
                    <a href={item.instagram} className="bi bi-instagram text-dark mx-1" target="_blank" rel="noopener noreferrer"></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
