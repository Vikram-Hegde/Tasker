import './EmptyState.scss';
import Empty from '../icons/Empty';

export default function EmptyState() {
	return (
		<div className="empty-state">
			<Empty width={248} height={185} />
			<div className="content">Nothing to see here...</div>
		</div>
	);
}
