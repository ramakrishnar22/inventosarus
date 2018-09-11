import React from 'react';
import {Link} from 'react-router-dom';
import ProgressiveImage from 'react-progressive-image-loading'
import eventlist from '../data/eventlist.json';
const EventListBox = ({x,dept})=>
<Link to={`/events/${dept}/${x}`} className={`transywhite centerify 8m-8m 8p-8p`} style={{display:'inline-flex'}}>
	<div className='col centerify'>
		<ProgressiveImage
			preview={`https://robohash.org/${x}.png?bgset=bg2&&size=10x10`}
			src={`https://images.ssninvente.com/designericons/${dept}/${x}.png?bgset=bg2&&size=150x150`}
			render={(src, style) => <img src={src} style={{width:'150px',height:'150px'}} />}
		/>
		<div className='8p-16p text-center'>
			 {eventlist[dept][x]}
		</div>
	</div>
</Link>

export default EventListBox;