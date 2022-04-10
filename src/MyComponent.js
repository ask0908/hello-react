import PropTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children }) => {
    return <div>
        하이여 내 이름은 {name}임 <br/>
        children 값은 {children}임~ <br/>
        내가 좋아하는 숫자는 {favoriteNumber}임!
    </div>;
};

MyComponent.defaultProps = {
    name: "기본 이름"
}

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
}

export default MyComponent;