/**
 * Parser for `getUserBeatmapScore`.
 * | Object {
    "position": data.position,
    "score": {
      "accuracy": data.score.accuracy,
      "best_id": data.score.best_id,
      "created_at": data.score.created_at,
      "id": data.score.id,
      "max_combo": data.score.max_combo,
      "mode": data.score.mode,
      "mode_int": data.score.mode_int,
      "mods": data.score.mods,
      "passed": data.score.passed,
      "perfect": data.score.perfect,
      "pp": data.score.pp,
      "rank": data.score.rank,
      "replay": data.score.replay,
      "score": data.score.score,
      "statistics": {
        "count_100": data.score.statistics.count_100,
        "count_300": data.score.statistics.count_300,
        "count_50": data.score.statistics.count_50,
        "count_geki": data.score.statistics.count_geki,
        "count_katu": data.score.statistics.count_katu,
        "count_miss": data.score.statistics.count_miss
      },
      "user_id": data.score.user_id,
      "current_user_attributes": { "pin": data.score.current_user_attributes.pin },
      "beatmap": {
        "beatmapset_id": data.score.beatmap.beatmapset_id,
        "difficulty_rating": data.score.beatmap.difficulty_rating,
        "id": data.score.beatmap.id,
        "mode": data.score.beatmap.mode,
        "status": data.score.beatmap.status,
        "total_length": data.score.beatmap.total_length,
        "user_id": data.score.beatmap.user_id,
        "version": data.score.beatmap.version,
        "accuracy": data.score.beatmap.accuracy,
        "ar": data.score.beatmap.ar,
        "bpm": data.score.beatmap.bpm,
        "convert": data.score.beatmap.convert,
        "count_circles": data.score.beatmap.count_circles,
        "count_sliders": data.score.beatmap.count_sliders,
        "count_spinners": data.score.beatmap.count_spinners,
        "cs": data.score.beatmap.cs,
        "deleted_at": data.score.beatmap.deleted_at,
        "drain": data.score.beatmap.drain,
        "hit_length": data.score.beatmap.hit_length,
        "is_scoreable": data.score.beatmap.is_scoreable,
        "last_updated": data.score.beatmap.last_updated,
        "mode_int": data.score.beatmap.mode_int,
        "passcount": data.score.beatmap.passcount,
        "playcount": data.score.beatmap.playcount,
        "ranked": data.score.beatmap.ranked,
        "url": data.score.beatmap.url,
        "checksum": data.score.beatmap.checksum
      },
      "user": {
        "avatar_url": data.score.user.avatar_url,
        "country_code": data.score.user.country_code,
        "default_group": data.score.user.default_group,
        "id": data.score.user.id,
        "is_active": data.score.user.is_active,
        "is_bot": data.score.user.is_bot,
        "is_deleted": data.score.user.is_deleted,
        "is_online": data.score.user.is_online,
        "is_supporter": data.score.user.is_supporter,
        "last_visit": data.score.user.last_visit,
        "pm_friends_only": data.score.user.pm_friends_only,
        "profile_colour": data.score.user.profile_colour,
        "username": data.score.user.username,
        "country": { "code": data.score.user.country.code, "name": data.score.user.country.name },
        "cover": {
          "custom_url": data.score.user.cover.custom_url,
          "url": data.score.user.cover.url,
          "id": data.score.user.cover.id
        }
      }
    }
  }
 */
var parseBeatmapUserScore = data => parseBeatmapUserScore_(data)

/**
 * Parser for `getUserBeatmapScores` Array Object
 * | Object {
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
    "current_user_attributes": { "pin": data.current_user_attributes.pin }
  }
 */
var parseScore = data => parseScore_(data)

/**
 * Parser for `getUserScores` Array Object
 * | Object {
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
 */
var parseScore2 = data => parseScore2_(data)

/**
 * Parser for `getBeatmapScores` Array Object
 * | Object {
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
*/
var parseUserScore = data => parseUserScore_(data)

/**
 * Parser for `getBeatmap`
 * | Object {
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
      "availability": { "download_disabled": data.beatmapset.availability.download_disabled, "more_information": data.beatmapset.availability.more_information },
      "bpm": data.beatmapset.bpm,
      "can_be_hyped": data.beatmapset.can_be_hyped,
      "discussion_enabled": data.beatmapset.discussion_enabled,
      "discussion_locked": data.beatmapset.discussion_locked,
      "is_scoreable": data.beatmapset.is_scoreable,
      "last_updated": data.beatmapset.last_updated,
      "legacy_thread_url": data.beatmapset.legacy_thread_url,
      "nominations_summary": { "current": data.beatmapset.nominations_summary.current, "required": data.beatmapset.nominations_summary.required },
      "ranked": data.beatmapset.ranked,
      "ranked_date": data.beatmapset.ranked_date,
      "storyboard": data.beatmapset.storyboard,
      "submitted_date": data.beatmapset.submitted_date,
      "tags": data.beatmapset.tags,
      "ratings": data.beatmapset.ratings
    },
    "failtimes": {
      "fail": data.failtimes.fail,
      "exit": data.failtimes.exit
    },
    "max_combo": data.max_combo
  }
 */
var parseBeatmap = data => parseBeatmap_(data)

/**
 * Parser for `parseBeatmapSet` beatmaps
 * | Object {
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
 */
var parseBeatmap2 = data => parseBeatmap2_(data)

/**
 * Parser for `getBeatmapAttributes`
 * | Object {
    "attributes": {
      "star_rating": data.attributes.star_rating,
      "max_combo": data.attributes.max_combo,
      "great_hit_window": data.attributes.great_hit_window,
      "score_multiplier": data.attributes.score_multiplier,
    }
  }
 */
var parseAttributes = data => parseBeatmapAttributes_(data)

/**
 * Parser for `getUserKudosu`
 * | Object {
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
 */
var parseKudosuHistory = data => parseKudosuHistory_(data)

/**
 * Parser for `getUser`
 * | Object {
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
 */
var parseUser = data => parseUser_(data)

/**
 * Parser for `getMatch` users
 * | Object {
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
 */
var parseUser2 = data => parseUser2_(data)

/**
 * Parser for `getMatch`
 * | Object {
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
 */
var parseMatch = data => parseMatch_(data)

/**
 * Parser for `getMatch` event game scores
 * | Object {
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
 */
var parseMatchScore = data => parseMatchScore_(data)

/**
 * Parser for `getMatch` event type `any`
 * | Object {
    "id": data.id,
    "detail": {
      "type": data.detail.type
    }
  }
 */
var parseEventGlobal = data => parseEventGlobal_(data)

/**
 * Parser for `getMatch` event type `other`
 * | Object {
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
 */
var parseEventOther = data => parseEventOther_(data)

/**
 * Parser for `getMatch` event type that is not `other`
 * | Object {
    "id": data.id,
    "detail": {
      "type": data.detail.type
    },
    "timestamp": data.timestamp,
    "user_id": data.user_id
  }
 */
var parseEventNotOther = data => parseEventNotOther_(data)

/**
 * Parser for `getRanking` 
 * | Object {
    "cursor": {
      "page": data.cursor.page
    },
    "ranking": data.ranking,
    "total": data.total
  }
 */
var parseRankings = data => parseRankings_(data)

/**
 * Parser for `getRanking` ranking
 * | Object {
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
      "id": dat.usera.id,
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
 */
var parseRanking = data => parseRanking_(data)


/**
 * Parser for `getRoom`
 * | Object {
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
 */
var parseRoom = data => parseRoom_(data)


/**
 * parser for `getRoom` playlist Array Object
 * | Object {
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
 */
var parsePlaylist = data => parsePlaylist_(data)

/**
 * parser for `getRoom` recentParticipant Array Object
 * | Object {
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
 */
var parseRecentParticipant = data => parseRecentParticipant_(data)

/**
 * parser for `getScores`
 * | Object {
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
 */
var parseScores = data => parseScores_(data)

/**
 * parser for `getScores` scores Array Object
 * | Object {
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
 */
var parseScore3 = data => parseScore3_(data)

