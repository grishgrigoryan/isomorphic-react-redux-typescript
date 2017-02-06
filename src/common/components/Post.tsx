import * as React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

export interface PostProp {
    post: any;
}
export default class Post extends React.Component<PostProp,any> {

    render() {
        const post = this.props.post;
        return (
            <Card>
                <CardHeader
                    title={`Title ${post.title}`}
                    subtitle={`Id ${post.id}`}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardActions>
                </CardActions>
                <CardText expandable={true}>
                    {post.body}
                </CardText>
            </Card>
        );
    }
}