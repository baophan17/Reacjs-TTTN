import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFacility.scss';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";

class MedicalFacility extends Component {

    render() {

        return (
            <div className='section-share section-medical-facility'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cơ sở y tế nổi bật</span>
                        <span className='btn-section'>Xem thêm</span>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='bg-image section-medical-facility'></div>
                                    <span>Bệnh viện Hữu nghị Việt Đức 1</span>
                                </div>
                            </div>

                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='bg-image section-medical-facility'></div>
                                    <span>Bệnh viện Hữu nghị Việt Đức 2</span>
                                </div>
                            </div>

                            <div className='section-customize'>
                                <div className='customize-border'>

                                    <div className='bg-image section-medical-facility'></div>
                                    <span>Bệnh viện Hữu nghị Việt Đức 3</span>
                                </div>
                            </div>

                            <div className='section-customize'>
                                <div className='customize-border'>

                                    <div className='bg-image section-medical-facility'></div>
                                    <span>Bệnh viện Hữu nghị Việt Đức 4</span>
                                </div>
                            </div>

                            <div className='section-customize'>
                                <div className='customize-border'>

                                    <div className='bg-image section-medical-facility'></div>
                                    <span>Bệnh viện Hữu nghị Việt Đức 5</span>
                                </div>
                            </div>

                            <div className='section-customize'>
                                <div className='customize-border'>

                                    <div className='bg-image section-medical-facility'></div>
                                    <span>Bệnh viện Hữu nghị Việt Đức 6</span>
                                </div>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
