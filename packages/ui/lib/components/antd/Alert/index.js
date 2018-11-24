import React from 'react';
import {Alert} from 'antd';
import './index.less';
import {prefixs} from '../../prefixs';

const AlertAdaptor = ({
	message = '', description, type = 'info',
	closable = false, closeText,
	showIcon = true, ...rest
}) => (message ? (
	<Alert
		prefixCls={`${prefixs.antd}-alert`}
		{...rest}
		message={message}
		description=""
		type={type}
		banner
		showIcon={showIcon}
		closable={closable}
		closeText={closeText}
		className={closable || closeText ? 'has-close-btn' : ''}
	/>) : false);

export default AlertAdaptor;
