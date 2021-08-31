import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'
import { CardActionArea, makeStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles({
  avatar: {
    backgroundColor: '#C62828'
  }
})

export default function Post({post}) {
  const classes = useStyles(post)

  return (
    <div>
      <Card elevation={5}>
        <CardActionArea>
          <CardHeader
            avatar={
              <Avatar className={classes.avatar}>
                {post.id}
              </Avatar>}
            action={
              <IconButton>
                <DeleteOutlined />
              </IconButton>
            }
            title={post.title}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              { post.body }
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}