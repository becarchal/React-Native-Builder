import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Utils } from '../../common'

import { } from './module'
import { } from './components'

class Template extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<View style={styles.container} />
		)
	}
}

const styles = StyleSheet.create({
	container: {},
})

Template.propTypes = {

}

export default connect(state => ({
	user: state.User.toJSON(),
}))(Template)
