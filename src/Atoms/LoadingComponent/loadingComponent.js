import React from 'react';

import { css } from 'aphrodite/no-important';
import { styles } from './styles';
import '../../index.css';

const LoadingComponent = () => (
	<div className={ css(styles.LoadingComponentWrapper) }>
		<div id="cssload-contain">
			<div className="cssload-wrap" id="cssload-wrap1">
				<div className="cssload-ball" id="cssload-ball1" />
			</div>

			<div className="cssload-wrap" id="cssload-wrap2">
				<div className="cssload-ball" id="cssload-ball2" />
			</div>

			<div className="cssload-wrap" id="cssload-wrap3">
				<div className="cssload-ball" id="cssload-ball3" />
			</div>

			<div className="cssload-wrap" id="cssload-wrap4">
				<div className="cssload-ball" id="cssload-ball4" />
			</div>
		</div>
	</div>
);

export default LoadingComponent;
