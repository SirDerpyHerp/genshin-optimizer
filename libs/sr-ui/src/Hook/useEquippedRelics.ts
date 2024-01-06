import {
  allRelicSlotKeys,
  type RelicSlotKey,
} from '@genshin-optimizer/sr-consts'
import type {
  ICachedRelic,
  ICachedSroCharacter,
} from '@genshin-optimizer/sr-db'
import { objKeyMap, objMap } from '@genshin-optimizer/util'
import { useEffect, useMemo, useState } from 'react'
import { useDatabaseContext } from '../Context'

export function useEquippedRelics(
  equippedRelics: ICachedSroCharacter['equippedRelics'] | undefined
) {
  const relicSlotIds = useMemo(
    () =>
      equippedRelics ? equippedRelics : objKeyMap(allRelicSlotKeys, () => ''),
    [equippedRelics]
  )
  const { database } = useDatabaseContext()
  const [relics, setRelics] = useState<
    Record<RelicSlotKey, ICachedRelic | undefined>
  >(() => objMap(relicSlotIds, (id) => database.relics.get(id)))

  useEffect(() => {
    setRelics(objMap(relicSlotIds, (id) => database.relics.get(id)))
    const unfollows = Object.values(relicSlotIds).map((relicId) =>
      database.relics.follow(
        relicId,
        (_k, r, v: ICachedRelic) =>
          (r === 'update' || r === 'remove') &&
          setRelics((relics) => ({ ...relics, ...{ [v.slotKey]: v } }))
      )
    )
    return unfollows.forEach((unfollow) => unfollow())
  }, [database, relicSlotIds])

  return relics
}
