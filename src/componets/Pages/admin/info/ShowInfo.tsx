import React from 'react';
import { IData } from '../../../../interfaces/data';


interface IProps {
  info: IData;
}

const ShowInfo = (props: IProps) => {
  if (!props.info) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div>
        <label> Logo
          <img src={props?.info.logo} alt="" />
        </label>
      </div>
      <div>
        <label> Banner
          <img src={props?.info.banner} alt="" width={200}/>
        </label>
      </div>
      <div>
        <label> Name
          <h5>{props.info.name}</h5>
        </label>
      </div>
      <div>
        <label> email
          <h5>{props.info.email}</h5>
        </label>
      </div>
      <div>
        <label> age
          <h5>{props.info.age}</h5>
        </label>
      </div>
      <div>
        <label> phone
          <h5>{props.info.phone}</h5>
        </label>
      </div>
      <div>
        <label> description
          <h5>{props.info.description}</h5>
        </label>
      </div>
      <div>
        <label> facebook
          <h5>{props.info.facebook}</h5>
        </label>
      </div>
      <div>
        <label> github
          <h5>{props.info.github}</h5>
        </label>
      </div>
      <div>
        <label> cvLink
          <h5>{props.info.cvLink}</h5>
        </label>
      </div>
      <div>
        <label> phone
          <h5>{props.info.phone}</h5>
        </label>
      </div>
    </div>
  );
};

export default ShowInfo;