import React from 'react'
import Story from '../Story/Story'
import { Row, Col, Spin } from "antd";
import { useSelector } from "react-redux";

const StoryList = ({ setSelectedId }) => {

  	const stories = useSelector((state) => state.stories);

  	console.log('stories', stories)

  	return !stories.length ?
			<div style={{ textAlign: "center" }}>
				No Stories Found
			</div>
		:
			(
				<Row gutter={[48, 32]}>
					{
						stories.map((story) => {
							return <Col key={story._id} lg={24} xl={12} xxl={8}>
								<Story setSelectedId={setSelectedId} story={story}/>
							</Col>
						})
					}
				</Row>
			)
		;
}

export default StoryList