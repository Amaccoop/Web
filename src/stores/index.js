import UserStore from './UserStore'
import NotificationStore from './NotificationStore'

// Notifications
const notify = (message, title, type, click, hideAfterMs) => {
	hideAfterMs = hideAfterMs || 4000
	NotificationStore.set({
		message, title, type, click
	})

	// Reset after a moment
	window.setTimeout(() => {
		NotificationStore.set(null)
	}, hideAfterMs)
}

export const Store = {
	User: UserStore,
	Notifications: NotificationStore,
	notify
}
