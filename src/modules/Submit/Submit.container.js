import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { push } from 'connected-react-router'
import Submit from './Submit'

import {
  closeSubmitAction,
  onInputNameAction,
  onInputUrlAction,
  onInputDescAction,
  onImgReadAction,
  onImgZoomAction,
  onImgMoveControlAction,
  onImgMoveAction,
  onImgDoneAction,
  onImgCancelAction,
  submitAction,
} from './Submit.reducer'

const mapStateToProps = state => state.submit
const mapDispatchToProps = dispatch => ({
  onClickClose: () => dispatch(closeSubmitAction()),
  onInputName: name => dispatch(onInputNameAction(name)),
  onInputDesc: name => dispatch(onInputDescAction(name)),
  onInputUrl: name => dispatch(onInputUrlAction(name)),
  onImgRead: imgBase64 => dispatch(onImgReadAction(imgBase64)),
  onImgZoom: zoom => dispatch(onImgZoomAction(zoom)),
  onImgMoveControl: move => dispatch(onImgMoveControlAction(move)),
  onImgMove: (x, y) => dispatch(onImgMoveAction(x, y)),
  onImgCancel: () => dispatch(onImgCancelAction()),
  onImgDone: imgBase64 => dispatch(onImgDoneAction(imgBase64)),
  onSubmit: dapp => dispatch(submitAction(dapp)),
  onClickTerms: () => dispatch(push('/terms')),
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Submit),
)
