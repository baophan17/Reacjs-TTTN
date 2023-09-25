import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss'
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";



class Specialty extends Component {
    changLanguage = (language) => {
        this.props.changLanguageAppRedux(language);
    }
    render() {


        return (
            <div className='section-share section-specialty'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Chuyên khoa phổ biến</span>
                        <span className='btn-section'>Xem thêm</span>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-imgage section-specialty'></div>
                                <span>Cơ xương khớp 1</span>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-imgage section-specialty'></div>
                                <span>Cơ xương khớp 2</span>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-imgage section-specialty'></div>
                                <span>Cơ xương khớp 3</span>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-imgage section-specialty'></div>
                                <span>Cơ xương khớp 4</span>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-imgage section-specialty'></div>
                                <span>Cơ xương khớp 5</span>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-imgage section-specialty'></div>
                                <span>Cơ xương khớp 6</span>
                            </div>
                        </Slider>
                    </div>

                </div>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
