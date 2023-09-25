import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";

class OutStandingDoctor extends Component {

    render() {

        return (
            <div className='section-share section-outstanding-doctor'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Bác sĩ nổi bật tuần qua</span>
                        <span className='btn-section'>Xem thêm</span>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-imgage section-outstanding-doctor'></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Khám Tại Trung Tâm Tiêu hóa Doctor Check 1</div>
                                        <div>Tiêu hóa</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-imgage section-outstanding-doctor'></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Khám Tại Trung Tâm Tiêu hóa Doctor Check 2</div>
                                        <div>Tiêu hóa</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>

                                    <div className='outer-bg'>
                                        <div className='bg-imgage section-outstanding-doctor'></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Khám Tại Trung Tâm Tiêu hóa Doctor Check 3</div>
                                        <div>Tiêu hóa</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>

                                    <div className='outer-bg'>
                                        <div className='bg-imgage section-outstanding-doctor'></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Khám Tại Trung Tâm Tiêu hóa Doctor Check 4</div>
                                        <div>Tiêu hóa</div>
                                    </div>
                                </div>

                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>

                                    <div className='outer-bg'>
                                        <div className='bg-imgage section-outstanding-doctor'></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Khám Tại Trung Tâm Tiêu hóa Doctor Check 5</div>
                                        <div>Tiêu hóa</div>
                                    </div>
                                </div>

                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>

                                    <div className='outer-bg'>
                                        <div className='bg-imgage section-outstanding-doctor'></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Khám Tại Trung Tâm Tiêu hóa Doctor Check 6</div>
                                        <div>Tiêu hóa</div>
                                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
