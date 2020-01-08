import React from 'react';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';

const UserProfile = observer((props) => {
  console.log(props)
  return (
    <div >
        Bienvenido al home usuario {props.store.email}
    </div>
  );
})

export default inject("store")(UserProfile);
