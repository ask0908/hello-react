import { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: '기본 이름'
    };
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    };
    render() {
        const { name, favoriteNumber, children } = this.props;  // 비구조화 할당
        return (
            <div>
                하이여 내 이름은 {name}입니다 <br/>
                children 값은 {children}임~ <br/>
                내가 좋아하는 숫자는 {favoriteNumber}임!
            </div>
        );
    }
}

export default MyComponent;