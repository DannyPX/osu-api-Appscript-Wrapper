function parseJSONRankings_(json) {
  var data = JSON.parse(json)

  return parseRankings_(data)
}

function parseRankings_(data) {
  return {
    "cursor": {
      "page": data.cursor.page
    },
    "ranking": data.ranking,
    "total": data.total
  }
}

function parseRanking_(data) {
  return {
    "level": {
      "current": data.level.current,
      "progress": data.level.progress
    },
    "global_rank": data.global_rank,
    "pp": data.pp,
    "ranked_score": data.ranked_score,
    "hit_accuracy": data.hit_accuracy,
    "play_count": data.play_count,
    "play_time": data.play_time,
    "total_score": data.total_score,
    "total_hits": data.total_hits,
    "maximum_combo": data.maximum_combo,
    "replays_watched_by_others": data.replays_watched_by_others,
    "is_ranked": data.is_ranked,
    "grade_counts": {
      "ss": data.grade_counts.ss,
      "ssh": data.grade_counts.ssh,
      "s": data.grade_counts.s,
      "sh": data.grade_counts.sh,
      "a": data.grade_counts.a
    },
    "user": {
      "avatar_url": data.user.avatar_url,
      "country_code": data.user.country_code,
      "default_group": data.user.default_group,
      "id": data.user.id,
      "is_active": data.user.is_active,
      "is_bot": data.user.is_bot,
      "is_deleted": data.user.is_deleted,
      "is_online": data.user.is_online,
      "is_supporter": data.user.is_supporter,
      "last_visit": data.user.last_visit,
      "pm_friends_only": data.user.pm_friends_only,
      "profile_colour": data.user.profile_colour,
      "username": data.user.username,
      "country": { "code": data.user.country.code, "name": data.user.country.name },
      "cover": {
        "custom_url": data.user.cover.custom_url,
        "url": data.user.cover.url,
        "id": data.user.cover.id
      }
    }
  }
}