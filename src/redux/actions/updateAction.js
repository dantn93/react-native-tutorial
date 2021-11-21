import { CAP_NHAT_EMAIL, CAP_NHAT_ID } from '../reducers/infoReducer';

export const updateEmail = (email) => async dispatch => {
    try {
        // 1. Side-effect: gọi lên server hoặc làm gì đấy bất đồng bộ (middleware redux-thunk giúp bạn việc này)
        await console.log("Bắt đầu gọi lên server")
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, 3000);
        });

        await console.log("DA CAP NHAT EMAIL LEN SERVER!")
        // 2. Cập nhật thông tin của infoReducer trong store
        dispatch({
            type: CAP_NHAT_EMAIL,
            email: email
        })
    } catch (error) {
    }
} 