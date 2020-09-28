import React from "react";
import "../../Scss/section/aboutUs.scss";
import Header from "../../Components/Header/Header";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="articleWrapper">
        <h2 className="articleTitle">Lorem ipsum dolor sit amet consectetur</h2>
        <ul className="articleList">
          <li className="acticleListItem">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
            error ipsum! Vero deleniti mollitia nobis tempora velit dignissimos
            esse quasi, aut vel iste, dolorum sapiente error cum tempore ea
            fugiat.Hic ipsam autem aliquid atque sapiente.
          </li>
          <li className="acticleListItem">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            inventore ducimus ad autem cupiditate maxime illo iure laboriosam
            suscipit in obcaecati nobis est dolores, facere voluptatem placeat
            accusamus neque necessitatibus.
          </li>
          <li className="acticleListItem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            itaque minima illo, necessitatibus voluptatem delectus molestiae,
            quidem assumenda eligendi aliquam repellat eius dolorum alias!
          </li>
          <li className="acticleListItem">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
            deleniti in quidem optio ab ipsam nostrum, sunt iusto dolorem autem
            nulla maxime quia libero illo asperiores natus dolor eius ratione.
            Molestias aliquam voluptates architecto, explicabo nisi accusamus
            animi, provident similique, perspiciatis laudantium ea obcaecati
            numquam aliquid?
          </li>
        </ul>
      </div>
    </>
  );
};

export default AboutUs;
