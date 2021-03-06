import React from 'react'
import Box from '@material-ui/core/Box'
import BannerStyle from 'src/style/Banner.module.scss'
import bannerImage from 'src/res/image/background/3.png'

export default class Banner extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Box className={BannerStyle['banner']}>
        <img
          className={BannerStyle['banner-image']}
          src={bannerImage}/>
      </Box>
    )
  }
}
