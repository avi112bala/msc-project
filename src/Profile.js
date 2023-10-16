import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "./Layout";
import star from './image/star-fill.png'
import delivery from './image/calendar-2-line.png'
import Footers from "./Footers";

function Profile() {
  const { name } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [post,setPost]=useState([]);

   useEffect(() => {
    axios.get("https://retoolapi.dev/T7uGrl/data")
    .then((res)=>{
      setPost(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
   });

  useEffect(() => {
    // Fetch profile data for the selected name
    axios
      .get(`https://retoolapi.dev/T7uGrl/data?name=${name}`)
      .then((response) => {
        setProfileData(response.data[0]);

      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, [name]);

  if (!profileData) {
    return <div>Loading...</div>;
  }

 
const filteredPosts = post.filter((item) => [1, 5, 8].includes(item.id));
  return (
    <>
      <Layout />
      <div className="profile">
        <div className="profilename">
          <h1>{profileData.name}</h1>
          <p>{profileData.intro}</p>
          <div className="start">
            <div className="mystart">
              <img src={star} />
            </div>
            <div className="rating">
              <span> {profileData.rating}</span>({profileData.reviewCount})
            </div>
          </div>
          <div className="information">
            <div className="rupee">
              <div className="task">{profileData.taskComplexity}</div>
              <div className="price">{profileData.price}</div>
            </div>
            <div className="delivery">
              <img src={delivery} />
              {profileData.deliveryTime}
            </div>
            <div className="buttons">
              <div className="request">
                <button>Request praposal</button>
              </div>
              <div className="chat">
                <button>Chat With Me</button>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <h1>What People Say?</h1>
            <p>{profileData["testimonial/text"]}</p>
          </div>
        </div>
        <div className="profileimage">
          <div className="personimage">
            <img src={profileData.image} alt={profileData.name} />
          </div>
          <div className="personinfo">
            <h1>{profileData.name}</h1>
            <div className="loctationinfo">
              <div className="from">
                <h1>FROM</h1>
                <h2>{profileData["about/from"]}</h2>
              </div>
              <div className="partnersince">
                <h1>PARTNER SINCE</h1>
                <h2>{profileData["about/partnerSince"]}</h2>
              </div>
              <div className="responcetime">
                <h1>AVERAGE RESPONSE TIME</h1>
                <h2>{profileData["about/averageResponseTime"]}</h2>
              </div>
            </div>
            <div className="About">
              <h1>ABOUT</h1>
              <p>{profileData["about/description"]}</p>
            </div>
            <div className="services">
              <div className="serviceslist">
                <h1>SERVICES I OFFER</h1>
                <ul>
                  <li>{profileData["about/services/0"]}</li>
                  <li>{profileData["about/services/1"]}</li>
                  <li>{profileData["about/services/2"]}</li>
                </ul>
              </div>
              <div className="whyme">
                <h1>WHY ME?</h1>
                <ul>
                  <li>{profileData["about/benefits/0"]}</li>
                  <li>{profileData["about/benefits/1"]}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <h1>{profileData.name} Profile</h1> */}
        {/* Display profile details here */}
      </div>
      <div className="recommended">
        <h1>Recommended for you</h1>
        <div className="listofalldata">
          {filteredPosts.map((posts) => (
            <div className="alldata" key={posts}>
              <img src={posts.image} alt={posts.name} />
              <div className="alldatadetails">
                <div className="alldataname">{posts.name}</div>
                <div className="allprice">{posts.price}</div>
              </div>
              <div className="alldataintro">
                <p>{posts.intro}</p>
              </div>
              <div className="alldatarating">
                <div className="alldatastar">
                  <img src={star} />
                </div>
                <div className="allrating">
                  <span> {posts.rating}</span>({posts.reviewCount})
                </div>
              </div>
              <div className="alldatabutton">
                <button>View services</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footers/>
    </>
  );
}

export default Profile;
