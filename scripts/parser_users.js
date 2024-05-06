function parseJSONKudosuHistoryArray_(json) {
  var data = JSON.parse(json)

  var kudosuHistoryList = []

  data.forEach(function (kudosuHistory) {
    kudosuHistoryList.push(
      parseKudosuHistory_(kudosuHistory)
    )
  })

  return {
    kudosuHistoryList
  }
}

function parseKudosuHistory_(data) {
  return {
    "id": data.id,
    "action": data.action,
    "amount": data.amount,
    "model": data.model,
    "created_at": data.created_at,
    "giver": data.giver,
    "post": {
      "url": data.post.url,
      "title": data.post.title
    },
    "details": { "event": data.details.event }
  }
}

function parseJSONScoresArray2_(json) {
  var data = JSON.parse(json)

  var scores = []

  data.forEach(function (score) {
    scores.push(
      parseScore2_(score)
    )
  })

  return scores
}

function parseScore2_(data) {
  return {
    "accuracy": data.accuracy,
    "best_id": data.best_id,
    "created_at": data.created_at,
    "id": data.id,
    "max_combo": data.max_combo,
    "mode": data.mode,
    "mode_int": data.mode_int,
    "mods": data.mods,
    "passed": data.passed,
    "perfect": data.perfect,
    "pp": data.pp,
    "rank": data.rank,
    "replay": data.replay,
    "score": data.score,
    "statistics": {
      "count_100": data.statistics.count_100,
      "count_300": data.statistics.count_300,
      "count_50": data.statistics.count_50,
      "count_geki": data.statistics.count_geki,
      "count_katu": data.statistics.count_katu,
      "count_miss": data.statistics.count_miss
    },
    "user_id": data.user_id,
    "current_user_attributes": { "pin": data.current_user_attributes.pin },
    "beatmap": {
      "beatmapset_id": data.beatmap.beatmapset_id,
      "difficulty_rating": data.beatmap.difficulty_rating,
      "id": data.beatmap.id,
      "mode": data.beatmap.mode,
      "status": data.beatmap.status,
      "total_length": data.beatmap.total_length,
      "user_id": data.beatmap.user_id,
      "version": data.beatmap.version,
      "accuracy": data.beatmap.accuracy,
      "ar": data.beatmap.ar,
      "bpm": data.beatmap.bpm,
      "convert": data.beatmap.convert,
      "count_circles": data.beatmap.count_circles,
      "count_sliders": data.beatmap.count_sliders,
      "count_spinners": data.beatmap.count_spinners,
      "cs": data.beatmap.cs,
      "deleted_at": data.beatmap.deleted_at,
      "drain": data.beatmap.drain,
      "hit_length": data.beatmap.hit_length,
      "is_scoreable": data.beatmap.is_scoreable,
      "last_updated": data.beatmap.last_updated,
      "mode_int": data.beatmap.mode_int,
      "passcount": data.beatmap.passcount,
      "playcount": data.beatmap.playcount,
      "ranked": data.beatmap.ranked,
      "url": data.beatmap.url,
      "checksum": data.beatmap.checksum,
    },
    "beatmapset": {
      "artist": data.beatmapset.artist,
      "artist_unicode": data.beatmapset.artist_unicode,
      "covers": {
        "cover": data.beatmapset.covers.cover,
        "card": data.beatmapset.covers.card,
        "list": data.beatmapset.covers.list,
        "slimcover": data.beatmapset.covers.slimcover,
      },
      "creator": data.beatmapset.creator,
      "favourite_count": data.beatmapset.favourite_count,
      "hype": data.beatmapset.hype,
      "id": data.beatmapset.id,
      "nsfw": data.beatmapset.nsfw,
      "play_count": data.beatmapset.play_count,
      "preview_url": data.beatmapset.preview_url,
      "source": data.beatmapset.source,
      "status": data.beatmapset.status,
      "title": data.beatmapset.title,
      "title_unicode": data.beatmapset.title_unicode,
      "track_id": data.beatmapset.track_id,
      "user_id": data.beatmapset.user_id,
      "video": data.beatmapset.video,
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
      "username": data.user.username
    },
    "weight": { "percentage": data.weight.percentage, "pp": data.weight.pp }
  }
}

function parseJSONBeatmapSetArray_(json) {
  var data = JSON.parse(json)

  var beatmapSets = []

  data.forEach(function (beatmapSet) {
    beatmapSets.push(
      parseBeatmapSet_(beatmapSet)
    )
  })

  return beatmapSets
}

function parseBeatmapSet_(data) {
  return {
    "artist": data.artist,
    "artist_unicode": data.artist_unicode,
    "covers": {
      "cover": data.covers.cover,
      "card": data.covers.card,
      "list": data.covers.list,
      "slimcover": data.covers.slimcover,
    },
    "creator": data.creator,
    "favourite_count": data.favourite_count,
    "hype": data.hype,
    "id": data.id,
    "nsfw": data.nsfw,
    "play_count": data.play_count,
    "preview_url": data.preview_url,
    "source": data.source,
    "status": data.status,
    "title": data.title,
    "title_unicode": data.title_unicode,
    "track_id": data.track_id,
    "user_id": data.user_id,
    "video": data.video,
    "availability": { "download_disabled": data.availability.download_disabled, "more_information": data.availability.more_information },
    "bpm": data.bpm,
    "can_be_hyped": data.can_be_hyped,
    "discussion_enabled": data.discussion_enabled,
    "discussion_locked": data.discussion_locked,
    "is_scoreable": data.is_scoreable,
    "last_updated": data.last_updated,
    "legacy_thread_url": data.legacy_thread_url,
    "nominations_summary": { "current": data.nominations_summary.current, "required": data.nominations_summary.required },
    "ranked": data.ranked,
    "ranked_date": data.ranked_date,
    "storyboard": data.storyboard,
    "submitted_date": data.submitted_date,
    "tags": data.tags,
    "beatmaps": data.beatmaps,
  }
}

function parseBeatmap2_(data) {
  return {
    "beatmapset_id": data.beatmapset_id,
    "difficulty_rating": data.difficulty_rating,
    "id": data.id,
    "mode": data.mode,
    "status": data.status,
    "total_length": data.total_length,
    "user_id": data.user_id,
    "version": data.version,
    "accuracy": data.accuracy,
    "ar": data.ar,
    "bpm": data.bpm,
    "convert": data.convert,
    "count_circles": data.count_circles,
    "count_sliders": data.count_sliders,
    "count_spinners": data.count_spinners,
    "cs": data.cs,
    "deleted_at": data.deleted_at,
    "drain": data.drain,
    "hit_length": data.hit_length,
    "is_scoreable": data.is_scoreable,
    "last_updated": data.last_updated,
    "mode_int": data.mode_int,
    "passcount": data.passcount,
    "playcount": data.playcount,
    "ranked": data.ranked,
    "url": data.url,
    "checksum": data.checksum,
  }
}

function parseJSONUserRecentActivity_(json) {
  var data = JSON.parse(json)

  var events = []

  data.forEach(function (event) {
    switch (event.type) {
      case "achievement":
        events.push(parseUserRecentActivityAchievement_(event))
        break;
      case "beatmapsetApprove":
        events.push(parseUserRecentActivityApproval_(event))
        break;
      case "beatmapsetDelete":
        events.push(parseUserRecentActivityDelete_(event))
        break;
      case "beatmapsetRevive":
        events.push(parseUserRecentActivityRevive_(event))
        break;
      case "beatmapsetUpload":
        events.push(parseUserRecentActivityUpload_(event))
        break;
      case "rank":
        events.push(parseUserRecentActivityRank_(event))
        break;
      case "rankLost":
        events.push(parseUserRecentActivityRankLost_(event))
        break;
      case "userSupportAgain":
        events.push(parseUserRecentActivitySupport_(event))
        break;
      case "userSupportFirst":
        events.push(parseUserRecentActivitySupport_(event))
        break;
      case "userSupportGift":
        events.push(parseUserRecentActivitySupport_(event))
        break;
      case "userSupportChange":
        events.push(parseUserRecentActivitySupport_(event))
        break;
      default:
        events.push({})
        break;
    }
  })

  return events
}

function parseUserRecentActivityAchievement_(data) {
  return {
    "created_at": data.created_at,
    "createdAt": data.createdAt,
    "id": data.id,
    "type": data.type,
    "achievement": {
      "icon_url": data.achievement.icon_url,
      "id": data.achievement.id,
      "name": data.achievement.name,
      "grouping": data.achievement.grouping,
      "ordering": data.achievement.ordering,
      "slug": data.achievement.slug,
      "description": data.achievement.description,
      "mode": data.achievement.mode,
      "instructions": data.achievement.instructions
    },
    "user": {
      "username": data.user.username,
      "url": data.user.url
    }
  }
}

function parseUserRecentActivityApproval_(data) {
  return {
    "created_at": data.created_at,
    "createdAt": data.createdAt,
    "id": data.id,
    "type": data.type,
    "approval": data.approval,
    "beatmapset": {
      "title": data.beatmap.title,
      "url": data.beatmap.url
    },
    "user": {
      "username": data.user.username,
      "url": data.user.url
    }
  }
}

function parseUserRecentActivityDelete_(data) {
  return {
    "created_at": data.created_at,
    "createdAt": data.createdAt,
    "id": data.id,
    "type": data.type,
    "beatmapset": {
      "title": data.beatmap.title,
      "url": data.beatmap.url
    }
  }
}

function parseUserRecentActivityDelete_(data) {
  return {
    "created_at": data.created_at,
    "createdAt": data.createdAt,
    "id": data.id,
    "type": data.type,
    "beatmapset": {
      "title": data.beatmap.title,
      "url": data.beatmap.url
    },
    "user": {
      "username": data.user.username,
      "url": data.user.url
    }
  }
}

function parseUserRecentActivityUpload_(data) {
  return {
    "created_at": data.created_at,
    "createdAt": data.createdAt,
    "id": data.id,
    "type": data.type,
    "beatmapset": {
      "title": data.beatmap.title,
      "url": data.beatmap.url
    },
    "user": {
      "username": data.user.username,
      "url": data.user.url
    }
  }
}

function parseUserRecentActivityRank_(data) {
  return {
    "created_at": data.created_at,
    "createdAt": data.createdAt,
    "id": data.id,
    "type": data.type,
    "scoreRank": data.scoreRank,
    "rank": data.rank,
    "mode": data.mode,
    "beatmap": {
      "title": data.beatmap.title,
      "url": data.beatmap.url
    },
    "user": {
      "username": data.user.username,
      "url": data.user.url
    }
  }
}

function parseUserRecentActivityRankLost_(data) {
  return {
    "created_at": data.created_at,
    "createdAt": data.createdAt,
    "id": data.id,
    "type": data.type,
    "mode": data.mode,
    "beatmap": {
      "title": data.beatmap.title,
      "url": data.beatmap.url
    },
    "user": {
      "username": data.user.username,
      "url": data.user.url
    }
  }
}

function parseUserRecentActivitySupport_(data) {
  return {
    "created_at": data.created_at,
    "createdAt": data.createdAt,
    "id": data.id,
    "type": data.type,
    "user": {
      "username": data.user.username,
      "url": data.user.url
    }
  }
}

function parseJSONUser_(json) {
  var data = JSON.parse(json)

  return parseUser_(data)
}

function parseUser_(data) {
  return {
    "avatar_url": data.avatar_url,
    "country_code": data.country_code,
    "default_group": data.default_group,
    "id": data.id,
    "is_active": data.is_active,
    "is_bot": data.is_bot,
    "is_deleted": data.is_deleted,
    "is_online": data.is_online,
    "is_supporter": data.is_supporter,
    "last_visit": data.last_visit,
    "pm_friends_only": data.pm_friends_only,
    "profile_colour": data.profile_colour,
    "username": data.username,
    "cover_url": data.cover_url,
    "discord": data.discord,
    "has_supported": data.has_supported,
    "interests": data.interests,
    "join_date": data.join_date,
    "kudosu": {
      "total": data.kudosu.total,
      "available": data.kudosu.available
    },
    "location": data.location,
    "max_blocks": data.max_blocks,
    "max_friends": data.max_friends,
    "occupation": data.occupation,
    "playmode": data.playmode,
    "playstyle": data.playstyle,
    "post_count": data.post_count,
    "profile_order": data.profile_order,
    "title": data.title,
    "title_url": data.title_url,
    "twitter": data.twitter,
    "website": data.website,
    "country": {
      "code": data.country.code,
      "name": data.country.name
    },
    "cover": {
      "custom_url": data.cover.custom_url,
      "url": data.cover.url,
      "id": data.cover.id
    },
    "account_history": data.account_history,
    "active_tournament_banners": data.active_tournament_banners,
    "badges": data.badges,
    "beatmap_playcounts_count": data.beatmap_playcounts_count,
    "comments_count": data.comments_count,
    "favourite_beatmapset_count": data.favourite_beatmapset_count,
    "follower_count": data.follower_count,
    "graveyard_beatmapset_count": data.graveyard_beatmapset_count,
    "groups": data.groups,
    "guest_beatmapset_count": data.guest_beatmapset_count,
    "loved_beatmapset_count": data.loved_beatmapset_count,
    "mapping_follower_count": data.mapping_follower_count,
    "monthly_playcounts": data.monthly_playcounts,
    "page": {
      "html": data.page.html
    },
    "pending_beatmapset_count": data.pending_beatmapset_count,
    "previous_usernames": data.previous_usernames,
    "ranked_beatmapset_count": data.ranked_beatmapset_count,
    "replays_watched_counts": data.replays_watched_counts,
    "scores_best_count": data.scores_best_count,
    "scores_first_count": data.scores_first_count,
    "scores_pinned_count": data.scores_pinned_count,
    "scores_recent_count": data.scores_recent_count,
    "statistics": {
      "level": {
        "current": data.statistics.level.current,
        "progress": data.statistics.level.progress
      },
      "global_rank": data.statistics.global_rank,
      "pp": data.statistics.pp,
      "ranked_score": data.statistics.ranked_score,
      "hit_accuracy": data.statistics.hit_accuracy,
      "play_count": data.statistics.play_count,
      "play_time": data.statistics.play_time,
      "total_score": data.statistics.total_score,
      "total_hits": data.statistics.total_hits,
      "maximum_combo": data.statistics.maximum_combo,
      "replays_watched_by_others": data.statistics.replays_watched_by_others,
      "is_ranked": data.statistics.is_ranked,
      "grade_counts": {
        "ss": data.statistics.grade_counts.ss,
        "ssh": data.statistics.grade_counts.ssh,
        "s": data.statistics.grade_counts.s,
        "sh": data.statistics.grade_counts.sh,
        "a": data.statistics.grade_counts.a
      },
      "country_rank": data.statistics.country_rank,
      "rank": {
        "country": data.statistics.rank.country
      },
      "variants": data.statistics.variants
    },
    "support_level": data.support_level,
    "user_achievements": data.user_achievements,
    "rankHistory": {
      "mode": data.rankHistory.mode,
      "data": data.rankHistory.data
    },
    "rank_history": {
      "mode": data.rank_history.mode,
      "data": data.rank_history.data
    },
    "ranked_and_approved_beatmapset_count": data.ranked_and_approved_beatmapset_count,
    "unranked_beatmapset_count": data.unranked_beatmapset_count
  }
}

function parseJSONUserCompact_(json) {
  var data = JSON.parse(json)

  var users = []

  data.users.forEach(function (user) {
    users.push(
      parseUserCompact_(user)
    )
  })

  return users
}

function parseUserCompact_(data) {
  return {
    "avatar_url": data.avatar_url,
    "country_code": data.country_code,
    "default_group": data.default_group,
    "id": data.id,
    "is_active": data.is_active,
    "is_bot": data.is_bot,
    "is_deleted": data.is_deleted,
    "is_online": data.is_online,
    "is_supporter": data.is_supporter,
    "last_visit": data.last_visit,
    "pm_friends_only": data.pm_friends_only,
    "profile_colour": data.profile_colour,
    "username": data.username,
    "country": {
      "code": data.country.code,
      "name": data.country.name
    },
    "cover": {
      "custom_url": data.cover.custom_url,
      "url": data.cover.url,
      "id": data.cover.id
    },
    "groups": data.groups,
    "statistics_rulesets": {
      "osu": data.statistics_rulesets.osu,
      "taiko": data.statistics_rulesets.taiko,
      "fruits": data.statistics_rulesets.fruits,
      "mania": data.statistics_rulesets.mania
    }
  }
}