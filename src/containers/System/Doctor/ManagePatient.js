import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './ManagePatient.scss';
import DatePicker from '../../../components/Input/DatePicker';
import { getAllPatientForDoctor } from '../../../services/userSevice';
import moment from 'moment';
class ManagePatient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: moment(new Date()).startOf('day').valueOf(),
            dataPatient: []

        }
    }
    async componentDidMount() {
        let { user } = this.props;
        let { currentDate } = this.state;
        let formattedDate = new Date(currentDate).getTime();
        this.getDataPatient(user, formattedDate);


    }
    getDataPatient = async (user, formattedDate) => {
        let res = await getAllPatientForDoctor({
            doctorId: user.id,
            date: formattedDate
        })
        if (res && res.errCode === 0) {
            this.setState({
                dataPatient: res.data
            })
        }
    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }



    }
    showHideDetailInfor = (status) => {
        this.setState({
            isShowDetailInfor: status
        })

    }
    handleOnChangeDatePicker = (date) => {
        this.setState({
            currentDate: date[0]
        }, () => {
            let { user } = this.props;
            let { currentDate } = this.state;
            let formattedDate = new Date(currentDate).getTime();
            this.getDataPatient(user, formattedDate);
        })

    }
    handleBtnConfirm = () => {
        alert('confirmed')
    }
    handleBtnRemedy = () => {
        alert('send remedy')
    }
    render() {
        let { dataPatient } = this.state;
        // console.log('check state: ', this.state);
        return (
            <div className='manage-patient-container'>
                <div className='m-p-title'>
                    Quản lý bệnh nhân khám bệnh
                </div>
                <div className='manage-patient-body row'>
                    <div className='col-4 form-group'>
                        <label className='select-day'>Chọn ngày khám</label>
                        <DatePicker
                            onChange={this.handleOnChangeDatePicker}
                            className="form-control"
                            value={this.state.currentDate}
                        />
                    </div>
                    <div className='col-12'>
                        <table id="customers">
                            <tbody>
                                <tr>
                                    <th>STT</th>
                                    <th>Thời gian</th>
                                    <th>Họ và tên</th>
                                    <th>Địa chỉ</th>
                                    <th>Giới tính</th>
                                    <th>Actions</th>
                                </tr>
                                {dataPatient && dataPatient.length > 0 ?
                                    dataPatient.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.timeTypeDataPatient.valueVi}</td>
                                                <td>{item.patientData.firstName}</td>
                                                <td>{item.patientData.address}</td>
                                                <td>{item.patientData.genderData.valueVi}</td>
                                                <td>
                                                    <button
                                                        className='mp-btn-confirm'
                                                        onClick={() => this.handleBtnConfirm()}
                                                    >Xác nhận</button>
                                                    <button
                                                        className='mp-btn-remedy'
                                                        onClick={() => this.handleBtnRemedy()}
                                                    >Gửi hóa đơn</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    :
                                    <tr>
                                        no data
                                    </tr>

                                }
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        user: state.user.userInfo,

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagePatient);