import React, { ErrorInfo, PropsWithChildren } from 'react'

type State = {
    errorThrown: { error: Error; info: ErrorInfo; stack: { [key: string]: string } } | undefined
}

export class ErrorBoundary extends React.Component<PropsWithChildren<object>, State> {
    public constructor(props: object) {
        super(props)
        this.state = { errorThrown: undefined }
    }

    public static getDerivedStateFromError(error: any) {
        console.log(error)
        // 更新状态，以便下一次渲染将显示后备 UI。
        return { hasError: true }
    }

    public async componentDidCatch(error: Error, info: React.ErrorInfo): Promise<void> {
        const stack: { [key: string]: string } = {}
        try {
            const regex = /[^() ]*(\([^()]*\))/g // regular expression to find strings inside param
            const source = info.componentStack ? info.componentStack.toString() : ''

            let match = regex.exec(source)
            while (match) {
                const [wholeMatch, key] = match
                stack[key] = wholeMatch
                match = regex.exec(source)
            }
        } catch (err) {
            console.error('Error regex', (err as Error).toString())
        }
        this.setState({ errorThrown: { error, info, stack } })
    }

    public render(): React.ReactNode {
        const { errorThrown } = this.state
        const { children } = this.props

        if (errorThrown != null) {
            return (
                <div>
                    <p>{errorThrown.info.componentStack}</p>
                    <p>{errorThrown.info.digest}</p>
                    {Object.keys(errorThrown.stack).map((it, index) => (
                        <p key={`stack${index}`}>{it}</p>
                    ))}
                </div>
            )
        }
        return children
    }
}
