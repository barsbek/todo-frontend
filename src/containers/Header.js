import { connect } from 'react-redux';

import HeaderView from '../components/HeaderView';

const mapState = state => ({
  name: state.user.name,
  image: "https://cdn4.iconfinder.com/data/icons/eldorado-user/40/user-512.png",
})

export default connect(mapState)(HeaderView);
