export const createOverlay = () => {
    if (module.hot) {
        module.hot.addStatusHandler((status) => {
            if (status === 'fail') {
                const overlayContainer = document.getElementById('root')
                if (overlayContainer) {
                    overlayContainer.innerHTML = (
                        <div id="webpack-dev-server-client-overlay">
                            <div style="background: rgba(0, 0, 0, 0.85); color: white; padding: 20px;">
                                <h2>Webpack Hot Update Error</h2>
                                <p>Check the console for more details .</p>
                            </div>
                        </div>
                    )
                }
            }
        })
        module.hot.accept()
    }
}
