function parseJSONMatch_(json) {
  var data = JSON.parse(json)

  return parseMatch_(data)
}

function parseMatch_(data) {
  return {
    "match": {
      "id": data.match.id,
      "start_time": data.match.start_time,
      "end_time": data.match.end_time,
      "name": data.match.name
    },
    "events": data.events,
    "users": data.users,
    "first_event_id": data.first_event_id,
    "latest_event_id": data.latest_event_id,
    "current_game_id": data.current_game_id
  }
}



function parseEventGlobal_(data) {
  return {
    "id": data.id,
    "detail": {
      "type": data.detail.type
    }
  }
}

function parseEventNotOther_(data) {
  return {
    "id": data.id,
    "detail": {
      "type": data.detail.type
    },
    "timestamp": data.timestamp,
    "user_id": data.user_id
  }
}

function parseEventOther_(data) {
  return {
    "id": data.id,
    "detail": {
      "type": data.detail.type,
      "text": data.detail.text
    },
    "timestamp": data.timestamp,
    "user_id": data.user_id,
    "game": {
      "id": data.game.id,
      "start_time": data.game.start_time,
      "end_time": data.game.end_time,
      "mode": data.game.mode,
      "mode_int": data.game.mode_int,
      "scoring_type": data.game.scoring_type,
      "team_type": data.game.team_type,
      "mods": data.game.mods,
      "beatmap": {
        "beatmapset_id": data.game.beatmap.beatmapset_id,
        "difficulty_rating": data.game.beatmap.difficulty_rating,
        "id": data.game.beatmap.id,
        "mode": data.game.beatmap.mode,
        "status": data.game.beatmap.status,
        "total_length": data.game.beatmap.total_length,
        "user_id": data.game.beatmap.user_id,
        "version": data.game.beatmap.version,
        "beatmapset": {
          "artist": data.game.beatmap.beatmapset.artist,
          "artist_unicode": data.game.beatmap.beatmapset.artist_unicode,
          "covers": {
            "cover": data.game.beatmap.beatmapset.covers.cover,
            "card": data.game.beatmap.beatmapset.covers.card,
            "list": data.game.beatmap.beatmapset.covers.list,
            "slimcover": data.game.beatmap.beatmapset.covers.slimcover,
          },
          "creator": data.game.beatmap.beatmapset.creator,
          "favourite_count": data.game.beatmap.beatmapset.favourite_count,
          "hype": data.game.beatmap.beatmapset.hype,
          "id": data.game.beatmap.beatmapset.id,
          "nsfw": data.game.beatmap.beatmapset.nsfw,
          "play_count": data.game.beatmap.beatmapset.play_count,
          "preview_url": data.game.beatmap.beatmapset.preview_url,
          "source": data.game.beatmap.beatmapset.source,
          "status": data.game.beatmap.beatmapset.status,
          "title": data.game.beatmap.beatmapset.title,
          "title_unicode": data.game.beatmap.beatmapset.title_unicode,
          "track_id": data.game.beatmap.beatmapset.track_id,
          "user_id": data.game.beatmap.beatmapset.user_id,
          "video": data.game.beatmap.beatmapset.video,
        }
      },
      "scores": data.game.scores
    }
  }
}

function parseJSONRoom_(json) {
  var data = JSON.parse(json)

  return parseRoom_(data)
}

function parseRoom_(data) {
  return {
    "id": data.id,
    "name": data.name,
    "category": data.category,
    "type": data.type,
    "user_id": data.user_id,
    "starts_at": data.starts_at,
    "ends_at": data.ends_at,
    "max_attempts": data.max_attempts,
    "participant_count": data.participant_count,
    "channel_id": data.channel_id,
    "active": data.active,
    "has_password": data.has_password,
    "queue_mode": data.queue_mode,
    "auto_skip": data.auto_skip,
    "host": {
      "avatar_url": data.host.avatar_url,
      "country_code": data.host.country_code,
      "default_group": data.host.default_group,
      "id": data.host.id,
      "is_active": data.host.is_active,
      "is_bot": data.host.is_bot,
      "is_deleted": data.host.is_deleted,
      "is_online": data.host.is_online,
      "is_supporter": data.host.is_supporter,
      "last_visit": data.host.last_visit,
      "pm_friends_only": data.host.pm_friends_only,
      "profile_colour": data.host.profile_colour,
      "username": data.host.username,
      "country": { "code": data.host.country.code, "name": data.host.country.name }
    },
    "playlist": data.playlist,
    "recent_participants": data.recent_participants
  }
}

function parseArrayPlaylist_(data) {

  var playlists = []

  data.forEach(function (playlist) {
    playlists.push(parsePlaylist_(playlist))
  })

  return playlists
}

function parsePlaylist_(data) {
  return {
    "id": data.id,
    "room_id": data.room_id,
    "beatmap_id": data.beatmap_id,
    "ruleset_id": data.ruleset_id,
    "allowed_mods": data.allowed_mods,
    "required_mods": data.required_mods,
    "expired": data.expired,
    "owner_id": data.owner_id,
    "playlist_order": data.playlist_order,
    "played_at": data.played_at,
    "beatmap": {
      "beatmapset_id": data.beatmap.beatmapset_id,
      "difficulty_rating": data.beatmap.difficulty_rating,
      "id": data.beatmap.id,
      "mode": data.beatmap.mode,
      "status": data.beatmap.status,
      "total_length": data.beatmap.total_length,
      "user_id": data.beatmap.user_id,
      "version": data.beatmap.version,
      "beatmapset": {
        "artist": data.beatmap.beatmapset.artist,
        "artist_unicode": data.beatmap.beatmapset.artist_unicode,
        "covers": {
          "cover": data.beatmap.beatmapset.covers.cover,
          "card": data.beatmap.beatmapset.covers.card,
          "list": data.beatmap.beatmapset.covers.list,
          "slimcover": data.beatmap.beatmapset.covers.slimcover,
        },
        "creator": data.beatmap.beatmapset.creator,
        "favourite_count": data.beatmap.beatmapset.favourite_count,
        "hype": data.beatmap.beatmapset.hype,
        "id": data.beatmap.beatmapset.id,
        "nsfw": data.beatmap.beatmapset.nsfw,
        "offset": data.beatmap.beatmapset.offset,
        "play_count": data.beatmap.beatmapset.play_count,
        "preview_url": data.beatmap.beatmapset.preview_url,
        "source": data.beatmap.beatmapset.source,
        "spotlight": data.beatmap.beatmapset.spotlight,
        "status": data.beatmap.beatmapset.status,
        "title": data.beatmap.beatmapset.title,
        "title_unicode": data.beatmap.beatmapset.title_unicode,
        "track_id": data.beatmap.beatmapset.track_id,
        "user_id": data.beatmap.beatmapset.user_id,
        "video": data.beatmap.beatmapset.video
      },
      "checksum": data.beatmap.checksum,
      "max_combo": data.beatmap.max_combo
    }
  }
}

function parseArrayRecentParticipants_(data) {

  var recentParticipants = []

  data.forEach(function (recentParticipant) {
    recentParticipants.push(parseRecentParticipant_(recentParticipant))
  })

  return recentParticipants
}

function parseRecentParticipant_(data) {
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
    "username": data.username
  }
}

function parseJSONScores_(json) {
  var data = JSON.parse(json)

  return parseScores_(data)
}

function parseScores_(data) {
  return {
    "params": {
      "limit": data.params.limit,
      "sort": data.params.sort
    },
    "scores": data.scores,
    "total": data.total,
    "user_score": data.user_score,
    "cursor": data.cursor,
    "cursor_string": data.cursor_string
  }
}

function parseArrayScores_(data) {

  var scores = []

  data.forEach(function (score) {
    scores.push(parseScore3_(score))
  })

  return scores
}

function parseScore3_(data) {
  return {
    "playlist_item_id": data.playlist_item_id,
    "room_id": data.room_id,
    "solo_score_id": data.solo_score_id,
    "ranked": data.ranked,
    "preserve": data.preserve,
    "maximum_statistics": {
      "perfect": data.maximum_statistics.perfect,
      "ignore_hit": data.maximum_statistics.ignore_hit
    },
    "mods": data.mods,
    "statistics": {
      "good": data.statistics.good,
      "great": data.statistics.great,
      "perfect": data.statistics.perfect,
      "ignore_hit": data.statistics.ignore_hit
    },
    "beatmap_id": data.beatmap_id,
    "best_id": data.best_id,
    "id": data.id,
    "rank": data.rank,
    "type": data.type,
    "user_id": data.user_id,
    "accuracy": data.accuracy,
    "build_id": data.build_id,
    "ended_at": data.ended_at,
    "has_replay": data.has_replay,
    "is_perfect_combo": data.is_perfect_combo,
    "legacy_perfect": ldata.legacy_perfect,
    "legacy_score_id": data.legacy_score_id,
    "legacy_total_score": data.legacy_total_score,
    "max_combo": data.max_combo,
    "passed": data.passed,
    "pp": data.pp,
    "ruleset_id": data.ruleset_id,
    "started_at": data.started_at,
    "total_score": data.total_score,
    "replay": data.replay,
    "current_user_attributes": {
      "pin": data.current_user_attributes.pin
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
      "country": {
        "code": data.user.country.code,
        "name": data.user.country.name
      },
      "cover": {
        "custom_url": data.user.cover.custom_url,
        "url": data.user.cover.url,
        "id": data.user.cover.id
      }
    }
  }
}

function parseMatchScore_(data) {
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
    "match": {
      "slot": data.match.slot,
      "team": data.match.team,
      "pass": data.match.pass
    }
  }
}

function parseUser2_(data) {
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
    "country": { "code": data.country.code, "name": data.country.name }
  }
}