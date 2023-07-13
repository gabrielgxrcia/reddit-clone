"use client"

import { FC } from "react"
import { Button } from "./ui/Button"
import { useMutation } from "@tanstack/react-query"
import { SubscribeToSubredditPayload } from "@/lib/validators/subreddit"

interface SubscribeLeaveToggleProps {}

const SubscribeLeaveToggle: FC<SubscribeLeaveToggleProps> = ({}) => {
  const isSubscribed = false

  const {} = useMutation({
    mutationFn: async () => {
      const payload: SubscribeToSubredditPayload = {
        subredditId,
      }
    },
  })

  return isSubscribed ? (
    <Button className="w-full mt-1 mb-4">Leave community</Button>
  ) : (
    <Button className="w-full mt-1 mb-4">Join to post</Button>
  )
}

export default SubscribeLeaveToggle
