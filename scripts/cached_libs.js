//import triggerList from "./trigger.js"

const EDITOR_MODE_REGULAR = 1;
const EDITOR_MODE_EXPANDED = 2;
const RENDER_MODE_2D = 1;
const RENDER_MODE_GL = 2;

let displayVariableFull = true

const GAMEMODE_DM = 1;
const GAMEMODE_COOP = 2;
const GAMEMODE_TDM = 3;
var ALLOW_EXTRA_CHARACTERS;
var parambox_t, parambox_t2;
var login = "";
var password = "";
var rendermode;
var editormode;
var mp_match_server;
var mp_match_name;
var mp_match_id;
var mp_match_pass;
var mp_match_gamemode;
var mp_match_maxplayers;
LoadSaveData();
ALLOW_EXTRA_CHARACTERS = editormode == EDITOR_MODE_EXPANDED;
var loadededitormode = editormode;
var loadedrendermode = rendermode;
var canv = document.getElementById('O0');
var gl;
var ctx;
const GLF_TEX_NATIVE = 1;
const GLF_TEX_REPEAT = 2;
if (rendermode === RENDER_MODE_GL) {
    var glFreeTexture = 0;
    var glTextures = new Object();
    gl = canv.getContext('webgl2',  {antialias : false});
}
else if (rendermode === RENDER_MODE_2D) {
    ctx = canv.getContext('2d');
}

var always_draw = false;
var DRAW_OUTLINES = true;
var editing_mapname = false;
var right_panel = document.getElementById('right_panel');
var left_panel = document.getElementById('left_panel');
var top_panel = document.getElementById('top_panel');
var floattag = document.getElementById('floattag');
var rightsblock = document.getElementById('rightsblock');
var _canvas_width = 10;
var _canvas_height = 10;
var canvas_width = 10;
var canvas_height = 10;
var IMAGES_LOADED = 0;
var GRAPHICS_INIT = false;
var es = new Array();
var force_expert = false;
var expert_view = force_expert;
var ObjectBox_visible = false;
var selgrd = '#FFFF00';
var selgrd2 = '#FFFF00';
var selgrd3 = "#FFFFFF";
var selgrd_b = '#00FFFF';
var selgrd2_b = '#00FFFF';
var PIC_PHP_SOURCE = '/static/imgs';
const deg2rad = Math.PI / 180.0;

var img_ctrl;
var img_alt;
var img_shift;
var img_player_hero;
var img_player_red;
var img_player_blue;
var img_player_cs;
var img_unknown;
var img_weapon;
var img_inf;
var img_lua;
var img_song;
var img_image;
var img_trigger;
var img_timer;
var img_lamp;
var img_lamp_ambient;
var img_region;
var img_region_red;
var img_region_blue;
var img_quickpick;
var img_quickpick2;
var img_slct;
var img_slct2;
var img_slct3;
var img_slct_b;
var img_slct2_b;
var img_put;
var img_chars_full = new Array();
var img_decors = new Array();
var img_guns = new Array();
var img_barrels = new Array();
var img_vehicles = new Array();
var CACHED_BGS = {};
var CACHED_DECORS = {};
var CUSTOM_IMAGES_APPROVED = {};
var CACHED_SKY = {};

if (rendermode === RENDER_MODE_GL) {
    img_ctrl         = [null, 0,              0, 0];
    img_alt          = [null, 0,              0, 0];
    img_shift        = [null, 0,              0, 0];
    img_player_hero  = [null, 0,              0, 0];
    img_player_red   = [null, 0,              0, 0];
    img_player_blue  = [null, 0,              0, 0];
    img_player_cs    = [null, 0,              0, 0];
    img_unknown      = [null, 0,              0, 0];
    img_weapon       = [null, 0,              0, 0];
    img_inf          = [null, 0,              0, 0];
    img_lua          = [null, 0,              0, 0];
    img_song         = [null, 0,              0, 0];
    img_image        = [null, 0,              0, 0];
    img_trigger      = [null, 0,              0, 0];
    img_timer        = [null, 0,              0, 0];
    img_lamp         = [null, 0,              0, 0];
    img_lamp_ambient = [null, 0,              0, 0];
    img_region       = [null, 0,              0, 0];
    img_region_red   = [null, 0,              0, 0];
    img_region_blue  = [null, 0,              0, 0];
    img_quickpick    = [null, 0,              0, 0];
    img_quickpick2   = [null, 0,              0, 0];
    img_slct         = [null, GLF_TEX_REPEAT, 0, 0];
    img_slct2        = [null, GLF_TEX_REPEAT, 0, 0];
    img_slct3        = [null, GLF_TEX_REPEAT, 0, 0];
    img_slct_b       = [null, GLF_TEX_REPEAT, 0, 0];
    img_slct2_b      = [null, GLF_TEX_REPEAT, 0, 0];
    img_put          = [null, GLF_TEX_REPEAT, 0, 0];
    glLoadTexture(img_ctrl,         'static/ctrl.gif');
    glLoadTexture(img_alt,          'static/alt.gif');
    glLoadTexture(img_shift,        'static/shift.gif');
    glLoadTexture(img_player_hero,  'static/player_hero.png');
    glLoadTexture(img_player_red,   'static/player_red.png');
    glLoadTexture(img_player_blue,  'static/player_blue.png');
    glLoadTexture(img_player_cs,    'static/player_cs.png');
    glLoadTexture(img_unknown,      'static/unknown.png');
    glLoadTexture(img_weapon,       'static/weapon.png');
    glLoadTexture(img_inf,          'static/inf.png');
    glLoadTexture(img_lua,          'static/lua.png');
    glLoadTexture(img_song,         'static/song.png');
    glLoadTexture(img_trigger,      'static/trigger.png');
    glLoadTexture(img_timer,        'static/timer.png');
    glLoadTexture(img_lamp,         'static/lamp.png');
    glLoadTexture(img_lamp_ambient, 'static/lamp_ambient.png');
    glLoadTexture(img_region,       'static/panel_board.png');
    glLoadTexture(img_region_red,   'static/panel_board_red.png');
    glLoadTexture(img_region_blue,  'static/panel_board_blue.png');
    glLoadTexture(img_quickpick,    'static/quickpick.png');
    glLoadTexture(img_quickpick2,   'static/quickpick2.png');
    glLoadTexture(img_put,          'static/put.png');
    glLoadTexture(img_slct,         'static/s.gif');
    glLoadTexture(img_slct2,        'static/f.gif');
    glLoadTexture(img_slct3,        'static/s_w.gif');
    glLoadTexture(img_slct_b,       'static/s_b.gif');
    glLoadTexture(img_slct2_b,      'static/f_b.gif');
}
if (rendermode === RENDER_MODE_2D) {
    img_ctrl = new Image();
    img_ctrl.src = 'static/ctrl.gif';
    img_alt = new Image();
    img_alt.src = 'static/alt.gif';
    img_shift = new Image();
    img_shift.src = 'static/shift.gif';
    img_player_hero = new Image();
    img_player_hero.src = 'static/player_hero.png';
    img_player_red = new Image();
    img_player_red.src = 'static/player_red.png';
    img_player_blue = new Image();
    img_player_blue.src = 'static/player_blue.png';
    img_player_cs = new Image();
    img_player_cs.src = 'static/player_cs.png';
    img_unknown = new Image();
    img_unknown.src = 'static/unknown.png';
    img_weapon = new Image();
    img_weapon.src = 'static/weapon.png';
    img_inf = new Image();
    img_inf.src = 'static/inf.png';
    img_lua = new Image();
    img_lua.src = 'static/lua.png';
    img_song = new Image();
    img_song.src = 'static/song.png';
    img_trigger = new Image();
    img_trigger.src = 'static/trigger.png';
    img_timer = new Image();
    img_timer.src = 'static/timer.png';
    img_lamp = new Image();
    img_lamp.src = 'static/lamp.png';
    img_lamp_ambient = new Image();
    img_lamp_ambient.src = 'static/lamp_ambient.png';
    img_region = new Image();
    img_region.src = 'static/panel_board.png';
    img_region_red = new Image();
    img_region_red.src = 'static/panel_board_red.png';
    img_region_blue = new Image();
    img_region_blue.src = 'static/panel_board_blue.png';
    img_quickpick = new Image();
    img_quickpick.src = 'static/quickpick.png';
    img_quickpick2 = new Image();
    img_quickpick2.src = 'static/quickpick2.png';
    img_slct = new Image();
    img_slct.onload = function() {
        selgrd = ctx.createPattern(img_slct, "repeat");
    };
    img_slct2 = new Image();
    img_slct2.onload = function() {
        selgrd2 = ctx.createPattern(img_slct2, "repeat");
    };
    img_slct3 = new Image();
    img_slct3.onload = function() {
        selgrd3 = ctx.createPattern(img_slct3, "repeat");
    };
    img_slct_b = new Image();
    img_slct_b.onload = function() {
        selgrd_b = ctx.createPattern(img_slct_b, "repeat");
    };
    img_slct2_b = new Image();
    img_slct2_b.onload = function() {
        selgrd2_b = ctx.createPattern(img_slct2_b, "repeat");
    };
    img_put = new Image();
    img_put.src = 'static/put.png';
    img_slct.src = 'static/s.gif';
    img_slct2.src = 'static/f.gif';
    img_slct3.src = 'static/s_w.gif';
    img_slct_b.src = 'static/s_b.gif';
    img_slct2_b.src = 'static/f_b.gif';
}

var lo_x = new Array();
var lo_y = new Array();
var lo_w = new Array();
var lo_h = new Array();
var bo_x = new Array();
var bo_y = new Array();
var bo_w = new Array();
var bo_h = new Array();
lo_x['enemy'] = lo_x['player'] = -32;
lo_y['enemy'] = lo_y['player'] = -87;
lo_w['enemy'] = lo_w['player'] = 65;
lo_h['enemy'] = lo_h['player'] = 96;
lo_x['gun'] = -28;
lo_y['gun'] = -12;
lo_w['gun'] = 100;
lo_h['gun'] = 25;
lo_x['vehicle'] = -126;
lo_y['vehicle'] = -66;
lo_w['vehicle'] = 263;
lo_h['vehicle'] = 281;
lo_x["image"] = lo_x['song'] = lo_x['inf'] = lo_x['lua'] = lo_x['trigger'] = lo_x['timer'] = lo_x['lamp'] = lo_x['decor'] = -16;
lo_y["image"] = lo_y['song'] = lo_y['inf'] = lo_y['lua'] = lo_y['trigger'] = lo_y['timer'] = lo_y['lamp'] = lo_y['decor'] = -16;
lo_w["image"] = lo_w['song'] = lo_w['inf'] = lo_w['lua'] = lo_w['trigger'] = lo_w['timer'] = lo_w['lamp'] = lo_w['decor'] = 32;
lo_h["image"] = lo_h['song'] = lo_h['inf'] = lo_h['lua'] = lo_h['trigger'] = lo_h['timer'] = lo_h['lamp'] = lo_h['decor'] = 32;
lo_x['barrel'] = -12;
lo_y['barrel'] = -20;
lo_w['barrel'] = 25;
lo_h['barrel'] = 41;
lo_x['decor_stone'] = -59;
lo_y['decor_stone'] = -51;
lo_w['decor_stone'] = 118;
lo_h['decor_stone'] = 100;
lo_x['decor_stone2'] = -32;
lo_y['decor_stone2'] = -27;
lo_w['decor_stone2'] = 64;
lo_h['decor_stone2'] = 53;
lo_x['decor_ship'] = -250;
lo_y['decor_ship'] = -81;
lo_w['decor_ship'] = 376;
lo_h['decor_ship'] = 92;
lo_x['decor_0'] = 0;
lo_y['decor_0'] = 0;
lo_w['decor_0'] = 0;
lo_h['decor_0'] = 0;
lo_x['decor_ship_noir'] = -250;
lo_y['decor_ship_noir'] = -81 - (376 - 92);
lo_w['decor_ship_noir'] = 376;
lo_h['decor_ship_noir'] = 376;
lo_x['decor_antigravity'] = -57;
lo_y['decor_antigravity'] = -16;
lo_w['decor_antigravity'] = 114;
lo_h['decor_antigravity'] = 20;
lo_x['decor_antigravity0'] = -57;
lo_y['decor_antigravity0'] = -16;
lo_w['decor_antigravity0'] = 114;
lo_h['decor_antigravity0'] = 20;
lo_x['decor_teleport'] = -40;
lo_y['decor_teleport'] = -47;
lo_w['decor_teleport'] = 80;
lo_h['decor_teleport'] = 58;
lo_x['decor_teleport2'] = -40;
lo_y['decor_teleport2'] = -13;
lo_w['decor_teleport2'] = 80;
lo_h['decor_teleport2'] = 58;
lo_x['decor_ray_left'] = -46;
lo_y['decor_ray_left'] = -26;
lo_w['decor_ray_left'] = 237;
lo_h['decor_ray_left'] = 53;
lo_x['decor_ray_right'] = -189;
lo_y['decor_ray_right'] = -26;
lo_w['decor_ray_right'] = 237;
lo_h['decor_ray_right'] = 53;
lo_x['decor_ray_ceil'] = -26;
lo_y['decor_ray_ceil'] = -46;
lo_w['decor_ray_ceil'] = 53;
lo_h['decor_ray_ceil'] = 237;
lo_x['decor_ray_floor'] = -26;
lo_y['decor_ray_floor'] = -189;
lo_w['decor_ray_floor'] = 53;
lo_h['decor_ray_floor'] = 237;
lo_x['decor_final_place'] = -171;
lo_y['decor_final_place'] = -8;
lo_w['decor_final_place'] = 341;
lo_h['decor_final_place'] = 20;
lo_x['decor_final_place2'] = -171;
lo_y['decor_final_place2'] = -73;
lo_w['decor_final_place2'] = 341;
lo_h['decor_final_place2'] = 84;
lo_x['decor_teleport_x'] = -40;
lo_y['decor_teleport_x'] = -12;
lo_w['decor_teleport_x'] = 80;
lo_h['decor_teleport_x'] = 23;
lo_x['decor_teleport2_x'] = -40;
lo_y['decor_teleport2_x'] = -12;
lo_w['decor_teleport2_x'] = 80;
lo_h['decor_teleport2_x'] = 23;
lo_x['decor_pixel_door'] = -50;
lo_y['decor_pixel_door'] = -50;
lo_w['decor_pixel_door'] = 100;
lo_h['decor_pixel_door'] = 100;
lo_x['decor_pixel_door2'] = -50;
lo_y['decor_pixel_door2'] = -50;
lo_w['decor_pixel_door2'] = 100;
lo_h['decor_pixel_door2'] = 100;
lo_x['decor_pixel_teleport'] = -50;
lo_y['decor_pixel_teleport'] = -50;
lo_w['decor_pixel_teleport'] = 100;
lo_h['decor_pixel_teleport'] = 100;
lo_x['text'] = -50;
lo_y['text'] = -50;
lo_w['text'] = 100;
lo_h['text'] = 100;
lo_x['text2'] = -50;
lo_y['text2'] = -50;
lo_w['text2'] = 100;
lo_h['text2'] = 100;
lo_x['text3'] = -50;
lo_y['text3'] = -50;
lo_w['text3'] = 100;
lo_h['text3'] = 100;
bo_x['enemy'] = bo_x['player'] = -15;
bo_y['enemy'] = bo_y['player'] = -82;
bo_w['enemy'] = bo_w['player'] = 30;
bo_h['enemy'] = bo_h['player'] = 82;
bo_x['gun'] = -25;
bo_y['gun'] = -7;
bo_w['gun'] = 50;
bo_h['gun'] = 14;
bo_x["image"] = bo_x['song'] = bo_x['inf'] = bo_x['lua'] = bo_x['trigger'] = bo_x['timer'] = bo_x['lamp'] = bo_x['decor'] = -16;
bo_y["image"] = bo_y['song'] = bo_y['inf'] = bo_y['lua'] = bo_y['trigger'] = bo_y['timer'] = bo_y['lamp'] = bo_y['decor'] = -16;
bo_w["image"] = bo_w['song'] = bo_w['inf'] = bo_w['lua'] = bo_w['trigger'] = bo_w['timer'] = bo_w['lamp'] = bo_w['decor'] = 32;
bo_h["image"] = bo_h['song'] = bo_h['inf'] = bo_h['lua'] = bo_h['trigger'] = bo_h['timer'] = bo_h['lamp'] = bo_h['decor'] = 32;
bo_x['barrel'] = -15;
bo_y['barrel'] = -20;
bo_w['barrel'] = 30;
bo_h['barrel'] = 40;
bo_x['vehicle'] = -21;
bo_y['vehicle'] = -21;
bo_w['vehicle'] = 42;
bo_h['vehicle'] = 42;
bo_x['vehicle_veh_jeep'] = -99;
bo_y['vehicle_veh_jeep'] = -32;
bo_w['vehicle_veh_jeep'] = 222;
bo_h['vehicle_veh_jeep'] = 111;
bo_x['vehicle_veh_walker'] = -110;
bo_y['vehicle_veh_walker'] = -56;
bo_w['vehicle_veh_walker'] = 233;
bo_h['vehicle_veh_walker'] = 257;
bo_x['vehicle_veh_capsule'] = -30;
bo_y['vehicle_veh_capsule'] = -60;
bo_w['vehicle_veh_capsule'] = 60;
bo_h['vehicle_veh_capsule'] = 120;
bo_x['vehicle_veh_crate'] = -30;
bo_y['vehicle_veh_crate'] = -30;
bo_w['vehicle_veh_crate'] = 60;
bo_h['vehicle_veh_crate'] = 60;
bo_x['vehicle_veh_drone'] = -13;
bo_y['vehicle_veh_drone'] = -11;
bo_w['vehicle_veh_drone'] = 45;
bo_h['vehicle_veh_drone'] = 34;
bo_x['vehicle_veh_rope'] = -10;
bo_y['vehicle_veh_rope'] = 0;
bo_w['vehicle_veh_rope'] = 20;
bo_h['vehicle_veh_rope'] = 188;
bo_x['vehicle_veh_corvette'] = -49;
bo_y['vehicle_veh_corvette'] = -46;
bo_w['vehicle_veh_corvette'] = 182;
bo_h['vehicle_veh_corvette'] = 129;
function SetDefaultDimensionsOffset(v) {
    v = 'decor_' + v;
    lo_x[v] = -400;
    lo_y[v] = -400;
    lo_w[v] = 800;
    lo_h[v] = 800;
}
SetDefaultDimensionsOffset('wall_lamp_right');
SetDefaultDimensionsOffset('wall_lamp_right_on');
SetDefaultDimensionsOffset('wall_lamp_left');
SetDefaultDimensionsOffset('wall_lamp_left_on');
SetDefaultDimensionsOffset('wall_lamp_up');
SetDefaultDimensionsOffset('wall_lamp_up_on');
SetDefaultDimensionsOffset('wall_lamp_down');
SetDefaultDimensionsOffset('wall_lamp_down_on');
SetDefaultDimensionsOffset('back_lamp_vertical');
SetDefaultDimensionsOffset('back_lamp_vertical_on');
SetDefaultDimensionsOffset('back_lamp_horizontal');
SetDefaultDimensionsOffset('back_lamp_horizontal_on');
SetDefaultDimensionsOffset('column_red');
SetDefaultDimensionsOffset('column_green');
SetDefaultDimensionsOffset('column_blue');
SetDefaultDimensionsOffset('mined_barrel');
SetDefaultDimensionsOffset('darkstar_device');
SetDefaultDimensionsOffset('darkstar_device_destroyed');
SetDefaultDimensionsOffset('antigravity_right');
SetDefaultDimensionsOffset('antigravity_left');
SetDefaultDimensionsOffset('darkstar_camera_left');
SetDefaultDimensionsOffset('darkstar_camera_right');
SetDefaultDimensionsOffset('ditzy_flag_blue');
SetDefaultDimensionsOffset('ditzy_flag_red');
SetDefaultDimensionsOffset('ditzy_flag_dark');
SetDefaultDimensionsOffset('ditzy_flag_empty');
SetDefaultDimensionsOffset('darkstar_healing_kit');
SetDefaultDimensionsOffset('darkstar_holo_on');
SetDefaultDimensionsOffset('darkstar_holo_on_red');
SetDefaultDimensionsOffset('darkstar_holo_off');
SetDefaultDimensionsOffset('darkstar_holo_earth');
SetDefaultDimensionsOffset('darkstar_holo_c9');
SetDefaultDimensionsOffset('static_barrel1');
SetDefaultDimensionsOffset('static_barrel2');
SetDefaultDimensionsOffset('static_barrel3');
SetDefaultDimensionsOffset('fttp_vehicle');
SetDefaultDimensionsOffset('fttp_vehicle2');
SetDefaultDimensionsOffset('fttp_wheel');
SetDefaultDimensionsOffset('fttp_drone');
SetDefaultDimensionsOffset('doomwrath_rapier_idle');
SetDefaultDimensionsOffset('doomwrath_rapier_active');
SetDefaultDimensionsOffset('doomwrath_rapier_idle2');
SetDefaultDimensionsOffset('doomwrath_rapier_active2');
SetDefaultDimensionsOffset('falkok_ship1');
SetDefaultDimensionsOffset('falkok_ship2');
SetDefaultDimensionsOffset('falkok_ship3');
SetDefaultDimensionsOffset('falkok_ship4');
SetDefaultDimensionsOffset('falkok_ship5');
SetDefaultDimensionsOffset('falkok_ship6');
SetDefaultDimensionsOffset('darkstar_crate');
SetDefaultDimensionsOffset('darkstar_weapon_crate');
SetDefaultDimensionsOffset('darkstar_portable_fission');
SetDefaultDimensionsOffset('darkstar_portable_fission_brk');
SetDefaultDimensionsOffset('darkstar_ceiling_camera');
SetDefaultDimensionsOffset('doomzerker_locker');
SetDefaultDimensionsOffset('doomzerker_locker2');
SetDefaultDimensionsOffset('doomzerker_locker3');
SetDefaultDimensionsOffset('darkstar_tree1');
SetDefaultDimensionsOffset('darkstar_tree2');
SetDefaultDimensionsOffset('darkstar_pot');
SetDefaultDimensionsOffset('darkstar_pot_tree1');
SetDefaultDimensionsOffset('darkstar_pot_tree2');

function ThinkOfBBoxClass(this_class, es_i) {
    if (this_class == 'vehicle')
        if (bo_w[this_class + '_' + es_i.pm.model] != null) {
            this_class = this_class + '_' + es_i.pm.model;
        } return this_class;
}

function ThinkOfOffsetClass(this_class, es_i) {
    if (this_class == 'decor')
        if (lo_w[this_class + '_' + es_i.pm.model] != null) {
            this_class = this_class + '_' + es_i.pm.model;
        } return this_class;
}

function img_decide(e) {
    switch (e._class) {
        case 'player':
        case 'enemy':
            switch (e.pm.char) {
                case 1:
                    return img_player_hero;
                case 73:
                    return img_player_blue;
                case 74:
                    return img_player_red;
                default:
                    return img_player_cs;
            }
        case 'gun':
            if (img_guns[e.pm.model] != undefined) return img_guns[e.pm.model];
            return img_weapon;
        case 'barrel':
            if (img_barrels[e.pm.model] != undefined) return img_barrels[e.pm.model];
            return img_unknown;
        case 'vehicle':
            if (img_vehicles[e.pm.model] != undefined) return img_vehicles[e.pm.model];
            return img_unknown;
        case 'inf':
            return img_inf;
        case 'song':
            return img_song;
        case "image":
            return img_image;
        case 'trigger':
            return img_trigger;
        case 'timer':
            return img_timer;
        case 'lamp': {
            if (e.pm.flare == 'true' || e.pm.flare == 1) return img_lamp;
            return img_lamp_ambient;
        }
        case 'decor': {
            if (img_decors[e.pm.model] != undefined) return img_decors[e.pm.model];
            break;
        }
        case 'lua':
            return img_lua; 
    }
    return img_unknown;
}
var note_place = document.getElementById('note_place');
var Notes = new Array();
var Notes_first_invis = 0;
var Notes_first_exist = 0;
var Notes_total = 0;
var note_good = '#00FF00';
var note_bad = '#FF0000';
var note_neutral = '#FFFF00';
var note_passive = '#FFFFFF';

function endNote(noteid, gotodis, autoti) {
    if (gotodis) {
        if (Notes[noteid].canterminate) {
            Notes[noteid].canterminate = false;
            if (autoti) Notes[noteid].physical.className = 'notediv_term notediv_term_nonstrict';
            else Notes[noteid].physical.className = 'notediv_term notediv_term_strict';
            Notes[noteid].physical.style.webkitAnimationName = 'notediv_terma';
            Notes[noteid].timeout = setTimeout('endNote("' + noteid + '", false)', 800);
        }
    } else {
        note_place.removeChild(Notes[noteid].physical);
        Notes[noteid].physical = null;
    }
}

function termNote(noteid) {
    if (Notes[noteid].canterminate) endNote(noteid, true, false);
}

function NewNote(_text, _color) {
    Notes[Notes_total] = {
        physical: document.createElement('div'),
        timeout: setTimeout('endNote("' + Notes_total + '", true, true)', _color == note_passive ? 5000 : 2000 + _text.length * 50),
        canterminate: true
    };
    note_place.appendChild(Notes[Notes_total].physical);
    Notes[Notes_total].physical.setAttribute('class', 'notediv');
    Notes[Notes_total].physical.setAttribute('style', 'color:' + _color);
    Notes[Notes_total].physical.setAttribute('id', 'notes' + Notes_total);
    Notes[Notes_total].physical.setAttribute('onclick', 'termNote(' + Notes_total + ')');
    Notes[Notes_total].physical.innerHTML = _text;
    Notes_total++;
}

function httpGet(theUrl, posts) {
    var xmlHttp = null;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", theUrl, false);
    try {
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send(posts);
    } catch (e) {
        return 'error';
    }
    return xmlHttp.responseText;
}

function getQueryParams(qs) {
    qs = qs.split('+').join(' ');
    var params = {},
        tokens, re = /[?&]?([^=]+)=([^&]*)/g;
    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }
    return params;
}
var request_a = getQueryParams(document.location.search).a;
if (request_a === undefined) request_a = '';

function ServerRequest(my_request, operation, callback = null) {
    //console.log("ServerRequest [" + operation + "]: " + my_request);
    return;
    var url = 'e_server.php?a=' + request_a;
    var t = httpGet(url, my_request);
    if (t == 'error') {
        if (operation == 'save') {
            NewNote('Oops! Error occoured during saving. Usually it may be happening due to connection problems. Map will be temporary saved to your computer\'s LocalStorage', note_bad);
        } else if (operation == 'load') {
            NewNote('Oops! Error occoured durning loading. Usually it may be happening due to connection problems.', note_bad);
        }
    } else {
        try {
            eval.call(window, t);
            if (operation == 'save' || operation == 'load') {
                changes_made = false;
                if (operation == 'load') {
                    need_redraw = true;
                    need_GUIParams_update = true;
                    ClearUndos();
                }
            }
        } catch (e) {
            NewNote('Server responds with unclear message. Looks like one of recent actions wasn\'t successful.', note_bad);
            debugger;
        }
    }
    if (callback != null) callback();
}
var param_type = new Array();
param_type[0] = ['uid', 'string', 'ID', 'Object ID', '*'];
param_type[1] = ['x', 'value+round10', 'X', 'Object position along X axis', '*'];
param_type[2] = ['y', 'value+round10', 'Y', 'Object position along Y axis', '*'];
param_type[3] = ['tox', 'value', 'Speed X', 'Object initial speed along X axis', '*'];
param_type[4] = ['toy', 'value', 'Speed Y', 'Object initial speed along Y axis', '*'];
param_type[5] = ['hea', 'int', 'Hitpoints', 'Initial hitpoints ammount', '*'];
param_type[6] = ['hmax', 'int', 'Max. Hitpoints', 'Maximal hitpoints ammount', '*'];
param_type[7] = ['team', 'team', 'Team', 'Default player team', '*'];
param_type[8] = ['side', 'side', 'Direction', 'Initial direction', '*'];
param_type[9] = ['char', 'char', 'Character', 'Player model', '*'];
param_type[10] = ['incar', 'vehicle+none+any', 'In car', 'Determines initial actor placement', '*'];
param_type[11] = ['botaction', 'botaction', 'AI Behaviour', 'Initial behaviour of computer-controlled actors', '*'];
param_type[12] = ['ondeath', 'trigger+none', 'Trigger on death', 'Trigger being called on actor death event', '*'];
param_type[13] = ['power', 'value', 'Power', 'Power of light', 'lamp'];
param_type[14] = ['flare', 'bool', 'Has flare', 'Determines if light is visible on screen', 'lamp'];
param_type[15] = ['model', 'gun_model', 'Weapon model', 'Determines weapon model', 'gun'];
param_type[16] = ['command', 'team+any', 'For team', 'Defines who can pick up this weapon', 'gun'];
param_type[17] = ['upg', 'gun_upgrade', 'Upgrade level', 'Determines initial upgrade level for this weapon', 'gun'];
param_type[18] = ['w', 'value>0+round10', 'Width', 'Determines object\'s width', '*'];
param_type[19] = ['h', 'value>0+round10', 'Height', 'Determines object\'s height', '*'];
param_type[20] = ['m', 'bg_model_native', 'Material', 'Determines object\'s material', 'bg']; // TODO: change type back to bg_model
param_type[21] = ['damage', 'value>=0', 'Damage', 'Determines the amount of damage inflicted to alive actors by water region per 1/30 second', 'water'];
param_type[22] = ['use_target', 'trigger+none', 'Activation Trigger', 'Trigger being called on Action event', 'region'];
param_type[23] = ['use_on', 'region_activation', 'Activation on', 'Determines when trigger which is defined by "Activation Trigger" parameter runs', 'region'];
param_type[24] = ['tox', 'value', 'Acceleration X', 'Defines acceleration along X axis for objects in Gravitator area field', 'pushf'];
param_type[25] = ['toy', 'value', 'Acceleration Y', 'Defines acceleration along Y axis for objects in Gravitator area field', 'pushf'];
param_type[26] = ['stab', 'value>=0', 'Stability damage', 'Defines how much stability damage Gravitator area field deals for alive actors per 1/30 second', 'pushf'];
param_type[27] = ['damage', 'pushf_damage', 'Hitpoints damage', 'Defines how much hitpoint damage Gravitator area field deals for alive actors per 1/30 second', 'pushf'];
param_type[28] = ['maxspeed', 'value>=0', 'Speed', 'Defines speed per 1/30 second', 'door'];
param_type[29] = ['vis', 'bool', 'Visible', 'Determines whether door is visible or not', 'door'];
param_type[30] = ['enabled', 'bool', 'Launched on start', 'Defines if timer is initially started', 'timer'];
param_type[31] = ['maxcalls', 'maxcalls', 'Max calls', 'Maximum calls', 'timer'];
param_type[32] = ['target', 'trigger+none', 'Trigger on timeout', 'Trigger being called on Timeout event', 'timer'];
param_type[33] = ['delay', 'value>=0', 'Delay', 'Delay between calls', 'timer'];
param_type[34] = ['model', 'decor_model_native', 'Model', 'Decoration model', 'decor'];  // TODO: CHANGE TYPE BACK TO decor_model AFTER
param_type[35] = ['mark', 'engine_mark', 'Modificator', 'Game modificator', 'inf'];
param_type[36] = ['forteam', 'nochange', 'Parameter', 'Modificator parameter', 'inf'];
param_type[37] = ['model', 'vehicle_model', 'Model', 'Vehicle model', 'vehicle'];
param_type[38] = ['hpp', 'value>=0', '% of Hitpoints', 'Percentage value based on default hitpoints ammount for current vehicle', 'vehicle'];
param_type[39] = ['model', 'barrel_model', 'Model', 'Barrel model', 'barrel'];
param_type[40] = ['enabled', 'bool', 'Enabled', 'Defines if trigger can be started without being enabled by different trigger', 'trigger'];
param_type[41] = ['maxcalls', 'maxcalls', 'Max calls', 'Maximum calls', 'trigger'];
param_type[42] = ['m', 'box_model', 'Material', 'Determines object\'s material', 'box'];
param_type[43] = ['c', 'string', 'HEX multiplier', 'Multiplier material with this color', 'bg'];
param_type[44] = ['url', 'string', 'URL', '.mp3 file URL', 'song'];
param_type[45] = ['volume', 'value>=0', 'Volume', 'Volume', 'song'];
param_type[46] = ['attach', 'door+none', 'Attach to', 'Prevents any free move and attaches movable to other movable', 'door'];
param_type[47] = ['a', 'door+none', 'Attach to', 'Attaches background to movable', 'bg'];
param_type[48] = ['attach', 'door+none', 'Attach to', 'Attaches decoration to movable', 'decor'];
param_type[49] = ['attach', 'door+none', 'Attach to', 'Attaches pusher to movable', 'pushf'];
param_type[50] = ['attach', 'door+none', 'Attach to', 'Attaches region to movable', 'region'];
param_type[51] = ['friction', 'bool', 'Act as water', 'Acts as water', 'water'];
param_type[52] = ['loop', 'bool', 'Loop', 'Loop', 'song'];
param_type[53] = ['callback', 'trigger+none', 'Trigger on end', 'Trigger to call after song ends', 'song'];
param_type[54] = ['id', 'value>=0', 'Custom Image ID', 'Custom Image identificator', "image"];
param_type[55] = ['width', 'value>0', 'Width in pixels', 'Image width', "image"];
param_type[56] = ['height', 'value>0', 'Height in pixels', 'Image height', "image"];
param_type[57] = ['u', 'value', 'Texture X offset', 'Texture offset in pixels', '*'];
param_type[58] = ['v', 'value', 'Texture Y offset', 'Texture offset in pixels', '*'];
param_type[59] = ['f', 'draw_in_front', 'Draw in front', 'Draw in front?', '*'];
param_type[60] = ['s', 'bool', 'Spawn shadow', 'Spawn shadow?', '*'];
param_type[61] = ['r', 'value', 'Initial rotation', 'Rotation in degrees', '*'];
param_type[62] = ['sx', 'value', 'Scale X', 'Texture X scale', '*'];
param_type[63] = ['sy', 'value', 'Scale Y', 'Texture Y scale', '*'];
param_type[64] = ['src', 'luacode', 'Code', 'Source code', 'lua'];
param_type[65] = ['start', 'bool', 'Execute on start', 'Execute on start?', 'lua'];
param_type[66] = ['attach', 'door+none', 'Attach to', 'Attaches water to movable', 'water'];
param_type[67] = ['onserver', 'bool', 'On server', 'Will the script will be executed on server?', 'lua'];
for (var i = 1; i <= 10; i++) {
    param_type[param_type.length] = ['actions_' + i + '_type', 'trigger_type', 'Action ' + i + ' type', 'Determines type of action ' + i + '', 'trigger'];
    param_type[param_type.length] = ['actions_' + i + '_targetA', 'nochange', '- parameter A', 'Determines parameter A of action ' + i + '', 'trigger'];
    param_type[param_type.length] = ['actions_' + i + '_targetB', 'nochange', '- parameter B', 'Determines parameter B of action ' + i + '', 'trigger'];
}
param_type[param_type.length] = ["onserver", "bool", "On server", "Will this script be ran in server ?", "trigger"];
param_type[param_type.length] = ['psi1_color', 'string', "PSI1 Color", "Arm1 PSI Color", "player"];
param_type[param_type.length] = ['psi2_color', 'string', "PSI2 Color", "Arm2 PSI Color", "player"];
param_type[param_type.length] = ["mdl_psi1", "psis", "PSI1 Model", "Arm1 PSI Model", "player"];
param_type[param_type.length] = ["mdl_psi2", "psis", "PSI2 Model", "Arm2 PSI Model", "player"];

var special_values_table = new Array();
special_values_table['team'] = new Array();
special_values_table['team'][0] = "Alpha";
special_values_table['team'][1] = "Beta";
special_values_table['team'][2] = "Gamma";
special_values_table['team'][3] = "Delta";
special_values_table['team'][4] = "Zeta";
special_values_table['team'][5] = "Lambda";
special_values_table['team'][6] = "Sigma";
special_values_table['team'][7] = "Omega";
special_values_table['team'][8] = "Counter-Terrorists";
special_values_table['team'][9] = "Terrorists";
special_values_table['team'][10] = "Usurpation Forces";
special_values_table['team'][11] = "Citizen Security";
special_values_table['team'][12] = "Red Team";
special_values_table['team'][13] = "Blue Team";
special_values_table['team'][14] = "Green Team";
special_values_table['team'][15] = "White Team";
special_values_table['team'][16] = "Black Team";
special_values_table['team+any'] = new Array();
special_values_table['team+any'][-1] = "Any Team";
for (var i = 0; i < special_values_table['team'].length; i++) special_values_table['team+any'][i] = special_values_table['team'][i];
special_values_table['side'] = new Array();
special_values_table['side'][-1] = "&#9668; Left";
special_values_table['side'][1] = "Right &#9658;";
special_values_table['char'] = new Array();
special_values_table['char'][-1] = "Death Match model";
special_values_table['char'][1] = "Campaign Hero model";
special_values_table['char'][2] = "Usurpation Soldier Minor";
special_values_table['char'][3] = 'Proxy';
special_values_table['char'][4] = "Android T-01187";
special_values_table['char'][5] = "Drone Controller";
special_values_table['char'][6] = "Advanced Usurpation Soldier";
special_values_table['char'][7] = "Civil Security Heavy";
special_values_table['char'][8] = "Civil Security Lite";
special_values_table['char'][9] = "Android SLC-56";
special_values_table['char'][11] = "Civil Security Boss";
special_values_table['char'][12] = 'Civil Security Ghost';
special_values_table['char'][13] = 'Noir Lime';
special_values_table['char'][14] = 'Falkok';
special_values_table['char'][15] = 'Phoenix Falkok';
special_values_table['char'][16] = 'Grub';
special_values_table['char'][17] = "Civil Security Ghost (visible)";
special_values_table['char'][18] = 'Star Defender';
special_values_table['char'][19] = "Raven by A Coniferous Chair";
special_values_table['char'][21] = "PB:FTTP Star Defender";
special_values_table['char'][22] = "PB:FTTP Marine";
special_values_table['char'][23] = "PB:FTTP Soldier Rank 1";
special_values_table['char'][24] = "PB:FTTP Soldier Rank 2";
special_values_table['char'][25] = "PB:FTTP Soldier Rank 3";
special_values_table['char'][26] = "PB:FTTP Soldier Rank 4";
special_values_table['char'][27] = "Armored Grub";
special_values_table['char'][28] = "Elite Grub";
special_values_table['char'][29] = "Falkok Boss by Mr. Darks";
special_values_table['char'][31] = "Reakhohsha Operative by darkstar 1";
special_values_table['char'][32] = "Civil Protector by darkstar 1";
special_values_table['char'][33] = "Android ATM-105 by darkstar 1";
special_values_table['char'][34] = "Android DT-148 by Ditzy";
special_values_table['char'][35] = "Zephyr by Ditzy";
special_values_table['char'][36] = "Hermes by darkstar 1";
special_values_table['char'][37] = "Hexagon by darkstar 1";
special_values_table['char'][40] = "Lite Hero";
special_values_table['char'][41] = "Lite Hero 2";
special_values_table['char'][42] = "Lite Hero 3";
special_values_table['char'][43] = "Lite Hero 4";
special_values_table['char'][44] = "Lite Hero 5";
special_values_table['char'][45] = "Lite Hero 6";
special_values_table['char'][46] = "Lite Hero 7";
special_values_table['char'][47] = "Lite Hero 8";
special_values_table['char'][48] = "Lite Hero 9";
special_values_table['char'][49] = "Heavy Hero";
special_values_table['char'][61] = "Proxy (No helmet)";
special_values_table['char'][69] = "Usurpation Ranger";
special_values_table['char'][70] = 'Usurpation Destroyer';
special_values_table['char'][71] = "Usurpation Soldier Major";
special_values_table['char'][72] = "Proxy (White)";
special_values_table['char'][73] = "Blue Player (Noir Lime)";
special_values_table['char'][74] = "Red Player (Noir Lime)";
special_values_table['char'][75] = "Blue Proxy";
special_values_table['char'][76] = "Red Proxy";
special_values_table['char'][77] = "Blue Civil Security Lite";
special_values_table['char'][78] = "Red Civil Security Lite";
special_values_table['char'][79] = "Blue Usurpation Soldier";
special_values_table['char'][80] = "Red Usurpation Soldier";
special_values_table['char'][81] = "Blue Android SLC-56";
special_values_table['char'][82] = "Red Android SLC-56";
special_values_table['char'][83] = "Blue Lite Hero";
special_values_table['char'][84] = "Red Lite Hero";
special_values_table['char'][85] = "Blue Falkok";
special_values_table['char'][86] = "Red Falkok";
special_values_table['char'][87] = "Blue Raven by A Coniferous Chair";
special_values_table['char'][88] = "Red Raven by A Coniferous Chair";
special_values_table['char'][89] = "Blue Civil Protector by darkstar 1";
special_values_table['char'][90] = "Red Civil Protector by darkstar 1";
special_values_table['char'][130] = "Mining Android by darkstar 1";
special_values_table['char'][131] = "Crossfire Sentinel by Ditzy";
special_values_table['char'][132] = "Crossfire Headhunter by Ditzy";
special_values_table['char'][133] = "Federation Soldier by CakeSpider";
special_values_table['char'][134] = "Vulture by darkstar 1";
special_values_table['char'][135] = "Silk (armorless) by darkstar 1";
special_values_table['char'][136] = "Silk by darkstar 1";
special_values_table['char'][137] = "Civil Security Riot by eru_";
special_values_table['char'][138] = "Avre by darkstar 1";
special_values_table['char'][139] = "Civilian (male 1) by mrnat444";
special_values_table['char'][140] = "Civilian (male 2) by mrnat444";
special_values_table['char'][141] = "Civilian (male 3) by mrnat444";
special_values_table['char'][142] = "Civilian (female 1) by mrnat444";
special_values_table['char'][143] = "Civilian (female 2) by mrnat444";
special_values_table['char'][144] = "Civilian (female 3) by mrnat444";
special_values_table['char'][145] = "Civilian (male 1 equipped) by mrnat444";
special_values_table['char'][146] = "Civilian (male 2 equipped) by mrnat444";
special_values_table['char'][147] = "Worker (male) by mrnat444";
special_values_table['char'][148] = "Worker (female) by mrnat444";
special_values_table['char'][149] = "S.W.A.T (dark) by mrnat444";
special_values_table['char'][150] = "S.W.A.T (brighter) by mrnat444";
let charlists = [
    [38, "GoldenKnife Noir Lime"],
    [39, "RootZ Noir Lime"],
    [151, "Purple Xin"],
    [152, "Golden Xin"],
    [153, "Blue Xin"],
    [154, "Red Xin"],
    [155, "Amber Xin"],
    /*[156, "Nirvana Noir Lime"],
    [157, "Purple Gallynew"],
    [158, "Golden Gallynew"],
    [159, "Blue Gallynew"],
    [160, "Red Gallynew"],
    [161, "Amber Gallynew"],
    [162, "Pinkine"],
    [163, "Oryx"],
    [164, "Blue Heavy Hero"],
    [165, "Red Heavy Hero"],
    [166, "Orakin"],
    [167, "Husk"],
    [168, "Hex"],
    [169, "Arrin"],
    [170, "Heavy Usurpation Soldier"]
    TODO: We should add those skins
    */
]
for(let li = 0; li < charlists.length; li++) {
    special_values_table['char'][charlists[li][0]] = charlists[li][1];
}

special_values_table['vehicle+none+any'] = new Array();
special_values_table['vehicle+none+any'][-2] = "- Detect automaticly -";
special_values_table['vehicle+none+any'][-1] = "- No -";
special_values_table['vehicle+none+any']['[listof]'] = 'vehicle';
special_values_table['song+none'] = new Array();
special_values_table['song+none'][-1] = "- Silence -";
special_values_table['song+none']['[listof]'] = 'song';
special_values_table['vehicle'] = new Array();
special_values_table['vehicle']['[listof]'] = 'vehicle';
special_values_table['trigger'] = new Array();
special_values_table['trigger']['[listof]'] = 'trigger';
special_values_table['timer'] = new Array();
special_values_table['timer']['[listof]'] = 'timer';
special_values_table['pushf'] = new Array();
special_values_table['pushf']['[listof]'] = 'pushf';
special_values_table['door'] = new Array();
special_values_table['door']['[listof]'] = 'door';
special_values_table['door+none'] = new Array();
special_values_table['door+none'][-1] = "- No -";
special_values_table['door+none']['[listof]'] = 'door';
special_values_table['barrel'] = new Array();
special_values_table['barrel']['[listof]'] = 'barrel';
special_values_table['decor'] = new Array();
special_values_table['decor']['[listof]'] = 'decor';
special_values_table['lamp'] = new Array();
special_values_table['lamp']['[listof]'] = 'lamp';
special_values_table['gun'] = new Array();
special_values_table['gun']['[listof]'] = 'gun';
special_values_table['water'] = new Array();
special_values_table['water']['[listof]'] = 'water';
special_values_table['region'] = new Array();
special_values_table['region']['[listof]'] = 'region';
special_values_table['bg'] = new Array();
special_values_table['bg']['[listof]'] = 'bg';
special_values_table['character'] = new Array();
special_values_table['character']['[listof]'] = 'player';
special_values_table['character']['[listof2]'] = 'enemy';
special_values_table['botaction'] = new Array();
special_values_table['botaction'][0] = "Default";
special_values_table['botaction'][1] = "Follow the player";
special_values_table['botaction'][2] = "Look around";
special_values_table['botaction'][3] = "Investigate";
special_values_table['botaction'][4] = "Do nothing (controllable with Triggers)";
special_values_table['bool'] = new Array();
special_values_table['bool']['true'] = 'Yes';
special_values_table['bool']['false'] = 'No';
special_values_table['pushf_damage'] = new Array();
special_values_table['pushf_damage'][0] = "No damage";
special_values_table['pushf_damage']['[val]'] = "# basic damage";
special_values_table['pushf_damage']['-[val]'] = "# slicing damage";

special_values_table["psis"] = new Array();
special_values_table["psis"]["-1"] = "Original PSI"
special_values_table["psis"]["1"] = "Regular PSI"
special_values_table["psis"]["2"] = "Xin PSI"
special_values_table["psis"]["3"] = "SD PSI"

special_values_table['decor_model'] = new Array();
special_values_table['decor_model']['antigravity'] = "Floor gravitator";
special_values_table['decor_model']['antigravity0'] = "Disabled floor gravitator";
special_values_table['decor_model']['antigravity_left'] = "On-wall gravitator left";
special_values_table['decor_model']['antigravity_right'] = "On-wall gravitator right";
special_values_table['decor_model']['back_lamp_horizontal'] = "Back lamp horizontal (off) by darkstar 1";
special_values_table['decor_model']['back_lamp_horizontal_on'] = "Back lamp horizontal (on) by darkstar 1";
special_values_table['decor_model']['back_lamp_vertical'] = "Back lamp vertical (off) by darkstar 1";
special_values_table['decor_model']['back_lamp_vertical_on'] = "Back lamp vertical (on) by darkstar 1";
special_values_table['decor_model']['column_blue'] = "Blue column by Doomzerker";
special_values_table['decor_model']['column_green'] = "Green column by Doomzerker";
special_values_table['decor_model']['column_red'] = "Red column by Doomzerker";
special_values_table['decor_model']['darkstar_camera_left'] = "Wall camera (left) by darkstar 1";
special_values_table['decor_model']['darkstar_camera_right'] = "Wall camera (right) by darkstar 1";
special_values_table['decor_model']['darkstar_ceiling_camera'] = "Ceiling camera by darkstar 1";
special_values_table['decor_model']['darkstar_crate'] = "Crate by darkstar 1";
special_values_table['decor_model']['darkstar_device'] = "Machine by darkstar 1";
special_values_table['decor_model']['darkstar_device_destroyed'] = "Machine (destroyed) by darkstar 1";
special_values_table['decor_model']['darkstar_healing_kit'] = "Healing kit by darkstar 1";
special_values_table['decor_model']['darkstar_holo_c9'] = "Hologram of Correction-9 logo by darkstar 1";
special_values_table['decor_model']['darkstar_holo_earth'] = "Hologram of Earth by darkstar 1";
special_values_table['decor_model']['darkstar_holo_off'] = "Hologram stand (disabled) by darkstar 1";
special_values_table['decor_model']['darkstar_holo_on'] = "Hologram stand (enabled, blue) by darkstar 1";
special_values_table['decor_model']['darkstar_holo_on_red'] = "Hologram stand (enabled, red) by darkstar 1";
special_values_table['decor_model']['darkstar_portable_fission'] = "Portable Fission Chamber by darkstar 1";
special_values_table['decor_model']['darkstar_portable_fission_brk'] = "Portable Fission Chamber debris by darkstar 1";
special_values_table['decor_model']['darkstar_pot'] = "Pot by darkstar 1";
special_values_table['decor_model']['darkstar_pot_tree1'] = "Tree in pot (small) by darkstar 1";
special_values_table['decor_model']['darkstar_pot_tree2'] = "Tree in pot (medium) by darkstar 1";
special_values_table['decor_model']['darkstar_tree1'] = "Tree (small) by darkstar 1";
special_values_table['decor_model']['darkstar_tree2'] = "Tree (medium) by darkstar 1";
special_values_table['decor_model']['darkstar_weapon_crate'] = "Weapon Crate by darkstar 1";
special_values_table['decor_model']['ditzy_flag_blue'] = "Flag (blue) by Ditzy";
special_values_table['decor_model']['ditzy_flag_dark'] = "Flag (dark) by Ditzy";
special_values_table['decor_model']['ditzy_flag_empty'] = "Flag (empty) by Ditzy";
special_values_table['decor_model']['ditzy_flag_red'] = "Flag (red) by Ditzy";
special_values_table['decor_model']['doomwrath_rapier_active'] = "XXF Rapier (active, right) by Doomzerker";
special_values_table['decor_model']['doomwrath_rapier_active2'] = "XXF Rapier (active, left) by Doomzerker";
special_values_table['decor_model']['doomwrath_rapier_idle'] = "XXF Rapier (idle, right) by Doomzerker";
special_values_table['decor_model']['doomwrath_rapier_idle2'] = "XXF Rapier (idle, left) by Doomzerker";
special_values_table['decor_model']['doomzerker_locker'] = "Storage locker by Doomzerker";
special_values_table['decor_model']['doomzerker_locker2'] = "Storage locker (damaged) by Doomzerker";
special_values_table['decor_model']['doomzerker_locker3'] = "Storage locker (open) by Doomzerker";
special_values_table['decor_model']['falkok_ship1'] = "Falkok ship (idle, pilotless, right)";
special_values_table['decor_model']['falkok_ship2'] = "Falkok ship (idle, piloted, right)";
special_values_table['decor_model']['falkok_ship3'] = "Falkok ship (active, piloted, right)";
special_values_table['decor_model']['falkok_ship4'] = "Falkok ship (idle, pilotless, left)";
special_values_table['decor_model']['falkok_ship5'] = "Falkok ship (idle, piloted, left)";
special_values_table['decor_model']['falkok_ship6'] = "Falkok ship (active, piloted, left)";
special_values_table['decor_model']['final_place'] = "Wide teleport disabled";
special_values_table['decor_model']['final_place2'] = "Wide teleport enabled";
special_values_table['decor_model']['fttp_drone'] = "PB:FTTP Drone as decoration";
special_values_table['decor_model']['fttp_vehicle'] = "PB:FTTP Vehicle (right) as decoration";
special_values_table['decor_model']['fttp_vehicle2'] = "PB:FTTP Vehicle (left) as decoration";
special_values_table['decor_model']['fttp_wheel'] = "PB:FTTP Vehicle wheel as decoration";
special_values_table['decor_model']['mined_barrel'] = "Mined barrel by Doomzerker";
special_values_table['decor_model']['null'] = "Nothing";
special_values_table['decor_model']['pixel_door'] = "Pixel door";
special_values_table['decor_model']['pixel_door2'] = "Pixel door (closed)";
special_values_table['decor_model']['pixel_teleport'] = "Pixel teleport";
special_values_table['decor_model']['ray_ceil'] = "Ceil killing ray";
special_values_table['decor_model']['ray_floor'] = "Floor killing ray";
special_values_table['decor_model']['ray_left'] = "Left killing ray";
special_values_table['decor_model']['ray_right'] = "Right killing ray";
special_values_table['decor_model']['ship'] = "Broken ship";
special_values_table['decor_model']['ship_noir'] = "Incoming once animated ship";
special_values_table['decor_model']['static_barrel1'] = "Orange barrel as decoration";
special_values_table['decor_model']['static_barrel2'] = "Blue barrel as decoration";
special_values_table['decor_model']['static_barrel3'] = "Red barrel as decoration";
special_values_table['decor_model']['stone'] = "Stone";
special_values_table['decor_model']['stone2'] = "Small stone";
special_values_table['decor_model']['teleport'] = "Floor teleport";
special_values_table['decor_model']['teleport2'] = "Ceil teleport";
special_values_table['decor_model']['teleport2_x'] = "Disabled ceil teleport";
special_values_table['decor_model']['teleport_x'] = "Disabled floor teleport";
special_values_table['decor_model']['text'] = "Text placeholder (overhead)";
special_values_table['decor_model']['text2'] = "Text placeholder (score)";
special_values_table['decor_model']['text3'] = "Text placeholder (chat)";
special_values_table['decor_model']['wall_lamp_down'] = "Wall lamp down (off) by darkstar 1";
special_values_table['decor_model']['wall_lamp_down_on'] = "Wall lamp down (on) by darkstar 1";
special_values_table['decor_model']['wall_lamp_left'] = "Wall lamp left (off) by darkstar 1";
special_values_table['decor_model']['wall_lamp_left_on'] = "Wall lamp left (on) by darkstar 1";
special_values_table['decor_model']['wall_lamp_right'] = "Wall lamp right (off) by darkstar 1";
special_values_table['decor_model']['wall_lamp_right_on'] = "Wall lamp right (on) by darkstar 1";
special_values_table['decor_model']['wall_lamp_up'] = "Wall lamp up (off) by darkstar 1";
special_values_table['decor_model']['wall_lamp_up_on'] = "Wall lamp up (on) by darkstar 1";
special_values_table['decor_model_native'] = special_values_table['decor_model'];
for (i in special_values_table['decor_model_native']) {
    let style = "vertical-align:-4px;background-repeat:no-repeat !important;background-position:center !important;box-sizing:border-box;background-color:rgba(0, 0, 0, 0.5) !important";
    special_values_table['decor_model_native'][i] = '<img src='+PIC_PHP_SOURCE+'/decors/'+i+'.png border=0 width=16 height=16 style=\''+style+'\' title=\'' + special_values_table['decor_model_native'][i] + '\'> ' + special_values_table['decor_model_native'][i];
}
ServerRequest('a=get_images&for_class=' + 'decor_model' + '&update_const=' + 'all', 'request_consts');

special_values_table['gun_model'] = new Array();
special_values_table['gun_model']['gun_rifle'] = 'Assault Rifle C-01r';
special_values_table['gun_model']['gun_rifle_b'] = "Assault Rifle C-01r (Red)";
special_values_table['gun_model']['gun_pistol'] = 'Pistol C-01p';
special_values_table['gun_model']['gun_pistol_b'] = "Pistol C-01p (Red)";
special_values_table['gun_model']['gun_pistol2'] = 'Pistol CS-Pro';
special_values_table['gun_model']['gun_vehgun'] = "Vehicle Rocket Launcher (Corvette)";
special_values_table['gun_model']['gun_gl'] = 'Grenade Launcher CS-SpamThemBaby';
special_values_table['gun_model']['gun_rl'] = 'Rocket Launcher CS-LitBro';
special_values_table['gun_model']['gun_railgun'] = 'Lite Railgun v01 CS-HShot';
special_values_table['gun_model']['gun_railgun2'] = 'Heavy Railgun v04 CS-OneSOneK';
special_values_table['gun_model']['gun_shotgun'] = 'Shotgun C-01s';
special_values_table['gun_model']['gun_shotgun_b'] = "Shotgun C-01s (Blue)";
special_values_table['gun_model']['gun_apistol'] = 'Alien Pistol';
special_values_table['gun_model']['gun_arifle'] = 'Alien Rifle';
special_values_table['gun_model']['gun_arifle2'] = 'Alien Shotgun';
special_values_table['gun_model']['gun_vehcannon'] = 'Vehicle Cannon (Hound Walker-CS)';
special_values_table['gun_model']['gun_defibrillator'] = 'Defibrillator';
special_values_table['gun_model']['gun_bfg'] = 'CS-BNG';
special_values_table['gun_model']['gun_raygun'] = 'Ray Gun C-01y';
special_values_table['gun_model']['gun_rayrifle'] = 'Ray Rifle TCoRR';
special_values_table['gun_model']['gun_vehminigun'] = "Vehicle Minigun (Drone)";
special_values_table['gun_model']['gun_vehminigl'] = "Vehicle Grenade Launcher (Drone)";
special_values_table['gun_model']['gun_real_shotgun'] = 'Shotgun CS-DAZ';
special_values_table['gun_model']['gun_real_rifle'] = 'Assault Rifle CS-RC';
special_values_table['gun_model']['gun_oicw'] = "Combat Rifle CS-OICW";
special_values_table['gun_model']['gun_plasmagun'] = 'Plasmagun CS-Bloom';
special_values_table['gun_model']['gun_minigun'] = 'Minigun C-02m';
special_values_table['gun_model']['gun_vgun'] = "Drone Gun CS-Virus";
special_values_table['gun_model']['gun_sniper'] = 'Sniper Rifle CS-YippeeKiYay';
special_values_table['gun_model']['item_grenade'] = "Grenade C-00n";
special_values_table['gun_model']['item_port'] = "Teleport Grenade v03 CS-PortNade";
special_values_table['gun_model']['item_shield'] = "Portable Shield v07 CS-Quarium";
special_values_table['gun_model']['gun_sp_sh'] = "Portable Shield v07 CS-Quarium (as weapon slot 7)";
special_values_table['gun_model']['gun_glock'] = "Glock (unfinished weapon)";
special_values_table['gun_model']['gun_m4a1'] = "M4A1 (unfinished weapon)";
special_values_table['gun_model']['gun_pixel_rifle'] = "Star Defender Rifle";
special_values_table['gun_model']['gun_pixel_rl'] = "Star Defender Rocket Launcher";
special_values_table['gun_model']['darkstar_1_assault_rifle'] = "CP-Assault Rifle by darkstar 1";
special_values_table['gun_model']['darkstar_1_gauss_rifle'] = "CS-GaussRifle by darkstar 1";
special_values_table['gun_model']['darkstar_1_minigun'] = "Light Machine Gun CS-LMG by darkstar 1";
special_values_table['gun_model']['darkstar_1_phanx_rifle'] = "PHANX-92 Falconet by darkstar 1";
special_values_table['gun_model']['darkstar_1_usniper'] = "Alien Sniper Rifle by darkstar 1";
special_values_table['gun_model']['lostmydollar_av135'] = "Assault Rifle AV-135 by lostmydollar";
special_values_table['gun_model']['lostmydollar_needle'] = "Needle by lostmydollar";
special_values_table['gun_model']['lostmydollar_qccv50'] = "QCcV-50 Little Bastard by lostmydollar";
special_values_table['gun_model']['lostmydollar_rmk36'] = "RMK-36 by lostmydollar";
special_values_table['gun_model']['lostmydollar_rpg'] = "RPG by lostmydollar";
special_values_table['gun_model']['lazyrain_alien_laser_rifle'] = "Alien Laser Rifle by LazyRain";
special_values_table['gun_model']['lazyrain_alien_laser_rifle2'] = "Alien Heater Rifle by LazyRain";
special_values_table['gun_model']['lazyrain_cannon'] = "CS-Autocannon by LazyRain (for vehicles)";
special_values_table['gun_model']['lazyrain_cannon2'] = "CS-Autocannon by LazyRain (smaller, hand-held)";
special_values_table['gun_model']['moonhawk_phantom'] = "Crossfire CR-45 Phantom by Moonhawk";
special_values_table['gun_model']['moonhawk_phantom2'] = "Crossfire CR-45 Phantom (dark version) by Moonhawk";
special_values_table['gun_model']['moonhawk_smg'] = "Crossfire CR-42 Ghost by Moonhawk";
special_values_table['gun_model']['ditzy_energy_rifle'] = "Energy Rifle by Ditzy";
special_values_table['gun_model']['roxxar_marksman_rifle'] = "Falkonian Marksman Rifle by Roxxar";
special_values_table['gun_model']['roxxar_pistol'] = "Falkonian Pistol by Roxxar";
special_values_table['gun_model']['roxxar_rifle'] = "Falkonian Shotgun by Roxxar";
special_values_table['gun_model']['roxxar_shotgun'] = "Falkonian Grenade Launcher by Roxxar";
special_values_table['gun_model']['moonhawk_crossfire'] = "Crossfire CR-145 Vortex by Moonhawk";
special_values_table['gun_model']['lazyrain_psi_cutter'] = "Falkonian PSI Cutter by LazyRain";
special_values_table['gun_model']['mrjaksnes_android_sniper'] = "Android Sniper Rifle by Mr jaks nes";
special_values_table['gun_model']['incompetence_cr30'] = "OEDA CR-30 Rifle by Incompetence";
special_values_table['gun_model']['darkstar_1_cs_ragequit'] = "Heavy Sniper Rifle RQ-10 by darkstar 1";
special_values_table['gun_model']['gun_fttp_vehgun'] = "PB:FTTP Vehicle Cannon";
special_values_table['gun_model']['thetoppestkek_shotgun_nxs25'] = "Shotgun NXS-25 by thetoppestkek";
special_values_table['gun_model']['incompetence_archetype_27xx'] = "Archetype 27XX by Incompetence";
special_values_table['gun_model']['phsc_aug'] = "Marksman Rifle CS-RM by phsc";
special_values_table['gun_model']['moonhawk_railgun'] = "Crossfire CR-34 Marauder (bright) by Moonhawk";
special_values_table['gun_model']['moonhawk_railgun2'] = "Crossfire CR-34 Marauder (dark) by Moonhawk";
special_values_table['gun_model']['lazyrain_heal_pistol'] = "Medic Pistol by LazyRain";
special_values_table['gun_model']['incompetence_glhf'] = "Grenade Launcher CS-GLHF by Incompetence";
special_values_table['gun_model']['incompetence_glhf2'] = "OEDA EA-109H Launcher by Incompetence";
special_values_table['gun_model']['lazyrain_gravy_rl'] = "Falkonian Anti-Gravity Rocket Launcher (yellow) by LazyRain";
special_values_table['gun_model']['lazyrain_gravy_rl2'] = "Falkonian Anti-Gravity Rocket Launcher (red) by LazyRain";
special_values_table['gun_model']['darkstar_1_owo_rl'] = "Rocket Launcher CS-Barrage by darkstar 1";
special_values_table['gun_model']['phsc_plasma_shotgun'] = "Plasma Shotgun by phsc";
special_values_table['gun_model']['phsc_android_shotgun'] = "Android Shotgun by phsc";
special_values_table['gun_model']['ditzy_cs_ik'] = "Assault Rifle CS-IK by Ditzy";
special_values_table['gun_model']['ditzy_cs_ik2'] = "Assault Rifle NXR-17C by Ditzy";
special_values_table['gun_model']['phsc_ph01'] = "Crossfire CR-54 Viper by phsc";
special_values_table['gun_model']['phsc_ph01b'] = "Crossfire CR-54 Viper (version 2) by phsc";
special_values_table['gun_model']['darkstar_1_railgun'] = "PHANX-230 Cobra by darkstar 1";
special_values_table['gun_model']['darkstar_1_railgun2'] = "Eos Toxic Railgun by darkstar 1";
special_values_table['gun_model']['darkstar_1_alien_rail_sg'] = "Alien Rail Shotgun by darkstar 1";
special_values_table['gun_model']['darkstar_1_nade_c9'] = "Grenade Launcher C-00t by darkstar 1";
special_values_table['gun_model']['darkstar_1_nade_c9b'] = "Grenade Launcher C-00t (red) by darkstar 1";
special_values_table['gun_model']['darkstar_1_rl'] = "Eos Rocket Launcher by darkstar 1";
special_values_table['gun_model']['darkstar_1_bison'] = "PHANX-150 Bison by darkstar 1";
special_values_table['gun_model']['darkstar_1_auto_sg'] = "Eos Auto Shotgun by darkstar 1";
special_values_table['gun_model']['ditzy_focus_beam'] = "Reakhohsha Focus Beam by Ditzy";
special_values_table['gun_model']['boom5_revolver'] = "Revolver MK1 by boom5";
special_values_table['gun_model']['thetoppestkek_scavenger_sg'] = "Scavenger Shotgun by thetoppestkek";
special_values_table['gun_model']['lazyrain_acid_gl'] = "Alien Acid Grenade Launcher by LazyRain";
special_values_table['gun_model']['lazyrain_plasma_smg'] = "Alien Plasma Pistol (white) by LazyRain";
special_values_table['gun_model']['lazyrain_plasma_smg2'] = "Alien Plasma Pistol (yellow) by LazyRain";
special_values_table['gun_model']['roxxar_android_railgun'] = "Android Railgun by Roxxar";
special_values_table['gun_model']['gun_invisgun'] = "Invisible gun";
special_values_table['gun_model']['gun_sharkgun'] = "Shark (does nothing)";
special_values_table['barrel_model'] = new Array();
special_values_table['barrel_model']['bar_orange'] = "Orange (78 dmg)";
special_values_table['barrel_model']['bar_blue'] = "Blue (117 dmg)";
special_values_table['barrel_model']['bar_red'] = "Red (156 dmg)";
special_values_table['vehicle_model'] = new Array();
special_values_table['vehicle_model']['veh_jeep'] = "Mobile r081-CS";
special_values_table['vehicle_model']['veh_walker'] = "Hound Walker-CS";
special_values_table['vehicle_model']['veh_capsule'] = "Life-Capsule";
special_values_table['vehicle_model']['veh_crate'] = "Crate";
special_values_table['vehicle_model']['veh_drone'] = "Drone";
special_values_table['vehicle_model']['veh_rope'] = "Rope";
special_values_table['vehicle_model']['veh_corvette'] = "Corvette";
special_values_table['box_model'] = new Array();
special_values_table['box_model'][-1] = "Black";
special_values_table['box_model'][0] = "Concrete";
special_values_table['box_model'][1] = "Grass";
special_values_table['box_model'][2] = "Sand";
special_values_table['box_model'][3] = "Brown concrete";
special_values_table['box_model'][4] = "Dark plate";
special_values_table['box_model'][5] = "Dry grass";
special_values_table['box_model'][6] = "Dark grass";
special_values_table['box_model'][7] = "Clean dark plate";
special_values_table['box_model'][8] = "Bright plate";
special_values_table['box_model'][9] = "Clean bright plate";
special_values_table['box_model'][10] = "Usurpation plate";
special_values_table['box_model'][11] = "Stripes";
special_values_table['box_model'][12] = "Asphalt";
special_values_table['box_model'][13] = "White concrete";
special_values_table['box_model'][14] = "PB:FTTP-like concrete";
special_values_table['box_model'][15] = "Wet sand";
special_values_table['box_model'][16] = "Mud";
special_values_table['box_model'][17] = "Usurpation tiles";
special_values_table['box_model'][18] = "Stone bricks";
special_values_table['box_model'][19] = "Wood";
special_values_table['box_model'][20] = "Rocks";
for (i in special_values_table['box_model']) {
    special_values_table['box_model'][i] = '<img src='+PIC_PHP_SOURCE+'/boxes/'+i+'.png border=0 width=16 height=16 style=vertical-align:-4px title=\'' + special_values_table['box_model'][i] + '\'> ' + special_values_table['box_model'][i];
}
special_values_table['draw_in_front'] = [];
special_values_table['draw_in_front'][0] = 'No';
special_values_table['draw_in_front'][1] = 'Yes';
special_values_table['draw_in_front'][2] = 'Yes and glow (decorations only)';
special_values_table['bg_model'] = new Array();
ServerRequest('a=get_images&for_class=' + 'bg_model' + '&update_const=' + 'all', 'request_consts');
special_values_table['bg_model'][-1] = "Shadow only";
special_values_table['bg_model'][0] = "Basic";
special_values_table['bg_model'][1] = "Ground";
special_values_table['bg_model'][2] = "Usurpation";
special_values_table['bg_model'][3] = "White";
special_values_table['bg_model'][4] = "Elevator path";
special_values_table['bg_model'][5] = "Impure canal";
special_values_table['bg_model'][6] = "Red";
special_values_table['bg_model'][7] = "Green";
special_values_table['bg_model'][8] = "Blue";
special_values_table['bg_model'][9] = "Damned";
special_values_table['bg_model'][10] = "Panel default";
special_values_table['bg_model'][11] = "Panel bright";
special_values_table['bg_model'][12] = "Panel dark";
special_values_table['bg_model'][13] = "Rocks";
special_values_table['bg_model'][14] = "Pixel wall";
special_values_table['bg_model'][15] = "Pixel background";
special_values_table['bg_model'][16] = "Pixel open door";
special_values_table['bg_model_native'] = special_values_table['bg_model'];
for (i in special_values_table['bg_model_native']) {
   special_values_table['bg_model_native'][i] = '<img src=/static/bg/'+i+'.jpg border=0 width=16 height=16 style=vertical-align:-4px title=\'' + special_values_table['bg_model_native'][i] + '\'> ' + special_values_table['bg_model_native'][i];
}
special_values_table['gun_upgrade'] = new Array();
special_values_table['gun_upgrade'][0] = "No upgrades";
special_values_table['gun_upgrade'][1] = "Upgrade level 1";
special_values_table['gun_upgrade'][2] = "Upgrade level 2";
special_values_table['gun_upgrade'][3] = "Upgrade level 3";
special_values_table['maxcalls'] = new Array();
special_values_table['maxcalls'][-1] = 'Infinite';
special_values_table['maxcalls'][1] = '1 call';
special_values_table['maxcalls']['[val]'] = '# calls';
special_values_table['region_activation'] = new Array();
special_values_table['region_activation'][0] = 'No activation';
special_values_table['region_activation'][1] = '\'\'USE\'\' key (with button)';
special_values_table['region_activation'][2] = 'Character not in vehicle';
special_values_table['region_activation'][3] = 'Character in a vehicle';
special_values_table['region_activation'][4] = 'Character';
special_values_table['region_activation'][5] = 'By movable';
special_values_table['region_activation'][6] = 'Player';
special_values_table['region_activation'][7] = 'Containing all Singleplayer heroes';
special_values_table['region_activation'][8] = '\'\'USE\'\' key (without button)';
special_values_table['region_activation'][9] = '\'\'USE\'\' key, only Red team (with button)';
special_values_table['region_activation'][10] = '\'\'USE\'\' key, only Blue team (with button)';
special_values_table['region_activation'][11] = '\'\'USE\'\' key, only Red team (without button)';
special_values_table['region_activation'][12] = '\'\'USE\'\' key, only Blue team (without button)';
special_values_table['region_activation'][13] = 'Red team Player';
special_values_table['region_activation'][14] = 'Blue team Player';
special_values_table['region_activation'][15] = '\'\'USE\'\' key (without button, without sound)';
special_values_table['region_activation'][16] = '\'\'USE\'\' key (without sound)';
special_values_table['region_activation'][17] = 'Actor';
special_values_table['region_activation'][18] = 'Bullet';
special_values_table['trigger+none'] = new Array();
special_values_table['trigger+none'][-1] = '- No trigger -';
special_values_table['trigger+none']['[listof]'] = 'trigger';

if (rendermode === RENDER_MODE_GL) {
    for (i in special_values_table['char']) {
        var leading = i + '';
        while (leading.length < 4) leading = '0' + leading;
        let src = '/static/chars_full/char' + leading + '.png';
        img_chars_full[i] = [null, 0, 0, 0];
        glLoadTexture(img_chars_full[i], src);
        special_values_table['char'][i] = '<span style=\'background:url(' + src + '); width: 16px; height: 16px; display: inline-block; background-position: center; background-position-x: 30%; background-position-y: 26%; background-size: 67px;vertical-align: -4px;\'></span> ' + special_values_table['char'][i];
    }
    for (i in special_values_table['decor_model']) {
        CACHED_DECORS[i] = [null, /*GLF_TEX_NATIVE*/, 0, 0];
        glLoadTexture(CACHED_DECORS[i], PIC_PHP_SOURCE + '/decors/' + i + '.png');
    }
    for (i in special_values_table['gun_model']) {
        special_values_table['gun_model'][i] = '<img src='+PIC_PHP_SOURCE+'/guns/'+i+'.png border=0 width=80 height=20 style=vertical-align:baseline title=\'' + special_values_table['gun_model'][i] + '\'>';
        img_guns[i] = [null, 0, 0, 0];
        glLoadTexture(img_guns[i], PIC_PHP_SOURCE + '/guns/' + i + '.png');
    }
    for (i in special_values_table['barrel_model']) {
        special_values_table['barrel_model'][i] = '<img src='+PIC_PHP_SOURCE+'/barrels/'+i+'.png border=0 width=10 height=16 style=vertical-align:middle title=\'' + special_values_table['barrel_model'][i] + '\'> ' + special_values_table['barrel_model'][i];
        img_barrels[i] = [null, 0, 0, 0];
        glLoadTexture(img_barrels[i], PIC_PHP_SOURCE + '/barrels/' + i + '.png');
    }
    for (i in special_values_table['vehicle_model']) {
        special_values_table['vehicle_model'][i] = '<img src='+PIC_PHP_SOURCE+'/vehicle_previews/'+i+'.png border=0 height=12 style=vertical-align:middle title=\'' + special_values_table['vehicle_model'][i] + '\'> ' + special_values_table['vehicle_model'][i];
        img_vehicles[i] = [null, 0, 0, 0];
        glLoadTexture(img_vehicles[i], PIC_PHP_SOURCE + '/vehicles/' + i + '.png');
    }
    for (var i = -1; i <= 16; i++) {
        CACHED_BGS[i] = [null, GLF_TEX_NATIVE, 0, 0];
        glLoadTexture(CACHED_BGS[i], '/static/bg/' + i + '.jpg');
    }
    for (var i = 1; i <= 18; i++) {
        CACHED_SKY[i] = [null, GLF_TEX_NATIVE, 0, 0];
        glLoadTexture(CACHED_SKY[i], '/static/sky/' + i + '.jpg');
    }
}
if (rendermode === RENDER_MODE_2D) {
    for (i in special_values_table['char']) {
        img_chars_full[i] = new Image();
        let leading = i + '';
        while (leading.length < 4) leading = '0' + leading;
        img_chars_full[i].src = '/static/chars_full/char' + leading + '.png';
        special_values_table['char'][i] = '<span style=\'background:url(' + img_chars_full[i].src + '); width: 16px; height: 16px; display: inline-block; background-position: center; background-position-x: 30%; background-position-y: 26%; background-size: 67px;vertical-align: -4px;\'></span> ' + special_values_table['char'][i];
    }
    for (i in special_values_table['decor_model']) {
        let img = new Image();
        img.src = PIC_PHP_SOURCE + '/decors/' + i + '.png';
        img.native = true;
        img.loaded = false;
        img.onload = function() {
            img.loaded = true;
        };
        img_decors[i] = img;
        CACHED_DECORS[i] = img;
    }
    for (i in special_values_table['gun_model']) {
        special_values_table['gun_model'][i] = '<img src='+PIC_PHP_SOURCE+'/guns/'+i+'.png border=0 width=80 height=20 style=vertical-align:baseline title=\'' + special_values_table['gun_model'][i] + '\'>';
        img_guns[i] = new Image();
        img_guns[i].src = PIC_PHP_SOURCE + '/guns/' + i + '.png';
    }
    for (i in special_values_table['barrel_model']) {
        special_values_table['barrel_model'][i] = '<img src='+PIC_PHP_SOURCE+'/barrels/'+i+'.png border=0 width=10 height=16 style=vertical-align:middle title=\'' + special_values_table['barrel_model'][i] + '\'> ' + special_values_table['barrel_model'][i];
        img_barrels[i] = new Image();
        img_barrels[i].src = PIC_PHP_SOURCE + '/barrels/' + i + '.png';
    }
    for (i in special_values_table['vehicle_model']) {
        special_values_table['vehicle_model'][i] = '<img src='+PIC_PHP_SOURCE+'/vehicle_previews/'+i+'.png border=0 height=12 style=vertical-align:middle title=\'' + special_values_table['vehicle_model'][i] + '\'> ' + special_values_table['vehicle_model'][i];
        img_vehicles[i] = new Image();
        img_vehicles[i].src = 
            PIC_PHP_SOURCE + '/vehicles/' + i + '.png';
    }
    //loading of bg images
    for (let i = -1; i <= 16; i++) {
        let img = new Image();
        img.src = '/static/bg/' + i + '.jpg';
        img.native = true;
        img.loaded = false;
        img.onload = function() {
            img.loaded = true;
        };
        CACHED_BGS[i] = img;
    }
    //loading of sky images
    for (let i = 1; i <= 18; i++) {
        let img = new Image();
        img.src = '/static/sky/' + i + '.jpg';
        img.native = true;
        img.loaded = false;
        img.onload = function() {
            img.loaded = true;
        };
        CACHED_SKY[i] = img;
    }
}


var mark_pairs = new Array();
var rainbow = ['#5f6887', '#94a4c1', '#efefef', '#ac961b', '#ffff00', '#ffa500', '#ff214b', '#e76565', '#ef51ef', '#d988d9', '#8080ff', '#2cb3f1', '#28c28d', '#00ff00', '#6cff00', '#7fff79', '#474b54', '#ffffff', '#aaaaff', '#aaffaa', '#ffaaaa', '#ffffaa', '#aaaaaa', '#ffaaff', '#aaffff', '#777777', '#555555'];
var next_color = 0;
var tr_type_tags = new Array();
special_values_table['trigger_type'] = new Array();
var last_trigger_type_id;

special_values_table['enable-disable'] = new Array();
special_values_table['enable-disable'][1] = 'Enable';
special_values_table['enable-disable'][0] = 'Disable';
special_values_table['sound'] = new Array();
let SVTS = special_values_table["sound"];
SVTS['null'] = '- silence - (for guns only)';
SVTS['hp_warn'] = 'Battlesuit - Low health';
SVTS['hp_dead'] = 'Battlesuit - Death';
SVTS['wea_pickup'] = 'Weapon - Picked up';
SVTS['wea2'] = 'Weapon - Impact 1';
SVTS['wea1'] = 'Weapon - Impact 2';
SVTS['wea_vehminigun'] = 'Vehicle minigun (Drone)';
SVTS['wea_sniper'] = 'Sniper Rifle CS-YippeeKiYay';
SVTS['wea_shotgun_alt'] = 'Alien Shotgun';
SVTS['wea_shotgun'] = 'Shotgun C-01s';
SVTS['wea_rifle_alt'] = 'Alien Rifle';
SVTS['wea_rifle'] = 'Assault Rifle C-01r';
SVTS['wea_real_shotgun_r'] = 'Shotgun CS-DAZ - Reloading';
SVTS['wea_real_shotgun'] = 'Shotgun CS-DAZ';
SVTS['wea_real_rifle'] = 'Assault Rifle CS-RC';
SVTS['wea_rail_alt'] = 'Heavy Railgun v04 CS-OneSOneK';
SVTS['wea_pistol2'] = 'Pistol CS-Pro';
SVTS['wea_pistol'] = 'Pistol C-01p';
SVTS['wea_plasmagun'] = 'Plasmagun CS-Bloom';
SVTS['wea_mingun2'] = 'Minigun C-02m';
SVTS['wea_mingun'] = 'wea_minigun (unused)';
SVTS['wea_impulse'] = 'wea_impulse (unused)';
SVTS['wea_evil_shot'] = 'CS-BNG';
SVTS['wea_energy'] = 'Ray Gun C-01y';
SVTS['wea_defibrillator'] = 'Defibrillator';
SVTS['wea_apistol'] = 'Alien Pistol';
SVTS['water_splash3'] = 'Water splash 3';
SVTS['water_splash2'] = 'Water splash 2';
SVTS['water_splash1'] = 'Water splash 1';
SVTS['walker_step'] = 'Hound Walker-CS - Step';
SVTS['walker_phase2'] = 'Hound Walker-CS - Phase 2';
SVTS['walker_phase1'] = 'Hound Walker-CS - Phase 1';
SVTS['walker_die'] = 'Hound Walker-CS - Termination';
SVTS['wea_vehcannon'] = 'Vehicle Cannon (Hound Walker-CS)';
SVTS['usurpation_hurt'] = 'Usurpation Destroyer - Hurt';
SVTS['usurpation_dying'] = 'Usurpation Destroyer - Dying';
SVTS['usurpation_death3'] = 'Usurpation Destroyer - Death 3';
SVTS['usurpation_death2'] = 'Usurpation Destroyer - Death 2';
SVTS['usurpation_alert'] = 'Usurpation Destroyer - Alert';
SVTS['test_sound'] = 'Vehicle Rocket Launcher (Corvette) - Reloading';
SVTS['teleport_spawn'] = 'Teleport';
SVTS['team_switch'] = 'Hero change';
SVTS['t_switch2'] = 'Panel Board - Activation';
SVTS['t_switch1'] = 'Panel Board - Activation 2 (unused)';
SVTS['t_switch_denied'] = 'Panel Board - Denied';
SVTS['t_door1_stop'] = 'Movable - Start';
SVTS['t_door1_start'] = 'Movable - Stop';
SVTS['step4'] = 'Footstep 4';
SVTS['step3'] = 'Footstep 3';
SVTS['step2'] = 'Footstep 2';
SVTS['step1'] = 'Footstep 1';
SVTS['steel_med'] = 'Vehicle collision - Medium';
SVTS['steel_low'] = 'Vehicle collision - Low';
SVTS['steel_hor'] = 'Vehicle collision - Friction';
SVTS['steel_hard'] = 'Vehicle collision - Hard';
SVTS['slow_up'] = 'Battlesuit - Slowmotion disabled';
SVTS['slow_down'] = 'Battlesuit - Slowmotion enabled';
SVTS['slicer_die'] = 'Civil Security Ghost - Death';
SVTS['slicer_alert'] = 'Civil Security Ghost - Alert';
SVTS['shnade_offline'] = 'Portable Shield v07 CS-Quarium - Explosion';
SVTS['shnade_hit_low'] = 'Portable Shield v07 CS-Quarium - Hit low';
SVTS['shnade_hit'] = 'Portable Shield v07 CS-Quarium - Hit hard';
SVTS['shnade_explode'] = 'Portable Shield v07 CS-Quarium - Activation';
SVTS['shnade_act'] = 'Portable Shield v07 CS-Quarium - Blip';
SVTS['ship_incoming'] = 'Ship - Income';
SVTS['ship_explosion'] = 'Ship - Explosion';
SVTS['reload'] = 'Lite Railgun v01 CS-HShot - Reload';
SVTS['wea_rocket_launch'] = 'Rocket Launcher CS-LitBro';
SVTS['robo_step4'] = 'Robotic footstep 4';
SVTS['robo_step3'] = 'Robotic footstep 3';
SVTS['robo_step2'] = 'Robotic footstep 2';
SVTS['robo_step1'] = 'Robotic footstep 1';
SVTS['robo_bug_launch'] = 'Drone Gun CS-Virus - Shot';
SVTS['robo_bug_jump'] = 'Drone Gun CS-Virus - Jump';
SVTS['robo_bug_hit'] = 'Drone Gun CS-Virus - Hit';
SVTS['rl_reload'] = 'Rocket Launcher CS-LitBro - Reload';
SVTS['wea_railgun'] = 'Lite Railgun v01 CS-HShot';
SVTS['portnade_explode'] = 'Teleport Grenade v03 CS-PortNade - Detonation';
SVTS['portnade_act2'] = 'Teleport Grenade v03 CS-PortNade - Blip';
SVTS['plasma_explosion'] = 'Plasma explosion';
SVTS['noir_hurt2'] = 'Noir Lime - Hurt 2';
SVTS['noir_hurt1'] = 'Noir Lime - Hurt 1';
SVTS['noir_die'] = 'Noir Lime - Death';
SVTS['nade_throw'] = 'Nade throw';
SVTS['mission_done'] = 'Mission complete';
SVTS['metal_ver3'] = 'Metal - Hard';
SVTS['metal_ver2'] = 'Metal - Medium';
SVTS['metal_ver1'] = 'Metal - Low';
SVTS['metal_hor'] = 'Metal - Friction';
SVTS['metal_hit'] = 'Metal - Hit';
SVTS['metal_gib'] = 'Metal - Destruction';
SVTS['last_teleport'] = 'Last teleport';
SVTS['s_info_off'] = 'Menu button - onMouseDown';
SVTS['s_info_act'] = 'Menu button - onClick';
SVTS['s_info'] = 'Menu button - onMouseOver';
SVTS['hint_disappear'] = 'Hint - Disappear';
SVTS['hint_appear'] = 'Hint - Appear';
SVTS['wea_gl'] = 'Grenade Launcher CS-SpamThemBaby';
SVTS['grenade_act'] = 'Grenade C-00n - Blip';
SVTS['grenade'] = 'Grenade bounce';
SVTS['glass2'] = 'Barrel - Hit 1';
SVTS['glass1'] = 'Barrel - Hit 2';
SVTS['g_death1'] = 'Cyber Grub - Death 1';
SVTS['g_death2'] = 'Cyber Grub - Death 2';
SVTS['g_death3'] = 'Cyber Grub - Death 3';
SVTS['g_pain1'] = 'Cyber Grub - Hurt 1';
SVTS['g_pain2'] = 'Cyber Grub - Hurt 2';
SVTS['g_pain3'] = 'Cyber Grub - Hurt 3';
SVTS['g_welcome1'] = 'Cyber Grub - Alert';
SVTS['fp_welcome1'] = 'Phoenix Falkok - Alert';
SVTS['fp_pain4'] = 'Phoenix Falkok - Hurt 4';
SVTS['fp_pain3'] = 'Phoenix Falkok - Hurt 3';
SVTS['fp_pain2'] = 'Phoenix Falkok - Hurt 2';
SVTS['fp_death3'] = 'Phoenix Falkok - Death 3';
SVTS['fp_death2'] = 'Phoenix Falkok - Death 2';
SVTS['fp_death1'] = 'Phoenix Falkok - Death 1';
SVTS['fail_shot'] = 'Impact shot';
SVTS['f_welcome1'] = 'Falkok - Alert';
SVTS['f_pain4'] = 'Falkok - Hurt 4';
SVTS['f_pain3'] = 'Falkok - Hurt 3';
SVTS['f_pain2'] = 'Falkok - Hurt 2';
SVTS['f_death3'] = 'Falkok - Death 3';
SVTS['f_death2'] = 'Falkok - Death 2';
SVTS['f_death1'] = 'Falkok - Death 1';
SVTS['explode2'] = 'Explosion 2';
SVTS['explode1'] = 'Explosion 1';
SVTS['explode_underwater'] = 'Explosion underwater';
SVTS['enemy_hurt1'] = 'Usurpation Soldier - Hurt';
SVTS['enemy_hurt_3'] = 'Usurpation Soldier - Hurt 3';
SVTS['enemy_hurt_2'] = 'Usurpation Soldier - Hurt 2';
SVTS['enemy_hurt_1'] = 'Usurpation Soldier - Hurt 1';
SVTS['enemy_die1'] = 'Usurpation Soldier - Death';
SVTS['enemy_die_4'] = 'Usurpation Soldier - Death 4';
SVTS['enemy_die_3'] = 'Usurpation Soldier - Death 3';
SVTS['enemy_die_2'] = 'Usurpation Soldier - Death 2';
SVTS['enemy_die_1'] = 'Usurpation Soldier - Death 1';
SVTS['enemy_alert'] = 'Usurpation Soldier - Alert';
SVTS['drone_hurt'] = 'Drone - Hurt';
SVTS['drone_die'] = 'Drone - Death';
SVTS['corvett_die'] = 'Corvette - Death';
SVTS['coolbuddy2'] = 'Coolbuddy logo';
SVTS['chat'] = 'Chat message';
SVTS['capsule_hit2'] = 'Life-Capsule - Hit 2';
SVTS['capsule_hit1'] = 'Life-Capsule - Hit 1';
SVTS['box_ver3'] = 'Crate - Hard';
SVTS['box_ver2'] = 'Crate - Medium';
SVTS['box_ver1'] = 'Crate - Low';
SVTS['box_hor'] = 'Crate - Friction';
SVTS['box_die'] = 'Crate - Destruction';
SVTS['body3'] = 'Body - Hard';
SVTS['body2'] = 'Body - Medium';
SVTS['body1'] = 'Body - Low';
SVTS['body0'] = 'Body - Friction';
SVTS['body_fall'] = 'Body - Fall';
SVTS['blood_leg_arm'] = 'Body - Limb broke';
SVTS['blood_hit_sword'] = 'Body - Hit sword';
SVTS['blood_hit'] = 'Body - Hit';
SVTS['blood_head2'] = 'Body - Head broke 2';
SVTS['blood_head'] = 'Body - Head broke 1';
SVTS['blood_body2'] = 'Body - Spine broke 2';
SVTS['blood_body'] = 'Body - Spine broke 1';
SVTS['sou_blade_swing3'] = 'Swords swing 3';
SVTS['sou_blade_swing2'] = 'Swords swing 2';
SVTS['sou_blade_swing1'] = 'Swords swing 1';
SVTS['explode_bfg'] = 'CS-BNG - Explosion';
SVTS['barrel2'] = 'Barrel - Explosion 2';
SVTS['barrel'] = 'Barrel - Explosion 1';
SVTS['badge_earned'] = 'Achievement';
SVTS['android_welcome3'] = 'Android - Alert 3';
SVTS['android_welcome2'] = 'Android - Alert 2';
SVTS['android_welcome1'] = 'Android - Alert 1';
SVTS['android_welcome'] = 'Android - Alert';
SVTS['android_hurt'] = 'Android - Hurt';
SVTS['android_enemy_down1'] = 'Android - Celebrate';
SVTS['android_die_1'] = 'Android - Death 1';
SVTS['android_die'] = 'Android - Death';
SVTS['silenced'] = 'Silencer shot';
SVTS['charged_explosion'] = 'Charged shot';
SVTS['hero_death1'] = 'Marine - Death 1';
SVTS['hero_death2'] = 'Marine - Death 2';
SVTS['hero_pain1'] = 'Marine - Hurt 1';
SVTS['hero_pain2'] = 'Marine - Hurt 2';
SVTS['hero_pain3'] = 'Marine - Hurt 3';
SVTS['hero_pain4'] = 'Marine - Hurt 4';
SVTS['hero_welcome1'] = 'Marine - Alert 1';
SVTS['hero_welcome2'] = 'Marine - Alert 2';
SVTS['hero_welcome3'] = 'Marine - Alert 3';
SVTS['marine_death1'] = 'Civil Security - Death 1';
SVTS['marine_death2'] = 'Civil Security - Death 2';
SVTS['marine_death3'] = 'Civil Security - Death 3';
SVTS['marine_dying'] = 'Civil Security - Dying';
SVTS['marine_hurt1'] = 'Civil Security - Hurt 1';
SVTS['marine_hurt2'] = 'Civil Security - Hurt 2';
SVTS['marine_hurt3'] = 'Civil Security - Hurt 3';
SVTS['marine_alert'] = 'Civil Security - Alert 1';
SVTS['marine_alert2'] = 'Civil Security - Alert 2';
SVTS['marine_alert3'] = 'Civil Security - Alert 3';
SVTS['marine_alert4'] = 'Civil Security - Alert 4';
SVTS['s_gun_rayrifle'] = 'Ray Rifle TCoRR';
SVTS['wea_lmg'] = 'LMG';
SVTS['wea_ditzy_cs_ik2'] = 'Real rifle alt';
SVTS['wea_android_shotgun'] = 'Android shotgun';
SVTS['wea_android_sniper'] = 'Android sniper';
SVTS['sd_death'] = 'Star Defender - Death';
SVTS['sd_welcome2'] = 'Star Defender - Alert';
SVTS['sd_hurt2'] = 'Star Defender - Hurt 2';
SVTS['sd_hurt1'] = 'Star Defender - Hurt 1';
SVTS['hit_frag'] = 'Hit report - frag';
SVTS['hit_dmg3'] = 'Hit report - high';
SVTS['hit_dmg2'] = 'Hit report - medium';
SVTS['hit_dmg'] = 'Hit report - low';
SVTS['wea_plasma_smg'] = 'Plasma shotgun';
SVTS['wea_android_railgun'] = 'Android railgun';
SVTS['wea_bison'] = 'Bison rifle';
SVTS['wea_rifle_nade'] = 'C9 impact nade';
SVTS['grenade_wet'] = 'Acid grenade bounce';
SVTS['wea_acid_gl3'] = 'Acid grenade launcher';
SVTS['wea_revolver5'] = 'Revolver';
SVTS['wea_alien_rail_sg'] = 'Alien rail shotgun';
SVTS['wea_darkstar_rl3'] = 'Smaller rocket';
SVTS['wea_auto_sg2'] = 'Fast shotgun';
SVTS['wea_rail_toxic2'] = 'Toxic railgun';
SVTS['wea_ditzy_energy_rifle'] = 'Energy Rifle';
SVTS['wea_roxxar_rifle'] = 'Falkonian Shotgun';
SVTS['beam5_recharge'] = 'Reakhohsha Focus Beam recharge (old)';
SVTS['beam5_rechargeB'] = 'Reakhohsha Focus Beam recharge (new)';
SVTS['beam5'] = 'Reakhohsha Focus Beam';
SVTS['beam1_recharge'] = 'Alien Laser/Heater Rifle recharge (old)';
SVTS['beam1_rechargeB'] = 'Alien Laser/Heater Rifle recharge (new)';
SVTS['beam1'] = 'Alien Laser/Heater Rifle';
SVTS['wea_phanx'] = 'PHANX-92 Falconet';
SVTS['wea_moonhawk_smg2'] = 'Crossfire CR-42 Ghost';
SVTS['crossfire_sentinel_hurt3'] = 'Crossfire Sentinel - Hurt 3';
SVTS['crossfire_sentinel_hurt2'] = 'Crossfire Sentinel - Hurt 2';
SVTS['crossfire_sentinel_hurt1'] = 'Crossfire Sentinel - Hurt 1';
SVTS['crossfire_sentinel_celebrate1'] = 'Crossfire Sentinel - Celebrate 1';
SVTS['crossfire_sentinel_celebrate2'] = 'Crossfire Sentinel - Celebrate 2';
SVTS['crossfire_sentinel_death2'] = 'Crossfire Sentinel - Death 2';
SVTS['crossfire_sentinel_death1'] = 'Crossfire Sentinel - Death 1';
SVTS['crossfire_sentinel_dying'] = 'Crossfire Sentinel - Dying';
SVTS['crossfire_sentinel_welcome3'] = 'Crossfire Sentinel - Alert 3';
SVTS['crossfire_sentinel_welcome2'] = 'Crossfire Sentinel - Alert 2';
SVTS['crossfire_sentinel_welcome1'] = 'Crossfire Sentinel - Alert 1';
SVTS['crossfire_sentinel_death3'] = 'Crossfire Sentinel - Death';
SVTS['vulture_death2'] = 'Vulture - Death 2';
SVTS['vulture_death1'] = 'Vulture - Death 1';
SVTS['vulture_dying'] = 'Vulture - Dying';
SVTS['vulture_hurt4'] = 'Vulture - Hurt 4';
SVTS['vulture_hurt3'] = 'Vulture - Hurt 3';
SVTS['vulture_hurt2'] = 'Vulture - Hurt 2';
SVTS['vulture_hurt1'] = 'Vulture - Hurt 1';
SVTS['vulture_celebrate3'] = 'Vulture - Celebrate 3';
SVTS['vulture_celebrate2'] = 'Vulture - Celebrate 2';
SVTS['vulture_celebrate1'] = 'Vulture - Celebrate 1';
SVTS['vulture_welcome3'] = 'Vulture - Alert 3';
SVTS['vulture_welcome2'] = 'Vulture - Alert 2';
SVTS['vulture_welcome1'] = 'Vulture - Alert 1';
SVTS['civilian_male_hurt4'] = 'Civilian - Hurt 4';
SVTS['civilian_male_hurt3'] = 'Civilian - Hurt 3';
SVTS['civilian_male_hurt2'] = 'Civilian - Hurt 2';
SVTS['civilian_male_hurt1'] = 'Civilian - Hurt 1';
SVTS['civilian_male_dying2'] = 'Civilian - Dying 2';
SVTS['civilian_male_dying1'] = 'Civilian - Dying 1';
SVTS['civilian_male_welcome3'] = 'Civilian - Alert 3';
SVTS['civilian_male_welcome2'] = 'Civilian - Alert 2';
SVTS['civilian_male_welcome1'] = 'Civilian - Alert 1';
SVTS['civilian_male_celebrate2'] = 'Civilian - Celebrate 2';
SVTS['civilian_male_celebrate1'] = 'Civilian - Celebrate 1';
SVTS['civilian_male_death2'] = 'Civilian - Death 2';
SVTS['civilian_male_death1'] = 'Civilian - Death 1';
SVTS['reakhohsha_welcome1'] = 'Reakhohsha Operative - Alert 1';
SVTS['reakhohsha_welcome2'] = 'Reakhohsha Operative - Alert 2';
SVTS['reakhohsha_death3'] = 'Reakhohsha Operative - Death';
SVTS['reakhohsha_hurt3'] = 'Reakhohsha Operative - Hurt 3';
SVTS['reakhohsha_hurt2'] = 'Reakhohsha Operative - Hurt 2';
SVTS['reakhohsha_hurt1'] = 'Reakhohsha Operative - Hurt 1';
SVTS['android_miner_hurt'] = 'Mining Android - Hurt';
SVTS['android_miner_welcome2'] = 'Mining Android - Alert';
SVTS['android_miner_enemy_down'] = 'Mining Android - Celebrate';
SVTS['android_miner_die'] = 'Mining Android - Death';
SVTS['am_base'] = 'Indoor Ambience';
SVTS['am_wind'] = 'Outdoor Ambience';
SVTS['android2_die'] = 'DT-148 - Death';
SVTS['android2_hurt'] = 'DT-148 - Hurt';
SVTS['android2_welcome2'] = 'DT-148 - Alerted';
/*SVTS['arrin_death1'] = 'Arrin - Death';
SVTS['arrin_dying'] = 'Arrin - Dying';
SVTS['arrin_hurt1'] = 'Arrin - Hurt 1';
SVTS['arrin_hurt2'] = 'Arrin - Hurt 2';
SVTS['arrin_welcome1'] = 'Arrin - Alerted 1';
SVTS['arrin_welcome2'] = 'Arrin - Alerted 2';
SVTS['arrin_welcome3'] = 'Arrin - Alerted 3';
*/
SVTS['bounce_bullet'] = 'Falkonian PSI Cutter - Shot Bounce';
SVTS['dart4'] = 'Medic Pistol';
SVTS['exp_event_stop'] = 'EXP - Stop';
SVTS['exp_level'] = 'EXP - Level Up';
SVTS['exp_tick'] = 'EXP - Gain';
SVTS['gameplay_song'] = 'Katharsys - Erges';
SVTS['gravitator2'] = 'Floor gravitator noice';
SVTS['helm_proxy_alert_over_hereB'] = 'Proxy - Over here!';
SVTS['helm_proxy_alert_take_coverB'] = 'Proxy - Take cover!';
SVTS['helm_proxy_alert_up_thereA'] = 'Proxy - Up there!';
SVTS['helm_proxy_death3'] = 'Proxy - Death 1';
SVTS['helm_proxy_death4'] = 'Proxy - Death 2';
SVTS['helm_proxy_death5'] = 'Proxy - Death 3';
SVTS['helm_proxy_death6'] = 'Proxy - Death 4';
SVTS['helm_proxy_dyingC'] = 'Proxy - Help! 1';
SVTS['helm_proxy_dyingF'] = 'Proxy - Help! 2';
SVTS['helm_proxy_enemy_down_fantasticA'] = 'Proxy - Fantastic.';
SVTS['helm_proxy_enemy_down_got_oneD'] = 'Proxy - Got one.';
SVTS['helm_proxy_enemy_down_niceA'] = 'Proxy - Nice. 1';
SVTS['helm_proxy_enemy_down_niceC'] = 'Proxy - Nice. 2';
SVTS['helm_proxy_hurt11'] = 'Proxy - Hurt 1';
SVTS['helm_proxy_hurt12'] = 'Proxy - Hurt 2';
SVTS['helm_proxy_hurt13'] = 'Proxy - Hurt 3';
SVTS['helm_proxy_hurt14'] = 'Proxy - Hurt 4';
SVTS['helm_proxy_hurt15'] = 'Proxy - Hurt 5';
SVTS['helm_proxy_hurt17'] = 'Proxy - Hurt 6';
SVTS['helm_proxy_hurt4'] = 'Proxy - Hurt 7';
SVTS['helm_proxy_hurt5'] = 'Proxy - Hurt 8';
SVTS['helm_proxy_hurt8'] = 'Proxy - Hurt 9';
SVTS['helm_proxy_hurt9'] = 'Proxy - Hurt 10';
SVTS['hexagon_death1'] = 'Hexagon - Death 1';
SVTS['hexagon_death2'] = 'Hexagon - Death 2';
SVTS['hexagon_pain1'] = 'Hexagon - Hurt 1';
SVTS['hexagon_pain2'] = 'Hexagon - Hurt 2';
SVTS['hexagon_pain3'] = 'Hexagon - Hurt 3';
SVTS['hexagon_pain4'] = 'Hexagon - Hurt 4';
SVTS['hexagon_welcome1'] = 'Hexagon - Alerted 1';
SVTS['hexagon_welcome2'] = 'Hexagon - Alerted 2';
SVTS['hexagon_welcome3'] = 'Hexagon - Alerted 3';
SVTS['main_song'] = 'NPhonix - Antigravity';
/*SVTS['orakin_death1'] = 'Orakin - Death 1';
SVTS['orakin_death2'] = 'Orakin - Death 2';
SVTS['orakin_hurt'] = 'Orakin - Hurt';
SVTS['orakin_welcome'] = 'Orakin - Alerted';
*/
SVTS['proxy_alert_over_hereB'] = 'No Helm Proxy - Over here!';
SVTS['proxy_alert_take_coverB'] = 'No Helm Proxy - Take cover!';
SVTS['proxy_alert_up_thereA'] = 'No Helm Proxy - Up there!';
SVTS['proxy_death3'] = 'No Helm Proxy - Death 1';
SVTS['proxy_death4'] = 'No Helm Proxy - Death 2';
SVTS['proxy_death5'] = 'No Helm Proxy - Death 3';
SVTS['proxy_death6'] = 'No Helm Proxy - Death 4';
SVTS['proxy_dyingC'] = 'No Helm Proxy - Help! 1';
SVTS['proxy_dyingF'] = 'No Helm Proxy - Help! 2 ';
SVTS['proxy_enemy_down_fantasticA'] = 'No Helm Proxy - Fantastic.';
SVTS['proxy_enemy_down_got_oneD'] = 'No Helm Proxy - Got one.';
SVTS['proxy_enemy_down_niceA'] = 'No Helm Proxy - Nice. 1';
SVTS['proxy_enemy_down_niceC'] = 'No Helm Proxy - Nice. 2';
SVTS['proxy_hurt11'] = 'No Helm Proxy - Hurt 1';
SVTS['proxy_hurt12'] = 'No Helm Proxy - Hurt 2';
SVTS['proxy_hurt13'] = 'No Helm Proxy - Hurt 3';
SVTS['proxy_hurt14'] = 'No Helm Proxy - Hurt 4';
SVTS['proxy_hurt15'] = 'No Helm Proxy - Hurt 5';
SVTS['proxy_hurt17'] = 'No Helm Proxy - Hurt 6';
SVTS['proxy_hurt4'] = 'No Helm Proxy - Hurt 7';
SVTS['proxy_hurt5'] = 'No Helm Proxy - Hurt 8';
SVTS['proxy_hurt8'] = 'No Helm Proxy - Hurt 9';
SVTS['proxy_hurt9'] = 'No Helm Proxy - Hurt 10';
SVTS['silk_alert_contactA'] = 'Silk - Contact!';
SVTS['silk_alert_i_see_oneA'] = 'Silk - I see one.';
SVTS['silk_alert_there_is_oneA'] = 'Silk - There is one...!';
SVTS['silk_death1B'] = 'Silk - Death 1';
SVTS['silk_death2B'] = 'Silk - Death 2';
SVTS['silk_dyingB'] = 'Silk - Dying';
SVTS['silk_enemy_down_brilliantC'] = 'Silk - Brilliant.';
SVTS['silk_enemy_down_eliminatedB'] = 'Silk - Eliminated.';
SVTS['silk_enemy_down_hell_yeahB'] = 'Silk - Hell yeah!';
SVTS['silk_enemy_down_ive_got_oneB'] = 'Silk - I got one!';
SVTS['silk_enemy_down_minus_oneB'] = 'Silk - -1.';
SVTS['silk_enemy_down_no_kicking_for_youB'] = 'Silk - No kicking for you.';
SVTS['silk_hurt1B'] = 'Silk - Hurt 1';
SVTS['silk_hurt2B'] = 'Silk - Hurt 2';
SVTS['silk_hurt5'] = 'Silk - Hurt 3';
SVTS['silk_hurt6'] = 'Silk - Hurt 4';
SVTS['silk_hurt9B'] = 'Silk - Hurt 5';
SVTS['wea_crossfire2'] = 'Crossfire CR-145 Vortex';
SVTS['wea_ditzy_cs_ik'] = 'Assault Rifle CS-IK';
SVTS['wea_glhf'] = 'Grenade Launcher CS-GLHF';
SVTS['wea_incompetence_archetype_27xx_fire'] = 'Archetype 27XX';
SVTS['wea_lazyrain_gravy_rl'] = 'Falkonian Anti-Grav Rocket Launcher';
SVTS['wea_m202'] = 'Rocket Launcher CS-Barrage';
SVTS['wea_moonhawk_railgun'] = 'Crossfire CR-34 Marauder';
SVTS['wea_ph01'] = 'Crossfire CR-54 Viper';
SVTS['wea_plasma_shotgun'] = 'Plasma Shotgun';
SVTS['wea_rail_alt2'] = 'Falkonian PSI Cutter';
SVTS['wea_thetoppestkek_shotgun_nxs25'] = 'Shotgun NXS-25';
/*SVTS['xin_celebrate'] = 'Xin - Celebrating';
SVTS['xin_death'] = 'Xin - Death';
SVTS['xin_enemy_spotted'] = 'Xin - Alerted';
SVTS['xin_hit'] = 'Xin - Hurt';
TODO: Add those musics to game itself
*/ 
special_values_table['textmsg'] = new Array();
special_values_table['textmsg'][0] = 'EXOS';
special_values_table['textmsg'][1] = 'Main Hero (Player\'s nickname is displayed)';
special_values_table['textmsg'][2] = 'Noir Lime';
special_values_table['textmsg'][3] = 'Proxy';
special_values_table['textmsg'][4] = 'Civil Security';
special_values_table['textmsg']['[color]'] = 'Custom color # (hex color code)';

extraActionInfos = {}; // Just map of action ID to some informations (which side it runs on FOR NOW.)

function addTrigger(trigger_type_id, description, paramA, paramB, side) {
    last_trigger_type_id = trigger_type_id;
    var parts = description.split(' &#8250; ');
	if(parts[0] == "Water") {
		tr_type_tags[parts[0]] = '#00aaff';
	}
    if (parts.length > 1) {
        if (tr_type_tags[parts[0]] == undefined) {
            // if (rainbow[next_color] == undefined) console.log('Out of trigger category colors: ' + next_color);
            tr_type_tags[parts[0]] = rainbow[next_color];
            next_color++;
        }
        parts[0] = '<span style=color:' + tr_type_tags[parts[0]] + '>' + parts[0] + '</span>';
        description = parts.join(' <span style=color:rgba(255,255,255,0.4)>&#8250;</span> ');
    }
    if (side == undefined) {
        side = "client";
    }
    extraActionInfos[trigger_type_id] = {
        "side": side
    };
    special_values_table['trigger_type'][trigger_type_id] = description;
    mark_pairs['trigger_type_A' + trigger_type_id] = paramA;
    mark_pairs['trigger_type_B' + trigger_type_id] = paramB;
}

var trigger_opcode_aliases = [];

function AddOpcodeAlias(opcode) {
    trigger_opcode_aliases[last_trigger_type_id] = opcode;
}

//adds all the trigger actions by reading from trigger.json
const triggerMain = () => {
    const jsonUrl = location.protocol + '//' + location.host + '/trigger.json';

    fetch(jsonUrl)
    .then(response => response.json())
    .then(triggerList => {
        triggerList.forEach(trigger => {
            //only add expanded trigger action if editor on expanded mode.
            if(trigger["expanded"] && loadededitormode !== EDITOR_MODE_EXPANDED) return

            addTrigger(trigger["opcode"], trigger["description"], trigger["paramA"], trigger["paramB"], trigger["side"]);
            if(trigger["alias"] !== "") AddOpcodeAlias(trigger["alias"]);
        })
    })
    .catch(error => {
        console.error("Error attempting to fetch / parse data from: " + jsonUrl);
        console.error(error.toString());
    });
}

triggerMain();

special_values_table['engine_mark'] = new Array();
special_values_table['engine_mark']['sky'] = 'Change sky';
special_values_table['engine_mark']['shadowmap_size'] = 'Shadowmap size';
special_values_table['engine_mark']['casual'] = 'Enable casual mode';
special_values_table['engine_mark']['nobase'] = 'Disable base noise';
special_values_table['engine_mark']['game2'] = 'Alternative gameplay';
special_values_table['engine_mark']['strict_casual'] = 'Enable strict casual mode';
special_values_table['engine_mark']['no_auto_revive'] = 'Disable AI revive';
special_values_table['engine_mark']['meat'] = 'Force ragdoll disappearment';
special_values_table['engine_mark']['hero1_guns'] = 'Spawn marine weapons';
special_values_table['engine_mark']['hero2_guns'] = 'Spawn Proxy weapons';
special_values_table['engine_mark']['hero2_guns_nonades'] = 'Spawn Proxy weapons (no nades)';
special_values_table['engine_mark']['hero2_guns_nades'] = 'Spawn Proxy weapons (only nades)';
special_values_table['engine_mark']['nopsi'] = 'Disable psi-swords';
special_values_table['engine_mark']['gamescale'] = 'Change game scale';
special_values_table['engine_mark']['he_nades_count'] = 'Set start HE nades count (MP only)';
special_values_table['engine_mark']['port_nades_count'] = 'Set start Port nades count (MP only)';
special_values_table['engine_mark']['sh_nades_count'] = 'Set start Shield nades count (MP only)';
special_values_table['engine_mark']['snow'] = 'Enable snow on map';
special_values_table['engine_mark']['watercolor'] = 'Use custom water color # (hex color code)';
special_values_table['engine_mark']['acidcolor'] = 'Use custom acid color # (hex color code)';
special_values_table['engine_mark']['watertitle'] = 'Use custom water title';
special_values_table['engine_mark']['acidtitle'] = 'Use custom acid title';
special_values_table['engine_mark']['dm_slots_on_spawn'] = 'List of slots that can be randomly given to player in DM/TDM modes during respawn';
special_values_table['engine_mark']['dm_max_guns_on_spawn'] = 'Define how many weapons can be randomly given to player in DM/TDM modes during respawn';
special_values_table['engine_mark']['level_errors'] = 'Enable level trigger error reporting';
special_values_table['engine_mark']['var_sync'] = 'Enable Var Sync trigger actions';
special_values_table['engine_mark']['no_light_break'] = 'Disallow lamp destruction and collisions';
special_values_table['engine_mark']['naive_hit_confirmation'] = 'Enable naive hit confirmation (MP only)';
special_values_table['engine_mark']['server_srng_validity'] = "Change time that server-sided random number is valid for in miliseconds (MP only.)";

mark_pairs['mark_sky'] = 'sky_model';
mark_pairs['mark_shadowmap_size'] = 'value>0+round1';
mark_pairs['mark_casual'] = 'nochange';
mark_pairs['mark_nobase'] = 'nochange';
mark_pairs['mark_game2'] = 'nochange';
mark_pairs['mark_strict_casual'] = 'nochange';
mark_pairs['mark_no_auto_revive'] = 'nochange';
mark_pairs['mark_meat'] = 'nochange';
mark_pairs['mark_hero1_guns'] = 'nochange';
mark_pairs['mark_hero2_guns'] = 'nochange';
mark_pairs['mark_hero2_guns_nonades'] = 'nochange';
mark_pairs['mark_hero2_guns_nades'] = 'nochange';
mark_pairs['mark_nopsi'] = 'nochange';
mark_pairs['mark_gamescale'] = 'value>=0';
mark_pairs['mark_he_nades_count'] = 'value>=0+round1';
mark_pairs['mark_port_nades_count'] = 'value>=0+round1';
mark_pairs['mark_sh_nades_count'] = 'value>=0+round1';
mark_pairs['mark_snow'] = 'nochange';
mark_pairs['mark_watercolor'] = 'string';
mark_pairs['mark_acidcolor'] = 'string';
mark_pairs['mark_watertitle'] = 'string';
mark_pairs['mark_acidtitle'] = 'string';
mark_pairs['mark_dm_slots_on_spawn'] = 'string';
mark_pairs['mark_dm_max_guns_on_spawn'] = 'value>=0+round1';
mark_pairs['mark_level_errors'] = 'nochange';
mark_pairs["mark_server_srng_validity"] = "value";

special_values_table['sky_model'] = new Array();
special_values_table['sky_model'][1] = 'Yellow, dark';
special_values_table['sky_model'][2] = 'Yellow, bright';
special_values_table['sky_model'][3] = 'Absolutely white';
special_values_table['sky_model'][4] = 'Absolutely black';
special_values_table['sky_model'][5] = 'Space';
special_values_table['sky_model'][6] = 'Red';
special_values_table['sky_model'][7] = 'Atomic winter';
special_values_table['sky_model'][8] = 'Dawn';
special_values_table['sky_model'][9] = 'Dune';
special_values_table['sky_model'][10] = 'Sandy mist';
special_values_table['sky_model'][11] = 'Night';
special_values_table['sky_model'][12] = 'PB:FTTP sky';
special_values_table['sky_model'][13] = 'Stormy';
special_values_table['sky_model'][14] = 'Evening';
special_values_table['sky_model'][15] = 'Darker clouds';
special_values_table['sky_model'][16] = 'Cumulus';
special_values_table['sky_model'][17] = 'Bluish sky with clouds';
special_values_table['sky_model'][18] = 'Red sky';
special_values_table['voice_preset'] = new Array();
special_values_table['voice_preset']['mute'] = '- Mute -';
special_values_table['voice_preset']['marine'] = 'Marine';
special_values_table['voice_preset']['hexagon'] = 'Hexagon';
special_values_table['voice_preset']['cs'] = 'Civil Security';
special_values_table['voice_preset']['ghost'] = 'Civil Security Ghost';
special_values_table['voice_preset']['usurpation'] = 'Usurpation Soldier';
special_values_table['voice_preset']['usurpation_destroyer'] = 'Usurpation Destroyer';
special_values_table['voice_preset']['android'] = 'Android';
special_values_table['voice_preset']['hum_droid'] = 'Android (deep sounds)';
special_values_table['voice_preset']['mine_droid'] = 'Android (miner)';
special_values_table['voice_preset']['proxy'] = 'Proxy';
special_values_table['voice_preset']['noir_lime'] = 'Noir Lime';
special_values_table['voice_preset']['grub'] = 'Grub';
special_values_table['voice_preset']['falkok'] = 'Falkok';
special_values_table['voice_preset']['falkok_phoenix'] = 'Phoenix Falkok';
special_values_table['voice_preset']['reakhohsha'] = 'Reakhohsha Operative';
special_values_table['voice_preset']['star_defender'] = 'Star Defender';
for (i in special_values_table['sky_model']) {
    special_values_table['sky_model'][i] = '<img src='+PIC_PHP_SOURCE+'/skies/'+i+'.png border=0 width=100 height=50 style=vertical-align:-4px title=\'' + special_values_table['sky_model'][i] + '\'>';
}

var known_class = new Array();
var known_class_title = new Array();
var known_class_icons = new Array();
var known_class_savepriorities = new Array();
known_class[0] = 'box';
known_class[1] = 'door';
known_class[2] = 'region';
known_class[3] = 'pushf';
known_class[4] = 'bg';
known_class[5] = 'water';
known_class[6] = 'player';
known_class[7] = 'enemy';
known_class[8] = 'vehicle';
known_class[9] = 'decor';
known_class[10] = 'gun';
known_class[11] = 'lamp';
known_class[12] = 'barrel';
known_class[13] = 'trigger';
known_class[14] = 'timer';
known_class[15] = 'inf';
known_class[16] = 'song';
known_class[17] = 'image';
known_class_title[0] = 'wall';
known_class_title[1] = 'movable object';
known_class_title[2] = 'region';
known_class_title[3] = 'pushing area';
known_class_title[4] = 'background';
known_class_title[5] = 'water area';
known_class_title[6] = 'player';
known_class_title[7] = 'enemy';
known_class_title[8] = 'vehicle';
known_class_title[9] = 'decoration';
known_class_title[10] = 'gun';
known_class_title[11] = 'lamp';
known_class_title[12] = 'barrel';
known_class_title[13] = 'trigger';
known_class_title[14] = 'timer';
known_class_title[15] = 'engine mark';
known_class_title[16] = 'song';
known_class_title[17] = 'Image info';
known_class_savepriorities.push('player');
known_class_savepriorities.push('enemy');
known_class_savepriorities.push('barrel');
known_class_savepriorities.push('pushf');
known_class_savepriorities.push("image");
known_class_savepriorities.push('bg');
known_class_savepriorities.push('water');
known_class_savepriorities.push('box');
known_class_savepriorities.push('door');
known_class_savepriorities.push('vehicle');
known_class_savepriorities.push('decor');
known_class_savepriorities.push('gun');
known_class_savepriorities.push('lamp');
known_class_savepriorities.push('region');
known_class_savepriorities.push('trigger');
known_class_savepriorities.push('timer');
known_class_savepriorities.push('inf');
known_class_savepriorities.push('song');

if (editormode === EDITOR_MODE_EXPANDED) {
    known_class.push('lua');
    known_class_title.push('lua script');
    known_class_savepriorities.push('lua')
}

for (var i = 0; i < known_class.length; i++) {
    known_class_icons[i] = MakeIcon16Node(known_class[i]);
}


function known_class2known_class_title(val) {
    return known_class_title[known_class.indexOf(val)];
}

function SourceLost() {
    var offset = 0;
    for (i = 0; i < es.length; i++) {
        es[i].UpdBounds();
        if (es[i].pm.uid !== undefined) {
            es[i].exists = false;
            es[i].pm.uid = RandomizeName(es[i].pm.uid);
            es[i].exists = true;
        }
    }
    for (i = 0; i < es.length; i++) {
        switch (es[i]._class) {
            case 'trigger':
            case 'timer':
            case 'inf':
                if (es[i].pm.x == 0)
                    if (es[i].pm.y == 0) {
                        es[i].pm.x = start_bounds_left + offset;
                        es[i].pm.y = start_bounds_top - 60;
                        offset += 40;
                    } break;
        }
    }
}
var start_bounds_left = 0;
var start_bounds_right = 0;
var start_bounds_top = 0;
var start_bounds_bottom = 0;
var newEid = new Array();

function E(_class) {
    this._class = _class;
    this.pm = null;
    this.selected = false;
    this.exists = true;
    this._isresizable = false;
    this._isxdirected = false;
    this._isspeedvectordirected = false;
    this._isphysical = false;
    this.isResizable = function() {
            switch (this._class) {
                case 'door':
                case 'box':
                case 'region':
                case 'pushf':
                case 'bg':
                case 'water':
                    return true;
                default:
                    return false;
            }
        };
    this.isXDirected = function() {
            switch (this._class) {
                case 'player':
                case 'enemy':
                case 'vehicle':
                    return true;
                default:
                    return false;
            }
        };
    this.isSpeedVectorDirected = function() {
            switch (this._class) {
                case 'player':
                case 'enemy':
                case 'vehicle':
                case 'barrel':
                case 'pushf':
                    return true;
                default:
                    return false;
            }
        };
    this.isPhysical = function() {
            switch (this._class) {
                case 'player':
                case 'enemy':
                case 'vehicle':
                case 'barrel':
                case 'pushf':
                case 'region':
                case 'box':
                case 'door':
                case 'water':
                case 'bg':
                case 'decor':
                case 'gun':
                case 'lamp':
                case 'inf':
                case 'trigger':
                case 'timer':
                case 'song':
                case 'lua':
                    return true;
                default:
                    return false;
            }
        };
    this.Remove = function() {
            this.exists = false;
            this.selected = false;
        };
    this.GenerateParameters = function() {
            switch (this._class) {
                case 'player':
                    this.pm = {
                        uid: '#player',
                        x: 0,
                        y: 0,
                        tox: 0,
                        toy: 0,
                        hea: 130,
                        hmax: 130,
                        team: 0,
                        side: 1,
                        char: 1,
                        incar: -1,
                        botaction: 0,
                        ondeath: -1,
                    };
                    if (loadededitormode === EDITOR_MODE_EXPANDED) {
                        this.pm.psi1_color = "#FFFFFF";
                        this.pm.psi2_color = "#FFFFFF";
                        this.pm.mdl_psi1 = "-1";
                        this.pm.mdl_psi2 = "-1";
                    }
                    break;
                case 'enemy':
                    this.pm = {
                        uid: '#actor',
                        x: 0,
                        y: 0,
                        tox: 0,
                        toy: 0,
                        hea: 130,
                        hmax: 130,
                        team: 0,
                        side: 1,
                        char: 1,
                        incar: -1,
                        botaction: 0,
                        ondeath: -1
                    };
                    break;
                case 'lamp':
                    this.pm = {
                        uid: '#light',
                        x: 0,
                        y: 0,
                        power: 0.4,
                        flare: 1
                    };
                    break;
                case 'gun':
                    this.pm = {
                        uid: '#gun',
                        x: 0,
                        y: 0,
                        model: 'gun_rifle',
                        command: -1,
                        upg: 0
                    };
                    break;
                case 'box':
                    this.pm = {
                        x: 0,
                        y: 0,
                        w: 10,
                        h: 10,
                        m: 0
                    };
                    break;
                case 'bg':
                    if (loadededitormode === EDITOR_MODE_EXPANDED) {
                        this.pm = {
                            uid: '#background',
                            x: 0,
                            y: 0,
                            w: 10,
                            h: 10,
                            m: 0,
                            c: '',
                            a: '-1',
                            u: 0,
                            v: 0,
                            f: 0,
                            s: true
                        };
                    } else if (loadededitormode === EDITOR_MODE_REGULAR) {
                        this.pm = {
                            x: 0,
                            y: 0,
                            w: 10,
                            h: 10,
                            m: 0,
                            c: '',
                            a: '-1',
                            u: 0,
                            v: 0,
                            f: 0,
                            s: true
                        };
                    }
                    break;
                case 'water':
                    if (loadededitormode === EDITOR_MODE_EXPANDED) {
                        this.pm = {
                            uid: '#water',
                            x: 0,
                            y: 0,
                            w: 10,
                            h: 10,
                            damage: 0,
                            friction: true,
                            attach: -1,
                        };
                    } else if (loadededitormode === EDITOR_MODE_REGULAR) {
                        this.pm = {
                            x: 0,
                            y: 0,
                            w: 10,
                            h: 10,
                            damage: 0,
                            friction: true,
                        };
                    }
                    break;
                case 'region':
                    this.pm = {
                        uid: '#region',
                        x: 0,
                        y: 0,
                        w: 10,
                        h: 10,
                        use_target: -1,
                        use_on: 0,
                        attach: -1
                    };
                    break;
                case 'pushf':
                    this.pm = {
                        uid: '#pushf',
                        x: 0,
                        y: 0,
                        w: 10,
                        h: 10,
                        tox: 0,
                        toy: 0,
                        stab: 0,
                        damage: 0,
                        attach: -1
                    };
                    break;
                case 'door':
                    this.pm = {
                        uid: '#door',
                        x: 0,
                        y: 0,
                        w: 10,
                        h: 10,
                        moving: false,
                        tarx: 0,
                        tary: 0,
                        maxspeed: 10,
                        vis: true,
                        attach: -1
                    };
                    break;
                case 'timer':
                    this.pm = {
                        uid: '#timer',
                        x: 0,
                        y: 0,
                        enabled: true,
                        maxcalls: 1,
                        target: -1,
                        delay: 30
                    };
                    break;
                case 'decor':
                    this.pm = {
                        uid: '#decor',
                        model: 'stone',
                        x: 0,
                        y: 0,
                        attach: -1,
                        u: 0,
                        v: 0,
                        f: 0,
                        r: 0,
                        sx: 1,
                        sy: 1
                    };
                    break;
                case 'inf':
                    this.pm = {
                        x: 0,
                        y: 0,
                        mark: 'hero1_guns',
                        forteam: 0
                    };
                    break;
                case 'song':
                    this.pm = {
                        x: 0,
                        y: 0,
                        uid: '#song',
                        url: '',
                        volume: 1,
                        loop: true,
                        callback: -1
                    };
                    break;
                case "image":
                    this.pm = {
                        id: '0',
                        width: 100,
                        height: 100
                    };
                    break;
                case 'vehicle':
                    this.pm = {
                        uid: '#vehicle',
                        side: 1,
                        model: 'veh_jeep',
                        x: 0,
                        y: 0,
                        tox: 0,
                        toy: 0,
                        hpp: 100
                    };
                    break;
                case 'barrel':
                    this.pm = {
                        uid: '#barrel',
                        model: 'bar_orange',
                        x: 0,
                        y: 0,
                        tox: 0,
                        toy: 0
                    };
                    break;
                case 'trigger':
                    this.pm = {
                        uid: '#trigger',
                        x: 0,
                        y: 0,
                        enabled: true,
                        maxcalls: 1,
                    }
                    if (loadededitormode === EDITOR_MODE_EXPANDED) {
                        this.pm.onserver = false;
                    };
                    for (var index = 1; index < 11; index++) {
                        this.pm["actions_" + index + "_type"] = -1;
                        this.pm["actions_" + index + "_targetA"] = 0;
                        this.pm["actions_" + index + "_targetB"] = 0;
                    }
                    
                    break;
                case 'lua':
                    this.pm = {
                        uid: '#lua',
                        x: 0,
                        y: 0,
                        start: false,
                        onserver: false,
                        src: "",
                    };
                default:
                    return false;
            }
            if (source_lost) {
                if (this.pm.uid != undefined) {
                    if (newEid[this._class] == undefined) newEid[this._class] = 1;
                    this.pm.uid += newEid[this._class];
                    newEid[this._class] += 1;
                }
            }
            return true;
        };
    this.UpdBounds = function() {
            if (this.pm.x != undefined) {
                start_bounds_left = Math.min(this.pm.x, start_bounds_left);
                start_bounds_top = Math.min(this.pm.y, start_bounds_top);
                if (this.pm.h != undefined) {
                    start_bounds_bottom = Math.max(this.pm.y + this.pm.h, start_bounds_bottom);
                    start_bounds_right = Math.max(this.pm.x + this.pm.w, start_bounds_right);
                } else {
                    start_bounds_bottom = Math.max(this.pm.y, start_bounds_bottom);
                    start_bounds_right = Math.max(this.pm.x, start_bounds_right);
                }
            }
            return true;
        };
    this.UpdateStatics = function() {
            this._isresizable = this.isResizable();
            this._isxdirected = this.isXDirected();
            this._isspeedvectordirected = this.isSpeedVectorDirected();
            this._isphysical = this.isPhysical();
        };
    this.GenerateParameters();
    this.UpdateStatics();
    this.fixWidths = function() {
            if (this._isresizable) {
                if (this.pm.w < 0) {
                    this.pm.x += this.pm.w;
                    this.pm.w = -this.pm.w;
                }
                if (this.pm.h < 0) {
                    this.pm.y += this.pm.h;
                    this.pm.h = -this.pm.h;
                }
            }
        };
    this.fixPos = function(force=false, fixSize=false) {
            if (!force) return;
            this.pm.x = Math.round(this.pm.x / GRID_SNAPPING) * GRID_SNAPPING;
            this.pm.y = Math.round(this.pm.y / GRID_SNAPPING) * GRID_SNAPPING;
            if (this._isresizable && fixSize) {
                this.pm.w = Math.round(this.pm.w / GRID_SNAPPING) * GRID_SNAPPING;
                this.pm.h = Math.round(this.pm.h / GRID_SNAPPING) * GRID_SNAPPING;
            }
        };
    this.hitSelect = function() {
            if (canvas_focus)
                if (this.exists)
                    if (m_drag_selection) {
                        if (this._isphysical) {
                            if (this._isresizable) {
                                if (Math.max(m_pos_x, m_down_x) > Math.min(this.pm.x, this.pm.x + this.pm.w) && Math.min(m_pos_x, m_down_x) < Math.max(this.pm.x, this.pm.x + this.pm.w) && Math.max(m_pos_y, m_down_y) > Math.min(this.pm.y, this.pm.y + this.pm.h) && Math.min(m_pos_y, m_down_y) < Math.max(this.pm.y, this.pm.y + this.pm.h)) {
                                    return true;
                                }
                            } else {
                                var this_class = ThinkOfBBoxClass(this._class, this);
                                var hit_from_x;
                                var hit_to_x;
                                var hit_from_y;
                                var hit_to_y;
                                hit_from_y = bo_y[this_class];
                                hit_to_y = bo_y[this_class] + bo_h[this_class];
                                if (this.pm.side != -1) {
                                    hit_from_x = bo_x[this_class];
                                    hit_to_x = bo_x[this_class] + bo_w[this_class];
                                } else {
                                    hit_to_x = -bo_x[this_class];
                                    hit_from_x = -bo_x[this_class] - bo_w[this_class];
                                }
                                if (Math.max(m_pos_x, m_down_x) > Math.min(this.pm.x + hit_from_x, this.pm.x + hit_to_x) && Math.min(m_pos_x, m_down_x) < Math.max(this.pm.x + hit_from_x, this.pm.x + hit_to_x) && Math.max(m_pos_y, m_down_y) > Math.min(this.pm.y + hit_from_y, this.pm.y + hit_to_y) && Math.min(m_pos_y, m_down_y) < Math.max(this.pm.y + hit_from_y, this.pm.y + hit_to_y)) {
                                    return true;
                                }
                            }
                        }
                    } return false;
        };
    this.hit = function(borders) {
            if (canvas_focus)
                if (this.exists)
                    if (this._isphysical) {
                        if (this._isresizable) {
                            if (borders) {
                                if (m_pos_x >= this.pm.x - borderwidth)
                                    if (m_pos_x <= this.pm.x + this.pm.w + borderwidth)
                                        if (m_pos_y >= this.pm.y - borderwidth)
                                            if (m_pos_y <= this.pm.y + this.pm.h + borderwidth) {
                                                if (m_pos_x <= this.pm.x + borderwidth) {
                                                    if (m_pos_y <= this.pm.y + borderwidth) return 'LT';
                                                    else if (m_pos_y >= this.pm.y + this.pm.h - borderwidth) return 'LB';
                                                    else return 'L';
                                                } else if (m_pos_x >= this.pm.x + this.pm.w - borderwidth) {
                                                    if (m_pos_y <= this.pm.y + borderwidth) return 'RT';
                                                    else if (m_pos_y >= this.pm.y + this.pm.h - borderwidth) return 'RB';
                                                    else return 'R';
                                                }
                                                if (m_pos_y <= this.pm.y + borderwidth) return 'T';
                                                else if (m_pos_y >= this.pm.y + this.pm.h - borderwidth) return 'B';
                                                else return 'C';
                                            }
                            } else {
                                if (m_pos_x >= this.pm.x)
                                    if (m_pos_x <= this.pm.x + this.pm.w)
                                        if (m_pos_y >= this.pm.y)
                                            if (m_pos_y <= this.pm.y + this.pm.h) {
                                                return true;
                                            }
                            }
                        } else {
                            var this_class = ThinkOfBBoxClass(this._class, this);
                            var hit_from_x;
                            var hit_to_x;
                            var hit_from_y;
                            var hit_to_y;
                            hit_from_y = bo_y[this_class];
                            hit_to_y = bo_y[this_class] + bo_h[this_class];
                            if (this.pm.side != -1) {
                                hit_from_x = bo_x[this_class];
                                hit_to_x = bo_x[this_class] + bo_w[this_class];
                            } else {
                                hit_to_x = -bo_x[this_class];
                                hit_from_x = -bo_x[this_class] - bo_w[this_class];
                            }
                            if (m_pos_x >= this.pm.x + hit_from_x)
                                if (m_pos_x <= this.pm.x + hit_to_x)
                                    if (m_pos_y >= this.pm.y + hit_from_y)
                                        if (m_pos_y <= this.pm.y + hit_to_y) {
                                            if (borders) return 'C';
                                            return true;
                                        }
                        }
                    } return false;
        };
}

var stepinc = 1;
function RandomizeName(oldname) {
    var newname = oldname;
    var phrase = '*';
    var unoriginal;
    // var oldname_param = oldname;
    for (var i = 0; i < es.length; i++)
        if (es[i].exists && es[i].pm.uid != undefined && es[i].pm.uid == newname) {
            unoriginal = true;
            oldname = newname;
        }
    if (unoriginal) {
        var takes = 0;
        do {
            unoriginal = false;
            var indof = oldname.lastIndexOf(phrase);
            var copysuffix = Math.floor(oldname.substring(indof + 1));
            if (indof == -1 || isNaN(copysuffix)) {
                newname = oldname + phrase + '1';
            } else {
                newname = oldname.substring(0, indof) + phrase + (copysuffix + Math.floor(Math.random() * takes + 1));
            }
            takes += stepinc;
            for (var i = 0; i < es.length; i++)
                if (es[i].exists)
                    if (es[i].pm.uid != undefined) {
                        if (es[i].pm.uid == newname) {
                            unoriginal = true;
                            oldname = newname;
                        }
                    }
        } while (unoriginal);
        stepinc = Math.max(1, Math.round((takes * 0.1 + stepinc * 5) / 6));
    }
    // console.log("RandomizeName(\"" + oldname_param + "\") == \"" + newname + "\"")
    return newname;
}

function AssignName(oldname) {
    var newname = oldname;
    var id = 1;
    do {
        var unoriginal = false;
        for (var i = 0; i < es.length; i++) {
            if (es[i].exists && es[i].pm.uid != undefined && es[i].pm.uid == newname) {
                unoriginal = true;
                newname = oldname + "*" + id;
                break;
            }
        }
        id++;
    } while (unoriginal)
    return newname;
}

var ENABLE_TEXT = true;
var ENABLE_SHADOWS = true;
var dis_from_x = 0;
var dis_to_x = 0;
var dis_from_y = 0;
var dis_to_y = 0;
var zoom = 1;
var title_density = 0;
var last_title_density = 0;
var borderwidth_onscreen = 3;
var borderwidth = 3;

// Convert screen X to world X
function s2w_x(x) {
    return x / canvas_width * (dis_to_x - dis_from_x) + dis_from_x;
}

// Convert world X to screen X
function w2s_x(x) {
    return (x - dis_from_x) / (dis_to_x - dis_from_x) * canvas_width;
}

// Convert screen Y to world Y
function s2w_y(y) {
    return y / canvas_height * (dis_to_y - dis_from_y) + dis_from_y;
}

// Convert world Y to screen Y
function w2s_y(y) {
    return (y - dis_from_y) / (dis_to_y - dis_from_y) * canvas_height;
}

// Convert world width to screen width
function w2s_w(x) {
    return (x) / (dis_to_x - dis_from_x) * canvas_width;
}

// Convert world height to screen height
function w2s_h(y) {
    return (y) / (dis_to_y - dis_from_y) * canvas_height;
}

// Convert screen width to world width
function s2w_w(x) {
    return (x) / canvas_width * (dis_to_x - dis_from_x);
}

// Convert screen height to world height
function s2w_h(y) {
    return (y) / canvas_height * (dis_to_y - dis_from_y);
}

var quick_pick = false;
var quick_pick_objects = new Array();
var quick_pick_active_param = '';
var quick_pick_ignore_one_click = false;
var quick_pick_fake_over = -1;

function MyDrawImage(img_decide_result, _x1, _y1, _x2, _y2) {
    if (img_decide_result != undefined) img_decide_result.crossorigin = "Anonymous";
    if (_x2 < 0) {
        _x2 = -_x2;
        _x1 -= _x2;
    }
    if (_x1 + _x2 > 0)
        if (_x1 < canvas_width)
            if (_y1 + _y2 > 0)
                if (_y1 < canvas_height) {
                    _x1 = Math.round(_x1);
                    _y1 = Math.round(_y1);
                    _x2 = Math.round(_x2);
                    _y2 = Math.round(_y2);
                    if (img_decide_result === undefined || img_decide_result.naturalHeight == 0) {
                        ctx.drawImage(img_unknown, _x1, _y1, _x2, _y2);
                    } else {
                        if (ImageTrimmerLogicDone(img_decide_result)) {
                            var old_scale_x = _x2 / w2s_w(img_decide_result.naturalWidth);
                            var old_scale_y = _y2 / w2s_h(img_decide_result.naturalHeight);
                            ctx.drawImage(img_decide_result, img_decide_result.trim_x1, img_decide_result.trim_y1, img_decide_result.trim_x2 - img_decide_result.trim_x1, img_decide_result.trim_y2 - img_decide_result.trim_y1, _x1 + w2s_w(img_decide_result.trim_x1) * old_scale_x, _y1 + w2s_h(img_decide_result.trim_y1) * old_scale_y, old_scale_x * w2s_w(img_decide_result.trim_x2 - img_decide_result.trim_x1), old_scale_y * w2s_h(img_decide_result.trim_y2 - img_decide_result.trim_y1));
                        } else ctx.drawImage(img_decide_result, _x1, _y1, _x2, _y2);
                    }
                }
}
var trim_queued_images = [];

function ImageTrimmerLogicDone(img) {
    if (img.trim_done == true) return true;
    img.trim_done = false;
    var current_complexity = 0;
    for (var i = 0; i < trim_queued_images.length; i++) {
        current_complexity += (trim_queued_images[i].trim_x2 - trim_queued_images[i].trim_x1 + trim_queued_images[i].trim_y2 - trim_queued_images[i].trim_y1) * 2;
        if (current_complexity > 10000) return false;
    }
    img.trim_boost_points = 200;
    if (img.trim_timer == undefined) {
        img.trim_timer = setInterval(ImgTrimThink, 16);
        trim_queued_images.push(img);
    } else {
        return false;
    }

    function ImgTrimThink() {
        var data = img.data;
        if (img.data == null || img.data == undefined) {
            /*var canvas = document.createElement("canvas");
            var context = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            context.drawImage(img, 0, 0);
            data = context.getImageData(0, 0, img.width, img.height).data;
            img.trim_x1 = 0;
            img.trim_y1 = 0;
            img.trim_x2 = img.width;
            img.trim_y2 = img.height;
            img.trim_x1_fixed = false;
            img.trim_y1_fixed = false;
            img.trim_x2_fixed = false;
            img.trim_y2_fixed = false;
            img.data = data;
            TODO: HACK - FIXME
            */
        }
        for (var tr = img.trim_boost_points + 1; tr > 0; tr--) {
            if (!img.trim_y1_fixed) {
                var y = img.trim_y1;
                for (var x = img.trim_x1; x < img.trim_x2; x++) {
                    if (data[(y * img.width + x) * 4 + 3] > 0) {
                        img.trim_y1_fixed = true;
                        break;
                    }
                }
                if (!img.trim_y1_fixed)
                    if (img.trim_y1 + 1 < img.trim_y2) img.trim_y1++;
            }
            if (!img.trim_y2_fixed) {
                var y = img.trim_y2 - 1;
                for (var x = img.trim_x1; x < img.trim_x2; x++) {
                    if (data[(y * img.width + x) * 4 + 3] > 0) {
                        img.trim_y2_fixed = true;
                        break;
                    }
                }
                if (!img.trim_y2_fixed)
                    if (img.trim_y2 - 1 > img.trim_y1) img.trim_y2--;
            }
            if (!img.trim_x1_fixed) {
                var x = img.trim_x1;
                for (var y = img.trim_y1; y < img.trim_y2; y++) {
                    if (data[(y * img.width + x) * 4 + 3] > 0) {
                        img.trim_x1_fixed = true;
                        break;
                    }
                }
                if (!img.trim_x1_fixed)
                    if (img.trim_x1 + 1 < img.trim_x2) img.trim_x1++;
            }
            if (!img.trim_x2_fixed) {
                var x = img.trim_x2 - 1;
                for (var y = img.trim_y1; y < img.trim_y2; y++) {
                    if (data[(y * img.width + x) * 4 + 3] > 0) {
                        img.trim_x2_fixed = true;
                        break;
                    }
                }
                if (!img.trim_x2_fixed)
                    if (img.trim_x2 - 1 > img.trim_x1) img.trim_x2--;
            }
        }
        img.trim_boost_points *= 0.5;
        if (img.trim_y1_fixed)
            if (img.trim_y2_fixed)
                if (img.trim_x1_fixed)
                    if (img.trim_x2_fixed) {
                        img.data = null;
                        img.trim_done = true;
                        clearInterval(img.trim_timer);
                        trim_queued_images.splice(trim_queued_images.indexOf(img), 1);
                    }
    }
    return false;
}


function MyDrawSelection(_x, _y, _w, _h) {
    _x = Math.round(_x);
    _y = Math.round(_y);
    _w = Math.round(_w);
    _h = Math.round(_h);
    var _w_small = _w * 0.25;
    var _h_small = _h * 0.25;
    draw_rect(_x, _y, 1, _h_small);
    draw_rect(_x + _w, _y, 1, _h_small);
    draw_rect(_x, _y + _h * 0.75, 1, _h_small);
    draw_rect(_x + _w, _y + _h * 0.75, 1, _h_small);
    draw_rect(_x, _y, _w_small, 1);
    draw_rect(_x, _y + _h, _w_small, 1);
    draw_rect(_x + _w * 0.75, _y, _w_small, 1);
    draw_rect(_x + _w * 0.75, _y + _h, _w_small, 1);
}

function draw_rect_sides(_x2, _y2, _w, _h) {
    var _x = Math.round(_x2);
    var _y = Math.round(_y2);
    _w = Math.round(_x2 + _w) - _x;
    _h = Math.round(_y2 + _h) - _y;
    draw_rect(_x, _y, 1, _h + 1);
    draw_rect(_x + _w, _y, 1, _h + 1);
    draw_rect(_x, _y, _w + 1, 1);
    draw_rect(_x, _y + _h, _w + 1, 1);
}

function glNewDrawRectSides(_x, _y, _w, _h) {
    _x++;
    if (_x > canvas_width) return;
    var _x_add_w = _x + _w;
    if (_x_add_w < 0) return;
    if (_y > canvas_height) return;
    var _y_add_h = _y + _h;
    if (_y_add_h < 0) return;
    if (_x_add_w > canvas_width) _w = canvas_width - _x;
    if (_y_add_h > canvas_height) _h = canvas_height - _y;
    if (_x < 0) {
        _w += _x;
        _x = 0;
    }
    if (_y < 0) {
        _h += _y;
        _y = 0;
    }
    glSetProgram(glLineProgram);
    gl.uniform4f(glLineProgram_u_color, glStrokeR, glStrokeG, glStrokeB, glGlobalAlpha);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        _x   , _y,
        _x+_w, _y,
        _x+_w, _y+_h,
        _x   , _y+_h
    ]), gl.DYNAMIC_DRAW);
    gl.drawArrays(gl.LINE_LOOP, 0, 4);
}

function glOldDrawRectSides(_x, _y, _w, _h) {
    glFillR = glStrokeR;
    glFillG = glStrokeG;
    glFillB = glStrokeB;
    glDrawRect(_x, _y, 1, _h + 1);          // left side
    glDrawRect(_x + _w, _y, 1, _h + 1);     // right side
    glDrawRect(_x, _y, _w + 1, 1);          // top side
    glDrawRect(_x, _y + _h, _w + 1, 1);     // bottom side
}

var glDrawRectSides = glNewDrawRectSides;

function draw_rect(_x2, _y2, _w, _h) {
    var _x = Math.round(_x2);
    var _y = Math.round(_y2);
    _w = Math.round(_x2 + _w) - _x;
    _h = Math.round(_y2 + _h) - _y;
    if (_x > canvas_width) return;
    var _x_add_w = _x + _w;
    if (_x_add_w < 0) return;
    if (_y > canvas_height) return;
    var _y_add_h = _y + _h;
    if (_y_add_h < 0) return;
    if (_x_add_w > canvas_width) _w = canvas_width - _x;
    if (_y_add_h > canvas_height) _h = canvas_height - _y;
    if (_x < 0) {
        _w += _x;
        _x = 0;
    }
    if (_y < 0) {
        _h += _y;
        _y = 0;
    }
    ctx.fillRect(_x, _y, _w, _h);
}

function glMyDrawSelection(_x, _y, _w, _h) {
    var _w_small = _w * 0.25;
    var _h_small = _h * 0.25;
    glDrawRect(_x, _y, 1, _h_small);
    glDrawRect(_x + _w, _y, 1, _h_small);
    glDrawRect(_x, _y + _h * 0.75, 1, _h_small);
    glDrawRect(_x + _w, _y + _h * 0.75, 1, _h_small);
    glDrawRect(_x, _y, _w_small, 1);
    glDrawRect(_x, _y + _h, _w_small, 1);
    glDrawRect(_x + _w * 0.75, _y, _w_small, 1);
    glDrawRect(_x + _w * 0.75, _y + _h, _w_small, 1);
}

function draw_gridlines(_step, alpha) {
    ctx.globalAlpha = alpha / Math.max(zoom, 1);
    var x = w2s_x(Math.floor(s2w_x(0) / _step) * _step);
    var to_x = w2s_x(Math.ceil(s2w_x(canvas_width) / _step) * _step);
    var step = w2s_w(_step);
    if (step > 2)
        while (x < to_x) {
            draw_rect(x, 0, 1, canvas_height);
            x += step;
        }
    var y = w2s_y(Math.floor(s2w_y(0) / _step) * _step);
    var to_y = w2s_y(Math.ceil(s2w_y(canvas_height) / _step) * _step);
    step = w2s_h(_step);
    if (step > 2)
        while (y < to_y) {
            draw_rect(0, y, canvas_width, 1);
            y += step;
        }
}
var DOQuad_i;
var DOQuad_active;

function glDOQuad(x1, y1, x2, y2) {
    if (m_scaling) return false;
    var over = false;
    if (m_scaling) over = DOQuad_active == DOQuad_i;
    else if (m_pos_x >= x1)
        if (m_pos_x < x1 + x2)
            if (m_pos_y >= y1)
                if (m_pos_y < y1 + y2) over = true;
    x1 = w2s_x(x1);
    y1 = w2s_y(y1);
    x2 = w2s_w(x2);
    y2 = w2s_h(y2);
    glGlobalAlpha = 0.2;
    if (over) glGlobalAlpha = 0.7;
    glDrawRect(x1, y1, 1, y2);
    glDrawRect(x1 + x2, y1, 1, y2);
    glDrawRect(x1, y1, x2, 1);
    glDrawRect(x1, y1 + y2, x2, 1);
    if (over) {
        glGlobalAlpha = 0.3;
        glDrawRect(x1, y1, x2, y2);
        DOQuad_active = DOQuad_i;
        DOQuad_i++;
        return true;
    }
    DOQuad_i++;
}

function DOQuad(x1, y1, x2, y2) {
    if (!m_scaling) {
        var over = false;
        if (m_scaling) over = DOQuad_active == DOQuad_i;
        else if (m_pos_x >= x1)
            if (m_pos_x < x1 + x2)
                if (m_pos_y >= y1)
                    if (m_pos_y < y1 + y2) over = true;
        x1 = w2s_x(x1);
        y1 = w2s_y(y1);
        x2 = w2s_w(x2);
        y2 = w2s_h(y2);
        ctx.globalAlpha = 0.2;
        if (over) ctx.globalAlpha = 0.7;
        draw_rect(x1, y1, 1, y2);
        draw_rect(x1 + x2, y1, 1, y2);
        draw_rect(x1, y1, x2, 1);
        draw_rect(x1, y1 + y2, x2, 1);
        if (over) {
            ctx.globalAlpha = 0.3;
            draw_rect(x1, y1, x2, y2);
            DOQuad_active = DOQuad_i;
            DOQuad_i++;
            return true;
        }
        DOQuad_i++;
    }
    return false;
}
var enabletrace = true;
var ConsoleTraceMessages = new Array();

function ConsoleTace(txt) {
    ConsoleTraceMessages.push(txt);
    if (ConsoleTraceMessages.length > 4) ConsoleTraceMessages.shift();
}
NewNote('Welcome to Plazma Burst 2 Level Editor!', note_passive);
var last_time_mili = 0;

function glCreateShader(type, source) {
  let shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  let compilestatus = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (compilestatus) return shader;
 
  console.log(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
}

function glCreateProgram(vertexShader, fragmentShader) {
  let program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  let linkstatus = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (linkstatus) return program;
 
  console.log(gl.getProgramInfoLog(program));
  gl.deleteProgram(program);
}

var glCurrentProgram = null;
var glFillProgram;
var glFillProgram_u_resolution;
var glFillProgram_u_image;
var glFillProgram_u_draw_texture;
var glFillProgram_texCoordBuffer;
var glFillProgram_posBuffer;
var glFillProgram_u_mat;
var glFillProgram_u_tmat;
var glFillProgram_tmat;
var glLineProgram;
var glLineProgram_u_resolution;
var glLineProgram_u_color;
// var glLineProgram_u_mat;
var glLineProgram_u_dashed;
var glLineProgram_u_dashSize;
var glLineProgram_u_gapSize;
var glArcProgram;
var glArcProgram_u_resolution;
var glArcProgram_u_color;
var glArcProgram_u_off;
var glArcProgram_u_size;
var glArcProgram_u_tan;
var glArcProgram_u_mat;

function glSetProgram(program) {
    if (glCurrentProgram != program) {
        glCurrentProgram = program;
        gl.useProgram(program)
    }
}

function glLoadTexture(out, src) {
    let img = new Image();
    img.src = src;
    img.onload = () => {
        let texture = gl.createTexture();
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        //gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
        gl.generateMipmap(gl.TEXTURE_2D);
        out[0] = texture;
        out[2] = img.width;
        out[3] = img.height;
    };
}

function glTextureMatrixIdentity() {
    if (glCurrentProgram != glFillProgram) gl.useProgram(glFillProgram);
    glFillProgram_tmat[0] = 1; glFillProgram_tmat[1] = 0; glFillProgram_tmat[2] = 0;
    glFillProgram_tmat[3] = 0; glFillProgram_tmat[4] = 1; glFillProgram_tmat[5] = 0;
    glFillProgram_tmat[6] = 0; glFillProgram_tmat[7] = 0; glFillProgram_tmat[8] = 1;
    gl.uniformMatrix3fv(glFillProgram_u_tmat, false, glFillProgram_tmat);
    if (glCurrentProgram != glFillProgram) gl.useProgram(glCurrentProgram);
}

function glTextureMatrixTranslate(x, y) {
    if (glCurrentProgram != glFillProgram) gl.useProgram(glFillProgram);
    glFillProgram_tmat[2] += x;
    glFillProgram_tmat[5] += y;
    gl.uniformMatrix3fv(glFillProgram_u_tmat, false, glFillProgram_tmat);
    if (glCurrentProgram != glFillProgram) gl.useProgram(glCurrentProgram);
}

function glTextureMatrixScale(x, y) {
    if (glCurrentProgram != glFillProgram) gl.useProgram(glFillProgram);
    glFillProgram_tmat[0] *= x;
    glFillProgram_tmat[4] *= y;
    gl.uniformMatrix3fv(glFillProgram_u_tmat, false, glFillProgram_tmat);
    if (glCurrentProgram != glFillProgram) gl.useProgram(glCurrentProgram);
}

function initGL() {
    if (GRAPHICS_INIT) return;
    UpdateOpacities();

    // GLOBAL SETTINGS
    gl.clearColor(0.0, 0.0, 0.0, 0.0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    // SHADERS
    const vertexShaderSource1 = 
    `#version 300 es

    uniform vec2 u_resolution;
    uniform sampler2D u_image;
    uniform bool u_draw_texture;
    uniform mat3 u_mat;
    uniform mat3 u_tmat;

    in vec2 a_position;
    in vec2 a_texCoord;
    out vec2 v_texCoord;
    out vec2 v_tex;

    void main() {
        vec2 temp = a_position.xy / u_resolution - 1.0;
        gl_Position = vec4(temp.x, -temp.y, 0, 1);
        v_tex = gl_Position.xy;
        if (u_draw_texture) {
            v_texCoord = (vec3(a_texCoord, 1.0) * u_tmat).xy;
        }
    }
    `;

    const fragmentShaderSource1 = 
    `#version 300 es
    precision highp float;

    uniform sampler2D u_image;
    uniform bool u_draw_texture;
    uniform vec4 u_color;

    in vec2 v_texCoord;
    in vec2 v_tex;
    out vec4 outColor;

    void main() {
        outColor.rgb += u_color.rgb;
        if (u_draw_texture) {
            outColor += texture(u_image, v_texCoord);
            outColor.a *= u_color.a;
        } else {
            outColor.a = u_color.a;
        }
    }
    `;
    let vertexShader1 = glCreateShader(gl.VERTEX_SHADER, vertexShaderSource1);
    let fragmentShader1 = glCreateShader(gl.FRAGMENT_SHADER, fragmentShaderSource1);
    glFillProgram = glCreateProgram(vertexShader1, fragmentShader1);

    let a_position_1             = gl.getAttribLocation(glFillProgram,  "a_position");
    let a_texCoord               = gl.getAttribLocation(glFillProgram,  "a_texCoord");
    glFillProgram_u_image        = gl.getUniformLocation(glFillProgram, "u_image");
    glFillProgram_u_resolution   = gl.getUniformLocation(glFillProgram, "u_resolution");
    glFillProgram_u_draw_texture = gl.getUniformLocation(glFillProgram, "u_draw_texture");
    glFillProgram_u_color        = gl.getUniformLocation(glFillProgram, "u_color");
    glFillProgram_u_mat          = gl.getUniformLocation(glFillProgram, "u_mat");
    glFillProgram_u_tmat         = gl.getUniformLocation(glFillProgram, "u_tmat");
    glSetProgram(glFillProgram);
    gl.uniform1i(glFillProgram_u_image, 0);
    glFillProgram_tmat = new Float32Array([
        1, 0, 0,
        0, 1, 0,
        0, 0, 1,
    ]);
    gl.uniformMatrix3fv(glFillProgram_u_tmat, false, glFillProgram_tmat);

    const vertexShaderSource2 = 
    `#version 300 es

    uniform vec2 u_resolution;
    uniform mat3 u_mat;
    uniform bool u_dashed;

    in vec2 a_position;
    flat out vec2 startPos;
    out vec2 vertPos;

    void main() {
        vec2 temp = a_position / u_resolution - 1.0;
        gl_Position = vec4(temp.x, -temp.y, 0, 1);
        if (u_dashed) {
            vertPos = a_position;
            startPos = a_position;
        }
    }
    `;

    const fragmentShaderSource2 = 
    `#version 300 es
    //#pragma vscode_glsllint_stage:frag
    precision highp float;

    uniform vec2 u_resolution;
    uniform vec4 u_color;
    uniform bool u_dashed;
    uniform float u_dashSize;
    uniform float u_gapSize;
    flat in vec2 startPos;
    in vec2 vertPos;
    out vec4 outColor;

    void main() {
        outColor.rgb += u_color.rgb;
        outColor.a = u_color.a;
        if (u_dashed) { 
            float dist = length(vertPos - startPos);
            outColor.a *= float(fract(dist / (u_dashSize + u_gapSize)) <= u_dashSize/(u_dashSize + u_gapSize));
        }
    }
    `;
    let vertexShader2   = glCreateShader(gl.VERTEX_SHADER, vertexShaderSource2);
    let fragmentShader2 = glCreateShader(gl.FRAGMENT_SHADER, fragmentShaderSource2);
    glLineProgram       = glCreateProgram(vertexShader2, fragmentShader2);
    let a_position_2           = gl.getAttribLocation(glLineProgram,  "a_position");
    glLineProgram_u_color      = gl.getUniformLocation(glLineProgram, "u_color");
    glLineProgram_u_mat        = gl.getUniformLocation(glLineProgram, "u_mat");
    glLineProgram_u_resolution = gl.getUniformLocation(glLineProgram, "u_resolution");
    glLineProgram_u_dashed     = gl.getUniformLocation(glLineProgram, "u_dashed");
    glLineProgram_u_dashSize   = gl.getUniformLocation(glLineProgram, "u_dashSize");
    glLineProgram_u_gapSize    = gl.getUniformLocation(glLineProgram, "u_gapSize");

    const vertexShaderSource3 = 
    `#version 300 es

    uniform vec2 u_resolution;
    uniform mat2 u_mat;
    uniform vec2 u_off;
    uniform vec2 u_size;

    in vec2 a_position;
    out vec2 v_texCoord;
    out vec2 v_tex;

    void main() {
        vec2 temp = a_position.xy * (u_size / u_resolution) + (u_off / u_resolution) + vec2(-1, 1);
        gl_Position = vec4(temp.x, temp.y, 0, 1);
        v_tex = a_position.xy * u_mat;
    }
    `;

    const fragmentShaderSource3 = 
    `#version 300 es
    precision highp float;

    uniform vec4 u_color;
    uniform float u_tan;
    in vec2 v_tex;
    out vec4 outColor;

    void main() {
        const float R  = 1.0;
        const float R2 = 0.6;
        float dist = length(v_tex);
        float circle = smoothstep(R, R - 0.01, dist) * smoothstep(R2, R2 + 0.01, dist);
        float arc_left  = circle  * float(v_tex.x <= 0.0) * float(u_tan >= 0.0);
        float arc_right = circle  * float(v_tex.x > 0.0);
        float tanx   = u_tan * v_tex.x;
        float itanx  = 1.0/u_tan * v_tex.x;
        float line1  = float(v_tex.y >= tanx);
        float line2  = float(v_tex.y <= -tanx);
        float line3  = float(v_tex.y <= (itanx));
        float line4  = float(v_tex.y >= -(itanx));
        float right1 = float(u_tan >= 0.0) * (arc_right * line1 + arc_right * line2);
        float right2 = float(u_tan < 0.0)  * arc_right * (1.0 - min(1.0, line3 + line4));
        outColor = vec4(u_color.r, u_color.g, u_color.b, u_color.a * (arc_left + right1 + right2));
    }
    `;

    let vertexShader3   = glCreateShader(gl.VERTEX_SHADER, vertexShaderSource3);
    let fragmentShader3 = glCreateShader(gl.FRAGMENT_SHADER, fragmentShaderSource3);
    glArcProgram        = glCreateProgram(vertexShader3, fragmentShader3);
    let a_position_3          = gl.getAttribLocation(glArcProgram,  "a_position");
    glArcProgram_u_color      = gl.getUniformLocation(glArcProgram, "u_color");
    glArcProgram_u_mat        = gl.getUniformLocation(glArcProgram, "u_mat");
    glArcProgram_u_resolution = gl.getUniformLocation(glArcProgram, "u_resolution");
    glArcProgram_u_off        = gl.getUniformLocation(glArcProgram, "u_off");
    glArcProgram_u_size       = gl.getUniformLocation(glArcProgram, "u_size");
    glArcProgram_u_tan        = gl.getUniformLocation(glArcProgram, "u_tan");

    // Texture
    gl.bindVertexArray(gl.createVertexArray());
    glFillProgram_texCoordBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, glFillProgram_texCoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        0, 0, 1, 0, 
        0, 1, 1, 1 
    ]), gl.DYNAMIC_DRAW);
    gl.enableVertexAttribArray(a_texCoord);
    gl.vertexAttribPointer(a_texCoord, 2, gl.FLOAT, false, 0, 0);

    // Pre-render
    glFillProgram_posBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, glFillProgram_posBuffer);

    gl.enableVertexAttribArray(a_position_2);
    gl.vertexAttribPointer(a_position_2, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(a_position_1);
    gl.vertexAttribPointer(a_position_1, 2, gl.FLOAT, false, 0, 0);

    gl.activeTexture(gl.TEXTURE0);
    GRAPHICS_INIT = true;
}
    
var glFillR = 0.0;
var glFillG = 0.0;
var glFillB = 0.0;
var glTexOffX = 0.0;
var glTexOffY = 0.0;
var glGlobalAlpha = 1.0;
var glStrokeR = 0.0;
var glStrokeG = 0.0;
var glStrokeB = 0.0;

function glDrawArc(_x, _y, radius, startAngle, endAngle) {
    var da = (endAngle - startAngle) / 2;
    var ra = startAngle + da;
    if (da > Math.PI/2) {
        da = Math.PI/2 - da;
        ra += Math.PI;
    }
    var cos = Math.cos(ra);
    var sin = Math.sin(ra);
    glSetProgram(glArcProgram);
    gl.uniform4f(glArcProgram_u_color, glStrokeR, glStrokeG, glStrokeB, glGlobalAlpha);
    gl.uniform2f(glArcProgram_u_off, _x, -_y);
    gl.uniform2f(glArcProgram_u_size, radius * 0.5, radius * 0.5);
    gl.uniform1f(glArcProgram_u_tan, Math.tan(Math.PI/2 + da));
    gl.uniformMatrix2fv(glArcProgram_u_mat, false, new Float32Array([
        cos, -sin,
        sin, cos,
    ]));
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        -1, -1,
        1, -1,
        -1, 1,
        1, 1,
    ]), gl.DYNAMIC_DRAW);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}

function glDrawLineDash(mode, size=4, gap=4) {
    glSetProgram(glLineProgram);
    gl.uniform1i(glLineProgram_u_dashed, mode ? 1 : 0);
    if (mode) {
        gl.uniform1f(glLineProgram_u_dashSize, size);
        gl.uniform1f(glLineProgram_u_gapSize, gap);
    }
}

function glDrawLine(x1, y1, x2, y2) {
    glSetProgram(glLineProgram);
    gl.uniform4f(glLineProgram_u_color, glStrokeR, glStrokeG, glStrokeB, glGlobalAlpha);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        x1, y1,
        x2, y2
    ]), gl.DYNAMIC_DRAW);
    gl.drawArrays(gl.LINES, 0, 2);
}

function glMyDrawImage(tex, _x1, _y1, _x2, _y2) {
    if (!tex || tex[0] == null) return;
    var _w = _x2;
    var _h = _y2;
    _y2 += _y1;
    _x2 += _x1;
    glSetProgram(glFillProgram);
    gl.uniform1i(glFillProgram_u_draw_texture, 1);
    gl.uniform4f(glFillProgram_u_color, 0.0, 0.0, 0.0, glGlobalAlpha);
    gl.bindTexture(gl.TEXTURE_2D, tex[0]);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        _x1, _y1,
        _x2, _y1,
        _x1, _y2,
        _x2, _y2,
    ]), gl.DYNAMIC_DRAW);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}

function glFillColor(color) {
    glFillR = parseInt(color.slice(1, 3), 16) / 255;
    glFillG = parseInt(color.slice(3, 5), 16) / 255;
    glFillB = parseInt(color.slice(5, 7), 16) / 255;
}

function glStrokeColor(color) {
    glStrokeR = parseInt(color.slice(1, 3), 16) / 255;
    glStrokeG = parseInt(color.slice(3, 5), 16) / 255;
    glStrokeB = parseInt(color.slice(5, 7), 16) / 255;
}

function glDrawRect(_x, _y, _w, _h) {
    if (_x > canvas_width) return;
    var _x_add_w = _x + _w;
    if (_x_add_w < 0) return;
    if (_y > canvas_height) return;
    var _y_add_h = _y + _h;
    if (_y_add_h < 0) return;
    if (_x_add_w > canvas_width) _w = canvas_width - _x;
    if (_y_add_h > canvas_height) _h = canvas_height - _y;
    if (_x < 0) {
        _w += _x;
        _x = 0;
    }
    if (_y < 0) {
        _h += _y;
        _y = 0;
    }

    glSetProgram(glFillProgram);
    gl.uniform1i(glFillProgram_u_draw_texture, 0);
    gl.uniform4f(glFillProgram_u_color, glFillR, glFillG, glFillB, glGlobalAlpha);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        _x,       _y,
        _x+_w, _y,
        _x,       _y+_h,
        _x+_w, _y+_h,
    ]), gl.DYNAMIC_DRAW);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}

function glPushMatrix() {

}

function glPopMatrix() {

}

function glMatrixScale() {

}

var titi = 0;

function RenderGL() {
    if (!GRAPHICS_INIT) return;
    if (getTimer() > last_save_time + 1000 * 60 * 45) {
        last_save_time = getTimer() + 1000 * 60 * 45;
        if (ActionArray.length > 30) switch (~~(Math.random() * 8)) {
            case 0:
                NewNote('Save me', note_passive);
                break;
            case 1:
                NewNote('It looks like map wasn\'t saved for last ~45 minutes', note_passive);
                break;
            case 2:
                NewNote('It seems to be good practice to save changes from time to time', note_passive);
                break;
            case 3:
                NewNote('Don\'t forget to save changes', note_passive);
                break;
            case 4:
                NewNote('This message appears on 45th minute of not saving', note_passive);
                break;
            case 5:
                NewNote('Note: Level Editor does not have auto-saves. But apparently it has annoying notifications like this one', note_passive);
                break;
            case 6:
                NewNote('How frequently do you save map changes?', note_passive);
                break;
            case 7:
                NewNote('Tip: This is a time-to-save tip', note_passive);
                break;
        }
    }
    var ddate = new Date();
    var time_mili = ddate.getTime();
    var time_mili_delta = time_mili - last_time_mili;
    last_time_mili = time_mili;
    var quick_pick_canover = true;
    DOQuad_i = 0;
    var curs = 'default';
    last_title_density = title_density;
    title_density = 0;
    if (space) {
        if (alt) {
            curs = 'url(zoom0.gif) 7 7, default';
        } else if (ctrl) {
            curs = 'url(zoom1.gif) 7 7, default';
        } else {
            if (m_drag_screen) curs = 'url(pan1.gif) 9 9, default';
            else curs = 'url(pan0.gif) 9 9, default';
        }
    }

    gl.clear(gl.COLOR_BUFFER_BIT/* | gl.DEPTH_BUFFER_BIT*/);
    glGlobalAlpha = 1;
    /*UpdateStars();*/
    if (THEME === THEME_BLUE) {
        glFillR = 0.345;
        glFillG = 0.502;
        glFillB = 0.670;
    }
    else {
        glFillR = glFillG = glFillB = 34;
    }
    glDrawRect(0, 0, canvas_width, canvas_height);
    /*titi += 0.02;
    glTextureMatrixIdentity();
    glMyDrawImage(CACHED_BGS[0], mouse_x, mouse_y, CACHED_BGS[0][2] * (2.0 + Math.sin(titi)), CACHED_BGS[0][3] * (1.3 + Math.cos(titi)), true);
    return;*/

    if (SHOW_TEXTURES) {
        var tex = '1';
        var tex_found = false;
        var scale = 1;
        for (var i = 0; i < es.length; i++) {
            if (es[i].exists) {
                if (es[i]._class === 'inf') {
                    if (!tex_found) {
                        if (es[i].pm.mark === 'sky') {
                            tex = es[i].pm.forteam;
                            tex_found = true;
                        }
                    }
                    if (es[i].pm.mark === 'gamescale') {
                        scale = es[i].pm.forteam / 100;
                    }
                } 
            }
        }
        if (CACHED_SKY[tex] != undefined) {
            if (CACHED_SKY[tex][0] != null) {
                glMyDrawImage(CACHED_SKY[tex], 0, 0, canvas_width, canvas_height);
                var cx = s2w_x(canvas_width * 0.5);
                var cy = s2w_y(canvas_height * 0.5);
                glGlobalAlpha = 0.25;
                glMyDrawImage(CACHED_SKY[tex], w2s_x(cx) - w2s_w(800 * 0.5 / scale), w2s_y(cy) - w2s_h(400 * 0.5 / scale), w2s_w(800 / scale), w2s_h(400 / scale));
                glGlobalAlpha = 1;
            }
        }
    }

    if (GRID_ALPHA > 0) glDrawGridlines();
    
    /*if (GRID_ALPHA > 0) {
        if (THEME !== THEME_DARK) glStrokeColor('#FFFFFF');
        else glStrokeColor('#888888');
        glDrawGridlines(10, 0.08 * GRID_ALPHA);
        glDrawGridlines(100, 0.32 * GRID_ALPHA);
        glDrawGridlines(300, 0.64 * GRID_ALPHA);
        glGlobalAlpha = GRID_ALPHA * 0.7;
        glDrawLine(0, w2s_y(0), canvas_width, w2s_y(0) + 1);
        glDrawLine(w2s_x(0), 0, w2s_x(0) + 1, canvas_height);
    }*/
    

    var selects = 0;
    var select_last = -1;
    var notselected = true;
    for (i = 0; i < es.length; i++) {
        if (es[i].exists && es[i].selected) {
            selects++;
            select_last = i;
        }
    }
    if (selects == 1) {
        if (es[select_last].hit(true) != false) notselected = false;
    } else if (selects > 1) {
        for (i = 0; i < es.length; i++) {
            if (es[i].exists && es[i]._isphysical && es[i].selected && es[i].hit(false)) {
                notselected = false;
                break;
            }
        }
    }
    
    if (active_tool != 'edit') selects = 0;
    var obviouse_sel = -1;
    if (notselected || k_shift) {
        var i = es.length - 1;
        i = (selects == 1 && k_shift) ? select_last : 0;
        for (var c = 0; c < es.length; c++) {
            i--;
            if (i < 0) i = es.length - 1;
            if (es[i].exists && es[i]._isphysical && MatchLayer(es[i]) && es[i].hit(false)) {
                obviouse_sel = i;
                break;
            }
        }
    }

    //var loopCount = 0;
    {
        for (i = 0; i < es.length; i++) {
            if (!es[i].exists || !es[i]._isphysical) continue;
            var relative_alpha = MatchLayer(es[i]) ? 1 : 0.3;
            if (SHOW_CONNECTIONS && es[i].selected) {
                var nLines = 0;
                var lineCoords = [];
                //glSetProgram(glLineProgram);
                //gl.uniform4f(glLineProgram_u_color, glStrokeR, glStrokeG, glStrokeB, glGlobalAlpha);
                for (property in es[i].pm) {
                    //loopCount++;
                    if (property != 'uid') {
                        var value = es[i].pm[property];
                        if (typeof value == 'string' && value.length > 1 && value.charAt(0) === '#') {
                            for (var i2 = 0; i2 < es.length; i2++) {
                                //loopCount++;
                                if (!es[i2].exists || es[i2].pm.uid !== value) continue;
                                glGlobalAlpha = relative_alpha * 1;
                                //glStrokeColor('#66ff66');
                                // ctx.lineWidth = 1;
                                // ctx.setLineDash([4, 4]);
                                /*var x1 = w2s_x(es[i].pm.x);
                                var y1 = w2s_y(es[i].pm.y);
                                if (es[i]._isresizable) {
                                    x1 += w2s_w(es[i].pm.w) * 0.5;
                                    y1 += w2s_h(es[i].pm.h) * 0.5;
                                }
                                var x2 = w2s_x(es[i2].pm.x);
                                var y2 = w2s_y(es[i2].pm.y);
                                if (es[i2]._isresizable) {
                                    x2 += w2s_w(es[i2].pm.w) * 0.5;
                                    y2 += w2s_h(es[i2].pm.h) * 0.5;
                                }*/
                                //lineCoords = lineCoords.concat([x1, y1, x2, y2]);
                                nLines++;
                                //glDrawLine(x1, y1, x2, y2);
                                //ctx.beginPath();
                                //ctx.moveTo(x1, y1);
                                //ctx.lineTo(x2, y2);
                                //ctx.stroke();
                            }
                        }
                    }
                    for (var i2 = 0; i2 < es.length; i2++) {
                        //loopCount++;
                        if (!es[i2].exists) continue;
                        for (property in es[i2].pm) {
                            //loopCount++;
                            if (property == 'uid') continue; 
                            var value = es[i2].pm[property];
                            if (value === es[i].pm.uid) {
                                glGlobalAlpha = relative_alpha * 1;
                                //glStrokeColor('#ffffff');
                                // ctx.lineWidth = 1;
                                // ctx.setLineDash([4, 4]);
                                /*var x1 = w2s_x(es[i].pm.x);
                                var y1 = w2s_y(es[i].pm.y);
                                if (es[i]._isresizable) {
                                    x1 += w2s_w(es[i].pm.w) * 0.5;
                                    y1 += w2s_h(es[i].pm.h) * 0.5;
                                }
                                var x2 = w2s_x(es[i2].pm.x);
                                var y2 = w2s_y(es[i2].pm.y);
                                if (es[i2]._isresizable) {
                                    x2 += w2s_w(es[i2].pm.w) * 0.5;
                                    y2 += w2s_h(es[i2].pm.h) * 0.5;
                                }*/
                                //lineCoords = lineCoords.concat([x1, y1, x2, y2]);
                                nLines++;
                                //glDrawLine(x1, y1, x2, y2);
                                /*ctx.beginPath();
                                ctx.moveTo(x1, y1);
                                ctx.lineTo(x2, y2);
                                ctx.stroke();*/
                            }
                        }
                    }
                }
                
                if (nLines > 0) {
                    //console.log('drawing ' + (nLines*2) + ' points: ' + lineCoords);
                    //gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(lineCoords), gl.DYNAMIC_DRAW);
                    //gl.drawArrays(gl.LINES, 0, nLines * 2);
                }
            }
            if (es[i]._isresizable) { // RESIZABLES (walls, water, regions, ...)
                var x1 = w2s_x(es[i].pm.x);
                var x2 = w2s_w(es[i].pm.w);
                var y1 = w2s_y(es[i].pm.y);
                var y2 = w2s_h(es[i].pm.h);
                glGlobalAlpha = relative_alpha * 0.2;
                if (es[i]._class == 'box') {
                    glFillR = glFillG = glFillB = 1;
                    if (SHOW_TEXTURES) {
                        glGlobalAlpha = relative_alpha;
                        glFillR = glFillG = glFillB = 0;
                    }
                }
                if (es[i]._class == 'door') {
                    glFillR = glFillG = glFillB = 0;
                    if (!(es[i].pm.vis == 1 || es[i].pm.vis == true || es[i].pm.vis == 'true')) glGlobalAlpha = relative_alpha * 0.05;
                }
                if (es[i]._class == 'water') {
                    if (es[i].pm.damage > 0) {
                        glGlobalAlpha = relative_alpha * 0.81;
                        glFillColor('#BBFB59');
                    } else {
                        glGlobalAlpha = relative_alpha * 0.24;
                        glFillColor('#3592B9');
                    }
                }
                if (es[i]._class == 'region') glFillColor('#FFD52B');
                if (es[i]._class == 'pushf') glFillColor('#2BFF40');
                if (es[i]._class == 'bg') {
                    var image_drawn = false;
                    if (special_values_table['bg_model'][es[i].pm.m] == undefined) ServerRequest('a=get_images&for_class=bg_model&update_const=' + es[i].pm.m, 'request_consts');
                    if (SHOW_TEXTURES) {
                        if (CACHED_BGS[es[i].pm.m] != undefined) {
                            if (CACHED_BGS[es[i].pm.m][0] != null) {
                                glGlobalAlpha = relative_alpha;
                                var tex = CACHED_BGS[es[i].pm.m];
                                /*var xx_from = Math.floor((Math.max(es[i].pm.x, dis_from_x) - es[i].pm.u) / tex[2]) * tex[2] + es[i].pm.u;
                                var xx_to = Math.ceil((Math.min(es[i].pm.x, dis_to_x) - es[i].pm.u + es[i].pm.w) / tex[2]) * tex[2] + es[i].pm.u;
                                var yy_from = Math.floor((Math.max(es[i].pm.y, dis_from_y) - es[i].pm.v) / tex[3]) * tex[3] + es[i].pm.v;
                                var yy_to = Math.ceil((Math.min(es[i].pm.y, dis_to_y) - es[i].pm.v + es[i].pm.h) / tex[3]) * tex[3] + es[i].pm.v;
                                var x2b = w2s_w(tex[2]);
                                var y2b = w2s_h(tex[3]);
                                ctx.save();
                                ctx.beginPath();
                                ctx.moveTo(x1, y1);
                                ctx.lineTo(x1 + x2, y1);
                                ctx.lineTo(x1 + x2, y1 + y2);
                                ctx.lineTo(x1, y1 + y2);
                                ctx.closePath();
                                ctx.clip();
                                ctx.translate(w2s_x(0), w2s_y(0));
                                ctx.scale(w2s_x(1) - w2s_x(0), w2s_y(1) - w2s_y(0));
                                let u = es[i].pm.u || 0;
                                let v = es[i].pm.v || 0;
                                ctx.translate(u, v);
                                if (!tex.tiled_pattern) tex.tiled_pattern = ctx.createPattern(tex, "repeat");
                                ctx.fillStyle = tex.tiled_pattern;
                                ctx.fillRect(s2w_x(0) - u, s2w_y(0) - v, s2w_w(canvas_width), s2w_h(canvas_height));
                                ctx.restore();*/
                                let u = es[i].pm.u || 0;
                                let v = es[i].pm.v || 0;
                                //console.log('BG: ' + (es[i].pm.m));
                                glTextureMatrixIdentity();
                                glTextureMatrixScale((es[i].pm.w / tex[2]), (es[i].pm.h / tex[3]));
                                glMyDrawImage(tex, w2s_x(es[i].pm.x), w2s_y(es[i].pm.y), w2s_w(es[i].pm.w), w2s_h(es[i].pm.h));
                                glTextureMatrixIdentity();
                                image_drawn = true;
                            }
                        }
                    }
                    glGlobalAlpha = relative_alpha * 0.1;
                    glFillR = glFillG = glFillB = 0;
                    if (es[i].pm.c != undefined) {
                        if (es[i].pm.c.length == 7) {
                            if (false && image_drawn) {
                                var old_comp = ctx.globalCompositeOperation;
                                ctx.globalCompositeOperation = 'multiply';
                                glGlobalAlpha = relative_alpha;
                                ctx.fillStyle = es[i].pm.c;
                                draw_rect(x1, y1, x2, y2);
                                ctx.globalCompositeOperation = 'lighter';
                                if (x2 > 0 && y2 > 0) {
                                    ctx.drawImage(ctx.canvas, x1, y1, x2, y2, x1, y1, x2, y2);
                                    glGlobalAlpha = 0;
                                } else {
                                    glGlobalAlpha = relative_alpha * 1;
                                    ctx.fillStyle = '#FF0000';
                                }
                                ctx.globalCompositeOperation = old_comp;
                            } else {
                                glGlobalAlpha = relative_alpha; //relative_alpha * 0.22;
                                glFillColor(es[i].pm.c);
                            }
                        }
                    }
                }
                glDrawRect(x1, y1, x2, y2);
                glGlobalAlpha = relative_alpha * 1;
                if (es[i]._class == 'box') {
                    glStrokeR = glStrokeG = glStrokeB = 1;
                    if (SHOW_TEXTURES) glStrokeColor('#333333');
                }
                if (es[i]._class == 'door') {
                    glStrokeR = glStrokeG = glStrokeB = 0;
                }
                if (es[i]._class == 'water') glStrokeColor('#91EAFF');
                if (es[i]._class == 'region') {
                    glGlobalAlpha = relative_alpha * 0.5;
                    glStrokeColor('#FFB03C');
                }
                if (es[i]._class == 'pushf') glStrokeColor('#3CFF4F');
                if (es[i]._class == 'bg') {
                    glGlobalAlpha = relative_alpha * 0.3;
                    glStrokeColor('#910000');
                }
                glDrawRectSides(x1, y1, x2, y2);
                if (es[i]._class == 'region') {
                    if (es[i].pm.use_on == 1 || es[i].pm.use_on == 9 || es[i].pm.use_on == 10) {
                        glGlobalAlpha = relative_alpha * 0.5;
                        glMyDrawImage(es[i].pm.use_on == 1 ? img_region : (es[i].pm.use_on == 9 ? img_region_red : img_region_blue), w2s_x(es[i].pm.x + Math.round(es[i].pm.w / 2 - 41 / 2)), w2s_y(es[i].pm.y + Math.round(es[i].pm.h / 2 - 10 - 31 / 2)), w2s_w(41), w2s_h(31));
                    }
                }
            } else { // NON-RESIZABLES (players, triggers, guns, ...)
                if (!(es[i]._class == 'lua' || es[i]._class == 'player'  || es[i]._class == 'enemy' || es[i]._class == 'gun'    || 
                es[i]._class == 'lamp'      || es[i]._class == 'trigger' || es[i]._class == 'timer' || es[i]._class == 'inf'    || 
                es[i]._class == 'song'      || es[i]._class == "image"   || es[i]._class == 'decor' || es[i]._class == 'barrel' || es[i]._class == 'vehicle')) continue;
                glGlobalAlpha = relative_alpha * 1;
                var will_rotate_by = 0;
                var will_scalex_by = 1;
                var will_scaley_by = 1;
                if (es[i]._class == 'decor') {
                    will_rotate_by = (es[i].pm.r / 180 * Math.PI) || 0;
                    will_scalex_by = (es[i].pm.sx !== undefined) ? es[i].pm.sx : 1;
                    will_scaley_by = (es[i].pm.sy !== undefined) ? es[i].pm.sy : 1;
                }
                if (will_rotate_by != 0 || will_scalex_by != 1 || will_scaley_by != 1) {
                    /*ctx.save();
                    var pos_lo_x = w2s_x(es[i].pm.x);
                    var pos_lo_y = w2s_y(es[i].pm.y);
                    ctx.translate(pos_lo_x, pos_lo_y);
                    ctx.rotate(will_rotate_by);
                    ctx.scale(will_scalex_by, will_scaley_by);
                    ctx.translate(-pos_lo_x, -pos_lo_y);*/
                }
                var this_img_class = ThinkOfOffsetClass(es[i]._class, es[i]);
                var image_drawn = false;
                if (es[i]._class == 'decor') {
                    if (es[i].pm.model != '0') {
                        if (special_values_table['decor_model'][es[i].pm.model] == undefined){
                            ServerRequest('a=get_images&for_class=' + 'decor_model' + '&update_const=' + es[i].pm.model, 'request_consts');
                        }
                    }
                    if (CACHED_DECORS[es[i].pm.model] != undefined) {
                        if (CACHED_DECORS[es[i].pm.model][0] != null) {
                            if (!(CACHED_DECORS[es[i].pm.model][1] & GLF_TEX_NATIVE)) {
                                var x1 = w2s_x(es[i].pm.x + es[i].pm.u);
                                var y1 = w2s_y(es[i].pm.y + es[i].pm.v);
                                var x2 = w2s_w(CACHED_DECORS[es[i].pm.model][2]);
                                var y2 = w2s_h(CACHED_DECORS[es[i].pm.model][3]);
                                glMyDrawImage(CACHED_DECORS[es[i].pm.model], x1, y1, x2, y2);
                                image_drawn = true;
                            }
                        }
                    }
                }
                if (es[i].pm.side != -1) {
                    var x1 = w2s_x(es[i].pm.x + lo_x[this_img_class]);
                    var y1 = w2s_y(es[i].pm.y + lo_y[this_img_class]);
                    var x2 = w2s_w(lo_w[this_img_class]);
                    var y2 = w2s_h(lo_h[this_img_class]);
                    if (es[i]._class == 'player' || es[i]._class == 'enemy') {
                        glMyDrawImage(img_chars_full[es[i].pm.char], w2s_x(es[i].pm.x - 36), w2s_y(es[i].pm.y - 104), w2s_w(110), w2s_h(130));
                    } else {
                        if (!image_drawn) glMyDrawImage(img_decide(es[i]), x1, y1, x2, y2);
                    }
                } else {
                    var x1 = w2s_x(es[i].pm.x - lo_x[this_img_class]);
                    var y1 = w2s_y(es[i].pm.y + lo_y[this_img_class]);
                    var x2 = w2s_w(-lo_w[this_img_class]);
                    var y2 = w2s_h(lo_h[this_img_class]);
                    //ctx.save();
                    //ctx.translate(2 * (x1) + x2, 0);
                    //ctx.scale(-1, 1);
                    glPushMatrix();
                    glMatrixScale(-1, 1);
                    if (es[i]._class == 'player' || es[i]._class == 'enemy') {
                        glMyDrawImage(img_chars_full[es[i].pm.char], w2s_x(es[i].pm.x - 36), w2s_y(es[i].pm.y - 104), w2s_w(110), w2s_h(130));
                    } else {
                        if (!image_drawn) glMyDrawImage(img_decide(es[i]), x1, y1, x2, y2);
                    }
                    glPopMatrix();
                    //ctx.restore();
                }
                var this_class = ThinkOfBBoxClass(es[i]._class, es[i]);
                y1 = w2s_y(es[i].pm.y + bo_y[this_class]);
                y2 = w2s_h(bo_h[this_class]);
                if (es[i].pm.side != -1) {
                    x1 = w2s_x(es[i].pm.x + bo_x[this_class]);
                    x2 = w2s_w(bo_w[this_class]);
                } else {
                    x1 = w2s_x(es[i].pm.x - bo_x[this_class]);
                    x2 = w2s_w(-bo_w[this_class]);
                    x1 += x2;
                    x2 = -x2;
                }
                if (will_rotate_by != 0 || will_scalex_by != 1 || will_scaley_by != 1) {
                    //ctx.restore();
                }
                glGlobalAlpha = relative_alpha * 0.1;
                glStrokeR = glStrokeG = glStrokeB = 0;
                glDrawRectSides(x1, y1, x2, y2);
            }
        }
    }

    var font_time = 0;
    for (i = 0; i < es.length; i++) {
        glGlobalAlpha = 1;
        if (!es[i].exists || !es[i]._isphysical) continue;
        if (es[i]._isresizable) {
            var x1 = w2s_x(es[i].pm.x);
            var x2 = w2s_w(es[i].pm.w);
            var y1 = w2s_y(es[i].pm.y);
            var y2 = w2s_h(es[i].pm.h);
        } else {
            var this_class = ThinkOfBBoxClass(es[i]._class, es[i]);
            var y1 = w2s_y(es[i].pm.y + bo_y[this_class]);
            var y2 = w2s_h(bo_h[this_class]);
            if (es[i].pm.side != -1) {
                var x1 = w2s_x(es[i].pm.x + bo_x[this_class]);
                var x2 = w2s_w(bo_w[this_class]);
            } else {
                var x1 = w2s_x(es[i].pm.x - bo_x[this_class]);
                var x2 = w2s_w(-bo_w[this_class]);
                x1 += x2;
                x2 = -x2;
            }
        }
        if (es[i].selected) {
            glGlobalAlpha = 0.2;
            glTextureMatrixIdentity();
            glTextureMatrixScale(w2s_w(es[i].pm.w) / img_slct2[2], w2s_h(es[i].pm.h) / img_slct2[3]);
            glMyDrawImage(img_slct2, x1, y1, x2, y2);
            glTextureMatrixIdentity();
        }
        x1 -= 2;
        y1 -= 2;
        x2 += 4;
        y2 += 4;
        if (es[i].selected) {
            glGlobalAlpha = 1;
            glFillR = glFillG = glFillB = 1;
            glMyDrawSelection(x1, y1, x2, y2);
        }
        if (!space) {
            if (!quick_pick) {
                if (obviouse_sel == i || ((ctrl || alt || m_drag_selection) && (es[i].hit(false) || es[i].hitSelect()))) {
                    if (MatchLayer(es[i])) {
                        glStrokeColor(selgrd3);
                        if (ctrl) glStrokeColor('#AAFFAA');
                        else if (alt) glStrokeColor('#FFAAAA');
                        else glDrawLineDash(true, 2, 2);
                        glGlobalAlpha = 0.5;
                        glNewDrawRectSides(x1, y1, x2, y2);
                        glDrawLineDash(false);
                        glGlobalAlpha = 1;
                    } 
                }
            }
        }
        x1 += 2;
        y1 += 2;
        x2 -= 4;
        y2 -= 4;
        var can_qp = quick_pick && quick_pick_objects.indexOf(es[i]._class) != -1;
        if (can_qp) {
            glGlobalAlpha = 0.75 - Math.sin(time_mili / 100) / 4;
            var size = 32 - 5 + Math.sin(time_mili / 100) * 5;
            var over = false;
            if (quick_pick_canover) {
                if (quick_pick_fake_over == i) over = true;
                else over = Math.sqrt(Math.pow(x1 + x2 / 2 - mouse_x, 2) + Math.pow(y1 + y2 / 2 - mouse_y, 2)) < 20 * quick_pick_hit_scale;
            }
            if (over && quick_pick_canover) quick_pick_canover = false;
            glMyDrawImage(over ? img_quickpick2 : img_quickpick, x1 + x2 / 2 - size, y1 + y2 / 2 - size, size * 2, size * 2);
            need_redraw = true;
        }
        if (es[i].pm.uid != undefined) {
            if (MatchLayer(es[i]) || can_qp) {
                /*if (ENABLE_TEXT) {
                    var capx = x1 + x2 / 2;
                    var capy = y1 + y2 / 2;
                    if (capx < -100) continue;
                    if (capx > canvas_width) continue;
                    if (capy < -100) continue;
                    if (capy > canvas_height) continue;
                    if (ENABLE_SHADOWS) {
                        ctx.shadowColor = 'rgba(0, 0, 0, 1)';
                        ctx.shadowBlur = 2;
                        ctx.shadowOffsetX = 1;
                        ctx.shadowOffsetY = 1;
                    }
                    var gothit = (!can_qp && (i == obviouse_sel || (es[i].selected && es[i].hit(false)))) || (can_qp && (over));
                    ctx.font = "normal 10px Arial";
                    var fillText = es[i].pm.uid;
                    var dim = ctx.measureText(fillText);
                    dim.height = 10;
                    if (gothit) dim.height = 12;
                    if (mouse_x > capx - 30) {
                        if (mouse_x < capx + 30) {
                            if (mouse_y > capy - 30) {
                                if (mouse_y < capy + 30) {
                                    title_density++;
                                } 
                                ctx.globalAlpha = 1;
                            }
                        }
                    }
                    if (last_title_density > 1 && !gothit) {
                        var di = Math.sqrt(Math.pow(mouse_x - capx, 2) + Math.pow(mouse_y - capy, 2));
                        if (di < 60) {
                            if (!es[i].selected) {
                                capx = capx - (mouse_x - capx) * Math.pow((60 - di) / 60, 2) * (4 + Math.min(6, last_title_density * 0.1));
                                capy = capy - (mouse_y - capy) * Math.pow((60 - di) / 60, 2) * (4 + Math.min(6, last_title_density * 0.1));
                                if (last_title_density > 1) ctx.globalAlpha = Math.max(0.4, 1 - last_title_density * 0.1);
                            } else {
                                ctx.globalAlpha = Math.max(0.3, 1 / last_title_density);
                            }
                        }
                    }
                    var x3 = Math.round(capx - dim.width / 2);
                    var y3 = Math.round(capy - dim.height / 2);
                    if (!ENABLE_SHADOWS) {
                        ctx.fillStyle = 'rgba(0,0,0,0.1)';
                        ctx.fillRect(x3 - 2, y3 - 2, dim.width + 4, dim.height + 4);
                        ctx.fillRect(x3 - 4, y3 - 4, dim.width + 8, dim.height + 8);
                    }

                    ctx.fillStyle = "#FFF";
                    if (gothit) ctx.fillStyle = '#fffb91';
                    if (es[i].selected) ctx.fillStyle = '#FF0';
                    var tim = new Date().getTime();

                    ctx.fillText(fillText, x3, y3 + 8 + (dim.height - 10) / 2);
                    font_time += new Date().getTime() - tim;
                    if (ENABLE_SHADOWS) {
                        ctx.shadowColor = 'black';
                        ctx.shadowBlur = 0;
                        ctx.shadowOffsetX = 0;
                        ctx.shadowOffsetY = 0;
                    }
                }*/
            }
        }
    }
    // if (loopCount > 0) console.log('loopcount: ' + loopCount);
    if (font_time > 20) {
        ENABLE_SHADOWS = false;
    }
    // Resizing
    if (!paint_draw_mode && selects == 1 && !m_dragging && !ctrl && !alt && !space && !k_shift && es[select_last]._isresizable) {
        i = select_last;
        var h = true;
        if (!m_scaling) h = es[i].hit(true);
        if (h != false) {
            if (es[i].exists) {
                if (MatchLayer(es[i])) {
                    glFillR = glFillG = glFillB = 1.0;
                    if (glDOQuad(es[i].pm.x - borderwidth, es[i].pm.y - borderwidth, borderwidth * 2, borderwidth * 2)) curs = 'se-resize';
                    if (glDOQuad(es[i].pm.x + es[i].pm.w - borderwidth, es[i].pm.y - borderwidth, borderwidth * 2, borderwidth * 2)) curs = 'ne-resize';
                    if (glDOQuad(es[i].pm.x - borderwidth, es[i].pm.y + es[i].pm.h - borderwidth, borderwidth * 2, borderwidth * 2)) curs = 'ne-resize';
                    if (glDOQuad(es[i].pm.x + es[i].pm.w - borderwidth, es[i].pm.y + es[i].pm.h - borderwidth, borderwidth * 2, borderwidth * 2)) curs = 'se-resize';
                    if (glDOQuad(es[i].pm.x + borderwidth, es[i].pm.y - borderwidth, es[i].pm.w - borderwidth * 2, borderwidth * 2)) curs = 'n-resize';
                    if (glDOQuad(es[i].pm.x + borderwidth, es[i].pm.y + es[i].pm.h - borderwidth, es[i].pm.w - borderwidth * 2, borderwidth * 2)) curs = 'n-resize';
                    if (glDOQuad(es[i].pm.x - borderwidth, es[i].pm.y + borderwidth, borderwidth * 2, es[i].pm.h - borderwidth * 2)) curs = 'e-resize';
                    if (glDOQuad(es[i].pm.x + es[i].pm.w - borderwidth, es[i].pm.y + borderwidth, borderwidth * 2, es[i].pm.h - borderwidth * 2)) curs = 'e-resize';
                }
            }
        }
    }
                            
    if (active_tool != 'edit') {
        glGlobalAlpha = 1;
        glMyDrawImage(img_put, w2s_x(Math.round(m_pos_x / GRID_SNAPPING) * GRID_SNAPPING) - 15, w2s_y(Math.round(m_pos_y / GRID_SNAPPING) * GRID_SNAPPING) - 15, 31, 31);
    }

    if (m_drag_selection) {
        if (!m_isdown) {
            var x1 = w2s_x(Math.min(m_down_x, m_pos_x));
            var x2 = w2s_w(Math.abs(m_down_x - m_pos_x));
            var y1 = w2s_y(Math.min(m_down_y, m_pos_y));
            var y2 = w2s_h(Math.abs(m_down_y - m_pos_y));
            glFillR = glFillG = glFillB = 1;

            if (ctrl) glFillColor('#AAFFAA');
            else if (alt) glFillColor('#FFAAAA');
            glGlobalAlpha = 0.1;
            glDrawRect(x1, y1, x2, y2);
            glGlobalAlpha = 0.8;
            glDrawRect(x1, y1, 1, y2);
            glDrawRect(x1 + x2, y1, 1, y2);
            glDrawRect(x1, y1, x2, 1);
            glDrawRect(x1, y1 + y2, x2, 1);
        } 
        if (enabletrace) {
            /*ctx.font = "normal 10px Arial";
            glGlobalAlpha = 1;
            glFillColor("#FFFFFF");
            var from_y = 15;
            if (ConsoleTraceMessages.length * 10 + 15 > canvas_height - 15) from_y = canvas_height - 15 - ConsoleTraceMessages.length * 10;
            for (var i = 0; i < ConsoleTraceMessages.length; i++) {
                var fillText = ConsoleTraceMessages[i];
                ctx.fillText(fillText, 15, from_y + i * 10);
            }*/
        }
    }
    if (!space) {
        var offs = 22;
        glGlobalAlpha = 1;
        if (ctrl) {
            glMyDrawImage(img_ctrl, mouse_x + 12, mouse_y + offs, img_ctrl[2], img_ctrl[3]);
            offs += 8;
        }
        if (alt) {
            glMyDrawImage(img_alt, mouse_x + 12, mouse_y + offs, img_alt[2], img_alt[3]);
            offs += 8;
        }
        if (k_shift) glMyDrawImage(img_shift, mouse_x + 12, mouse_y + offs, img_shift[2], img_shift[3]);
    }
    var parts_total = ActionArray.length;
    if (history_runer_timer > 0) {
        if (parts_total > 0) {
            var width_each = 2 * Math.PI / (parts_total + 1);
            var power = 1 - Math.pow(1 - history_runer_timer, 4);
            //ctx.lineWidth = 10;
            //ctx.strokeStyle = "#FFFFFF";
            glStrokeR = glStrokeB = glStrokeG = 1;
            for (var xx = 0; xx < parts_total; xx++) {
                //if (xx == ActionCurrent) ctx.globalAlpha = power * 0.3;
                //else ctx.globalAlpha = power * 0.15;
                //ctx.beginPath();
                //ctx.arc(mouse_x, mouse_y, 20, -width_each * xx - width_each * 0.45 - Math.PI / 2, -width_each * xx + width_each * 0.45 - Math.PI / 2);
                //ctx.stroke();
                if (xx == ActionCurrent) glGlobalAlpha = power * 0.3;
                else glGlobalAlpha = power * 0.15;
                glDrawArc(mouse_x, mouse_y, 40, -width_each * xx - width_each * 0.45 - Math.PI / 2, -width_each * xx + width_each * 0.45 - Math.PI / 2);
            }
            history_runer_timer -= time_mili_delta * 0.0005;
            need_redraw = true;
        } 
    }
    if (canv.style.cursor != curs) canv.style.cursor = curs;
}

function Render2D() {
    if (getTimer() > last_save_time + 1000 * 60 * 45) {
        last_save_time = getTimer() + 1000 * 60 * 45;
        if (ActionArray.length > 30) switch (~~(Math.random() * 8)) {
            case 0:
                NewNote('Save me', note_passive);
                break;
            case 1:
                NewNote('It looks like map wasn\'t saved for last ~45 minutes', note_passive);
                break;
            case 2:
                NewNote('It seems to be good practice to save changes from time to time', note_passive);
                break;
            case 3:
                NewNote('Don\'t forget to save changes', note_passive);
                break;
            case 4:
                NewNote('This message appears on 45th minute of not saving', note_passive);
                break;
            case 5:
                NewNote('Note: Level Editor does not have auto-saves. But apparently it has annoying notifications like this one', note_passive);
                break;
            case 6:
                NewNote('How frequently do you save map changes?', note_passive);
                break;
            case 7:
                NewNote('Tip: This is a time-to-save tip', note_passive);
                break;
        }
    }
    var ddate = new Date();
    var time_mili = ddate.getTime();
    var time_mili_delta = time_mili - last_time_mili;
    last_time_mili = time_mili;
    var quick_pick_canover = true;
    DOQuad_i = 0;
    var curs = 'default';
    last_title_density = title_density;
    title_density = 0;
    if (space) {
        if (alt) {
            curs = 'url(zoom0.gif) 7 7, default';
        } else if (ctrl) {
            curs = 'url(zoom1.gif) 7 7, default';
        } else {
            if (m_drag_screen) curs = 'url(pan1.gif) 9 9, default';
            else curs = 'url(pan0.gif) 9 9, default';
        }
    }
    ctx.globalAlpha = 1;
    /*UpdateStars();*/
    if (THEME === THEME_BLUE) ctx.fillStyle = '#5880AB';
    else ctx.fillStyle = '#222222';
    draw_rect(0, 0, canvas_width, canvas_height);
    if (SHOW_TEXTURES) {
        var tex = '1';
        var tex_found = false;
        var scale = 1;
        for (var i = 0; i < es.length; i++) {
            if (es[i].exists) {
                if (es[i]._class === 'inf') {
                    if (!tex_found)
                        if (es[i].pm.mark === 'sky') {
                            tex = es[i].pm.forteam;
                            tex_found = true;
                        } if (es[i].pm.mark === 'gamescale') {
                        scale = es[i].pm.forteam / 100;
                    }
                } 
            }
        }
        if (CACHED_SKY[tex] != undefined) {
            if (CACHED_SKY[tex].loaded) {
                MyDrawImage(CACHED_SKY[tex], 0, 0, canvas_width, canvas_height);
                var cx = s2w_x(canvas_width * 0.5);
                var cy = s2w_y(canvas_height * 0.5);
                ctx.globalAlpha = 0.25;
                MyDrawImage(CACHED_SKY[tex], w2s_x(cx) - w2s_w(800 * 0.5 / scale), w2s_y(cy) - w2s_h(400 * 0.5 / scale), w2s_w(800 / scale), w2s_h(400 / scale));
                ctx.globalAlpha = 1;
            }
        }
    }
    if (GRID_ALPHA > 0) {
        if (THEME !== THEME_DARK) ctx.fillStyle = '#FFFFFF';
        else ctx.fillStyle = '#888888';
        draw_gridlines(10, 0.08 * GRID_ALPHA);
        draw_gridlines(100, 0.32 * GRID_ALPHA);
        draw_gridlines(300, 0.64 * GRID_ALPHA);
        ctx.globalAlpha = GRID_ALPHA * 0.7;
        draw_rect(0, w2s_y(0), canvas_width, 1);
        draw_rect(w2s_x(0), 0, 1, canvas_height);
    }
    var selects = 0;
    var select_last = -1;
    var notselected = true;
    for (i = 0; i < es.length; i++)
        if (es[i].exists)
            if (es[i].selected) {
                selects++;
                select_last = i;
            } 
    if (selects == 1) {
        if (es[select_last].hit(true) != false) notselected = false;
    } else if (selects > 1) {
        for (i = 0; i < es.length; i++)
            if (es[i].exists)
                if (es[i]._isphysical)
                    if (es[i].selected)
                        if (es[i].hit(false)) notselected = false;
    }
    if (active_tool != 'edit') selects = 0;
    var obviouse_sel = -1;
    if (notselected || k_shift) {
        var i = es.length - 1;
        i = (selects == 1 && k_shift) ? select_last : 0;
        for (var c = 0; c < es.length; c++) {
            i--;
            if (i < 0) i = es.length - 1;
            if (es[i].exists) {
                if (MatchLayer(es[i])) {
                    if (es[i]._isphysical) {
                        if (es[i].hit(false)) {
                            obviouse_sel = i;
                            break;
                        }
                    }
                }
            }
        }
    } 
    {
        for (i = 0; i < es.length; i++) {
            if (!(es[i].exists &&  es[i]._isphysical)) continue; 
            var relative_alpha = MatchLayer(es[i]) ? 1 : 0.3;
            if (SHOW_CONNECTIONS) {
                if (es[i].selected) {
                    for (property in es[i].pm) {
                        if (property != 'uid') {
                            var value = es[i].pm[property];
                            if (typeof value == 'string') {
                                if (value.length > 1) {
                                    if (value.charAt(0) === '#') {
                                        for (var i2 = 0; i2 < es.length; i2++) {
                                            if (es[i2].exists) {
                                                if (es[i2].pm.uid === value) {
                                                    ctx.globalAlpha = relative_alpha * 1;
                                                    ctx.strokeStyle = '#66ff66';
                                                    ctx.lineWidth = 1;
                                                    ctx.setLineDash([4, 4]);
                                                    var x1 = w2s_x(es[i].pm.x);
                                                    var y1 = w2s_y(es[i].pm.y);
                                                    if (es[i]._isresizable) {
                                                        x1 += w2s_w(es[i].pm.w) * 0.5;
                                                        y1 += w2s_h(es[i].pm.h) * 0.5;
                                                    }
                                                    var x2 = w2s_x(es[i2].pm.x);
                                                    var y2 = w2s_y(es[i2].pm.y);
                                                    if (es[i2]._isresizable) {
                                                        x2 += w2s_w(es[i2].pm.w) * 0.5;
                                                        y2 += w2s_h(es[i2].pm.h) * 0.5;
                                                    }
                                                    ctx.beginPath();
                                                    ctx.moveTo(x1, y1);
                                                    ctx.lineTo(x2, y2);
                                                    ctx.stroke();
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        for (var i2 = 0; i2 < es.length; i2++) {
                            if (es[i2].exists) {
                                for (property in es[i2].pm) {
                                    if (property != 'uid') {
                                        var value = es[i2].pm[property];
                                        if (value === es[i].pm.uid) {
                                            ctx.globalAlpha = relative_alpha * 1;
                                            ctx.strokeStyle = '#ffffff';
                                            ctx.lineWidth = 1;
                                            ctx.setLineDash([4, 4]);
                                            var x1 = w2s_x(es[i].pm.x);
                                            var y1 = w2s_y(es[i].pm.y);
                                            if (es[i]._isresizable) {
                                                x1 += w2s_w(es[i].pm.w) * 0.5;
                                                y1 += w2s_h(es[i].pm.h) * 0.5;
                                            }
                                            var x2 = w2s_x(es[i2].pm.x);
                                            var y2 = w2s_y(es[i2].pm.y);
                                            if (es[i2]._isresizable) {
                                                x2 += w2s_w(es[i2].pm.w) * 0.5;
                                                y2 += w2s_h(es[i2].pm.h) * 0.5;
                                            }
                                            ctx.beginPath();
                                            ctx.moveTo(x1, y1);
                                            ctx.lineTo(x2, y2);
                                            ctx.stroke();
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } 
            if (es[i]._isresizable) {
                var x1 = w2s_x(es[i].pm.x);
                var x2 = w2s_w(es[i].pm.w);
                var y1 = w2s_y(es[i].pm.y);
                var y2 = w2s_h(es[i].pm.h);
                ctx.globalAlpha = relative_alpha * 0.2;
                if (es[i]._class == 'box') {
                    ctx.fillStyle = "#FFF";
                    if (SHOW_TEXTURES) {
                        ctx.globalAlpha = relative_alpha;
                        ctx.fillStyle = '#000';
                    }
                }
                if (es[i]._class == 'door') {
                    ctx.fillStyle = '#000';
                    if (!(es[i].pm.vis == 1 || es[i].pm.vis == true || es[i].pm.vis == 'true')) ctx.globalAlpha = relative_alpha * 0.05;
                }
                if (es[i]._class == 'water') {
                    if (es[i].pm.damage > 0) {
                        ctx.globalAlpha = relative_alpha * 0.81;
                        ctx.fillStyle = '#BBFB59';
                    } else {
                        ctx.globalAlpha = relative_alpha * 0.24;
                        ctx.fillStyle = '#3592B9';
                    }
                }
                if (es[i]._class == 'region') ctx.fillStyle = '#FFD52B';
                if (es[i]._class == 'pushf') ctx.fillStyle = '#2BFF40';
                if (es[i]._class == 'bg') {
                    var image_drawn = false;
                    if (special_values_table['bg_model'][es[i].pm.m] == undefined) ServerRequest('a=get_images&for_class=bg_model&update_const=' + es[i].pm.m, 'request_consts');
                    if (SHOW_TEXTURES) {
                        if (CACHED_BGS[es[i].pm.m] != undefined) {
                            if (CACHED_BGS[es[i].pm.m].loaded) {
                                ctx.globalAlpha = relative_alpha;
                                var img = CACHED_BGS[es[i].pm.m];
                                var xx_from = Math.floor((Math.max(es[i].pm.x, dis_from_x) - es[i].pm.u) / img.width) * img.width + es[i].pm.u;
                                var xx_to = Math.ceil((Math.min(es[i].pm.x, dis_to_x) - es[i].pm.u + es[i].pm.w) / img.width) * img.width + es[i].pm.u;
                                var yy_from = Math.floor((Math.max(es[i].pm.y, dis_from_y) - es[i].pm.v) / img.height) * img.height + es[i].pm.v;
                                var yy_to = Math.ceil((Math.min(es[i].pm.y, dis_to_y) - es[i].pm.v + es[i].pm.h) / img.height) * img.height + es[i].pm.v;
                                var x2b = w2s_w(img.width);
                                var y2b = w2s_h(img.height);
                                ctx.save();
                                ctx.beginPath();
                                ctx.moveTo(x1, y1);
                                ctx.lineTo(x1 + x2, y1);
                                ctx.lineTo(x1 + x2, y1 + y2);
                                ctx.lineTo(x1, y1 + y2);
                                ctx.closePath();
                                ctx.clip();
                                ctx.translate(w2s_x(0), w2s_y(0));
                                ctx.scale(w2s_x(1) - w2s_x(0), w2s_y(1) - w2s_y(0));
                                let u = es[i].pm.u || 0;
                                let v = es[i].pm.v || 0;
                                ctx.translate(u, v);
                                if (!img.tiled_pattern) img.tiled_pattern = ctx.createPattern(img, "repeat");
                                ctx.fillStyle = img.tiled_pattern;
                                ctx.fillRect(s2w_x(0) - u, s2w_y(0) - v, s2w_w(canvas_width), s2w_h(canvas_height));
                                ctx.restore();
                                image_drawn = true;
                            }
                        }
                    }
                    ctx.globalAlpha = relative_alpha * 0.1;
                    ctx.fillStyle = '#000';
                    if (es[i].pm.c != undefined) {
                        if (es[i].pm.c.length == 7) {
                            if (image_drawn) {
                                var old_comp = ctx.globalCompositeOperation;
                                ctx.globalCompositeOperation = 'multiply';
                                ctx.globalAlpha = relative_alpha;
                                ctx.fillStyle = es[i].pm.c;
                                draw_rect(x1, y1, x2, y2);
                                ctx.globalCompositeOperation = 'lighter';
                                if (x2 > 0 && y2 > 0) {
                                    ctx.drawImage(ctx.canvas, x1, y1, x2, y2, x1, y1, x2, y2);
                                    ctx.globalAlpha = 0;
                                } else {
                                    ctx.globalAlpha = relative_alpha * 1;
                                    ctx.fillStyle = '#FF0000';
                                }
                                ctx.globalCompositeOperation = old_comp;
                            } else {
                                ctx.globalAlpha = relative_alpha * 0.22;
                                ctx.fillStyle = es[i].pm.c;
                            }
                        }
                    }
                }
                draw_rect(x1, y1, x2, y2);
                ctx.globalAlpha = relative_alpha * 1;
                if (es[i]._class == 'box') {
                    ctx.fillStyle = "#FFF";
                    if (SHOW_TEXTURES) ctx.fillStyle = '#333';
                }
                if (es[i]._class == 'door') {
                    ctx.fillStyle = '#000';
                }
                if (es[i]._class == 'water') ctx.fillStyle = '#91EAFF';
                if (es[i]._class == 'region') {
                    ctx.globalAlpha = relative_alpha * 0.5;
                    ctx.fillStyle = '#FFB03C';
                }
                if (es[i]._class == 'pushf') ctx.fillStyle = '#3CFF4F';
                if (es[i]._class == 'bg') {
                    ctx.globalAlpha = relative_alpha * 0.3;
                    ctx.fillStyle = '#910000';
                }
                draw_rect_sides(x1, y1, x2, y2);
                if (es[i]._class == 'region') {
                    if (es[i].pm.use_on == 1 || es[i].pm.use_on == 9 || es[i].pm.use_on == 10) {
                        ctx.globalAlpha = relative_alpha * 0.5;
                        MyDrawImage(es[i].pm.use_on == 1 ? img_region : (es[i].pm.use_on == 9 ? img_region_red : img_region_blue), w2s_x(es[i].pm.x + Math.round(es[i].pm.w / 2 - 41 / 2)), w2s_y(es[i].pm.y + Math.round(es[i].pm.h / 2 - 10 - 31 / 2)), w2s_w(41), w2s_h(31));
                    }
                }
            } else {
                if (es[i]._class == 'lua'     || es[i]._class == 'player' || es[i]._class == 'enemy' || es[i]._class == 'gun'  || es[i]._class == 'lamp'  || 
                    es[i]._class == 'trigger' || es[i]._class == 'timer'  || es[i]._class == 'inf'   || es[i]._class == 'song' || es[i]._class == "image" ||
                    es[i]._class == 'decor'   || es[i]._class == 'barrel' || es[i]._class == 'vehicle') {
                    ctx.globalAlpha = relative_alpha * 1;
                    var will_rotate_by = 0;
                    var will_scalex_by = 1;
                    var will_scaley_by = 1;
                    if (es[i]._class == 'decor') {
                        will_rotate_by = (es[i].pm.r / 180 * Math.PI) || 0;
                        will_scalex_by = (es[i].pm.sx !== undefined) ? es[i].pm.sx : 1;
                        will_scaley_by = (es[i].pm.sy !== undefined) ? es[i].pm.sy : 1;
                    }
                    if (will_rotate_by != 0 || will_scalex_by != 1 || will_scaley_by != 1) {
                        ctx.save();
                        var pos_lo_x = w2s_x(es[i].pm.x);
                        var pos_lo_y = w2s_y(es[i].pm.y);
                        ctx.translate(pos_lo_x, pos_lo_y);
                        ctx.rotate(will_rotate_by);
                        ctx.scale(will_scalex_by, will_scaley_by);
                        ctx.translate(-pos_lo_x, -pos_lo_y);
                    }
                    var this_img_class = ThinkOfOffsetClass(es[i]._class, es[i]);
                    var image_drawn = false;
                    if (es[i]._class == 'decor') {
                        if (es[i].pm.model != '0') {
                            if (special_values_table['decor_model'][es[i].pm.model] == undefined){
                                ServerRequest('a=get_images&for_class=' + 'decor_model' + '&update_const=' + es[i].pm.model, 'request_consts');
                            }
                        }
                        if (CACHED_DECORS[es[i].pm.model] != undefined) {
                            if (CACHED_DECORS[es[i].pm.model].loaded) {
                                if (!CACHED_DECORS[es[i].pm.model].native) {
                                    var x1 = w2s_x(es[i].pm.x + es[i].pm.u);
                                    var y1 = w2s_y(es[i].pm.y + es[i].pm.v);
                                    var x2 = w2s_w(CACHED_DECORS[es[i].pm.model].width);
                                    var y2 = w2s_h(CACHED_DECORS[es[i].pm.model].height);
                                    MyDrawImage(CACHED_DECORS[es[i].pm.model], x1, y1, x2, y2);
                                    image_drawn = true;
                                }
                            }
                        }
                    }
                    if (es[i].pm.side != -1) {
                        var x1 = w2s_x(es[i].pm.x + lo_x[this_img_class]);
                        var y1 = w2s_y(es[i].pm.y + lo_y[this_img_class]);
                        var x2 = w2s_w(lo_w[this_img_class]);
                        var y2 = w2s_h(lo_h[this_img_class]);
                        if (es[i]._class == 'player' || es[i]._class == 'enemy') {
                            MyDrawImage(img_chars_full[es[i].pm.char], w2s_x(es[i].pm.x - 36), w2s_y(es[i].pm.y - 104), w2s_w(110), w2s_h(130));
                        } else {
                            if (!image_drawn) MyDrawImage(img_decide(es[i]), x1, y1, x2, y2);
                        }
                    } else {
                        var x1 = w2s_x(es[i].pm.x - lo_x[this_img_class]);
                        var y1 = w2s_y(es[i].pm.y + lo_y[this_img_class]);
                        var x2 = w2s_w(-lo_w[this_img_class]);
                        var y2 = w2s_h(lo_h[this_img_class]);
                        ctx.save();
                        ctx.translate(2 * (x1) + x2, 0);
                        ctx.scale(-1, 1);
                        if (es[i]._class == 'player' || es[i]._class == 'enemy') {
                            MyDrawImage(img_chars_full[es[i].pm.char], w2s_x(es[i].pm.x - 36), w2s_y(es[i].pm.y - 104), w2s_w(110), w2s_h(130));
                        } else {
                            if (!image_drawn) MyDrawImage(img_decide(es[i]), x1, y1, x2, y2);
                        }
                        ctx.restore();
                    }
                    var this_class = ThinkOfBBoxClass(es[i]._class, es[i]);
                    y1 = w2s_y(es[i].pm.y + bo_y[this_class]);
                    y2 = w2s_h(bo_h[this_class]);
                    if (es[i].pm.side != -1) {
                        x1 = w2s_x(es[i].pm.x + bo_x[this_class]);
                        x2 = w2s_w(bo_w[this_class]);
                    } else {
                        x1 = w2s_x(es[i].pm.x - bo_x[this_class]);
                        x2 = w2s_w(-bo_w[this_class]);
                        x1 += x2;
                        x2 = -x2;
                    }
                    if (will_rotate_by != 0 || will_scalex_by != 1 || will_scaley_by != 1) {
                        ctx.restore();
                    }
                    ctx.globalAlpha = relative_alpha * 0.1;
                    ctx.fillStyle = '#000';
                    draw_rect_sides(x1, y1, x2, y2);
                }
            }
        }
    }

    var font_time = 0;
    for (i = 0; i < es.length; i++) {
        ctx.globalAlpha = 1;
        if (!es[i].exists || !es[i]._isphysical) continue;
        if (es[i]._isresizable) {
            var x1 = w2s_x(es[i].pm.x);
            var x2 = w2s_w(es[i].pm.w);
            var y1 = w2s_y(es[i].pm.y);
            var y2 = w2s_h(es[i].pm.h);
        } else {
            var this_class = ThinkOfBBoxClass(es[i]._class, es[i]);
            var y1 = w2s_y(es[i].pm.y + bo_y[this_class]);
            var y2 = w2s_h(bo_h[this_class]);
            if (es[i].pm.side != -1) {
                var x1 = w2s_x(es[i].pm.x + bo_x[this_class]);
                var x2 = w2s_w(bo_w[this_class]);
            } else {
                var x1 = w2s_x(es[i].pm.x - bo_x[this_class]);
                var x2 = w2s_w(-bo_w[this_class]);
                x1 += x2;
                x2 = -x2;
            }
        }
        if (es[i].selected) {
            ctx.globalAlpha = 0.2;
            ctx.fillStyle = selgrd2;
            draw_rect(x1, y1, x2, y2);
        }
        x1 -= 2;
        y1 -= 2;
        x2 += 4;
        y2 += 4;
        if (es[i].selected) {
            ctx.globalAlpha = 1;
            ctx.fillStyle = "#FFF";
            MyDrawSelection(x1, y1, x2, y2);
        }
        if (!space) {
            if (!quick_pick) {
                if (obviouse_sel == i || ((ctrl || alt || m_drag_selection) && (es[i].hit(false) || es[i].hitSelect()))) {
                    if (MatchLayer(es[i])) {
                        ctx.fillStyle = selgrd3;
                        if (ctrl) ctx.fillStyle = '#AFA';
                        else if (alt) ctx.fillStyle = '#FAA';
                        ctx.globalAlpha = 0.5;
                        draw_rect_sides(x1, y1, x2, y2);
                        ctx.globalAlpha = 1;
                    } 
                }
            }
        }
        x1 += 2;
        y1 += 2;
        x2 -= 4;
        y2 -= 4;
        var can_qp = quick_pick && quick_pick_objects.indexOf(es[i]._class) != -1;
        if (can_qp) {
            ctx.globalAlpha = 0.75 - Math.sin(time_mili / 100) / 4;
            var size = 32 - 5 + Math.sin(time_mili / 100) * 5;
            var over = false;
            if (quick_pick_canover) {
                if (quick_pick_fake_over == i) over = true;
                else over = Math.sqrt(Math.pow(x1 + x2 / 2 - mouse_x, 2) + Math.pow(y1 + y2 / 2 - mouse_y, 2)) < 20 * quick_pick_hit_scale;
            }
            if (over && quick_pick_canover) quick_pick_canover = false;
            MyDrawImage(over ? img_quickpick2 : img_quickpick, x1 + x2 / 2 - size, y1 + y2 / 2 - size, size * 2, size * 2);
            need_redraw = true;
        }
        if (es[i].pm.uid != undefined) {
            if (MatchLayer(es[i]) || can_qp) {
                if (ENABLE_TEXT) {
                    var capx = x1 + x2 / 2;
                    var capy = y1 + y2 / 2;
                    if (capx < -100) continue;
                    if (capx > canvas_width) continue;
                    if (capy < -100) continue;
                    if (capy > canvas_height) continue;
                    if (ENABLE_SHADOWS) {
                        ctx.shadowColor = 'rgba(0, 0, 0, 1)';
                        ctx.shadowBlur = 2;
                        ctx.shadowOffsetX = 1;
                        ctx.shadowOffsetY = 1;
                    }
                    var gothit = (!can_qp && (i == obviouse_sel || (es[i].selected && es[i].hit(false)))) || (can_qp && (over));
                    ctx.font = "normal 10px Arial";
                    var fillText = es[i].pm.uid;
                    var dim = ctx.measureText(fillText);
                    dim.height = 10;
                    if (gothit) dim.height = 12;
                    if (mouse_x > capx - 30) {
                        if (mouse_x < capx + 30) {
                            if (mouse_y > capy - 30) {
                                if (mouse_y < capy + 30) {
                                    title_density++;
                                } 
                                ctx.globalAlpha = 1;
                            }
                        }
                    }
                    if (last_title_density > 1 && !gothit) {
                        var di = Math.sqrt(Math.pow(mouse_x - capx, 2) + Math.pow(mouse_y - capy, 2));
                        if (di < 60) {
                            if (!es[i].selected) {
                                capx = capx - (mouse_x - capx) * Math.pow((60 - di) / 60, 2) * (4 + Math.min(6, last_title_density * 0.1));
                                capy = capy - (mouse_y - capy) * Math.pow((60 - di) / 60, 2) * (4 + Math.min(6, last_title_density * 0.1));
                                if (last_title_density > 1) ctx.globalAlpha = Math.max(0.4, 1 - last_title_density * 0.1);
                            } else {
                                ctx.globalAlpha = Math.max(0.3, 1 / last_title_density);
                            }
                        }
                    }
                    var x3 = Math.round(capx - dim.width / 2);
                    var y3 = Math.round(capy - dim.height / 2);
                    if (!ENABLE_SHADOWS) {
                        ctx.fillStyle = 'rgba(0,0,0,0.1)';
                        ctx.fillRect(x3 - 2, y3 - 2, dim.width + 4, dim.height + 4);
                        ctx.fillRect(x3 - 4, y3 - 4, dim.width + 8, dim.height + 8);
                    }

                    ctx.fillStyle = "#FFF";
                    if (gothit) ctx.fillStyle = '#fffb91';
                    if (es[i].selected) ctx.fillStyle = '#FF0';
                    var tim = new Date().getTime();

                    ctx.fillText(fillText, x3, y3 + 8 + (dim.height - 10) / 2);
                    font_time += new Date().getTime() - tim;
                    if (ENABLE_SHADOWS) {
                        ctx.shadowColor = 'black';
                        ctx.shadowBlur = 0;
                        ctx.shadowOffsetX = 0;
                        ctx.shadowOffsetY = 0;
                    }
                }
            }
        }
    }
    if (font_time > 20) {
        ENABLE_SHADOWS = false;
    }
    /*
    if (check_mode) {
        ctx.globalAlpha = 1;
        need_redraw = true;
        var w = w2s_w(1);
        for (var i = 0; i < waypoints.length; i++) {
            ctx.globalAlpha = 1;
            var x = w2s_x(waypoints[i].x);
            var y = w2s_y(waypoints[i].y);
            ctx.beginPath();
            ctx.arc(x, y, w * 6, 0, 2 * Math.PI, false);
            if (waypoints[i].spawn_dm) {
                if (waypoints[i].spawn_coop) {
                    ctx.fillStyle = '#AAAA00';
                    ctx.strokeStyle = '#333300';
                } else {
                    ctx.fillStyle = '#AA0000';
                    ctx.strokeStyle = '#330000';
                }
            } else if (waypoints[i].spawn_coop) {
                ctx.fillStyle = '#00AA00';
                ctx.strokeStyle = '#003300';
            } else {
                if (waypoints[i].damage > 0) {
                    ctx.fillStyle = '#333333';
                    ctx.strokeStyle = '#111111';
                } else {
                    ctx.fillStyle = '#777777';
                    ctx.strokeStyle = '#333333';
                }
            }
            ctx.fill();
            ctx.lineWidth = w * 2;
            ctx.stroke();
            ctx.fillStyle = '#FFFF00';
            draw_rect(x - 1, y - 10, 2, -1 - waypoints[i].risk_level_dm * w * 2);
            ctx.globalAlpha = waypoints[i].risk_level_dm / 150;
            ctx.fillStyle = '#FF0000';
            draw_rect(x - 1, y - 10, 2, -1 - waypoints[i].risk_level_dm * w * 2);
        }
        ctx.globalAlpha = 1;
        ctx.lineWidth = w * 2;
        ctx.strokeStyle = '#FFFFFF';
        var perc = (time_mili / 1000) % 1;
        for (var i = 0; i < connections.length; i++) {
            var x1 = w2s_x(waypoints[connections[i].b].x * perc + waypoints[connections[i].a].x * (1 - perc));
            var y1 = w2s_y(waypoints[connections[i].b].y * perc + waypoints[connections[i].a].y * (1 - perc));
            if (connections[i].method == CONNECTION_WALK) ctx.fillStyle = '#FFFFFF';
            else if (connections[i].method == CONNECTION_SAFEFALL) ctx.fillStyle = '#FFFF00';
            else if (connections[i].method == CONNECTION_JUMP) ctx.fillStyle = '#00FF00';
            else if (connections[i].method == CONNECTION_RUN_JUMP) ctx.fillStyle = '#AAFFAA';
            else if (connections[i].method == CONNECTION_JUMP_SWORDS) ctx.fillStyle = '#AAFF00';
            else if (connections[i].method == CONNECTION_JUMP_BOOST) ctx.fillStyle = '#FF0000';
            else if (connections[i].method == CONNECTION_UNSAFE_FALL) ctx.fillStyle = '#AA0000';
            else ctx.fillStyle = '#FF00FF';
            draw_rect(x1 - 1, y1 - 1, 2, 2);
        }
    }
    */
    // Resizing
    if (!paint_draw_mode && selects == 1 && !m_dragging && !ctrl && !alt && !space && !k_shift && es[select_last]._isresizable) {
        i = select_last;
        var h = true;
        if (!m_scaling) h = es[i].hit(true);
        if (h != false) {
            if (es[i].exists) {
                if (MatchLayer(es[i])) {
                    ctx.fillStyle = "#FFF";
                    if (DOQuad(es[i].pm.x - borderwidth, es[i].pm.y - borderwidth, borderwidth * 2, borderwidth * 2)) curs = 'se-resize';
                    if (DOQuad(es[i].pm.x + es[i].pm.w - borderwidth, es[i].pm.y - borderwidth, borderwidth * 2, borderwidth * 2)) curs = 'ne-resize';
                    if (DOQuad(es[i].pm.x - borderwidth, es[i].pm.y + es[i].pm.h - borderwidth, borderwidth * 2, borderwidth * 2)) curs = 'ne-resize';
                    if (DOQuad(es[i].pm.x + es[i].pm.w - borderwidth, es[i].pm.y + es[i].pm.h - borderwidth, borderwidth * 2, borderwidth * 2)) curs = 'se-resize';
                    if (DOQuad(es[i].pm.x + borderwidth, es[i].pm.y - borderwidth, es[i].pm.w - borderwidth * 2, borderwidth * 2)) curs = 'n-resize';
                    if (DOQuad(es[i].pm.x + borderwidth, es[i].pm.y + es[i].pm.h - borderwidth, es[i].pm.w - borderwidth * 2, borderwidth * 2)) curs = 'n-resize';
                    if (DOQuad(es[i].pm.x - borderwidth, es[i].pm.y + borderwidth, borderwidth * 2, es[i].pm.h - borderwidth * 2)) curs = 'e-resize';
                    if (DOQuad(es[i].pm.x + es[i].pm.w - borderwidth, es[i].pm.y + borderwidth, borderwidth * 2, es[i].pm.h - borderwidth * 2)) curs = 'e-resize';
                }
            }
        }
    }
                            
    if (active_tool != 'edit') {
        ctx.globalAlpha = 1;
        MyDrawImage(img_put, w2s_x(Math.round(m_pos_x / GRID_SNAPPING) * GRID_SNAPPING) - 15, w2s_y(Math.round(m_pos_y / GRID_SNAPPING) * GRID_SNAPPING) - 15, 31, 31);
    }

    if (m_drag_selection)
        if (!m_isdown) {
            var x1 = w2s_x(Math.min(m_down_x, m_pos_x));
            var x2 = w2s_w(Math.abs(m_down_x - m_pos_x));
            var y1 = w2s_y(Math.min(m_down_y, m_pos_y));
            var y2 = w2s_h(Math.abs(m_down_y - m_pos_y));
            ctx.fillStyle = "#FFF";
            if (ctrl) ctx.fillStyle = '#AFA';
            else if (alt) ctx.fillStyle = '#FAA';
            ctx.globalAlpha = 0.1;
            draw_rect(x1, y1, x2, y2);
            ctx.globalAlpha = 0.8;
            draw_rect(x1, y1, 1, y2);
            draw_rect(x1 + x2, y1, 1, y2);
            draw_rect(x1, y1, x2, 1);
            draw_rect(x1, y1 + y2, x2, 1);
        } if (enabletrace) {
        ctx.font = "normal 10px Arial";
        ctx.globalAlpha = 1;
        ctx.fillStyle = "#FFF";
        var from_y = 15;
        if (ConsoleTraceMessages.length * 10 + 15 > canvas_height - 15) from_y = canvas_height - 15 - ConsoleTraceMessages.length * 10;
        for (var i = 0; i < ConsoleTraceMessages.length; i++) {
            var fillText = ConsoleTraceMessages[i];
            ctx.fillText(fillText, 15, from_y + i * 10);
        }
    }
    if (!space) {
        var offs = 22;
        if (ctrl) {
            ctx.drawImage(img_ctrl, mouse_x + 12, mouse_y + offs);
            offs += 8;
        }
        if (alt) {
            ctx.drawImage(img_alt, mouse_x + 12, mouse_y + offs);
            offs += 8;
        }
        if (k_shift) ctx.drawImage(img_shift, mouse_x + 12, mouse_y + offs);
    }
    var parts_total = ActionArray.length;
    if (history_runer_timer > 0) {
        if (parts_total > 0) {
            var width_each = 2 * Math.PI / (parts_total + 1);
            var power = 1 - Math.pow(1 - history_runer_timer, 4);
            ctx.lineWidth = 10;
            ctx.strokeStyle = "#FFF";
            for (var xx = 0; xx < parts_total; xx++) {
                if (xx == ActionCurrent) ctx.globalAlpha = power * 0.3;
                else ctx.globalAlpha = power * 0.15;
                ctx.beginPath();
                ctx.arc(mouse_x, mouse_y, 20, -width_each * xx - width_each * 0.45 - Math.PI / 2, -width_each * xx + width_each * 0.45 - Math.PI / 2);
                ctx.stroke();
            }
            history_runer_timer -= time_mili_delta * 0.0005;
            need_redraw = true;
        } 
    }
    if (canv.style.cursor != curs) canv.style.cursor = curs;
}

// TODO: Replace with a custom shader or something, this is way too inefficient
/*function glDrawGridlines(_step, alpha) {
    glGlobalAlpha = alpha / Math.max(zoom, 1);
    var x = w2s_x(Math.floor(s2w_x(0) / _step) * _step);
    var to_x = w2s_x(Math.ceil(s2w_x(canvas_width) / _step) * _step);
    var step = w2s_w(_step);
    if (step > 2) {
        while (x < to_x) {
            glDrawLine(x, 0, x + 1, canvas_height);
            x += step;
        }
    }
    var y = w2s_y(Math.floor(s2w_y(0) / _step) * _step);
    var to_y = w2s_y(Math.ceil(s2w_y(canvas_height) / _step) * _step);
    step = w2s_h(_step);
    if (step > 2) {
        while (y < to_y) {
            glDrawLine(0, y, canvas_width, y + 1);
            y += step;
        }
    }
}*/

function glDrawGridlines() {
    glStrokeR = glStrokeB = glStrokeG = THEME === THEME_DARK ? 0.5334 : 1;
    const steps = [10, 100, 300];
    var alphaMultiplier = GRID_ALPHA / Math.max(zoom, 1);
    var alphas = [0.08 * alphaMultiplier, 0.32 * alphaMultiplier, 0.64 * alphaMultiplier];
    var points = new Float32Array(4);
    // var tl = 0;

    glSetProgram(glLineProgram);
    for (let i=0; i < steps.length; i++) {
        var _step = steps[i];
        var x = w2s_x(Math.floor(s2w_x(0) / _step) * _step);
        var to_x = w2s_x(Math.ceil(s2w_x(canvas_width) / _step) * _step);
        var step = w2s_w(_step);
        gl.uniform4f(glLineProgram_u_color, glStrokeR, glStrokeG, glStrokeB, alphas[i]);
        points[1] = 0;
        points[3] = canvas_height;
        if (step > 2) {
            while (x < to_x) {
                points[0] = points[2] = x;
                x += step;
                gl.bufferData(gl.ARRAY_BUFFER, points, gl.DYNAMIC_DRAW);
                gl.drawArrays(gl.LINES, 0, 2);
                // tl++;
            }
        }
        var y = w2s_y(Math.floor(s2w_y(0) / _step) * _step);
        var to_y = w2s_y(Math.ceil(s2w_y(canvas_height) / _step) * _step);
        step = w2s_h(_step);
        points[0] = 0;
        points[2] = canvas_width;
        if (step > 2) {
            while (y < to_y) {
                points[1] = points[3] = y;
                y += step;
                gl.bufferData(gl.ARRAY_BUFFER, points, gl.DYNAMIC_DRAW);
                gl.drawArrays(gl.LINES, 0, 2);
                // tl++;
            }
        }
    }
    // console.log('tl: ' + tl);

    gl.uniform4f(glLineProgram_u_color, glStrokeR, glStrokeG, glStrokeB, 0.7 * GRID_ALPHA);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        0, w2s_y(0), canvas_width, w2s_y(0),
        w2s_x(0), 0, w2s_x(0), canvas_height
    ]), gl.DYNAMIC_DRAW);
    gl.drawArrays(gl.LINES, 0, 4);
}

function zoom_validate() {
    var cx = (dis_from_x + dis_to_x) / 2;
    var cy = (dis_from_y + dis_to_y) / 2;
    dis_from_x = cx - canvas_width * zoom / 2;
    dis_to_x = cx + canvas_width * zoom / 2;
    dis_from_y = cy - canvas_height * zoom / 2;
    dis_to_y = cy + canvas_height * zoom / 2;
    dis_from_x = Math.round(dis_from_x / zoom) * zoom;
    dis_to_x = Math.round(dis_to_x / zoom) * zoom;
    dis_from_y = Math.round(dis_from_y / zoom) * zoom;
    dis_to_y = Math.round(dis_to_y / zoom) * zoom;
    borderwidth = Math.max(3, 5 * zoom);
}

function ResetView() {
    dis_from_x = 0;
    dis_to_x = 0;
    dis_from_y = 0;
    dis_to_y = 0;
    zoom = 1;
    zoom_validate();
}
var mouse_x = 0;
var m_pos_x = 0;
var mouse_y = 0;
var m_pos_y = 0;
var ActionArray = new Array();
var ActionCurrent = 0;
var history_runer_timer = 0;
var forundo_str = '';
var forredo_str = '';

function ClearUndos() {
    forundo_str = '';
    forredo_str = '';
    ActionArray = new Array();
    ActionCurrent = 0;
}

function AddUndo(str) {
    forundo_str = str + forundo_str;
}

function AddRedo(str) {
    forredo_str += str;
}

function CommitUndos(doredo) {
    if (forredo_str != '' || forundo_str != '') {
        history_runer_timer = 0;
        if (ActionCurrent > 0) {
            ActionArray.splice(0, ActionCurrent);
            ActionCurrent = 0;
        }
        ActionArray.unshift({
            redo: forredo_str,
            undo: forundo_str
        });
        forredo_str = forundo_str = '';
        if (doredo) eval(ActionArray[0].redo);
        changes_made = true;
    }
}

function BeginUndos() {
    forredo_str = forundo_str = '';
}

function DO_UNDO() {
    if (ActionCurrent < ActionArray.length) {
        eval(ActionArray[ActionCurrent].undo);
        ActionCurrent++;
        history_runer_timer = 1;
        need_redraw = true;
        need_GUIParams_update = true;
        NewNote('Undo complete.', note_passive);
    } else NewNote("Undo is impossible.", note_passive);
}

function DO_REDO() {
    if (ActionCurrent > 0) {
        ActionCurrent--;
        eval(ActionArray[ActionCurrent].redo);
        history_runer_timer = 1;
        need_redraw = true;
        need_GUIParams_update = true;
        NewNote('Redo complete.', note_passive);
    } else NewNote("Redo is impossible.", note_passive);
}

function m_update(event) {
    event = event || window.event;
    var el = canv,
        pos = {
            x: 0,
            y: 0
        };
    while (el) {
        pos.x += el.offsetLeft;
        pos.y += el.offsetTop;
        el = el.offsetParent;
    }
    mouse_x = event.pageX - pos.x;
    mouse_y = event.pageY - pos.y;
    m_pos_x = s2w_x(mouse_x);
    m_pos_y = s2w_y(mouse_y);
}
var ctrl = false;
var k_shift = false;
var space = false;
var alt = false;
var mid_btn = false;
var m_drag = false;
var m_drag_x = 0;
var m_drag_y = 0;
var m_down_x = 0;
var m_down_y = 0;
var m_drag_screen = false;
var m_dragging = false;
var m_drag_selection = false;
var m_scaling = false;
var m_drag_side = 'C';
var m_isdown = true;

function m_move(e) {
    if (e != undefined) m_update(e);
    if (m_isdown) {
        if (Math.abs(mouse_x - m_drag_x) > GRID_SNAPPING * 0.5 || Math.abs(mouse_y - m_drag_y) > GRID_SNAPPING * 0.5) {
            m_isdown = false;
        }
    } else {
        if (m_drag_screen) {
            var x1, y1;
            x1 = s2w_w(m_drag_x - mouse_x);
            y1 = s2w_h(m_drag_y - mouse_y);
            m_drag_x = mouse_x;
            m_drag_y = mouse_y;
            dis_from_x += x1;
            dis_to_x += x1;
            dis_from_y += y1;
            dis_to_y += y1;
        }
        if (m_dragging) {
            var x1, y1;
            x1 = Math.round((m_pos_x - m_down_x) / GRID_SNAPPING) * GRID_SNAPPING;
            y1 = Math.round((m_pos_y - m_down_y) / GRID_SNAPPING) * GRID_SNAPPING;
            for (var i = 0; i < es.length; i++)
                if (es[i].exists) {
                    if (MatchLayer(es[i]) || paint_draw_mode) {
                        if (es[i].selected) {
                            if (es[i]._isphysical) {
                                es[i].pm.x += x1;
                                es[i].pm.y += y1;
                            }
                        }
                    }
                }
            m_down_x += x1;
            m_down_y += y1;
        }
        if (m_scaling) {
            var x1, y1;
            x1 = Math.round((m_pos_x - m_down_x) / GRID_SNAPPING) * GRID_SNAPPING;
            y1 = Math.round((m_pos_y - m_down_y) / GRID_SNAPPING) * GRID_SNAPPING;
            for (var i = 0; i < es.length; i++)
                if (es[i].exists)
                    if (MatchLayer(es[i]) || paint_draw_mode)
                        if (es[i].selected)
                            if (es[i]._isphysical)
                                if (es[i]._isresizable) {
                                    if (m_drag_side == 'LT' || m_drag_side == 'L' || m_drag_side == 'LB') {
                                        es[i].pm.x += x1;
                                        es[i].pm.w -= x1;
                                    }
                                    if (m_drag_side == 'RT' || m_drag_side == 'R' || m_drag_side == 'RB') {
                                        es[i].pm.w += x1;
                                    }
                                    if (m_drag_side == 'LT' || m_drag_side == 'T' || m_drag_side == 'RT') {
                                        es[i].pm.y += y1;
                                        es[i].pm.h -= y1;
                                    }
                                    if (m_drag_side == 'LB' || m_drag_side == 'B' || m_drag_side == 'RB') {
                                        es[i].pm.h += y1;
                                    }
                                    es[i].fixPos();
                                } m_down_x += x1;
            m_down_y += y1;
        }
    }
    need_redraw = true;
    UpdateOpacities();
}

function MouseWheelScrollFunction(event) {
    var wheel = (event.wheelDelta) / 120 || (-event.detail / 6);
    if (wheel > 0) zoom_in(wheel);
    else zoom_out(wheel);
    zoom_validate();
    m_pos_x = s2w_x(mouse_x);
    m_pos_y = s2w_y(mouse_y);
    need_redraw = true;
    return false;
}
canv.onmousewheel = MouseWheelScrollFunction;
if (canv.addEventListener) {
    canv.addEventListener("mousewheel", MouseWheelScrollFunction, false);
    canv.addEventListener("DOMMouseScroll", MouseWheelScrollFunction, false);
} else canv.attachEvent("onmousewheel", MouseWheelScrollFunction);

function zoom_out(wheel) {
    if (zoom < 100) {
        zoom = Math.min(100, (zoom - (zoom * ((wheel != null) ? wheel : -2) * 0.3)));
    }
}

function zoom_in(wheel) {
    if (zoom > 0.1) {
        zoom = Math.max(0.1, zoom - (zoom * ((wheel != null) ? wheel : 2) * 0.3));
    }
}
var paint_draw_mode = false;

function m_down(e) {
    setTimeout(function() {
        context_menu = false;
    }, 10);
    if (quick_pick_ignore_one_click && e.which == 1) {
        quick_pick_ignore_one_click = false;
        unfocusedit();
    } else {
        if (e.which == 2 || e.which == 3) mid_btn = true;
        m_update(e);
        m_isdown = true;
        m_drag_x = mouse_x;
        m_drag_y = mouse_y;
        m_down_x = m_pos_x;
        m_down_y = m_pos_y;
        m_drag = true;
        m_drag_screen = false;
        m_drag_selection = false;
        m_dragging = false;
        m_scaling = false;
        paint_draw_mode = false;
        if (space || mid_btn) {
            m_drag_screen = true;
            if (alt) {
                zoom_out();
            } else if (ctrl) {
                zoom_in();
            }
            zoom_validate();
        } else {
            if (active_tool != 'edit') {
                BeginUndos();
                paint_draw_mode = true;
                for (var i = 0; i < es.length; i++)
                    if (es[i].exists)
                        if (es[i].selected) {
                            AddUndo('es[' + i + '].selected=true;');
                            AddRedo('es[' + i + '].selected=false;');
                            es[i].selected = false;
                        } var newid = es.length;
                AddUndo('es[' + newid + '].exists=false;');
                AddRedo('es[' + newid + '].exists=true;');
                var newbie = es[es.length] = new E(active_tool);
                if (["player", "lua"].indexOf(active_tool) != -1) {
                    newbie.pm.uid = AssignName(newbie.pm.uid);
                } else {
                    if ('uid' in newbie.pm) {
                        newbie.pm.uid = RandomizeName(newbie.pm.uid);
                    }
                }
                if ('x' in newbie.pm) {
                    //AddRedo('es[' + newid + '].pm.x=' + m_pos_x + ';');
                    //AddRedo('es[' + newid + '].pm.y=' + m_pos_y + ';');
                    //AddRedo('es[' + newid + '].selected=true;');
                    //AddRedo('es[' + newid + '].fixPos();');
                    newbie.pm.x = m_pos_x;
                    newbie.pm.y = m_pos_y;
                    newbie.selected = true;
                    newbie.fixPos(true);
                    m_down_x = newbie.pm.x;
                    m_down_y = newbie.pm.y;
                    if (newbie._isresizable) {
                        //AddRedo('es[' + newid + '].pm.w=0;');
                        //AddRedo('es[' + newid + '].pm.h=0;');
                        newbie.pm.w = 0;
                        newbie.pm.h = 0;
                        m_scaling = true;
                        m_drag_side = 'RB';
                    } else {
                        m_dragging = true;
                    }
                }
                //CommitUndos(false);
                //AddUndo('es[' + newid + '].pm.x=' + m_pos_x + ';');
                //AddUndo('es[' + newid + '].pm.y=' + m_pos_y + ';');
                //if (newbie._isresizable) {
                    //AddUndo('es[' + newid + '].pm.w=0;');
                    //AddUndo('es[' + newid + '].pm.h=0;');
                //}
                need_GUIParams_update = true;
                UpdateGUIObjectsList();
            } else {
                var selects = 0;
                var select_last = -1;
                var notselected = true;
                for (var i = 0; i < es.length; i++)
                    if (es[i].exists)
                        if (MatchLayer(es[i]))
                            if (es[i].selected) {
                                selects++;
                                select_last = i;
                            } if (!ctrl && !alt) {
                    if (selects == 1) {
                        var h = es[select_last].hit(true);
                        if (h != false) {
                            notselected = false;
                            if (h == 'C') {
                                BeginUndos();
                                AddUndo('es[' + select_last + '].pm.x=' + es[select_last].pm.x + ';');
                                AddUndo('es[' + select_last + '].pm.y=' + es[select_last].pm.y + ';');
                                m_dragging = true;
                            } else {
                                BeginUndos();
                                AddUndo('es[' + select_last + '].pm.x=' + es[select_last].pm.x + ';');
                                AddUndo('es[' + select_last + '].pm.y=' + es[select_last].pm.y + ';');
                                AddUndo('es[' + select_last + '].pm.w=' + es[select_last].pm.w + ';');
                                AddUndo('es[' + select_last + '].pm.h=' + es[select_last].pm.h + ';');
                                m_scaling = true;
                                m_drag_side = h;
                            }
                            if (k_shift) {
                                BeginUndos();
                                i = select_last - 1;
                                for (var c = 0; c < es.length; c++) {
                                    if (i < 0) i = es.length - 1;
                                    if (es[i].exists)
                                        if (MatchLayer(es[i]))
                                            if (es[i]._isphysical)
                                                if (es[i].hit(false)) {
                                                    for (i2 = 0; i2 < es.length; i2++)
                                                        if (es[i2].exists)
                                                            if (MatchLayer(es[i2]))
                                                                if (es[i2].selected) {
                                                                    AddUndo('es[' + i2 + '].selected=true;');
                                                                    AddRedo('es[' + i2 + '].selected=false;');
                                                                    es[i2].selected = false;
                                                                } selects = 0;
                                                    AddUndo('es[' + i + '].selected=false;');
                                                    AddRedo('es[' + i + '].selected=true;');
                                                    AddUndo('es[' + i + '].pm.x=' + es[i].x + ';');
                                                    AddUndo('es[' + i + '].pm.y=' + es[i].y + ';');
                                                    es[i].selected = true;
                                                    need_GUIParams_update = true;
                                                    m_dragging = true;
                                                    m_scaling = false;
                                                    notselected = false;
                                                    break;
                                                } i--;
                                }
                            }
                        }
                    } else if (selects > 1) {
                        for (var i = 0; i < es.length; i++)
                            if (es[i].exists)
                                if (MatchLayer(es[i]))
                                    if (es[i]._isphysical)
                                        if (es[i].selected) {
                                            if (es[i].hit(false)) {
                                                notselected = false;
                                                m_dragging = true;
                                                m_scaling = false;
                                                notselected = false;
                                                BeginUndos();
                                                for (var i2 = 0; i2 < es.length; i2++)
                                                    if (es[i2].exists)
                                                        if (MatchLayer(es[i2]))
                                                            if (es[i2]._isphysical)
                                                                if (es[i2].selected) {
                                                                    AddUndo('es[' + i2 + '].pm.x=' + es[i2].x + ';');
                                                                    AddUndo('es[' + i2 + '].pm.y=' + es[i2].y + ';');
                                                                } break;
                                            }
                                        }
                    }
                    if (selects > 0)
                        if (m_dragging || m_scaling) {
                            BeginUndos();
                            for (var i = 0; i < es.length; i++)
                                if (es[i].exists)
                                    if (MatchLayer(es[i]))
                                        if (es[i]._isphysical)
                                            if (es[i].selected) {
                                                AddUndo('es[' + i + '].pm.x=' + es[i].pm.x + ';');
                                                AddUndo('es[' + i + '].pm.y=' + es[i].pm.y + ';');
                                                if (m_scaling) {
                                                    AddUndo('es[' + i + '].pm.w=' + es[i].pm.w + ';');
                                                    AddUndo('es[' + i + '].pm.h=' + es[i].pm.h + ';');
                                                }
                                            }
                        }
                }
                if (notselected) {
                    if (!ctrl && !alt) {
                        BeginUndos();
                        for (var i = 0; i < es.length; i++)
                            if (es[i].exists)
                                if (MatchLayer(es[i]))
                                    if (es[i]._isphysical) {
                                        var s = es[i].hit(false);
                                        if (s != false) {
                                            if (!es[i].selected) {
                                                for (i2 = 0; i2 < es.length; i2++)
                                                    if (es[i2].exists)
                                                        if (es[i2].selected) {
                                                            AddUndo('es[' + i2 + '].selected=true;');
                                                            AddRedo('es[' + i2 + '].selected=false;');
                                                            es[i2].selected = false;
                                                        } selects = 0;
                                                AddUndo('es[' + i + '].pm.x=' + es[i].pm.x + ';');
                                                AddUndo('es[' + i + '].pm.y=' + es[i].pm.y + ';');
                                                AddUndo('es[' + i + '].selected=false;');
                                                AddRedo('es[' + i + '].selected=true;');
                                                es[i].selected = true;
                                                need_GUIParams_update = true;
                                            }
                                            m_dragging = true;
                                        }
                                    } CommitUndos(false);
                    }
                    if (!m_dragging)
                        if (!m_scaling) {
                            m_dragging = false;
                            m_drag_selection = true;
                        }
                }
            }
        }
        need_redraw = true;
    }
}

function m_failed(e) {
    if (m_dragging || m_scaling)
        if (!m_isdown) {
            for (var i = 0; i < es.length; i++)
                if (es[i].exists)
                    if (MatchLayer(es[i]))
                        if (es[i].selected)
                            if (es[i]._isresizable) {
                                es[i].fixWidths();
                                es[i].fixPos();
                                AddRedo('es[' + i + '].pm.x=' + es[i].pm.x + ';');
                                AddRedo('es[' + i + '].pm.y=' + es[i].pm.y + ';');
                                if (m_scaling) {
                                    AddRedo('es[' + i + '].pm.w=' + es[i].pm.w + ';');
                                    AddRedo('es[' + i + '].pm.h=' + es[i].pm.h + ';');
                                }
                            } CommitUndos(false);
            need_GUIParams_update = true;
        } paint_draw_mode = false;
    m_drag_screen = false;
    m_drag_selection = false;
    m_drag = false;
    m_dragging = false;
    m_scaling = false;
    alt = false;
    ctrl = false;
    k_shift = false;
    space = false;
    mid_btn = false;
    need_redraw = true;
}

function m_up(e) {
    if (e.which == 2 || e.which == 3) mid_btn = false;
    m_update(e);
    if (m_drag_selection) {
        BeginUndos();
        for (var i = 0; i < es.length; i++)
            if (es[i].exists)
                if (MatchLayer(es[i])) {
                    if (ctrl) {
                        if (es[i].hitSelect()) {
                            if (!es[i].selected) {
                                AddUndo('es[' + i + '].selected=false;');
                                AddRedo('es[' + i + '].selected=true;');
                            }
                            es[i].selected = true;
                            need_GUIParams_update = true;
                        }
                    } else if (alt) {
                        if (es[i].hitSelect()) {
                            if (es[i].selected) {
                                AddUndo('es[' + i + '].selected=true;');
                                AddRedo('es[' + i + '].selected=false;');
                            }
                            es[i].selected = false;
                            need_GUIParams_update = true;
                        }
                    } else {
                        var set = es[i].hitSelect();
                        if (es[i].selected != set) {
                            AddUndo('es[' + i + '].selected=' + es[i].selected + ';');
                            AddRedo('es[' + i + '].selected=' + set + ';');
                        }
                        need_GUIParams_update = need_GUIParams_update || es[i].selected != set;
                        es[i].selected = set;
                    }
                } CommitUndos(false);
    }
    if (m_dragging)
        if (!m_isdown) {
            for (var i = 0; i < es.length; i++)
                if (es[i].exists)
                    if (MatchLayer(es[i]))
                        if (es[i].selected)
                            if (es[i]._isphysical) {
                                es[i].fixPos();
                                AddRedo('es[' + i + '].pm.x=' + es[i].pm.x + ';');
                                AddRedo('es[' + i + '].pm.y=' + es[i].pm.y + ';');
                            } CommitUndos(false);
            need_GUIParams_update = true;
        } m_dragging = false;
    m_drag_screen = false;
    m_drag_selection = false;
    m_drag = false;
    paint_draw_mode = false;
    if (m_scaling) {
        for (var i = 0; i < es.length; i++)
            if (es[i].exists)
                if (es[i].selected)
                    if (MatchLayer(es[i]))
                        if (es[i]._isphysical)
                            if (es[i]._isresizable) {
                                es[i].fixWidths();
                                es[i].fixPos();
                                AddRedo('es[' + i + '].pm.x=' + es[i].pm.x + ';');
                                AddRedo('es[' + i + '].pm.y=' + es[i].pm.y + ';');
                                AddRedo('es[' + i + '].pm.w=' + es[i].pm.w + ';');
                                AddRedo('es[' + i + '].pm.h=' + es[i].pm.h + ';');
                            } CommitUndos(false);
        m_scaling = false;
        need_GUIParams_update = true;
    }
    need_redraw = true;
}

function k_up(e) {
    if (OVERLAY_BLOCK) return true;
    var c = e.keyCode ? e.keyCode : e.charCode;
    if (!letediting) {
        if (c == 16) k_shift = false; {
            if (c == 17) ctrl = false;
        }
        if (c == 32) space = false;
        if (c == 18) alt = false;
        if (c == 87) {
            unboost_y = false;
            recalc_speed_y();
        }
        if (c == 83) {
            boost_y = false;
            recalc_speed_y();
        }
        if (c == 65) {
            unboost_x = false;
            recalc_speed_x();
        }
        if (c == 68) {
            boost_x = false;
            recalc_speed_x();
        }
        need_redraw = true;
    }
}
var boost_x = false;
var unboost_x = false;
var boost_y = false;
var unboost_y = false;

function recalc_speed_x() {
    speed_x = boost_x && unboost_x ? 0 : (boost_x ? 1 : (unboost_x ? -1 : 0));
}

function recalc_speed_y() {
    speed_y = boost_y && unboost_y ? 0 : (boost_y ? 1 : (unboost_y ? -1 : 0));
}

function DeleteSelection() {
    BeginUndos();
    for (var i = 0; i < es.length; i++)
        if (es[i].exists)
            if (es[i].selected)
                if (MatchLayer(es[i])) {
                    AddRedo('es[' + i + '].selected=es[' + i + '].exists=false;');
                    AddUndo('es[' + i + '].selected=' + es[i].selected + ';es[' + i + '].exists=' + es[i].exists + ';');
                } CommitUndos(true);
    need_GUIParams_update = true;
    need_redraw = true;
}

$("body").on("keypress", function(event) {
    if (event.keyCode != 27) return true;

    if ((document.activeElement==ff_drop || document.activeElement==ff) && event.keyCode == 27) {
        quick_pick_ignore_one_click=false;
        quick_pick=false;
        unfocusedit();
    }
    return false;
}).on("keydown", function(event) {
    if (event.keyCode != 27) return true;

    if ((document.activeElement == ff_drop || document.activeElement == ff) && event.keyCode == 27) {
        quick_pick_ignore_one_click=false;
        quick_pick=false;
        unfocusedit();
    }
    return false;
});

function k_down(e) {
    if (OVERLAY_BLOCK) return true;
    var c = e.keyCode ? e.keyCode : e.charCode;
    if (editing_mapname && c === 13) {
        mapid_field.blur();
        return;
    }
    if (!ignore_keys) {
        if (!letediting && e.target.nodeName != 'TEXTAREA' && !editing_mapname) {
            if (c == 16) k_shift = true; {
                if (c == 17) ctrl = true;
            }
            if (c == 32) space = true;
            if (c == 18) alt = true;
            if (c == 87) {
                unboost_y = true;
                recalc_speed_y();
            }
            if (c == 83) {
                boost_y = true;
                recalc_speed_y();
            }
            if (c == 65) {
                unboost_x = true;
                recalc_speed_x();
            }
            if (c == 68) {
                boost_x = true;
                recalc_speed_x();
            }
            if (c == 8) {
                var to_del = false;
                for (var i = 0; i < es.length; i++)
                    if (es[i].exists)
                        if (es[i].selected)
                            if (MatchLayer(es[i])) {
                                to_del = true;
                                break;
                            } if (to_del)
                    if (confirm('Delete?') == true) c = 46;
            }
            if (c == 46) {
                DeleteSelection();
            }
            if (c == 90)
                if (ctrl) {
                    DO_UNDO();
                } if (c == 89)
                if (ctrl) {
                    DO_REDO();
                } if (c == 27) {
                SetActiveTool(0);
            }
            if (c >= 48 && c <= 57) {
                var clip_slot = c - 48;
                if (typeof(Storage) !== 'undefined') {
                    if (ctrl) {
                        CopyToClipBoard('clipboard_slot' + clip_slot);
                        NewNote('Objects copied to clipboard[' + clip_slot + '].', note_passive);
                    } else {
                        if (PasteFromClipBoard('clipboard_slot' + clip_slot)) NewNote('Objects pasted from the clipboard[' + clip_slot + '].', note_passive);
                        else NewNote('Clipboard[' + clip_slot + '] is empty. Nothing to paste.', note_passive);
                    }
                    e.preventDefault();
                } else {
                    NewNote('Oops! Your browser seem not to have sessionStorage (localStorage) support.', note_bad);
                }
            }
            if (ctrl) {
                if (c == 67) {
                    if (typeof(Storage) !== 'undefined') {
                        CopyToClipBoard('clipboard');
                        NewNote('Objects copied to the clipboard.', note_passive);
                    } else {
                        NewNote('Oops! Your browser seem not to have sessionStorage (localStorage) support.', note_bad);
                    }
                }
                if (c == 86) {
                    if (typeof(Storage) !== 'undefined') {
                        if (PasteFromClipBoard('clipboard')) NewNote('Objects pasted from the clipboard.', note_passive);
                        else NewNote('Clipboard is empty. Nothing to paste.', note_passive);
                    } else {
                        NewNote('Oops! Your browser seem not to have sessionStorage (localStorage) support.', note_bad);
                    }
                }
            } else {
                if (c == 81) {
                    expert_view = !expert_view;
                    UpdateOpacities();
                }
                if (c == 72) {
                    var range_min = 0;
                    var range_max = 0;
                    var first = true;
                    for (var i = 0; i < es.length; i++)
                        if (es[i].exists)
                            if (es[i].selected)
                                if (MatchLayer(es[i])) {
                                    if (es[i]._isresizable) {
                                        if (first) {
                                            range_min = es[i].pm.x;
                                            range_max = es[i].pm.x + es[i].pm.w;
                                            first = false;
                                        } else {
                                            if (es[i].pm.x < range_min) range_min = es[i].pm.x;
                                            if (es[i].pm.x + es[i].pm.w > range_max) range_max = es[i].pm.x + es[i].pm.w;
                                        }
                                    } else {
                                        if (first) {
                                            range_min = es[i].pm.x;
                                            range_max = es[i].pm.x;
                                            first = false;
                                        } else {
                                            if (es[i].pm.x < range_min) range_min = es[i].pm.x;
                                            if (es[i].pm.x > range_max) range_max = es[i].pm.x;
                                        }
                                    }
                                } var around = (range_max + range_min) / 2;
                    for (var i = 0; i < es.length; i++)
                        if (es[i].exists)
                            if (es[i].selected)
                                if (MatchLayer(es[i])) {
                                    AddUndo('es[' + i + '].pm.x=' + es[i].pm.x + ';');
                                    es[i].pm.x = around + (around - es[i].pm.x);
                                    AddRedo('es[' + i + '].pm.x=' + around + (around - es[i].pm.x) + ';');
                                    if (es[i]._isresizable) {
                                        AddUndo('es[' + i + '].pm.w=' + es[i].pm.w + ';');
                                        es[i].pm.w = -es[i].pm.w;
                                        es[i].fixWidths();
                                        AddRedo('es[' + i + '].pm.w=' + es[i].pm.w + ';');
                                    } else if (es[i].pm.side != undefined) {
                                        AddUndo('es[' + i + '].pm.side=' + es[i].pm.side + ';');
                                        es[i].pm.side = es[i].pm.side == 1 ? -1 : 1;
                                        AddRedo('es[' + i + '].pm.side=' + es[i].pm.side + ';');
                                    }
                                } CommitUndos(false);
                }
                if (c == 86) {
                    var range_min = 0;
                    var range_max = 0;
                    var first = true;
                    for (var i = 0; i < es.length; i++)
                        if (es[i].exists)
                            if (es[i].selected)
                                if (MatchLayer(es[i])) {
                                    if (es[i]._isresizable) {
                                        if (first) {
                                            range_min = es[i].pm.y;
                                            range_max = es[i].pm.y + es[i].pm.h;
                                            first = false;
                                        } else {
                                            if (es[i].pm.y < range_min) range_min = es[i].pm.y;
                                            if (es[i].pm.y + es[i].pm.h > range_max) range_max = es[i].pm.y + es[i].pm.h;
                                        }
                                    } else {
                                        if (first) {
                                            range_min = es[i].pm.y;
                                            range_max = es[i].pm.y;
                                            first = false;
                                        } else {
                                            if (es[i].pm.y < range_min) range_min = es[i].pm.y;
                                            if (es[i].pm.y > range_max) range_max = es[i].pm.y;
                                        }
                                    }
                                } var around = (range_max + range_min) / 2;
                    for (var i = 0; i < es.length; i++)
                        if (es[i].exists)
                            if (es[i].selected)
                                if (MatchLayer(es[i])) {
                                    AddUndo('es[' + i + '].pm.y=' + es[i].pm.y + ';');
                                    es[i].pm.y = around + (around - es[i].pm.y);
                                    AddRedo('es[' + i + '].pm.y=' + around + (around - es[i].pm.y) + ';');
                                    if (es[i]._isresizable) {
                                        AddUndo('es[' + i + '].pm.h=' + es[i].pm.h + ';');
                                        es[i].pm.h = -es[i].pm.h;
                                        es[i].fixWidths();
                                        AddRedo('es[' + i + '].pm.h=' + es[i].pm.h + ';');
                                    }
                                } CommitUndos(false);
                }
            }
            need_redraw = true;
        }
    } else {
        if (c == 13) {
            eval(dim_enter_event);
        }
        if (c == 27) {
            CancelDim();
        }
    }
}

function CopyToClipBoard(ClipName) {
    var str = '';
    var clipboard = new Array();
    for (var i = 0; i < es.length; i++)
        if (es[i].exists)
            if (es[i].selected)
                if (MatchLayer(es[i])) {
                    clipboard[clipboard.length] = es[i];
                } str = serialize(clipboard);
    sessionStorage[ClipName] = str;
}

function PasteFromClipBoard(ClipName) {
    var clipboard = new Object();
    if (sessionStorage[ClipName] == undefined) return false;
    clipboard = unserialize(sessionStorage[ClipName]);
    BeginUndos();
    for (var i = 0; i < es.length; i++) {
        if (es[i].exists) {
            if (es[i].selected) {
                AddRedo('es[' + i + '].selected=false;');
                AddUndo('es[' + i + '].selected=true;');
                es[i].selected = false;
            }
        }
    }
    var max_x = 0;
    var min_y = 0;
    var max_y = 0;
    var i = 0;
    var from_obj = es.length;
    while (typeof(clipboard[i]) !== 'undefined') {
        var newparam = es.length;
        AddRedo('es[' + newparam + '].exists=true;');
        AddUndo('es[' + newparam + '].exists=false;');
        es[newparam] = new E(clipboard[i]._class);
        for (param in clipboard[i]) {
            es[newparam][param] = clipboard[i][param];
        }
        if (typeof(es[newparam].pm.x) !== 'undefined') {
            if (typeof(es[newparam].pm.y) !== 'undefined') {
                if (i == 0) {
                    min_x = es[newparam].pm.x;
                    min_y = es[newparam].pm.y;
                    max_x = es[newparam].pm.x;
                    max_y = es[newparam].pm.y;
                    if (typeof(es[newparam].pm.w) !== 'undefined') {
                        if (typeof(es[newparam].pm.h) !== 'undefined') {
                            min_x += es[newparam].pm.w / 2;
                            max_x += es[newparam].pm.w / 2;
                            min_y += es[newparam].pm.h / 2;
                            max_y += es[newparam].pm.h / 2;
                        }
                    }
                } else {
                    min_x = Math.min(min_x, es[newparam].pm.x);
                    min_y = Math.min(min_y, es[newparam].pm.y);
                    max_x = Math.max(max_x, es[newparam].pm.x);
                    max_y = Math.max(max_y, es[newparam].pm.y);
                    if (typeof(es[newparam].pm.w) !== 'undefined') {
                        if (typeof(es[newparam].pm.h) !== 'undefined') {
                            max_x = Math.max(max_x, es[newparam].pm.x + es[newparam].pm.w);
                            max_y = Math.max(max_y, es[newparam].pm.y + es[newparam].pm.h);
                        }
                    }
                }   
            }
        }
        i++;
    }
    AddRedo('m_drag_selected=true;');
    AddRedo('paint_draw_mode=true;');
    AddRedo('quick_pick_ignore_one_click=true;');
    AddUndo('m_drag_selected=false;');
    AddUndo('paint_draw_mode=false;');
    AddUndo('quick_pick_ignore_one_click=false;');
    m_dragging = true;
    paint_draw_mode = true;
    quick_pick_ignore_one_click = true;
    m_drag_x = mouse_x;
    m_drag_y = mouse_y;
    m_down_x = m_pos_x;
    m_down_y = m_pos_y;
    var x1 = Math.round(m_pos_x / GRID_SNAPPING) * GRID_SNAPPING;
    var y1 = Math.round(m_pos_y / GRID_SNAPPING) * GRID_SNAPPING;
    var lo_x = Math.round((x1 - (min_x + max_x) / 2) / GRID_SNAPPING) * GRID_SNAPPING;
    var lo_y = Math.round((y1 - (min_y + max_y) / 2) / GRID_SNAPPING) * GRID_SNAPPING;
    for (var i2 = from_obj; i2 < es.length; i2++) {
        if (typeof(es[i2].pm.uid) !== 'undefined') {
            var old_uid = es[i2].pm.uid;
            es[i2].exists = false;
            es[i2].pm.uid = RandomizeName(es[i2].pm.uid);
            es[i2].exists = true;
            for (var i3 = from_obj; i3 < es.length; i3++) {
                for (param in es[i3].pm) {
                    if (typeof(es[i3].pm[param]) == 'string') {
                        if (es[i3].pm[param] == old_uid) {
                            es[i3].pm[param] = es[i2].pm.uid;
                        }
                    }
                }
            }
        }
        if (typeof(es[i2].pm.x) !== 'undefined') {
            if (typeof(es[i2].pm.y) !== 'undefined') {
                AddUndo('es[' + i2 + '].pm.x=' + es[i2].pm.x + ';');
                AddUndo('es[' + i2 + '].pm.y=' + es[i2].pm.y + ';');
                es[i2].pm.x += lo_x;
                es[i2].pm.y += lo_y;
                //es[i2].fixPos(true);
                AddRedo('es[' + i2 + '].pm.x=' + es[i2].pm.x + ';');
                AddRedo('es[' + i2 + '].pm.y=' + es[i2].pm.y + ';');
            }
        }
    }
    if (m_dragging) {
        x1 = Math.round((m_pos_x - m_down_x) / GRID_SNAPPING) * GRID_SNAPPING;
        y1 = Math.round((m_pos_y - m_down_y) / GRID_SNAPPING) * GRID_SNAPPING;
        for (var i = 0; i < es.length; i++) {
            if (es[i].exists) {
                if (MatchLayer(es[i]) || paint_draw_mode) {
                    if (es[i].selected) {
                        if (es[i]._isphysical) {
                            es[i].pm.x += x1;
                            es[i].pm.y += y1;
                        }
                    }
                }
            }
        }
        m_down_x += x1;
        m_down_y += y1;
    }
    if (m_scaling) {
        for (var i = 0; i < es.length; i++) {
            if (es[i].exists) {
                if (MatchLayer(es[i]) || paint_draw_mode) {
                    if (es[i].selected) {
                        if (es[i]._isphysical) {
                            if (es[i]._isresizable) {
                                if (m_drag_side == 'LT' || m_drag_side == 'L' || m_drag_side == 'LB') {
                                    es[i].pm.x += x1;
                                    es[i].pm.w -= x1;
                                }
                                if (m_drag_side == 'RT' || m_drag_side == 'R' || m_drag_side == 'RB') {
                                    es[i].pm.w += x1;
                                }
                                if (m_drag_side == 'LT' || m_drag_side == 'T' || m_drag_side == 'RT') {
                                    es[i].pm.y += y1;
                                    es[i].pm.h -= y1;
                                }
                                if (m_drag_side == 'LB' || m_drag_side == 'B' || m_drag_side == 'RB') {
                                    es[i].pm.h += y1;
                                }
                                //es[i].fixPos();
                            } 
                        }
                        m_down_x += x1;
                    }
                }
            }
        }
        m_down_y += y1;
    }
    CommitUndos(false);
    return true;
}

function canv_blur() {
    unboost_y = false;
    boost_y = false;
    unboost_x = false;
    boost_x = false;
    recalc_speed_y();
    recalc_speed_x();
    k_shift = false;
    ctrl = false;
    space = false;
    alt = false;
}

function MatchLayer(elem) {
    return active_layers[class_to_layer[elem._class]];
}
var letediting = false;
var lettarget = null;
var letediting_mode = '';
var ff = document.getElementById('editablef');
var ff_drop = document.getElementById('parambox');
var over_obj = null;
var over_enablemode = 0;
var let_focused = false;

function letout() {
    if (!letediting) {
        ff.style.display = 'none';
        if (let_focused) ff.blur();
        let_focused = false;
    }
}

// Is value NOT typeable? (Usually selected from a list, but can be others)
function value_list_type(enablemode) {
    switch (enablemode) {
        case 'string':
        case 'value+round10':
        case 'value':
        case 'int':
        case 'value>0+round10':
        case 'value>=0':
        case 'value>0':
        case 'percent':
        case 'value>=0+round1':
        case 'value>0+round1':
        case 'luacode':
            return false;
    }
    return true;
}

function letover(obj, enablemode) {
    if (letediting || enablemode == 'nochange' || value_list_type(enablemode)) 
        return;

    var rect = obj.getBoundingClientRect();

    ff.blur();
    ff.style.left = rect.left + 'px';
    ff.style.top = rect.top + 'px';
    ff.style.width = rect.width + 'px';
    ff.style.height = rect.height + 'px';
    ff.className = 'pa2edit ' + obj.className;
    ff.style.fontFamily = obj.style.fontFamily;
    ff.style.backgroundColor = '#506d95';
    ff.style.borderTop = ff.style.borderLeft = ff.style.borderRight = '1px solid #506d95';
    ff.style.borderBottom = '1px solid #40577a';
    ff.value = obj.innerText; // obj.innerHTML.replace(/<\/?[^>]+(>|$)/g, '');
    ff.style.display = 'block';
    over_obj = obj;
    over_enablemode = enablemode;
}

function letonfocus() {
    if (!letediting) {
        letedit(over_obj, over_enablemode);
    }
    let_focused = true;
}

// For non-text values (i.e. ones with a "real" value that's not displayed in raw form in ALE)
function setletedit(val1, val2, defval) {
    quick_pick = false;
    quick_pick_ignore_one_click = false;
    if (val1.indexOf('[val]') != -1) {
        defval = Math.abs(Number(defval));
        var txt = prompt('Enter value:', defval);
        var gotval;
        if (txt == null || txt == '') {
            gotval = Math.abs(defval);
        } else {
            gotval = Math.abs(txt);
        }
        val1 = eval(val1.replace('[val]', gotval));
        val2 = val2.replace('#', gotval);
    } else if (val1.indexOf('[color]') != -1) {
        defval = Math.abs(Number(defval));
        var gotval = prompt('Enter value in format #XXXXXX:', defval);
        if (gotval.charAt(0) != '#') {
            gotval = '#' + gotval;
        }
        if (gotval.length != 7) alert('Value ' + gotval + ' is not correct. Valid value must be in format #XXXXXX. Read about "hex color codes" for more information.');
        val1 = val1.replace('[color]', gotval);
        val2 = val2.replace('#', gotval);
    }
    ff.value = '<pvalue real = "' + val1 + '">' + val2 + '</pvalue>';
    lettarget.innerHTML = ff.value;
    ff.style.display = 'none';
    ff_drop.style.display = 'none';
    letediting = false;
    UpdatePhysicalParam((lettarget.id.replace('pm_', '')), val1);
    var parameter_updated = lettarget.id.replace('pm_', '');
    if (parameter_updated == 'mark' || (parameter_updated.indexOf('actions_') != -1 && parameter_updated.indexOf('_type') != -1)) UpdateTriggerAndEngineMarkerParameters();
}

function selection_in_list(pobject) {
    try {
        var text = pobject.innerHTML;
        if (window.DOMParser) {
            xmlDoc = parser.parseFromString(text, "text/xml");
        } else {
            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
            xmlDoc.async = false;
            xmlDoc.loadXML(text);
        }
        return xmlDoc.childNodes.item(0).getAttribute('real');
    } catch (err) {
        return undefined;
    }
}

function replace(_str, _what, _with) {
    return String(_str).split(_what).join(_with);
}

function letedit(obj, enablemode) {
    ff_drop.style.display = 'none';
    if (enablemode == 'nochange') return;

    var rect = obj.getBoundingClientRect();
    ff.style.left = rect.left + 'px';
    ff.style.top = rect.top + 'px';
    ff.style.width = rect.width + 'px';
    ff.style.height = rect.height + 'px';
    ff.className = 'pa2edit ' + obj.className;
    ff.style.backgroundColor = '#4a7372';
    ff.style.borderColor = '#608b6f';
    var strinput = obj.innerText;
    if (strinput == '<nochange>...</nochange>') ff.value = '[leave as is]';
    else if (strinput == '&nbsp;') ff.value = '';
    else ff.value = strinput.split('&amp;').join('&');
    letediting_mode = enablemode;
    lettarget = obj;
    letediting = true;
    if (value_list_type(enablemode)) {
        var post_set_html_callback = null;
        ff.style.display = 'none';
        var addonw = 0;
        switch (enablemode) {
            case 'char':
                addonw = 60;
                break;
            case 'trigger_type':
                addonw = 450;
                break;
            case 'sound':
                addonw = 150;
                break;
        }
        ff_drop.style.display = 'inline-block';
        ff_drop.style.left = (rect.left - addonw) + 'px';
        ff_drop.style.top = (rect.top + rect.height) + 'px';
        ff_drop.style.width = (rect.width + addonw) + 'px';
        var paramsout = '';
        var active_param = selection_in_list(obj);
        quick_pick = false;
        quick_pick_ignore_one_click = false;
        quick_pick_objects = new Array();
        quick_pick_active_param = '';
        
        let lookingSide = "client"
        for (let e = es.length-1; e > -1; e--) {
            if (es[e].selected && es[e].pm.onserver == "true") {
                lookingSide = "server"
            }
        }
        
        var he = 3 + 3 + 2;
        for (i in special_values_table[enablemode]) {
            if (i == '[listof]' || i == '[listof2]') {
                quick_pick_objects.push(special_values_table[enablemode][i]);
                quick_pick = true;
                quick_pick_ignore_one_click = true;
                quick_pick_active_param = active_param;
                quick_pick_fake_over = -1;
                need_redraw = true;
                for (i2 = 0; i2 < es.length; i2++)
                    if (es[i2].exists)
                        if (es[i2]._class == special_values_table[enablemode][i]) {
                            he += 3 + 16 + 3;
                            paramsout += '<a href="#" onClick="setletedit(\'' + es[i2].pm.uid + '\', \'' + replace(es[i2].pm.uid, "'", "\\'") + '\', \'' + active_param + '\')" onMouseOver="quick_pick_fake_over=' + i2 + ';" onMouseOut="quick_pick_fake_over=-1;" class="' + (active_param == es[i2].pm.uid ? 'paramactive' : 'paraminbox') + ' paramwide">' + icon_and_name(i2) + '</a>';
                        }
            } else {
                if (extraActionInfos[i] != undefined) {
                    if (extraActionInfos[i].side != "both" && extraActionInfos[i].side != lookingSide) {
                        continue;
                    }
                }
                he += 3 + 16 + 3;
                paramsout += '<a href="#" onClick="setletedit(\'' + i + '\', \'' + replace(special_values_table[enablemode][i], "'", "\\'") + '\', \'' + active_param + '\')" class="' + (active_param == i ? 'paramactive' : 'paraminbox') + ' paramwide">' + special_values_table[enablemode][i] + '</a>';
            }
        }
        he = Math.max(20, Math.min(he, 500));
        if ((rect.top + rect.height) + he > window.innerHeight) {
            he = window.innerHeight - (rect.top + rect.height);
        }
        if (enablemode == 'trigger_type') {
            addonw = 700;
            ff_drop.style.top = '0px';
            he = window.innerHeight;
            ff_drop.style.left = (rect.left - addonw) + 'px';
            ff_drop.style.width = (addonw) + 'px';
            var group_code = '<div style="background-color:#000000;display:block;width:' + (addonw - 32) + 'px;">';
            group_code += '<a onclick="MaskTriggerActions(\'\', \'\')" href="#" style="display:inline-block;padding:4px;padding-left:7px;padding-right:7px;color:' + tr_type_tags[i] + '" class="paraminbox">Everything</a>';
            for (i in tr_type_tags) group_code += '<a onclick="MaskTriggerActions(\'' + tr_type_tags[i] + '\',\'' + i + '\')" href="#" style="display:inline-block;padding:4px;padding-left:7px;padding-right:7px;color:' + tr_type_tags[i] + '" class="paraminbox">' + i + '</a>';
            group_code += '<a onclick="setletedit(\'-1\', \'Do nothing\', \'0\')" href="#" style="display:inline-block;padding:4px;padding-left:7px;padding-right:7px;color:' + tr_type_tags[i] + '" class="paraminbox">Do Nothing</a>';
            group_code += '</div>';
            group_code += '<div style="background-color:#000000;display:block;width:' + (addonw - 32) + 'px;">';
            group_code += '<input type="text" id="trigger_search_bar" class="field_input" style="width:100%" onKeyUp="MaskTriggerActions(\'QUICK_SEARCH\',this.value)">';
            group_code += '</div>';
            paramsout = group_code + paramsout;
            post_set_html_callback = function(ff_drop) {
                    document.getElementById('trigger_search_bar').focus();
                };
        }
        if (paramsout == '') {
            paramsout += '<span style="color:#888">';
            switch (Math.floor(Math.random() * 11)) {
                case 0:
                    paramsout += 'Where had you put ' + special_values_table[enablemode]['[listof]'] + '?';
                    break;
                case 1:
                    paramsout += 'Not enough ' + special_values_table[enablemode]['[listof]'] + 's.';
                    break;
                case 2:
                    paramsout += 'You need more ' + special_values_table[enablemode]['[listof]'] + 's.';
                    break;
                case 3:
                    paramsout += 'Guess who\'s not going to create itself? - ' + special_values_table[enablemode]['[listof]'] + 's.';
                    break;
                case 4:
                    paramsout += 'Create at least one ' + special_values_table[enablemode]['[listof]'] + ' first.';
                    break;
                case 5:
                    paramsout += 'I don\'t see any ' + special_values_table[enablemode]['[listof]'] + 's.';
                    break;
                case 6:
                    paramsout += 'Missed something? Maybe ' + special_values_table[enablemode]['[listof]'] + 's?';
                    break;
                case 7:
                    paramsout += 'Would you like to make any ' + special_values_table[enablemode]['[listof]'] + '?';
                    break;
                case 8:
                    paramsout += 'No ' + special_values_table[enablemode]['[listof]'] + 's - no drop-down list.';
                    break;
                case 9:
                    paramsout += 'What you want to select? Some ' + special_values_table[enablemode]['[listof]'] + '? But you don\'t have any ' + special_values_table[enablemode]['[listof]'] + 's on this map.';
                    break;
                default:
                    paramsout += 'Where all the ' + special_values_table[enablemode]['[listof]'] + 's gone?';
                    break;
            }
            paramsout += '</span>';
            he += 30;
        }
        ff_drop.style.height = he + 'px';
        ff_drop.innerHTML = paramsout;
        ff_drop.focus();
        if (enablemode == 'bg_model' || enablemode == 'decor_model') {
            ff_drop.innerHTML = '';
            ff.style.display = 'none';
            BrowseImages(enablemode, active_param, function(new_value, new_value_title) {
                setletedit(new_value, new_value_title, active_param);
            });
        }
        if (post_set_html_callback !== null) post_set_html_callback(ff_drop);
    } else {
        ff.style.display = 'block';
        if (!let_focused) ff.focus();
    }
    stopedit(null);
}

function MaskTriggerActions(hex, extra_mentions) {
    var extra_word = extra_mentions;
    if (hex == 'QUICK_SEARCH') extra_word = extra_word.toLowerCase();
    else extra_word = ' ' + extra_word.toLowerCase();
    for (var i = 0; i < ff_drop.childNodes.length; i++) {
        var html = ff_drop.childNodes[i].innerHTML;
        if (hex != '' && html.indexOf(hex) == -1 && html.toLowerCase().indexOf(extra_word) == -1 && html.indexOf('Do nothing') == -1) {
            ff_drop.childNodes[i].style.display = 'none';
        } else {
            ff_drop.childNodes[i].style.display = 'inline-block';
        }
    }
}

var allowed_string_chars = 'abcdefghijklmnopqrstuvwxyz_ -0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()+=[]{}:;,.?/"\'~';
var allowed_value_chars = '-0123456789,.';
if (ALLOW_EXTRA_CHARACTERS) allowed_string_chars += "<>\n";


function stopedit(event) {
    var keyCode;
    if (event == null) keyCode = -1;
    else keyCode = ('which' in event) ? event.which : event.keyCode;
    if (letediting) {
        var valid = true;
        var fixable = true;
        var chvalue = ff.value;
        if (chvalue != '[leave as is]') {
            switch (letediting_mode) {
                case 'string':
                    for (var i = 0; i < chvalue.length; i++) {
                        if (allowed_string_chars.indexOf(chvalue.charAt(i)) == -1) {
                            valid = false;
                            break;
                        }
                    }
                    break;
                case 'value+round10':
                    for (var i = 0; i < chvalue.length; i++) {
                        if (allowed_value_chars.indexOf(chvalue.charAt(i)) == -1) {
                            valid = false;
                            fixable = false;
                            break;
                        }
                    }
                    if (Math.round(Number(chvalue) / 10) != Number(chvalue) / 10) {
                        valid = false;
                    }
                    if (isNaN(chvalue)) {
                        valid = false;
                        fixable = false;
                    }
                    break;
                case 'value':
                    for (var i = 0; i < chvalue.length; i++) {
                        if (allowed_value_chars.indexOf(chvalue.charAt(i)) == -1) {
                            valid = false;
                            fixable = false;
                            break;
                        }
                    }
                    if (isNaN(chvalue)) {
                        valid = false;
                        fixable = false;
                    }
                    break;
                case 'int':
                    for (var i = 0; i < chvalue.length; i++) {
                        if (allowed_value_chars.indexOf(chvalue.charAt(i)) == -1) {
                            valid = false;
                            fixable = false;
                            break;
                        }
                    }
                    if (Math.round(Number(chvalue)) != Number(chvalue)) {
                        valid = false;
                    }
                    if (isNaN(chvalue)) {
                        valid = false;
                        fixable = false;
                    }
                    break;
                case 'value>=0':
                    for (var i = 0; i < chvalue.length; i++) {
                        if (allowed_value_chars.indexOf(chvalue.charAt(i)) == -1) {
                            valid = false;
                            fixable = false;
                            break;
                        }
                    }
                    if (Number(chvalue) >= 0) {} else {
                        valid = false;
                        fixable = false;
                    }
                    if (isNaN(chvalue)) {
                        valid = false;
                        fixable = false;
                    }
                    break;
                case 'value>0+round10':
                    for (var i = 0; i < chvalue.length; i++) {
                        if (allowed_value_chars.indexOf(chvalue.charAt(i)) == -1) {
                            valid = false;
                            fixable = false;
                            break;
                        }
                    }
                    if (Number(chvalue) == 0) {
                        valid = false;
                        fixable = false;
                    }
                    if (Math.round(Number(chvalue) / 10) != Number(chvalue) / 10) {
                        valid = false;
                    }
                    if (isNaN(chvalue)) {
                        valid = false;
                        fixable = false;
                    }
                    break;
                case 'value>=0+round1':
                    if (Number(chvalue) < 0) {
                        valid = false;
                        fixable = false;
                    }
                    if (Math.round(Number(chvalue)) != Number(chvalue)) {
                        valid = false;
                    }
                    if (isNaN(chvalue)) {
                        valid = false;
                        fixable = false;
                    }
                    break;
                case 'value>0+round1':
                    if (Number(chvalue) <= 0) {
                        valid = false;
                        fixable = false;
                    }
                    if (Math.round(Number(chvalue)) != Number(chvalue)) {
                        valid = false;
                    }
                    if (isNaN(chvalue)) {
                        valid = false;
                        fixable = false;
                    }
                    break;
            }
        }
        if (fixable) {
            if (valid) {
                ff.style.backgroundColor = '#4a7372';
                ff.style.borderColor = '#608b6f';
            } else {
                ff.style.backgroundColor = '#697651';
                ff.style.borderColor = '#93a451';
            }
        } else {
            ff.style.backgroundColor = '#624359';
            ff.style.borderColor = '#957085';
        }
        if (keyCode == 13) {
            if (fixable) {
                if (chvalue != '[leave as is]') {
                    switch (letediting_mode) {
                        case 'string':
                            var new_string = '';
                            for (var i = 0; i < chvalue.length; i++) {
                                if (allowed_string_chars.indexOf(chvalue.charAt(i)) != -1) {
                                    new_string += chvalue.charAt(i);
                                }
                            }
                            chvalue = new_string;
                            break;
                        case 'value+round10':
                            chvalue = Math.round(Number(chvalue) / 10) * 10;
                            break;
                        case 'value':
                            chvalue = Number(chvalue);
                            break;
                        case 'int':
                            chvalue = Math.round(Number(chvalue));
                            break;
                        case 'value>=0':
                            if (Number(chvalue) < 0) chvalue = 0;
                            else chvalue = Number(chvalue);
                            break;
                        case 'value>0+round10':
                            if (Number(chvalue) < 10) chvalue = 10;
                            else chvalue = Math.round(Number(chvalue) / 10) * 10;
                            break;
                        case 'value>0+round1':
                            if (Number(chvalue) < 1) chvalue = 1;
                            else chvalue = Math.round(Number(chvalue));
                            break;
                        case 'value>=0+round1':
                            if (Number(chvalue) < 0) chvalue = 0;
                            else chvalue = Math.round(Number(chvalue));
                            break;
                    }
                    if (isNaN(chvalue) && chvalue == '') lettarget.innerHTML = '&nbsp;';
                    else {
                        lettarget.innerText = chvalue;
                    }
                    UpdatePhysicalParam((lettarget.id.replace('pm_', '')), chvalue);
                }
                ff.style.display = 'none';
                letediting = false;
            }
        }
    }
}

function UpdatePhysicalParam(paramname, chvalue) {
    BeginUndos();
    var layer_mismatch = false;
    var list_changes = '';
    for (var elems = 0; elems < es.length; elems++)
        if (es[elems].exists)
            if (es[elems].selected) {
                if (es[elems].pm.hasOwnProperty(paramname)) {
                    if (MatchLayer(es[elems])) {
                        var s_paramname = (typeof(paramname) == 'string') ? '"' + paramname + '"' : paramname;
                        if (typeof(chvalue) == 'number' || chvalue == 0) {
                            AddUndo('es[' + elems + '].pm[' + s_paramname + '] = ' + es[elems].pm[paramname] + ';');
                            AddRedo('es[' + elems + '].pm[' + s_paramname + '] = ' + chvalue + ';');
                            es[elems].pm[paramname] = Number(chvalue);
                        } else if (typeof(chvalue) == 'string') {
                            AddUndo('es[' + elems + '].pm[' + s_paramname + '] = "' + es[elems].pm[paramname] + '";');
                            AddRedo('es[' + elems + '].pm[' + s_paramname + '] = "' + chvalue + '";');
                            es[elems].pm[paramname] = chvalue;
                        } else {
                            alert('Unknown value type: ' + typeof(chvalue));
                        }
                        list_changes += 'Parameter "' + paramname + '" of object "' + (es[elems].pm.uid != null ? es[elems].pm.uid : es[elems]._class) + '" was set to "' + chvalue + '"<br>';
                    } else layer_mismatch = true;
                }
            } need_redraw = true;
    NewNote('Operation complete:<br><br>' + list_changes, note_passive);
    if (layer_mismatch) NewNote('Note: Some changes weren\'t made due to missmatch of active layer and class of selected objects', note_neutral);
    CommitUndos(false);
}

function UpdatePhysicalParams(paramname_arr, chvalue_arr, forcefully_create_params) {
    BeginUndos();
    var layer_mismatch = false;
    var list_changes = '';
    for (var elems = 0; elems < es.length; elems++)
        if (es[elems].exists)
            if (es[elems].selected)
                for (var par = 0; par < paramname_arr.length; par++) {
                    var paramname = paramname_arr[par];
                    var chvalue = chvalue_arr[par];
                    if (forcefully_create_params || es[elems].pm.hasOwnProperty(paramname)) {
                        if (MatchLayer(es[elems])) {
                            var s_paramname = (typeof(paramname) == 'string') ? '"' + paramname + '"' : paramname;
                            if (typeof(chvalue) == 'number' || chvalue == 0) {
                                AddUndo('es[' + elems + '].pm[' + s_paramname + '] = ' + es[elems].pm[paramname] + ';');
                                AddRedo('es[' + elems + '].pm[' + s_paramname + '] = ' + chvalue + ';');
                                es[elems].pm[paramname] = Number(chvalue);
                                if (chvalue === delete_addr) AddRedo('delete es[' + elems + '].pm[' + s_paramname + '];');
                            } else if (typeof(chvalue) == 'string') {
                                AddUndo('es[' + elems + '].pm[' + s_paramname + '] = "' + es[elems].pm[paramname] + '";');
                                AddRedo('es[' + elems + '].pm[' + s_paramname + '] = "' + chvalue + '";');
                                es[elems].pm[paramname] = chvalue;
                                if (chvalue === delete_addr) AddRedo('delete es[' + elems + '].pm[' + s_paramname + '];');
                            } else {
                                alert('Unknown value type: ' + typeof(chvalue));
                            }
                            list_changes += 'Parameter "' + paramname + '" of object "' + (es[elems].pm.uid != null ? es[elems].pm.uid : es[elems]._class) + '" was set to "' + chvalue + '"<br>';
                        } else layer_mismatch = true;
                    }
                }
    need_redraw = true;
    NewNote('Operation complete:<br><br>' + list_changes, note_passive);
    if (layer_mismatch) NewNote('Note: Some changes weren\'t made due to missmatch of active layer and class of selected objects', note_neutral);
    CommitUndos(false);
}
var timeout_unfocusedit = -1;

function cancelable_unfocusedit() {
    timeout_unfocusedit = setTimeout(function() {
            unfocusedit()
        }, 2);
}

function cancel_unfocusedit() {
    setTimeout(function() {
        if (timeout_unfocusedit != -1) window.clearTimeout(timeout_unfocusedit);
        timeout_unfocusedit = -1;
    }, 1);
}

function unfocusedit() {
    if (quick_pick) {
        for (i = 0; i < es.length; i++)
            if (es[i].exists)
                if (es[i]._isphysical) {
                    if (es[i]._isresizable) {
                        var x1 = w2s_x(es[i].pm.x);
                        var x2 = w2s_w(es[i].pm.w);
                        var y1 = w2s_y(es[i].pm.y);
                        var y2 = w2s_h(es[i].pm.h);
                    } else {
                        var this_class = ThinkOfBBoxClass(es[i]._class, es[i]);
                        var y1 = w2s_y(es[i].pm.y + bo_y[this_class]);
                        var y2 = w2s_h(bo_h[this_class]);
                        if (es[i].pm.side != -1) {
                            var x1 = w2s_x(es[i].pm.x + bo_x[this_class]);
                            var x2 = w2s_w(bo_w[this_class]);
                        } else {
                            var x1 = w2s_x(es[i].pm.x - bo_x[this_class]);
                            var x2 = w2s_w(-bo_w[this_class]);
                            x1 += x2;
                            x2 = -x2;
                        }
                    }
                    if (quick_pick_objects.indexOf(es[i]._class) != -1) {
                        if (Math.sqrt(Math.pow(x1 + x2 / 2 - mouse_x, 2) + Math.pow(y1 + y2 / 2 - mouse_y, 2)) < 20 * quick_pick_hit_scale) {
                            setletedit(es[i].pm.uid, replace(es[i].pm.uid), quick_pick_active_param);
                            break;
                        }
                    }
                } need_redraw = true;
        quick_pick = false;
    }
    if (letediting) {
        letediting_mode = '';
        ff.style.display = 'none';
        letediting = false;
        ff_drop.style.display = 'none';
    }
    let_focused = false;
}
var ERROR_VALUE = '<span class="error">ERROR!</span>';
var gui_params = document.getElementById('gui_params');
var gui_objbox = document.getElementById('gui_objbox');
var tools_box = document.getElementById('tools_box');
var objboxhider = document.getElementById('objboxhider');

// Convert singular `str` to plural form depending on `num`
function toplural(str, num) {
    if (num == 1) return str;
    if (str.charAt(str.length - 1) == 's' || str.charAt(str.length - 1) == 'o' || str.charAt(str.length - 1) == 'x' || (str.charAt(str.length - 1) == 'h' && (str.charAt(str.length - 2) == 's' || str.charAt(str.length - 2) == 'c'))) return str + 'es';
    if (str.charAt(str.length - 1) == 'y' && str.charAt(str.length - 2) != 'a') return str.substring(0, str.length - 1) + 'ies';
    if (str.charAt(str.length - 1) == 'e' && str.charAt(str.length - 2) != 'l') return str + 's';
    return str + 's';
}

function FindMachingParameterID(fm_parameter, fm_class) {
    for (var i2 = 0; i2 < param_type.length; i2++) {
        if (param_type[i2][4] == '*' || param_type[i2][4] == fm_class) {
            if (param_type[i2][0] == fm_parameter) return i2;
        }
    }
    return -1;
}

function CheckForErrors() {
    var defined_uids = [];
    var player_exists = false;
    var wall_exists = false;
    var unprobable_errors = [];
    for (var si = 0; si < es.length; si++)
        if (es[si].exists) {
            if (es[si].pm.uid) defined_uids.push(es[si].pm.uid);
            if (es[si]._class == 'player') player_exists = true;
            if (es[si]._class == 'box') wall_exists = true;
        } for (var si = 0; si < es.length; si++)
        if (es[si].exists)
            for (var key in es[si].pm)
                if (typeof es[si].pm[key] == 'string')
                    if (es[si].pm[key].charAt(0) == '#')
                        if (es[si].pm[key].length != 7 || isNaN(parseInt(es[si].pm[key].substring(1), 16)))
                            if (defined_uids.indexOf(es[si].pm[key]) === -1) {
                                if (key.indexOf('actions_') != -1 && key.indexOf('_target') != -1) {
                                    unprobable_errors.push('Object with UID "' + es[si].pm[key] + '" does not seem to exist anymore or was renamed. Was used in property .' + key + ' of object with UID "' + es[si].pm.uid + '"');
                                } else {
                                    alert('Object with UID "' + es[si].pm[key] + '" does not seem to exist anymore or was renamed. Was used in property .' + key + ' of object with UID "' + es[si].pm.uid + '"');
                                    return;
                                }
                            } if (!player_exists) {
        alert('Map needs at least 1 player to be playable');
        return;
    }
    if (!wall_exists) {
        alert('Map needs at least 1 wall to be playable');
        return;
    }
    if (unprobable_errors.length > 0) {
        alert('Most probably there is no errors.\n\nBut due to nature of how triggers might keep erased actions, there might be some outdated references in trigger actions, such as:\n(alternatively it might be easier to catch these errors by adding "Engine mark" object with "Modificator" set to "Enable level trigger error reporting" which will make errors to be shown when map is tested from game)\n\n' + unprobable_errors.join('\n'));
        return;
    }
    alert('No errors were found');
}

function special_value(base, val) {
    if (base == 'bg_model' || base == 'decor_model') {
        if (special_values_table[base][val] == undefined) ServerRequest('a=get_images&for_class=' + base + '&update_const=' + val, 'request_consts');
        if (special_values_table[base][val] != undefined) return (CUSTOM_IMAGES_APPROVED[val] ? '<img src="static/ap.png" width="11" height="11" style="vertical-align: text-bottom;">' : '<img src="static/noap.png" width="11" height="11" style="vertical-align: text-bottom;filter: grayscale(1) brightness(4) contrast(0.4);">') + ' ' + special_values_table[base][val];
        return 'Custom Image #' + val;
    }
    switch (base) {
        case 'team':
        case 'team+any': {
            if (special_values_table[base][val] != undefined) return special_values_table[base][val];
            return 'Team ' + val;
        }
		case 'bodylimb': {
			if (val == 0) val = 'Head';
			if (val == 1) val = 'Lower Body';
            if (val == 1) val = 'Higher Body';
			if (val == 2) val = 'Lower Arm 1';
			if (val == 3) val = 'Lower Arm 2';
			if (val == 4) val = 'Higher Arm 1';
			if (val == 5) val = 'Higher Arm 2';
			if (val == 2) val = 'Lower Leg 1';
			if (val == 3) val = 'Lower Leg 2';
			if (val == 4) val = 'Higher Leg 1';
			if (val == 5) val = 'Higher Leg 2';
			return val;
            if (special_values_table[base][val] != undefined) return special_values_table[base][val];
            return ERROR_VALUE;
		}
        case 'side':
        case 'enable-disable':
        case 'char':
        case 'botaction':
        case 'gun_model':
        case 'bg_model':
        case 'bg_model_native':
        case 'decor_model_native':
        case 'box_model':
        case 'draw_in_front':
        case 'gun_upgrade':
        case 'decor_model':
        case 'region_activation':
        case 'engine_mark':
        case 'sky_model':
        case 'trigger_type':
        case 'barrel_model':
        case 'vehicle_model':
        case 'sound':
        case 'textmsg':
        case 'voice_preset': {
            if (base == 'draw_in_front') {
                if (val === true) val = 1;
                if (val === false) val = 0;
            }
            if (special_values_table[base][val] != undefined) return special_values_table[base][val];
            if (base == 'textmsg') {
                if (val.charAt(0) == '#' && val.length == 7) return 'Custom color ' + val;
            }
            ConsoleTace('Value "' + val + '" is not registered for Parameter "' + base + '" in "GUI"[1]');
            return ERROR_VALUE;
        }
        case 'pushf_damage': {
            if (special_values_table[base][val] != undefined) return special_values_table[base][val];
            if (val > 0) return val + ' basic damage';
            return (-val) + ' slicing damage';
        }
        case 'bool': {
            if (val == 1) val = 'true';
            if (val == 0) val = 'false';
            if (special_values_table[base][val] != undefined) return special_values_table[base][val];
            return ERROR_VALUE;
        }
        case 'vehicle+none+any':
        case 'trigger':
        case 'trigger+none':
        case 'song+none':
        case 'vehicle':
        case 'timer':
        case 'pushf':
        case 'door':
        case 'door+none':
        case 'barrel':
        case 'decor':
        case 'lamp':
        case 'gun':
        case 'region':
        case 'water':
        case 'bg':
        case 'character': {
            if (special_values_table[base][val] != undefined) return special_values_table[base][val];
            if (special_values_table[base]['[listof]'] != undefined) {
                if (isNaN(val) && val.charAt(0) == '#') {
                    for (var si = 0; si < es.length; si++)
                        if (es[si].exists)
                            if (es[si]._class == special_values_table[base]['[listof]'] || es[si]._class == special_values_table[base]['[listof2]']) {
                                if (es[si].pm.uid == val) return es[si].pm.uid;
                            }
                } else {
                    var inco = 0;
                    for (var si = 0; si < es.length; si++)
                        if (es[si].exists)
                            if (es[si]._class == special_values_table[base]['[listof]'] || es[si]._class == special_values_table[base]['[listof2]']) {
                                if (inco == val) return es[si].pm.uid;
                                inco++;
                            }
                }
            }
            ConsoleTace('Value "' + val + '" is not registered for Parameter "' + base + '" in "GUI"[2]');
            return ERROR_VALUE;
        }
        case 'maxcalls': {
            if (special_values_table[base][val] != undefined) return special_values_table[base][val];
            if (val == 1) return val + ' call';
            if (val > 1 || val == 0) return val + ' calls';
        }
        case 'psis': {
            return special_values_table["psis"][val + ""];
        }
        default: {
            ConsoleTace('Parameter "' + base + '" is not registered in "GUI"[3]');
            return ERROR_VALUE;
        }
    }
}

function GenParamVal(base, val) {
    if (base == 'string' || base == 'luacode') {
        return htmlEntities(val);
    }
    if (base == 'string' || base == 'value+round10' || base == 'value' || base == 'value>0' || base == 'int' || base == 'value>0+round10' || base == 'value>=0' || base == 'value>0+round1' || base == 'value>=0+round1') return val;
    if (base == 'nochange') return '<pvalue real = "' + val + '">- not used -</pvalue>';
    return '<pvalue real = "' + val + '">' + special_value(base, val) + '</pvalue>';
}
var current_gui_params = new Array();

function ForceDeselect() {
    for (i = 0; i < es.length; i++)
        if (es[i].selected) es[i].selected = false;
    need_GUIParams_update = true;
    need_redraw = true;
}
var edit_triggers_as_text = false;
var delete_addr = {
    val: 'delete addr'
};

function CompileTrigger() {
    var opcode_field = document.getElementById('opcode_field');
    var code = opcode_field.value;
    var code_lines = code.split('\n');
    var new_trigger_actions = [];
    var direct_update_params = [];
    var direct_update_values = [];

    function ScheduleParamSet(a, b) {
        direct_update_params.push(a);
        direct_update_values.push(b);
    }

    function getAllIndexes(arr, val) {
        var indexes = [],
            i = -1;
        while ((i = arr.indexOf(val, i + 1)) != -1) {
            indexes.push(i);
        }
        return indexes;
    }
    for (var i = 0; i < code_lines.length; i++) {
        var line = code_lines[i];
        var paramA_start = line.indexOf('( "');
        var separator = line.indexOf('", "');
        var end = line.indexOf('" );');
        var semicolon = line.indexOf(':');
        if (paramA_start != -1 && separator != -1 && end != -1) {
            var first_c = line.indexOf('(');
            var opcode = line.substring(0, first_c);
            var action_type = -1;
            if (opcode.substring(0, 2) == 'op' && !isNaN(opcode.slice(2))) action_type = parseInt(opcode.slice(2));
            else {
                action_type = trigger_opcode_aliases.indexOf(opcode);
                if (action_type == -1) {
                    NewNote('Error: Changes were not applied because &quot;' + opcode + '&quot; seems to be an unknown operation code.', note_neutral);
                    return;
                }
            }
            var valueA = '';
            var valueB = '';
            if (action_type != -1) {
                valueA = line.substring(paramA_start + 3, separator);
                valueB = line.substring(separator + 4, end);
            }
            if (new_trigger_actions.length < 10) new_trigger_actions.push([action_type, valueA, valueB]);
            else {
                NewNote('Error: Changes were not applied because number of trigger actions exceeds 10.', note_neutral);
                return;
            }
        } else if (semicolon != -1) {
            var left_part = line.substring(0, semicolon);
            var right_part = line.slice(semicolon + 1);
            while (left_part.charAt(0) == ' ') left_part = left_part.slice(1);
            while (left_part.charAt(left_part.length - 1) == ' ') left_part = left_part.slice(0, -1);
            while (right_part.charAt(0) == ' ') right_part = right_part.slice(1);
            while (right_part.charAt(right_part.length - 1) == ' ') right_part = right_part.slice(0, -1);
            if (left_part == 'uid' || left_part == 'enabled' || left_part == 'maxcalls') ScheduleParamSet(left_part, right_part);
            else NewNote('Error: Changes were not applied because &quot;' + left_part + '&quot; seems to be not a default property.', note_neutral);
        } else if (line != '') {
            NewNote('Error: Changes were not applied because line &quot;' + line + '&quot; wasn\'t recognized or contains unsupported syntax.', note_neutral);
            return;
        }
    }
    var action = 1;
    for (var i = 0; i < new_trigger_actions.length; i++) {
        ScheduleParamSet('actions_' + action + '_type', new_trigger_actions[i][0]);
        ScheduleParamSet('actions_' + action + '_targetA', new_trigger_actions[i][1]);
        ScheduleParamSet('actions_' + action + '_targetB', new_trigger_actions[i][2]);
        action++;
    }
    var last_action = 10;
    while (action <= last_action) {
        ScheduleParamSet('actions_' + action + '_type', -1);
        ScheduleParamSet('actions_' + action + '_targetA', '');
        ScheduleParamSet('actions_' + action + '_targetB', '');
        action++;
    }
    UpdatePhysicalParams(direct_update_params, direct_update_values, false);
    return true;
}

// Rebuild gui_params
function UpdateGUIParams() {
    current_gui_params = new Array();
    unfocusedit();
    ff.style.display = 'none';
    var objects_selected = 0;
    var sel_by_class = new Array();
    let $cancel_button = null;

    ///////////////////////////////////////////
    //  DISPLAY # & TYPE OF OBJECTS SELECTED //
    ///////////////////////////////////////////
    for (i = 0; i < known_class.length; i++) {
        sel_by_class[i] = 0;
    }
    var uids_list = '';
    for (i = 0; i < es.length; i++) {
        if (es[i].exists) {
            if (es[i].selected) {
                objects_selected++;
                sel_by_class[known_class.indexOf(es[i]._class)]++;
                if (es[i].pm.uid != undefined) {
                    if (uids_list.length > 0) uids_list += ', ';
                    uids_list += '"' + es[i].pm.uid + '"';
                }
            }
        }
    }
    var full_list = '';
    var classes_selected = 0;
    for (i = 0; i < known_class.length; i++) {
        if (sel_by_class[i] > 0) {
            if (full_list.length > 0) full_list += ', ';
            classes_selected++;
            full_list += sel_by_class[i] + ' ' + toplural(known_class_title[i], sel_by_class[i]);
        } 
    }
    if (classes_selected > 0) {
        if (classes_selected == 1) {
            if (uids_list.length > 0) {
                full_list += ': ' + uids_list;
            }
        }
        full_list = ' (' + full_list + ')';
        let img = new Image(11, 11);
        img.style.border = 0;
        img.src = 'static/noap.png';
        $cancel_button = $("<a>")
                          .attr("href", "#")
                          .on("click", (event)=>ForceDeselect())
                          .append(img);
    }

    let selection_text;
    if (objects_selected == 0) selection_text = 'Nothing selected';
    else selection_text = objects_selected + ' object' + (objects_selected != 1 ? 's' : '') + ' selected' + full_list;

    let $gui_sel_info = $('<div>').prop("id", "gui_sel_info").addClass("gui_sel_info")
    .append(
        selection_text,
        $cancel_button ? " " : "",
        $cancel_button,
    );

    //////////////////////////////////////
    // FIGURE OUT PARAMETERS TO DISPLAY //
    //////////////////////////////////////
    var first_selected_object = null;
    var params_to_display = new Array();
    var paramscount_to_display = new Array();
    var paramsvalue_to_display = new Array();
    var param_associated = new Array();
    for (var i = 0; i < es.length; i++) {
        if (!es[i].exists || !es[i].selected) continue;

        if (first_selected_object == null) first_selected_object = es[i];
        var parameter;
        for (parameter in es[i].pm) {
            var ind2 = FindMachingParameterID(parameter, es[i]._class);
            var ind = params_to_display.indexOf(ind2);
            if (ind == -1) {
                if (ind2 != -1) {
                    params_to_display.push(ind2);
                    paramscount_to_display.push(1);
                    paramsvalue_to_display.push(es[i].pm[parameter]);
                    param_associated.push(parameter);
                }
            } else {
                paramscount_to_display[ind]++;
            }
        }
    }

    //////////////////////////
    //  DISPLAY PARAMETERS  //
    //////////////////////////
    let $rparams = $('<div>').prop('id', 'rparams')

    if (edit_triggers_as_text && objects_selected == 1 && first_selected_object._class == 'trigger') {
        let code_lines = '';
        code_lines += 'uid: '      + first_selected_object.pm.uid      + '\n';
        code_lines += 'enabled: '  + first_selected_object.pm.enabled  + '\n';
        code_lines += 'maxcalls: ' + first_selected_object.pm.maxcalls + '\n';
        code_lines += '\n';
        for (let i = 1; first_selected_object.pm['actions_' + i + '_type'] != undefined; i++) {
            if (first_selected_object.pm['actions_' + i + '_type'] == -1) continue;
            if (trigger_opcode_aliases[first_selected_object.pm['actions_' + i + '_type']] == undefined) 
                code_lines += 'op' + first_selected_object.pm['actions_' + i + '_type'];
            else 
                code_lines += trigger_opcode_aliases[first_selected_object.pm['actions_' + i + '_type']];
            code_lines += '( ';
            code_lines += '"' + first_selected_object.pm['actions_' + i + '_targetA'] + '"';
            code_lines += ', ';
            code_lines += '"' + first_selected_object.pm['actions_' + i + '_targetB'] + '"';
            code_lines += ' );\n';
        }
        code_lines = code_lines.replace('<', '&lt;').replace('>', '&gt;');

        $rparams.append(
            $("<div>").text("This feature should not give you much more freedom, yet you might find it useful to copy/paste/cut trigger actions here.")
                .css("width", "220px")
                .css("white-space", "normal"), 
            '<br>', 
            $("<textarea>").text(code_lines).prop("id", "opcode_field").addClass("opcode_field")
                .attr({
                    "autocomplete": "off",
                    "autocorrect": "off",
                    "autocapitalize": "off",
                    "spellcheck": "false"
                }),
            $("<a>").text("Apply").addClass("tool_btn tool_wid")
                .on("mousedown", ()=>{
                    if (CompileTrigger()) 
                        UpdateGUIParams()
                })
                .css({
                    "width": "100%",
                    "height": "50px",
                    "display": "block",
                    "line-height": "50px",
                }),
            '<br>'
        );
    } else {
        BuildMapObjectParameters($rparams, first_selected_object, params_to_display, paramscount_to_display, paramsvalue_to_display, param_associated);
        //$rparams.append(OldBuildMapObjectParameters(first_selected_object, params_to_display, paramscount_to_display, paramsvalue_to_display, param_associated));
    }
    
    if (objects_selected == 1 && first_selected_object._class == 'trigger') {
        $rparams.append(
            $("<a>").addClass("tool_btn tool_wid")
            .css("display", "block")
            .css("width", "100%")
            .on("mousedown", ()=>{
                edit_triggers_as_text = !edit_triggers_as_text;
                UpdateGUIParams();
            })
            .text('Edit triggers as ' + (edit_triggers_as_text ? 'param list' : 'text'))
        );
    }

    $(gui_params).empty().append(
        $gui_sel_info,
        '<br>', 
        $('<div>').addClass('q'), 
        '<br>',
        $rparams
    );

    /////////////////////////////////////////////////////////////
    //  SPECIAL CONSIDERATIONS FOR TRIGGERS AND ENGINE MARKERS //
    /////////////////////////////////////////////////////////////
    UpdateTriggerAndEngineMarkerParameters();
}

function BuildMapObjectParameters($rparams, first_selected_object, params_to_display, paramscount_to_display, paramsvalue_to_display, param_associated) {
    let last_i = params_to_display.length - 1;
    let value;

    for (i = 0; i <= last_i; i++) {
        let propname = param_type[params_to_display[i]][0];
        let proptype = param_type[params_to_display[i]][1];
        let proptext = param_type[params_to_display[i]][2];
        
        let top    = i == 0;
        let bottom = i == last_i;
        let wide   = proptype == 'luacode';

        if (paramscount_to_display[i] == 1) {
            value = GenParamVal(proptype, paramsvalue_to_display[i]);
        } else {
            value = "<nochange>...</nochange>";
        }

        let $prop_name =  $(                 "<span>").text(proptext + (wide ? "" : ":")).addClass("pa1")
        let $prop_value = $(wide ? "<div>" : "<span>").html(value                       ).addClass("pa2").prop("id", "pm_" + propname)
                          .on("click", (e)=>{
                                if (proptype == 'luacode') {
                                    let obj = first_selected_object;
                                    if (obj._class != 'lua') return;
                                    StartCodeEditing(obj.pm.uid, obj.pm.src, (code)=>{
                                        obj.pm.src = code;
                                    });
                                } else {
                                    letedit(e.currentTarget, proptype)
                                }
                          })
                          .on("mouseover", (e)=>{
                                if (proptype != 'luacode') {
                                    letover(e.currentTarget, proptype)
                                }
                          })

        // Borders
        if (bottom && !top) {
            $prop_name .addClass("p_u0");
            $prop_value.addClass("p_u0");
        } else {
            $prop_name .addClass("p_u1");
            $prop_value.addClass("p_u2");
        }

        // Rounded corners
        if (top) {
            $prop_name .addClass("r_lt" + (wide ? " r_rt" : ""));
            $prop_value.addClass(         (wide ? ""      : "r_rt"));
        }
        if (bottom) {
            $prop_name .addClass(         (wide ? ""      : "r_lb"));
            $prop_value.addClass("r_rb" + (wide ? " r_lb" : ""))
        }

        if (wide) {
            $prop_name. addClass("pa1_w");
            $prop_value.addClass("pa2_w");
        }

        if (proptype == 'luacode') 
            $prop_value.css("font-family", "monospace");
        
        $rparams.append(
            $("<div>").addClass("p_i").append(
                $prop_name, 
                $prop_value
            )
        );

        // Add spacing between individual trigger actions
        if (first_selected_object._class == 'trigger') {
            if (i < 5 || (i - 5) % 3 != 0) continue;

            $rparams.append(
                $("<div>").css("height", "2px")
            ); 
        }

        current_gui_params.push(param_associated[i]);
    }
}

function OldBuildMapObjectParameters(first_selected_object, params_to_display, paramscount_to_display, paramsvalue_to_display, param_associated) {
    let str = "";
    var pre_temp = '<div id="rparams"><div class="p_i"><span class="pa1 p_u1 r_lt">';
    var post_temp = ':</span><span class="pa2 p_u2 r_rt" onclick="letedit(this, \'';
    var last_i = params_to_display.length - 2;
    if (params_to_display.length == 1) {
        pre_temp = '<div id="rparams"><div class="p_i"><span class="pa1 p_u1 r_lt r_lb">';
        post_temp = ':</span><span class="pa2 p_u2 r_rt r_rb" onclick="letedit(this, \'';
    }
    var value;
    for (i = 0; i < params_to_display.length; i++) {
        if (paramscount_to_display[i] == 1) {
            value = GenParamVal(param_type[params_to_display[i]][1], paramsvalue_to_display[i]);
        } else {
            value = "<nochange>...</nochange>";
        }
        current_gui_params.push(param_associated[i]);
        str += pre_temp  + param_type[params_to_display[i]][2] + 
               post_temp + param_type[params_to_display[i]][1] + '\')" onMouseOver="letover(this, \'' 
                         + param_type[params_to_display[i]][1] + '\')" id="' + 'pm_' 
                         + param_type[params_to_display[i]][0] + '">' 
                         + value + 
               '</span></div>';
        if (first_selected_object._class == 'trigger') {
            if (i >= 4 && (i - 4) % 3 == 0) { // Spacing between individual trigger actions
                str += '<div style="height:2px"></div>'; 
            }
        }
        if (i == last_i) {
            pre_temp = '<div class="p_i"><span class="pa1 p_u0 r_lb">';
            post_temp = ':</span><span class="pa2 p_u0 r_rb" onclick="letedit(this, \'';
        } else if (i == 0) {
            pre_temp = '<div class="p_i"><span class="pa1 p_u1">';
            post_temp = ':</span><span class="pa2 p_u2" onclick="letedit(this, \'';
        }
    }
    return str;
}

// CancelDim();
let mreditor = $("#mreditor")[0];
let mreditor_title = $("#mreditor_title")[0];
let ACE_EDITOR;
function StartCodeEditing(filename, code, finish) {
    ignore_keys = true;
    mrdimlights.style = 'display: block';
    mreditor.style.display = 'block';
    dim_undo = "mreditor.style.display = 'none'";

    mreditor_title.textContent = "Code editor: " + filename;

    ACE_EDITOR = ace.edit("code_editor");
    ACE_EDITOR.setTheme("ace/theme/monokai");
    ACE_EDITOR.session.setMode("ace/mode/lua");
    ACE_EDITOR.setValue(code);

    dim_finish = ()=>{
        finish(ACE_EDITOR.getValue());
        UpdateGUIParams();
    }
}

// Better replacement for the old innerHTML_to_value
function getRealAttribute(obj) { 
    let pv = obj.getElementsByTagName("pvalue")[0];
    if (pv == undefined) { // If there's no need for a real value (because it doesn't exist), that means it can be returned as text
        return obj.innerText; // was <nochange>...</nochange>
    }
    return pv.attributes.real.value
}

function UpdateEngineMarkerParameters() {
    var mark_obj = document.getElementById('pm_mark');
    if (mark_obj != null) {
        var our_case = mark_pairs['mark_' + getRealAttribute(mark_obj)];
        var valobj = document.getElementById("pm_forteam");
        if (our_case == undefined) our_case = 'nochange';
        eval('valobj.onclick = function(e){letedit(this, \'' + our_case + '\');}');
        eval('valobj.onmouseover = function(e){letover(this, \'' + our_case + '\');}');
        valobj.innerHTML = GenParamVal(our_case, getRealAttribute(valobj));
    }
}

function UpdateTriggerActionParameters() {
    for (var i = 1; i <= 10; i++) {
        var mark_obj = document.getElementById('pm_actions_' + i + '_type');
        if (mark_obj == null) break;
        var cases = 'A';
        for (var i2 = 0; i2 < 2; i2++) {
            var our_case = mark_pairs['trigger_type_' + cases + getRealAttribute(mark_obj)];
            var valobj = document.getElementById('pm_actions_' + i + '_target' + cases);
            if (our_case == undefined) our_case = 'nochange';
            eval('valobj.onclick = function(e){letedit(this, \'' + our_case + '\');}');
            eval('valobj.onmouseover = function(e){letover(this, \'' + our_case + '\');}');
            valobj.innerHTML = GenParamVal(our_case, getRealAttribute(valobj));
            cases = 'B';
        }
    }
}

// Formerly "StreetMagic"
function UpdateTriggerAndEngineMarkerParameters() {
    UpdateEngineMarkerParameters();
    UpdateTriggerActionParameters()
}

function class_to_icon(class_id) { // TODO: Replace this with class_to_icon_node
    return '<img src="/static/icons16/' + class_id + '.gif" width=16 height=16 align=absmiddle>';
}

function class_to_icon_node(class_id) {
    return known_class_icons[class_id].cloneNode();
}

function icon_and_name(obj_i) {
    return class_to_icon(es[obj_i]._class) + ' ' + (es[obj_i].pm.uid == undefined ? known_class2known_class_title(es[obj_i]._class) : es[obj_i].pm.uid);
}

function UpdateGUIObjectsList() {
    if (ObjectBox_visible) {
        var pos = gui_objbox.scrollTop;
        var str = '';
        for (var i = 0; i < es.length; i++) {
            if (!es[i].exists || !MatchLayer(es[i])) continue;
            str += '<div id="itsel' + i + '" class="selline' + (es[i].selected ? '1' : '0') + '" onmousedown="selclick(event,' + i + ')">' + icon_and_name(i);
            if (es[i]._class == 'inf') str += ' (' + special_values_table['engine_mark'][es[i].pm.mark] + ')';
            str += '</div>';
        }
        gui_objbox.innerHTML = str;
        gui_objbox.scrollTop = pos;
    }
}
var active_layers = new Array();
var name_layers = new Array();
var icon_layers = new Array();
var class_to_layer = new Array();
var possible_tools = new Array();
var possible_tools_icon = new Array();
var possible_tools_descr = new Array();
possible_tools[0] = 'edit';
possible_tools_descr[0] = 'FreeEdit tool';
possible_tools_icon[0] = MakeIcon16Node(possible_tools[0]);
for (var i = 0; i < known_class.length; i++) {
    if (known_class[i] != "image") {
        possible_tools[possible_tools.length] = known_class[i];
        possible_tools_descr[possible_tools_descr.length] = 'Add ' + known_class_title[i].substring(0, 1).toUpperCase() + known_class_title[i].substring(1);
        possible_tools_icon[possible_tools_icon.length] = known_class_icons[i];
    }
    active_layers[i] = true;
    name_layers[i] = toplural(known_class_title[i].substring(0, 1).toUpperCase() + known_class_title[i].substring(1));
    icon_layers[i] = known_class_icons[i];
    class_to_layer[known_class[i]] = i;
}
possible_tools[possible_tools.length] = 'scale';
possible_tools_descr[possible_tools_descr.length] = 'ScaleSelection tool';
possible_tools_icon[possible_tools_icon.length] = MakeIcon16Node(possible_tools[possible_tools.length-1]);
var active_tool;
var last_clicked_layer = 100;

function layerClicked(i) {
    BeginUndos();
    AddUndo('UpdateTools();');
    AddUndo('last_clicked_layer=' + last_clicked_layer + ';');
    for (var i2 = 0; i2 < known_class.length; i2++) AddUndo('active_layers[' + i2 + ']=' + active_layers[i2] + ';');
    last_clicked_layer = i;
    if (i == -1) {
        for (var i2 = 0; i2 < known_class.length; i2++) active_layers[i2] = true;
    } else if (i == -2) {
        for (var i2 = 0; i2 < known_class.length; i2++) active_layers[i2] = false;
    } else if (i == -3) {
        for (var i2 = 0; i2 < known_class.length; i2++) active_layers[i2] = false;
        active_layers[class_to_layer['bg']] = true;
        active_layers[class_to_layer['box']] = true;
        active_layers[class_to_layer['lamp']] = true;
        active_layers[class_to_layer['water']] = true;
        active_layers[class_to_layer['pushf']] = true;
    } else if (i == -4) {
        for (var i2 = 0; i2 < known_class.length; i2++) active_layers[i2] = false;
        active_layers[class_to_layer['trigger']] = true;
        active_layers[class_to_layer['timer']] = true;
        active_layers[class_to_layer['inf']] = true;
        active_layers[class_to_layer['region']] = true;
        active_layers[class_to_layer['door']] = true;
        active_layers[class_to_layer['pushf']] = true;
    } else if (i == -5) {
        for (var i2 = 0; i2 < known_class.length; i2++) active_layers[i2] = false;
        active_layers[class_to_layer['player']] = true;
        active_layers[class_to_layer['enemy']] = true;
        active_layers[class_to_layer['vehicle']] = true;
        active_layers[class_to_layer['decor']] = true;
        active_layers[class_to_layer['gun']] = true;
        active_layers[class_to_layer['barrel']] = true;
        active_layers[class_to_layer['inf']] = true;
    } else if (i == -6) {
        ADVANCED_LAYERS = true;
    } else if (i == -7) {
        ADVANCED_LAYERS = false;
    } else if (ctrl && !alt) {
        active_layers[i] = true;
    } else if (alt && !ctrl) {
        active_layers[i] = false;
    } else {
        for (var i2 = 0; i2 < known_class.length; i2++) active_layers[i2] = false;
        active_layers[i] = true;
    }
    for (var i = 0; i < es.length; i++)
        if (es[i].exists)
            if (!MatchLayer(es[i])) {
                if (es[i].selected) {
                    AddUndo('es[' + i + '].selected=true;');
                    AddRedo('es[' + i + '].selected=false;');
                    es[i].selected = false;
                }
            } for (var i2 = 0; i2 < known_class.length; i2++) AddRedo('active_layers[' + i2 + ']=' + active_layers[i2] + ';');
    AddRedo('UpdateTools();');
    AddRedo('last_clicked_layer=' + last_clicked_layer + ';');
    CommitUndos(false);
    need_redraw = true;
    need_GUIParams_update = true;
    UpdateTools();
    UpdateGUIObjectsList();
    SaveBrowserSettings();
}

function GridAlphaSet(value) {
    GRID_ALPHA = value;
    need_redraw = true;
    UpdateTools();
    SaveBrowserSettings();
}

function GridSnappingSet(value) {
    if (value < 0.0001) {
        console.warn('Grid snapping of value ' + value + ' can cause object property corruption. Operation has been canceled.');
        return;
    }
    //if (value < 10 || value % 10 !== 0) console.warn('Grid snapping of value ' + value + ' might work, but it is not guaranteed to work in future versions of Plazma Burst games, including updates for Plazma Burst 2.');
    GRID_SNAPPING = value;
    UpdateTools();
    SaveBrowserSettings();
}

function ConnectionShowSet(value) {
    SHOW_CONNECTIONS = value;
    need_redraw = true;
    UpdateTools();
    SaveBrowserSettings();
}

function ShowTexturesSet(value) {
    SHOW_TEXTURES = value;
    need_redraw = true;
    UpdateTools();
    SaveBrowserSettings();
}

var emptyfunc = () => {}
function DrawOutlinesSet(value) {
    DRAW_OUTLINES = value;
    glDrawRectSides = value ? glNewDrawRectSides : emptyfunc;
    need_redraw = true;
    UpdateTools();
    SaveBrowserSettings();
}

function PreviewQualitySet(value) {
    // ctx.imageSmoothingEnabled = value;
    need_redraw = true;
    UpdateTools();
    SaveBrowserSettings();
}
if (typeof document.createStyleSheet === 'undefined') {
    document.createStyleSheet = (function() {
            function createStyleSheet(href) {
                if (typeof href !== 'undefined') {
                    var element = document.createElement('link');
                    element.type = 'text/css';
                    element.rel = 'stylesheet';
                    element.href = href;
                } else {
                    var element = document.createElement('style');
                    element.type = 'text/css';
                }
                document.getElementsByTagName('head')[0].appendChild(element);
                var sheet = document.styleSheets[document.styleSheets.length - 1];
                if (typeof sheet.addRule === 'undefined') sheet.addRule = addRule;
                if (typeof sheet.removeRule === 'undefined') sheet.removeRule = sheet.deleteRule;
                return sheet;
            }

            function addRule(selectorText, cssText, index) {
                if (typeof index === 'undefined') index = this.cssRules.length;
                this.insertRule(selectorText + ' {' + cssText + '}', index);
            }
            return createStyleSheet;
        })();
}
document.write('<div id="stars" style="visibility:hidden;z-index:1000;position:fixed;left:0px;top:0px;background-image: url(static/stars2.jpg);width:100%;height:100%;mix-blend-mode: overlay;pointer-events: none;filter: none;background-repeat: repeat;background-position-y: 0px;background-size: cover;">&nbsp;</div>');
var stars_old_x = 0;
var stars_old_y = 0;

function UpdateStars() {
    if (THEME == THEME_PURPLE || THEME == THEME_GREEN) {
        if (THEME == THEME_PURPLE) {
            stars.style.filter = 'contrast(0.8) brightness(2.7)';
        } else if (THEME == THEME_GREEN) {
            stars.style.filter = 'sepia(90%) hue-rotate(90deg) saturate(2) contrast(0.8) brightness(2.7)';
        }
        if (zoom < 2) {
            stars_old_x = ((dis_from_x + dis_to_x) / 2 * 0.666);
            stars_old_y = ((dis_from_y + dis_to_y) / 2 * 0.666);
        } else {
            stars_old_x = ((dis_from_x + dis_to_x) / 2 * 0.666 + stars_old_x * 20 * (zoom - 2)) / (20 * (zoom - 2) + 1);
            stars_old_y = ((dis_from_y + dis_to_y) / 2 * 0.666 + stars_old_y * 20 * (zoom - 2)) / (20 * (zoom - 2) + 1);
        }
        stars.style.backgroundPositionX = stars_old_x + 'px';
        stars.style.backgroundPositionY = stars_old_y + 'px';
        if (Math.abs(stars_old_x - ((dis_from_x + dis_to_x) / 2 * 0.666)) > 1 || Math.abs(stars_old_y = ((dis_from_y + dis_to_y) / 2 * 0.666)) > 1) need_redraw = true;
        stars.style.visibility = '';
    } else {
        stars.style.visibility = 'hidden';
    }
}

function ThemeSet(value) {
    THEME = value;
    need_redraw = true;
    UpdateTools();
    var sheet_original = document.styleSheets[0];
    var sheet2;
    try {
        sheet2 = new CSSStyleSheet();
    } catch (e) {
        sheet2 = document.createStyleSheet();
    }
    if (THEME == THEME_BLUE) {} else if (THEME == THEME_DARK || THEME == THEME_PURPLE || THEME == THEME_GREEN) {
        for (var i = 0; i < sheet_original.cssRules.length; i++) {
            var rule_original = sheet_original.cssRules[i];
            var insert_at = sheet2.cssRules.length;
            var css = rule_original.cssText;
            var css_parts = css.split('{');
            var hover = (css_parts[0].indexOf(':hover') != -1 || css_parts[0].indexOf(':active') != -1);
            css_parts[1] = css_parts[1].split('}');
            var props = css_parts[1][0].split(';');
            for (var p = 0; p < props.length; p++) {
                var parts = props[p].split(':');
                if (parts.length === 2) {
                    parts[0] = parts[0].split('\n').join(' ').split('\t').join(' ').trim();
                    parts[1] = parts[1].split('\n').join(' ').split('\t').join(' ').trim();
                    if (parts[1].indexOf('rgb') != -1) {
                        var value = parts[1];
                        var border = (parts[0].indexOf('border') != -1);
                        var pos_open = value.indexOf('(');
                        var pos_close = value.indexOf(')');
                        var numbers_str = value.substring(pos_open + 1, pos_close);
                        var numbers_arr = numbers_str.split(', ');
                        var sum = 0;
                        for (var n = 0; n < 3; n++) sum += parseFloat(numbers_arr[n]);
                        sum /= 3;
                        sum /= 255;
                        sum = Math.pow(sum, 1.5);
                        sum *= 200;
                        if (hover && border) {
                            sum = (255 + sum) / 2;
                            numbers_arr[0] = Math.floor(sum * 1);
                            numbers_arr[1] = Math.floor(sum * 0.8);
                            numbers_arr[2] = Math.floor(sum * 0.4);
                        } else
                            for (var n = 0; n < 3; n++) numbers_arr[n] = Math.floor(sum);
                        value = value.substring(0, pos_open + 1) + numbers_arr.join(', ') + value.substr(pos_close);
                        parts[1] = value;
                    }
                }
                props[p] = parts.join(':');
            }
            css_parts[1][0] = props.join(';');
            css_parts[1] = css_parts[1].join('}');
            css = css_parts.join('{');
            sheet2.insertRule(css, insert_at);
        }
        sheet2.insertRule('#top_panel { background-image: url(htile_dark.gif); }');
        sheet2.insertRule('#right_panel { background-image: url(vti_dark.gif); }');
        sheet2.insertRule('#left_panel { background-image: url(vti_dark.gif); }');
    }
    for (var i = 1; i < document.styleSheets.length - 1; i++) document.styleSheets[i].disabled = true;
    document.adoptedStyleSheets = [sheet2];
    SaveBrowserSettings();
}
var THEME_BLUE = 0;
var THEME_DARK = 1;
var THEME_PURPLE = 2;
var THEME_GREEN = 3;
var GRID_ALPHA = 1;
var GRID_SNAPPING = 10;
var SHOW_CONNECTIONS = true;
var ADVANCED_LAYERS = false;
var THEME = THEME_BLUE;
var SHOW_TEXTURES = false;
//ctx.imageSmoothingEnabled = true;
var storage_error_once = true;
try {
    if (localStorage.getItem('GRID_ALPHA') !== null) GRID_ALPHA = parseFloat(localStorage.getItem('GRID_ALPHA'));
    if (localStorage.getItem('GRID_SNAPPING') !== null) GRID_SNAPPING = parseFloat(localStorage.getItem('GRID_SNAPPING'));
    if (localStorage.getItem('SHOW_CONNECTIONS') !== null) SHOW_CONNECTIONS = (localStorage.getItem('SHOW_CONNECTIONS') === 'true');
    if (localStorage.getItem('DRAW_OUTLINES') !== null) DRAW_OUTLINES = (localStorage.getItem('DRAW_OUTLINES') === 'true');
    if (localStorage.getItem('ADVANCED_LAYERS') !== null) ADVANCED_LAYERS = (localStorage.getItem('ADVANCED_LAYERS') === 'true');
    if (localStorage.getItem('THEME') !== null) THEME = parseFloat(localStorage.getItem('THEME'));
    if (localStorage.getItem('SHOW_TEXTURES') !== null) SHOW_TEXTURES = (localStorage.getItem('SHOW_TEXTURES') === 'true');
    if (localStorage.getItem('SHOW_OBJECTLIST') !== null) ObjectBox_visible = (localStorage.getItem('SHOW_OBJECTLIST') === 'true');
    // if (localStorage.getItem('ctx.imageSmoothingEnabled') !== null) ctx.imageSmoothingEnabled = (localStorage.getItem('ctx.imageSmoothingEnabled') === 'true');
} catch (e) {
    if (storage_error_once) storage_error_once = false;
    NewNote('Level Editor preferences could not be loaded from browser\'s localStorage.', note_bad);
}
ThemeSet(THEME);
glDrawRectSides = DRAW_OUTLINES ? glNewDrawRectSides : emptyfunc;

function SaveBrowserSettings() {
    try {
        localStorage.setItem('GRID_ALPHA', GRID_ALPHA);
        localStorage.setItem('GRID_SNAPPING', GRID_SNAPPING);
        localStorage.setItem('SHOW_CONNECTIONS', SHOW_CONNECTIONS);
        localStorage.setItem('DRAW_OUTLINES', DRAW_OUTLINES);
        localStorage.setItem('ADVANCED_LAYERS', ADVANCED_LAYERS);
        localStorage.setItem('THEME', THEME);
        localStorage.setItem('SHOW_TEXTURES', SHOW_TEXTURES);
        localStorage.setItem('SHOW_OBJECTLIST', ObjectBox_visible);
        // localStorage.setItem('ctx.imageSmoothingEnabled', ctx.imageSmoothingEnabled);
    } catch (e) {
        if (storage_error_once) storage_error_once = false;
        else return;
        NewNote('Level Editor preferences could not be saved to browser\'s localStorage.', note_bad);
    }
}

var dc_target;
var dct_csection;
var dct_sections = {};
var dct_totalsections;
var dct_swidth = 64;
var dct_sbn;
var dct_sbw;
var dct_cols;
var dct_made = false;
function dc_begin(target) {
    dc_target = target;
}
function dc_new(nn, cn='') {
    var n = document.createElement(nn);
    if (cn) n.className = cn;
    return n;
}
function dc_add(n, p=null) {
    return (p ? p : dc_target).appendChild(n);
}
function dct_begin() {
    dc_target = tools_box;
    //if (dct_totalsections == undefined) {
        while (tools_box.firstChild) tools_box.removeChild(tools_box.firstChild);
        dct_totalsections = 0;//-1;
    //}
}
function dct_section(name, cols){
    let e1;
    /*if (dct_sections[name] == undefined) {
        dct_sections[name] = []
        dct_totalsections++;
    }*/
    //dct_csection = dct_sections[name];
    dct_cols = cols;
    dct_sbn = 0;
    dct_sbw = dct_swidth / cols;
    if (dct_totalsections > 0) {
        dc_add(dc_new('br'));
        dc_add(dc_new('div', 'q'));
        dc_add(dc_new('br'));
    }
    e1 = dc_new('span', 'gui_sel_info');
    e1.textContent = name + ':';
    dc_add(dc_new('br'), e1);
    dc_add(e1);
    e1 = dc_new('div');
    e1.style.height = '5px';
    dc_add(e1);
    dct_totalsections++;
}
function dct_end() {
    if (!dct_made) dct_made = true;
}

// Assume callback doesn't change
function dct_opt(text, active, cb, img=undefined, square=false, title=undefined) {
    let e1;
    //if (dct_csection[dct_sbn] == undefined) {
        if ((dct_sbn > 0) && (dct_sbn % dct_cols == 0)) dc_add(dc_new('br'));
        dct_sbn++;
        e1 = dc_new('a', 'tool_btn' + (active ? '2' : '') + ' ' + (square ? 'tool_sm' : 'tool_wid'));
        e1.style.width =  (square ? 30 : dct_sbw) + 'px';
        e1.onmousedown = cb;
        if (img !== undefined) e1.appendChild(img);
        if (text != undefined) e1.appendChild(document.createTextNode(text));
        if (title !== undefined) e1.title = title;
        dc_add(e1);
        //dct_csection.push(e1);
    //} else {

    //}
}

var dct_orng = undefined;
function dct_rng(value, min, max, step, cb) {
    let e1;
    if (dct_sbn > 0) dc_add(dc_new('br'));
    e1 = dc_new('input'); // TODO: Make class?
    e1.type = 'range';
    e1.min = min;
    e1.max = max;
    e1.step = step;
    e1.value = value;
    e1.style.width = 64;
    e1.onchange = cb;
    dc_add(e1);
}

function dct_optsq(title, active, cb, img) { dct_opt(undefined, active, cb, img, true, title); }

function UpdateTools() {
    dct_begin();
    dct_section('Tools', 2);
    for (let i = 0; i < possible_tools.length; i++)
        dct_optsq(possible_tools_descr[i], possible_tools[i] == active_tool, ()=>SetActiveTool(i), possible_tools_icon[i].cloneNode());

    dct_section('Layers', 1);
    dct_opt(ADVANCED_LAYERS ? '[ Less ]' : '[ More ]', false, ()=>layerClicked(ADVANCED_LAYERS ? -7 : -6))  ;
    let seltot = 0;
    for (let i=0; i < known_class.length; i++) {
        if (active_layers[i]) seltot++;
        if (ADVANCED_LAYERS)
            dct_opt(' ' + name_layers[i], active_layers[i], ()=>layerClicked(i), icon_layers[i].cloneNode());
    }
    dct_opt('All',      seltot == known_class.length, ()=>layerClicked(-1));
    dct_opt('Nothing',  seltot == 0,                  ()=>layerClicked(-2));
    if (!ADVANCED_LAYERS) {
        dct_opt('Statics',  last_clicked_layer == -3,  ()=>layerClicked(-3));
        dct_opt('Logics',   last_clicked_layer == -4,  ()=>layerClicked(-4));
        dct_opt('Entities', last_clicked_layer == -5,  ()=>layerClicked(-5));
    }

    dct_section('Grid opacity', 3);
    dct_opt('',  GRID_ALPHA == 0,   ()=>GridAlphaSet(0));
    dct_opt('.', GRID_ALPHA == 0.5, ()=>GridAlphaSet(0.5));
    dct_opt(':', GRID_ALPHA == 1,   ()=>GridAlphaSet(1));
    dct_rng(GRID_ALPHA, 0, 1, 0.001, (event)=>GridAlphaSet(event.target.value));

    dct_section('Snapping', 3);
    dct_opt('0.1', GRID_SNAPPING == 0.1, ()=>GridSnappingSet(0.1));
    dct_opt('0.5', GRID_SNAPPING == 0.5, ()=>GridSnappingSet(0.5));
    dct_opt('1',   GRID_SNAPPING == 1,   ()=>GridSnappingSet(1));
    dct_opt('10',  GRID_SNAPPING == 10,  ()=>GridSnappingSet(10));
    dct_opt('50',  GRID_SNAPPING == 50,  ()=>GridSnappingSet(50));
    dct_opt('100', GRID_SNAPPING == 100, ()=>GridSnappingSet(100));

    dct_section('Connections', 2);
    dct_opt('Hide', !SHOW_CONNECTIONS, ()=>ConnectionShowSet(false));
    dct_opt('Show',  SHOW_CONNECTIONS, ()=>ConnectionShowSet(true));

    dct_section('Editor theme', 2);
    dct_opt('Blue',   THEME == THEME_BLUE,   ()=>ThemeSet(THEME_BLUE));
    dct_opt('Dark',   THEME == THEME_DARK,   ()=>ThemeSet(THEME_DARK));
    dct_opt('Purple', THEME == THEME_PURPLE, ()=>ThemeSet(THEME_PURPLE));
    dct_opt('Green',  THEME == THEME_GREEN,  ()=>ThemeSet(THEME_GREEN));

    dct_section('Preview', 2);
    dct_opt('No',  !SHOW_TEXTURES, ()=>ShowTexturesSet(false));
    dct_opt('Yes', SHOW_TEXTURES, ()=>ShowTexturesSet(true));

    if (loadedrendermode === RENDER_MODE_GL) {
        dct_section('Draw outlines', 2);
        dct_opt('No', !DRAW_OUTLINES, ()=>DrawOutlinesSet(false));
        dct_opt('Yes', DRAW_OUTLINES, ()=>DrawOutlinesSet(true));
    }

    if (loadedrendermode === RENDER_MODE_2D) {
        dct_section('Preview quality', 2);
        dct_opt('Low', !ctx.imageSmoothingEnabled, ()=>PreviewQualitySet(false));
        dct_opt('High', ctx.imageSmoothingEnabled, ()=>PreviewQualitySet(true));
    }
    dct_end();
}

function SetActiveTool(val) {
    if (active_tool == val) return;
    if (possible_tools[val] == 'scale') {
        DoWorldScale();
    } else {
        active_tool = possible_tools[val];
        need_redraw = true;
        UpdateTools();
    }
}
SetActiveTool(0);

function DoWorldScale() {
    var newscale = prompt('Multiply selection size by % (percents)', 100);
    if (newscale == null || newscale == 100) {} else {
        var factor = Math.floor(newscale) / 100; {
            var roundwell = true;
            BeginUndos();
            for (i = 0; i < es.length; i++)
                if (es[i].exists)
                    if (es[i].selected)
                        if (MatchLayer(es[i])) {
                            if (es[i].pm.w != undefined) {
                                AddRedo('es[' + i + '].pm.w=Math.round(es[' + i + '].pm.w*' + factor + '/10)*10;');
                                AddUndo('es[' + i + '].pm.w=' + es[i].pm.w + ';');
                                if (es[i].pm.w * factor != Math.round(es[i].pm.w * factor / 10) * 10) roundwell = false;
                            }
                            if (es[i].pm.h != undefined) {
                                AddRedo('es[' + i + '].pm.h=Math.round(es[' + i + '].pm.h*' + factor + '/10)*10;');
                                AddUndo('es[' + i + '].pm.h=' + es[i].pm.h + ';');
                                if (es[i].pm.h * factor != Math.round(es[i].pm.h * factor / 10) * 10) roundwell = false;
                            }
                            if (es[i].pm.x != undefined) {
                                AddRedo('es[' + i + '].pm.x=Math.round(es[' + i + '].pm.x*' + factor + '/10)*10;');
                                AddUndo('es[' + i + '].pm.x=' + es[i].pm.x + ';');
                                if (es[i].pm.x * factor != Math.round(es[i].pm.x * factor / 10) * 10) roundwell = false;
                            }
                            if (es[i].pm.y != undefined) {
                                AddRedo('es[' + i + '].pm.y=Math.round(es[' + i + '].pm.y*' + factor + '/10)*10;');
                                AddUndo('es[' + i + '].pm.y=' + es[i].pm.y + ';');
                                if (es[i].pm.y * factor != Math.round(es[i].pm.y * factor / 10) * 10) roundwell = false;
                            }
                        } CommitUndos(true);
            NewNote('Operation complete:<br><br>Selected objects scaled by ' + factor + ' (' + newscale + '% of original size)', note_passive);
            if (!roundwell) NewNote('Note: Position and/or dimensions of some objects were not scaled properly due to Level Editor rounding rules', note_neutral);
            need_redraw = true;
            UpdateTools();
        }
    }
}
var objlist_sel = -1;

function selclick(e, instance) {
    e = e || window.event;
    if ((e.keyCode || e.which) == 1) {
        if (ctrl || alt) {
            if (ctrl) es[instance].selected = true;
            else if (alt) es[instance].selected = false;
        } else {
            if (k_shift) {
                var from_s = Math.min(instance, objlist_sel);
                var to_s = Math.max(instance, objlist_sel);
                for (var i = 0; i < es.length; i++) {
                    if (i >= from_s && i <= to_s) {
                        es[i].selected = true;
                    } else {
                        es[i].selected = false;
                    }
                }
            } else {
                for (var i = 0; i < es.length; i++) {
                    es[i].selected = false;
                }
                es[instance].selected = true;
            }
        }
        need_GUIParams_update = true;
        need_redraw = true;
        if (!k_shift) objlist_sel = instance;
    }
}
ShowHideObjectBox(true);

function ShowHideObjectBox(first=false) {
    if (!first) ObjectBox_visible = !ObjectBox_visible;
    if (ObjectBox_visible) {
        objboxhider.innerHTML = 'Objects list <span style="opacity:0.3">is displayed</span>';
        gui_objbox.style.display = '';
        UpdateGUIObjectsList();
    } else {
        objboxhider.innerHTML = 'Objects list <span style="opacity:0.3">is hidden</span>';
        gui_objbox.style.display = 'none';
    }
    if (!first) SaveBrowserSettings();
}
if (!force_expert) {
    left_panel.style.transition = 'left 0.3s, top 0.3s';
    right_panel.style.transition = 'right 0.3s, top 0.3s';
    top_panel.style.transition = 'top 0.3s';
}
var opacities_active = true;

function UpdateOpacities() {
    if (expert_view || force_expert) {
        if (!force_expert && (mouse_x < 120 || mouse_x > canvas_width - 120 || mouse_y < 90)) {
            left_panel.style.left = '0px';
            right_panel.style.right = '0px';
            top_panel.style.top = '0px';
            left_panel.style.top = '50px';
            right_panel.style.top = '50px';
        } else {
            left_panel.style.left = '-92px';
            right_panel.style.right = '-255px';
            top_panel.style.top = '-50px';
            left_panel.style.top = '0px';
            right_panel.style.top = '0px';
        }
        opacities_active = true;
    } else {
        if (opacities_active) {
            opacities_active = false;
            left_panel.style.left = '0px';
            right_panel.style.right = '0px';
            top_panel.style.top = '0px';
            left_panel.style.top = '50px';
            right_panel.style.top = '50px';
        }
    }
}
UpdateOpacities();
var gaov = document.getElementById('game_overlay');
var OVERLAY_BLOCK = false;

function checkWebKit() {
    var result = /AppleWebKit\/([\d.]+)/.exec(navigator.userAgent);
    if (result) {
        return parseFloat(result[1]);
    }
    return null;
}
var context_menu = true;
if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
        if (!context_menu) e.preventDefault();
    }, false);
} else {
    document.attachEvent('oncontextmenu', function() {
        window.event.returnValue = false;
    });
}

function ThrowError(text) {
    alert(text);
}

function resizeGL() {
    _canvas_width = window.innerWidth;
    _canvas_height = window.innerHeight;
    gl.canvas.width = _canvas_width;
    gl.canvas.height = _canvas_height;
    canvas_width = _canvas_width;
    canvas_height = _canvas_height;
    zoom_validate();
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    if (GRAPHICS_INIT) {
        gl.useProgram(glFillProgram);
        gl.uniform2f(glFillProgram_u_resolution, gl.canvas.width * 0.5, gl.canvas.height * 0.5);
        gl.useProgram(glLineProgram);
        gl.uniform2f(glLineProgram_u_resolution, gl.canvas.width * 0.5, gl.canvas.height * 0.5);
        gl.useProgram(glArcProgram);
        gl.uniform2f(glArcProgram_u_resolution, gl.canvas.width * 0.5, gl.canvas.height * 0.5);
        gl.useProgram(glCurrentProgram);
    }
    zoom_validate();
    need_redraw = true;
}

function resize2D() {
    _canvas_width = window.innerWidth;
    _canvas_height = window.innerHeight;
    ctx.canvas.width = _canvas_width;
    ctx.canvas.height = _canvas_height;
    canvas_width = _canvas_width;
    canvas_height = _canvas_height;
    zoom_validate();
    need_redraw = true;
}
var resize;
if (rendermode === RENDER_MODE_GL) resize = resizeGL;
if (rendermode === RENDER_MODE_2D) resize = resize2D;
ResetView();
resize();
window.onresize = resize;
canv.onselectstart = function() {
        return false;
    };
var canvas_focus = false;
var mapid_field = document.getElementById('mapid_field');
var maprights = document.getElementById('maprights');
var isOSX = (navigator.appVersion.indexOf("Mac") != -1);
var knownmaps = new Array();
var mapid = 'newmap';
var source_lost = false;
var quick_pick_hit_scale = 1;
document.onmousedown = function() {
    context_menu = true;
};

function SetUpMouseControls() {
    quick_pick_hit_scale = 1;
    canv.onmousemove = function(e) {
        canvas_focus = true;
        m_move(e);
        return false;
    };
    canv.onmousedown = function(e) {
        canvas_focus = true;
        mapid_field.blur();
        m_down(e);
        return false;
    };
    canv.onmouseup = function(e) {
        m_up(e);
        return false;
    };
    canv.onmouseout = function(e) {
        canvas_focus = false;
        m_failed(e)
    };
    canv.onmouseover = function(e) {
        canvas_focus = true;
    };
    canv.onblur = function(e) {
        canv_blur();
        return false;
    };
    canv.mousewheel = function(e) {
        m_wheel(event);
        return false;
    };
    document.getElementById('mobile_panel').style.display = 'none';
}
SetUpMouseControls();
canv.ontouchstart = function() {
        SetUpTouchControls();
    };
var drag_toggle = false;

function SetUpTouchControls() {
    {
        quick_pick_hit_scale *= 3;
        note_place.style.bottom = '80px';
        var old_onmousedown = canv.onmousedown;
        var old_onmousemove = canv.onmousemove;
        var old_onmouseup = canv.onmouseup;
        canv.onmousedown = null;
        canv.onmousemove = null;
        canv.onmouseup = null;
        var ongoingTouches = new Array();

        function copyTouch(touch, which = -1) {
            if (which === -1) which = touch.which;
            return {
                identifier: touch.identifier,
                pageX: touch.pageX,
                pageY: touch.pageY,
                which: which
            };
        }

        function ongoingTouchIndexById(idToFind) {
            for (var i = 0; i < ongoingTouches.length; i++) {
                var id = ongoingTouches[i].identifier;
                if (id == idToFind) {
                    return i;
                }
            }
            return -1;
        }
        canv.ontouchstart = function(e) {
                var touches = e.changedTouches;
                for (var i = 0; i < touches.length; i++) {
                    if (ongoingTouches.length > 0) return;
                    var which = drag_toggle ? 2 : 1;
                    var t = copyTouch(touches[i], which);
                    ongoingTouches.push(t);
                    old_onmousedown({
                        which: t.which,
                        pageX: t.pageX,
                        pageY: t.pageY
                    });
                }
            };
        canv.ontouchmove = function(e) {
                var touches = e.changedTouches;
                for (var i = 0; i < touches.length; i++) {
                    var idx = ongoingTouchIndexById(touches[i].identifier);
                    if (idx >= 0) {
                        var t = ongoingTouches[idx];
                        old_onmousemove({
                            pageX: t.pageX,
                            pageY: t.pageY
                        });
                        ongoingTouches.splice(idx, 1, copyTouch(touches[i], t.which));
                    }
                }
            };
        canv.ontouchend = canv.touchcancel = function(e) {
                var touches = e.changedTouches;
                for (var i = 0; i < touches.length; i++) {
                    var idx = ongoingTouchIndexById(touches[i].identifier);
                    if (idx >= 0) {
                        var t = ongoingTouches[idx];
                        old_onmouseup({
                            which: t.which,
                            pageX: t.pageX,
                            pageY: t.pageY
                        });
                        ongoingTouches.splice(idx, 1);
                    }
                }
            };
        document.getElementById('mobile_panel').style.display = '';
    }
}
window.addEventListener('keydown', k_down, true);
window.addEventListener('keyup', k_up, true);
window.onbeforeunload = confirmExit;

function confirmExit() {
    if (changes_made) return "Do you really want to close this window?";
    return null;
}
var need_redraw = true;
var need_GUIParams_update = true;
var timer_panic = 0;
var speed_x = 0;
var speed_y = 0;

function ani() {
    // var start = +new Date();
    if (speed_x != 0) {
        var speed_power = zoom * 10 * (k_shift ? 5 : 1);
        dis_from_x += speed_x * speed_power;
        dis_to_x += speed_x * speed_power;
        zoom_validate();
        need_redraw = true;
        m_pos_x = s2w_x(mouse_x);
        m_pos_y = s2w_y(mouse_y);
        m_isdown = false;
        m_move();
    }
    if (speed_y != 0) {
        var speed_power = zoom * 10 * (k_shift ? 5 : 1);
        dis_from_y += speed_y * speed_power;
        dis_to_y += speed_y * speed_power;
        zoom_validate();
        need_redraw = true;
        m_pos_x = s2w_x(mouse_x);
        m_pos_y = s2w_y(mouse_y);
        m_isdown = false;
        m_move();
    }
    if (always_draw || need_redraw) {
        need_redraw = false;
        Render();
    }
    if (need_GUIParams_update) {
        need_GUIParams_update = false;
        UpdateGUIParams();
        UpdateGUIObjectsList();
    }
    /*var end = +new Date();
    if (false) {
        var diff = end - start;
        timer_panic = (timer_panic + diff) * 0.7;
        if (timer_panic > 100) {
            if (ENABLE_SHADOWS) {
                ENABLE_SHADOWS = false;
                timer_panic = 0;
            } else if (ENABLE_TEXT) {
                ENABLE_TEXT = false;
                timer_panic = 0;
            }
        } 
    }*/
    window.requestAnimationFrame(ani);
    //setTimeout(ani, 10);
}
var last_save_time = getTimer();
var Render = () => {};
if (rendermode === RENDER_MODE_GL) {
    initGL();
    Render = RenderGL;
}
if (rendermode === RENDER_MODE_2D) {
    Render = Render2D;
}
resize();
window.requestAnimationFrame(ani);

function die(msg) {
    document.getElementById('body').innerHTML = 'E: ' + msg + '<img src="../images/input.gif" width="8" height="14" align="absbottom">';
}

function LoadThisMap() {
    last_save_time = getTimer();
    ServerRequest('r=' + mapid + '&a=load', 'load');
}

function get(name) {
    if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search)) return decodeURIComponent(name[1]);
}

function compi_obj(i) {
	var trigger_counter = 1;
    var loco_2 = '';
    loco_2 += '<' + es[i]._class;
    for (var p in es[i].pm) {
        var pars = es[i].pm[p];
        if (es[i]._class == 'bg') {
            if (p == 'c')
                if (pars == '') continue;
            if (p == 'a')
                if (pars == '-1' || pars == '') continue;
            if (p == 'u' || p == 'v')
                if (pars == '0' || pars == '') continue;
            if (p == 'f') {
                if (pars === '0' || pars === '' || pars === 'false' || pars === false || pars === 0 || pars === undefined) continue;
            }
            if (p == 's') {
                if (pars == 'true' || pars === '' || pars == true) continue;
            }
        }
        if (es[i]._class == 'decor' || es[i]._class == 'pushf' || es[i]._class == 'region' || es[i]._class == 'water') {
            if (p == 'attach')
                if (pars == '-1' || pars == '') continue;
            if (p == 'friction') // For water only
                if (pars === '' || pars == '1' || pars == true) continue;
        }
        if (es[i]._class == 'decor') {
            if (p == 'u' || p == 'v')
                if (pars == '0' || pars == '') continue;
            if (p == 'f') {
                if (pars === '0' || pars === '' || pars === 'false' || pars === false || pars === 0 || pars === undefined) continue;
            }
        }
        if (p == 'sx' || p == 'sy')
            if (pars == 1) continue;
        if (p == 'r')
            if (pars == 0) continue;
        if (typeof pars == 'string') {
            if (!ALLOW_EXTRA_CHARACTERS) pars = pars.replace('"', "''");
            pars = htmlEntities(pars);
        }
		
		// trigger XML whatever.
		if (loadededitormode === EDITOR_MODE_EXPANDED && es[i]._class == 'trigger') {
			if (p.indexOf('actions_') >= 0) {
				if (p.indexOf('_type') >= 0) {
					p = 'a' + trigger_counter;
					trigger_counter++;
					loco_2 += ' ' + p + '="' + pars + '|';
				}
				if (p.indexOf('_targetA') >= 0) {
					p = "";
                    // if (typeof pars == 'string') pars.replaceAll('|', '[i]')
					loco_2 += pars + '|';
				} 
				if (p.indexOf('_targetB') >= 0) {
					p = "";
                    // if (typeof pars == 'string') pars.replaceAll('|', '[i]')
					loco_2 += pars + '"';
				} 
			}
			else {
				loco_2 += ' ' + p + '="' + pars + '"';
			}
		}
		else {
			loco_2 += ' ' + p + '="' + pars + '"';
		}
		//loco_2 += ' ' + p + '="' + pars + '"';
		
    }
    loco_2 += ' />';
    return loco_2;
}

function serialize_objects_of_class(_class) {
    var loco_ = '';
    if (_class == 'player') {
        var teams = new Array();
        var teams_of = new Array();
        for (var i = 0; i < es.length; i++)
            if (es[i].exists)
                if (es[i]._class == _class) {
                    teams[es[i].pm.team] = new Array();
                    teams_of[es[i].pm.team] = 0;
                } for (var i = 0; i < es.length; i++)
            if (es[i].exists)
                if (es[i]._class == _class) {
                    teams[es[i].pm.team].push(i);
                } var ok = true;
        while (ok) {
            ok = false;
            for (team in teams) {
                if (teams_of[team] != -1) {
                    ok = true;
                    loco_ += compi_obj(teams[team][teams_of[team]]);
                    teams_of[team] += 1;
                    if (teams_of[team] >= teams[team].length) teams_of[team] = -1;
                }
            }
        }
    } else {
        for (var i = 0; i < es.length; i++)
            if (es[i].exists)
                if (es[i]._class == _class) {
                    loco_ += compi_obj(i);
                }
    }
    return loco_;
}
var last_awaiting_images = '';

function PrepareCustomImages() {
    last_awaiting_images = '';
    var ret = true;
    var available_images = [];
    var final_images = [];
    var avail_ptr = 0;

    function UseNextOrNew() {
        if (avail_ptr < available_images.length) {
            final_images[final_images.length] = available_images[avail_ptr++];
            return final_images[final_images.length - 1];
        }
        final_images[final_images.length] = new E("image");
        es.push(final_images[final_images.length - 1]);
        return final_images[final_images.length - 1];
    }
    var visite_values = {};

    function ConsiderValue(v) {
        v = v + '';
        if (v.length >= 2)
            if (v.charAt(0) == 'c') {
                var num = parseInt(v.substr(1));
                if (!isNaN(num)) {
                    if (visite_values[num] === undefined) {
                        visite_values[num] = true;
                        var e = UseNextOrNew();
                        e.pm.id = num;
                        e.exists = true;
                        if (e.pm.x) delete e.pm.x;
                        if (e.pm.y) delete e.pm.y;
                        if (CACHED_BGS['c' + num] != undefined && CACHED_BGS['c' + num].loaded) {
                            e.pm.width = CACHED_BGS['c' + num].width;
                            e.pm.height = CACHED_BGS['c' + num].height;
                        } else {
                            ServerRequest('a=get_images&for_class=' + 'bg_model' + '&update_const=' + 'c' + num, 'request_consts');
                            if (CACHED_BGS['c' + num] != undefined) {
                                ret = false;
                                if (last_awaiting_images.length != 0) last_awaiting_images += ', ';
                                last_awaiting_images += 'c' + num;
                            }
                        }
                    }
                }
            }
    }
    for (var i = 0; i < es.length; i++)
        if (es[i]._class == "image") {
            available_images.push(es[i]);
            es[i].exists = false;
        } for (var i = 0; i < es.length; i++)
        if (es[i].exists) {
            if (es[i]._class == 'bg') {
                ConsiderValue(es[i].pm.m);
            }
            if (es[i]._class == 'decor') {
                ConsiderValue(es[i].pm.model);
            }
            if (es[i]._class == 'trigger') {
                for (var t = 1; es[i].pm['actions_' + t + '_type'] !== undefined; t++) {
                    var trigger_type_id = es[i].pm['actions_' + t + '_type'];
                    if (mark_pairs['trigger_type_A' + trigger_type_id] == 'decor_model') ConsiderValue(es[i].pm['actions_' + t + '_targetA']);
                    if (mark_pairs['trigger_type_B' + trigger_type_id] == 'decor_model') ConsiderValue(es[i].pm['actions_' + t + '_targetB']);
                }
            }
        } UpdateGUIObjectsList();
    return ret;
}

function instadownload(content, filename, contentType)
{
    if(!contentType) contentType = 'application/octet-stream';
    var a = document.createElement('a');
    var blob = new Blob([content], {'type': contentType});
    a.href = window.URL.createObjectURL(blob);
    a.download = filename;
    a.click();
    a.remove();
}

function GetMapData() {
    var out = '';
    for (var i = 0; i < known_class_savepriorities.length; i++) 
        out += serialize_objects_of_class(known_class_savepriorities[i]);
    return out;
}

var mapserver_address;
var testserver_address = "127.0.0.1:8080"; // There's not any reason for it not to be localhost, is there?
var mapserver_uploading = false;

function UploadMap() {
    if (mapserver_uploading) return;
    mapserver_uploading = true;
    data = GetMapData();
    filename = mapid;
    NewNote("Uploading map to mapserver...", note_neutral);
    var url = "http://" + mapserver_address + "/upload_map.php";
    var params = "l="+encodeURIComponent(login)+
                 "&p="+encodeURIComponent(password)+
                 "&mapname="+encodeURIComponent(filename)+
                 "&mapdata="+encodeURIComponent(data);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    try {
        xhr.send(params);
    } catch (err) {
        NewNote("Network error trying to upload map", note_bad);
    }
    xhr.onreadystatechange = () => {
        if (xhr.readyState != XMLHttpRequest.DONE) return;

        if (xhr.status == 200) {
            NewNote("Map uploaded", note_good);
            changes_made = false;
        } else if (xhr.status == 0) {
            NewNote("Couldn't connect to mapserver", note_bad);
        } else if (xhr.status == 401) {
            NewNote("Credentials declined (" + xhr.responseText + ")", note_bad);   
        } else if (xhr.status == 400) {
            NewNote("Map upload declined (" + xhr.responseText + ")", note_bad);   
        } else {
            NewNote("Map upload declined (code " + xhr.status + ")", note_bad);
        }
        
        mapserver_uploading = false;
    };
}

function SaveThisMap(temp_to_real_compile_data = '', callback = null) {
    instadownload(GetMapData(), mapid + ".xml");
    last_save_time = getTimer();
    /*
    if (mapid != '') {
        if (!PrepareCustomImages()) {
            NewNote('Delaying save operation - still retrieving custom image size info (' + last_awaiting_images + ')...', note_neutral);
            setTimeout(function() {
                SaveThisMap(temp_to_real_compile_data, callback);
            }, 1000);
            return;
        }
        var compiled = '';
        if (temp_to_real_compile_data == '') {
            compiled = GetMapData();
            if (compiled == '') compiled = '*empty*';
            try {
                localStorage.setItem('pb2_map_' + mapid + '::' + (new Date().getTime()), compiled);
            } catch (e) {
                NewNote('Could not find localStorage support in your browser in order to create backup version of map.', note_bad);
            }
        } else compiled = temp_to_real_compile_data;
        last_save_time = getTimer();
        console.log("compiled: " + compiled);
        ServerRequest('r=' + mapid + '&a=save' + '&d=' + encodeURIComponent(compiled), 'save', callback);
    } else {
        SaveThisMapAs();
    }
    */
}
var mrdimlights                    = document.getElementById('mrdimlights');
var mrsave                         = document.getElementById('mrsave');
var mrcustom_image                 = document.getElementById('mrcustom_image');
var mrsettings                     = document.getElementById('mrsettings');
var mrsettings_login               = document.getElementById('mrsettings_login');
var mrsettings_password            = document.getElementById('mrsettings_password');
var mrsettings_mapserver           = document.getElementById('mrsettings_mapserver');
var mrsettings_r2d                 = document.getElementById('mrsettings_r2d');
var mrsettings_rgl                 = document.getElementById('mrsettings_rgl');
var mrsettings_mode_reg            = document.getElementById('mrsettings_mode_reg');
var mrsettings_mode_ex             = document.getElementById('mrsettings_mode_ex');
var mrsettings_testmatch_name      = document.getElementById('mrsettings_testmatch_name');
var mrsettings_testmatch_id        = document.getElementById('mrsettings_testmatch_id');
var mrsettings_matchserver         = document.getElementById('mrsettings_matchserver');
var mrsettings_testmatch_pw        = document.getElementById('mrsettings_testmatch_pw');
var mrsettings_testmatch_dm        = document.getElementById('mrsettings_testmatch_dm');
var mrsettings_testmatch_coop      = document.getElementById('mrsettings_testmatch_coop');
var mrsettings_testmatch_tdm       = document.getElementById('mrsettings_testmatch_tdm');
var mrsettings_testmatch_players   = document.getElementById('mrsettings_testmatch_players');
var mrsettings_testmatch_players_t = document.getElementById('mrsettings_testmatch_players_t');
var mrsettings_gamemodes           = [mrsettings_testmatch_dm, mrsettings_testmatch_coop, mrsettings_testmatch_tdm];
var image_list = document.getElementById('image_list');
var ignore_keys = false;
var dim_undo = '';
var dim_finish = emptyfunc;
var dim_enter_event = '';

function SaveThisMapAs() {
    return;
    mrdimlights.style.display = 'block';
    mrsave.style.display = 'block';
    document.getElementById('mrsave_mrfield').focus();
    document.getElementById('mrsave_mrfield').value = mapid;
    dim_enter_event = 'mrSave()';
    ignore_keys = true;
    PutMapsList('map_list', 'mrsave_mrfield', 'mrSave()', 'save');
    dim_undo = 'mrsave.style.display="none";';
}

function mrSave() {
    if (knownmaps.indexOf(document.getElementById('mrsave_mrfield').value) == -1 || confirm('Replace existing map "' + document.getElementById('mrsave_mrfield').value + '"?') == true) {
        mapid = document.getElementById('mrsave_mrfield').value;
        SaveThisMap();
        CancelDim();
    }
}
var browse_images_callback = null;
var last_for_class = '-';
var last_current_value = '-';
var search_phrase = '';

function UpdateImageList() {
    ServerRequest('a=get_images&for_class=' + last_for_class + '&current_value=' + last_current_value + '&search_phrase=' + search_phrase, 'update_images');
}

function BrowseImages(for_class = 'bg_model', current_value = '', callback = null) {
    awaiting_image_paste = true;
    mrdimlights.style.display = 'block';
    mrcustom_image.style.display = 'block';
    dim_enter_event = '';
    ignore_keys = true;
    image_list.innerHTML = '';
    setTimeout(function() {
        last_for_class = for_class;
        last_current_value = current_value;
        ServerRequest('a=get_images&for_class=' + for_class + '&current_value=' + current_value + '&search_phrase=' + search_phrase, 'update_images');
    }, 1);
    dim_undo = 'mrcustom_image.style.display="none";';
    browse_images_callback = callback;
}

function CustomImageSelected(new_value, new_value_title) {
    browse_images_callback(new_value, new_value_title);
    CancelDim();
}

function retrieveImageFromClipboardAsBase64(pasteEvent, callback, imageFormat) {
    if (pasteEvent.clipboardData == false) {
        if (typeof(callback) == "function") {
            callback(undefined);
        }
    };
    var items = pasteEvent.clipboardData.items;
    if (items == undefined) {
        if (typeof(callback) == "function") {
            callback(undefined);
        }
    };
    var nothing = true;
    for (var i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") == -1) {
            continue;
        }
        nothing = false;
        var blob = items[i].getAsFile();
        var mycanvas = document.createElement("canvas");
        var ctx = mycanvas.getContext('2d');
        var img = new Image();
        img.onload = function() {
                mycanvas.width = this.width;
                mycanvas.height = this.height;
                ctx.drawImage(img, 0, 0);
                if (typeof(callback) == "function") {
                    callback(mycanvas.toDataURL((imageFormat || "image/png")));
                }
            };
        var URLObj = window.URL || window.webkitURL;
        img.src = URLObj.createObjectURL(blob);
    }
    if (nothing) {
        if (items.length == 0) NewNote('Nothing to paste it seems.', note_passive);
        else NewNote('No images are in clipboard.', note_passive);
    }
}
var imageLoader = document.getElementById('imageLoader');
imageLoader.addEventListener('change', handleImage, false);
var canvas_img = document.getElementById('imageCanvas');
var ctx_img = canvas_img.getContext('2d');

function handleImage(e) {
    var reader = new FileReader();
    reader.onload = function(event) {
            var img = new Image();
            img.onload = function() {
                    canvas_img.width = img.width;
                    canvas_img.height = img.height;
                    ctx_img.drawImage(img, 0, 0);
                    var imageDataBase64 = canvas_img.toDataURL("image/png");
                    ServerRequest('a=get_images&for_class=bg_model&upload_image=' + imageDataBase64, 'upload_image');
                };
            img.src = event.target.result;
        };
    reader.readAsDataURL(e.target.files[0]);
}
window.addEventListener("paste", function(e) {
    if (mrcustom_image.style.display == 'block') {
        retrieveImageFromClipboardAsBase64(e, function(imageDataBase64) {
            if (imageDataBase64) {
                ServerRequest('a=get_images&for_class=bg_model&upload_image=' + imageDataBase64, 'upload_image');
            } else alert('Error? Looks like nothing to paste...');
        });
    }
}, false);

function CancelDim() {
    eval(dim_undo);
    dim_finish();
    dim_finish = emptyfunc;
    mrdimlights.style.display = 'none';
    ignore_keys = false;
}

function UpdateMapsList() {
    // ServerRequest('a=mymaps', 'update_knownmaps');
    return new Promise((resolve, reject) => {
        var url = "http://" + mapserver_address + "/maplist.php";
        var params  =  'l=' + encodeURIComponent(login);
        params     += '&p=' + encodeURIComponent(password);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        try {
            xhr.send(params);
        } catch (err) {
            reject("Network error trying get map list");
        }
        xhr.onreadystatechange = () => {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status == 200) resolve(xhr.responseText.split('\n').slice(1));
                else reject(xhr.responseText);
            }
        };
    });
}

function getTimer() {
    return new Date().getTime();
}

var max_temp_maps = 64;
// UpdateMapsList();
var last_dbl = 0;
var last_id = -1;

function PutMapsList(where, fieldobj, proceed_fnct, uniq) {
    var meta = '';
    for (el in knownmaps) {
        meta += '<div id="mapsline' + el + '_' + uniq + '" class="selline' + (mapid == knownmaps[el] ? '1' : '0') + '" onmousedown="PutMapsList(\'' + where + '\', \'' + fieldobj + '\', \'' + proceed_fnct + '\', \'' + uniq + '\');document.getElementById(\'mapsline' + el + '_' + uniq + '\').className=\'selline0bl\';document.getElementById(\'' + fieldobj + '\').value=\'' + knownmaps[el] + '\';document.getElementById(\'' + fieldobj + '\').focus();if(last_dbl>getTimer()-500 && last_id==' + el + '){eval(\'' + proceed_fnct + '\');}last_dbl=getTimer();last_id=' + el + ';">' + knownmaps[el];
        meta += '</div>';
    }
    el = knownmaps.length;
    try {
        var temp_maps = 0;
        for (var i = 0, len = localStorage.length; i < len; ++i) {
            var storage_key = localStorage.key(i);
            if (storage_key.substring(0, 'pb2_map_'.length) == 'pb2_map_') {
                var key_parts = storage_key.substr('pb2_map_'.length);
                key_parts = key_parts.split('::');
                var iterated_map_id = 'temp:' + i + ':' + key_parts[0];
                var map_id_pure = key_parts[0];
                var edit_time = key_parts[1];
                var date = new Date();
                date.setTime(edit_time);
                if (temp_maps == 0) {
                    meta += '<br><div style="color:rgba(127,255,127,0.6)">Previous last save operations (up to ' + max_temp_maps + '):</div>';
                }

                function LeadZero(v) {
                    if (v < 10) return '0' + v;
                    return v;
                }
                var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                meta += '<div id="mapsline' + el + '_' + uniq + '" style="color:rgba(255,255,255,0.3)" class="selline' + (mapid == iterated_map_id ? '1' : '0') + '" onmousedown="PutMapsList(\'' + where + '\', \'' + fieldobj + '\', \'' + proceed_fnct + '\', \'' + uniq + '\');document.getElementById(\'mapsline' + el + '_' + uniq + '\').className=\'selline0bl\';document.getElementById(\'' + fieldobj + '\').value=\'' + iterated_map_id + '\';document.getElementById(\'' + fieldobj + '\').focus();if(last_dbl>getTimer()-500 && last_id==' + el + '){eval(\'' + proceed_fnct + '\');}last_dbl=getTimer();last_id=' + el + ';"> &nbsp; &nbsp; <span style="color:rgba(255,255,255,0.6)">' + map_id_pure + '</span> [ ' + LeadZero(date.getHours()) + ':' + LeadZero(date.getMinutes()) + ':' + LeadZero(date.getSeconds()) + ', ' + date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear() + ' ]';
                meta += '</div>';
                el++;
                temp_maps++;
            }
        }
    } catch (e) {
        NewNote('Could not find localStorage support in your browser in order to load backup saves.', note_bad);
    }
    document.getElementById(where).innerHTML = meta;
}

function RemoveOldTempMaps() {
    try {
        var delete_these = [];
        for (var i = 0, len = localStorage.length; i < len; ++i) {
            var storage_key = localStorage.key(i);
            if (storage_key.substring(0, 'pb2_map_'.length) == 'pb2_map_') {
                var key_parts = storage_key.substr('pb2_map_'.length);
                key_parts = key_parts.split('::');
                var iterated_map_id = 'temp:' + i + ':' + key_parts[0];
                var map_id_pure = key_parts[0];
                var edit_time = key_parts[1];
                delete_these.unshift({
                    key: storage_key,
                    time: Number(edit_time)
                });
            }
        }

        function compare(a, b) {
            if (a.time < b.time) return -1;
            if (a.time > b.time) return 1;
            return 0;
        }
        if (delete_these.length - max_temp_maps > 0) {
            delete_these.sort(compare);
            delete_these = delete_these.slice(0, delete_these.length - max_temp_maps);
            console.log(delete_these);
            for (var i = 0; i < delete_these.length; i++) {
                var storage_key = delete_these[i].key;
                localStorage.removeItem(storage_key);
            }
        }
    } catch (e) {
        NewNote('Could not find localStorage support in your browser in order to perform old backup cleanup.', note_bad);
    }
}
RemoveOldTempMaps();
var changes_made = false;

function StartNewMap(force=false) {
    if (force || !changes_made || confirm('Do you really want to leave this map without saving?') == true) {
        es = new Array();
        mapid = 'newmap';
        mapid_field.value = 'newmap';
        changes_made = false;
        need_redraw = true;
        need_GUIParams_update = true;
        ResetView();
        ClearUndos();
    }
}

function RevertThisMap() {
    if (mapid == '') {
        NewNote('You can\'t revert map which was never saved.', note_neutral);
    } else if (confirm('Do you really want to revert to the last saved map state?') == true) {
        ServerRequest('r=' + mapid + '&a=load', 'load');
    }
}

function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function LoadMapData(doc) {
    for (var i=0; i<doc.length; i++) {
        var atts = doc[i].attributes;
        var type = doc[i].tagName;
        var map_object = new E(type);
        for (var j=0; j<atts.length; j++) {
            var aname = atts[j].name;
            var avalue = atts[j].value;
            if (loadededitormode === EDITOR_MODE_EXPANDED && type == 'trigger') {
                var match = aname.match(/a(\d+)/);
                if (match != null && match[0].length == aname.length) {
                    var a_n = match[1];
                    var args = avalue.split('|');
                    map_object.pm['actions_' + a_n + '_type']    = parseInt(args[0]);
                    map_object.pm['actions_' + a_n + '_targetA'] = args[1]; //.replaceAll('[i]', '|');
                    map_object.pm['actions_' + a_n + '_targetB'] = args[2]; //.replaceAll('[i]', '|');
                } else map_object.pm[aname] = avalue;
            } else map_object.pm[aname] = avalue;
        }
        if ('x' in map_object.pm) {
            map_object.pm.x = Number(map_object.pm.x);
            map_object.pm.y = Number(map_object.pm.y);
            if (map_object._isresizable) {
                map_object.pm.w = Number(map_object.pm.w);
                map_object.pm.h = Number(map_object.pm.h);
            }
        }
        es.push(map_object);
    }
}

var mapfile = document.getElementById("mapfile");
var parser = new DOMParser();
async function LoadMapFromFile() {
    var file = mapfile.files[0];
    if (file == undefined) return;
    StartNewMap(true);
    var mapname = file.name;
    if (mapname.indexOf('.') != -1) {
        mapname = mapname.slice(0, mapname.indexOf('.'));
    }
    mapid = mapname;
    mapid_field.value = mapname;
    var ss = await file.text();
    var doc = parser.parseFromString("<level>" + ss + "</level>", "text/xml").firstChild.children;
    rightsblock.style.display = "none";
    LoadMapData(doc);
    need_GUIParams_update = true;
    UpdateGUIObjectsList();
    mapfile.value = null;

    /*{
        mrdimlights.style.display = 'block';
        mrload.style.display = 'block';
        document.getElementById('mrload_mrfield').focus();
        dim_enter_event = 'mrLoad()';
        ignore_keys = true;
        PutMapsList('map_list_load', 'mrload_mrfield', 'mrLoad()', 'load');
        dim_undo = 'mrload.style.display="none";';
    }*/
}
mapfile.addEventListener("input", LoadMapFromFile);

// Get & show list of maps on the mapserver available to this user
var map_list_load = document.getElementById('map_list_load');
var mrload_mrfield = document.getElementById('mrload_mrfield');
function ShowMaps() {
    UpdateMapsList()
        .then((result) => {
            knownmaps = result;
            ShowMapList();
        })
        .catch((error) => {
            NewNote("Map list error: " + error, note_bad);
        });
}

let map_list_nodes = [];
function ShowMapList() {
    ignore_keys = true;
    mrdimlights.style = 'display: block';
    mrload.style.display = 'block';
    dim_undo = "mrload.style.display = 'none'";
    map_list_load.innerHTML = '';
    map_list_nodes = [];
    for (let i = 0; i < knownmaps.length; i++) {
        let map = knownmaps[i];
        let node = document.createElement('div');
        node.className = 'selline0';
        node.textContent = map;
        node.onmousedown = function() {
            for (let line in map_list_nodes)
                map_list_nodes[line].className = line == i ? 'selline0bl' : 'selline0';
            mrload_mrfield.focus();
            mrload_mrfield.value = map;
            if(last_dbl > getTimer() - 500 && last_id == i) {
                LoadMapFromServer(map);
                CancelDim();
                // mrLoad();
            }
            last_dbl = getTimer();
            last_id = i;
        };
        map_list_load.appendChild(node);
        map_list_nodes[i] = node;
    }
}

function GetMapFromServer(mapname) {
    return new Promise((resolve, reject) => {
        var url = "http://" + mapserver_address + "/map.php";
        var params  =  'l=' + encodeURIComponent(login);
        params     += '&p=' + encodeURIComponent(password);
        params    += '&id=' + encodeURIComponent(mapname);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        try {
            xhr.send(params);
        } catch (err) {
            reject("Network error trying to get map from " + mapserver_address);
        }
        xhr.onreadystatechange = () => {
            if (xhr.readyState != XMLHttpRequest.DONE) return;

            if (xhr.status == 200) resolve(xhr.responseText);
            else reject(xhr.responseText);
        };
    });
}

function LoadMapFromServer(mapname) {
    GetMapFromServer(mapname)
    .then((result) => {
        var doc = parser.parseFromString("<level>" + result + "</level>", "text/xml").firstChild.children;
        StartNewMap(true);
        mapid = mapname;
        mapid_field.value = mapname;
        rightsblock.style.display = "none";
        LoadMapData(doc);
        need_GUIParams_update = true;
        UpdateGUIObjectsList();
    })
    .catch((error) => {
        NewNote("Couldn't get map from server: " + error, note_bad);
    });

    //sets the url of browser to the map via GET parameter. (?map=guntest)
    const url = new URL(window.location.href)
    url.searchParams.set('map', mapname);
    console.log(url.toString())

    function goTo(page, title, url) {
        if ("undefined" !== typeof history.pushState) {
            history.pushState({page: page}, title, url);
        } 
        else {
            window.location.assign(url);
        }
    }
      
    goTo("", "", url.toString());
}

function mrLoad() {
    CancelDim();
    if (!changes_made || confirm('Do you really want to leave this map without saving?') == true) {
        mapid = document.getElementById('mrload_mrfield').value;
        if (mapid.indexOf('temp:') == 0) {
            var map_id_parts = mapid.split(':');
            var local_storage_id = map_id_parts[1];
            var storage_key = localStorage.key(local_storage_id);
            var compiled_temp_map = localStorage.getItem(storage_key);
            document.getElementById('mrload_mrfield').value = mapid = curlogin + '-pb2_temp_restored';
            SaveThisMap(compiled_temp_map, function() {
                mrLoad();
            });
        } else {
            ServerRequest('r=' + mapid + '&a=load', 'load');
        }
    }
}

function mrReloadLoad() {
    // UpdateMapsList();
    PutMapsList('map_list_load', 'mrload_mrfield', 'mrLoad()', 'load');
}

function mrReloadSave() {
    // UpdateMapsList();
    PutMapsList('map_list', 'mrsave_mrfield', 'mrSave()', 'save');
}

function OpenPreferences() {
    NewNote('Feature is not available at this moment.', note_neutral);
}

function TestMap() {
    if (!changes_made) {
        // ServerRequest('r=' + mapid + '&a=game_overlay', 'game_overlay');
        var start_mp = '0';
        var url = "http://" + testserver_address + "/test_map.php";
        var params = "mapname="+encodeURIComponent(mapid);
        params += '&l=' + encodeURIComponent(login);
        params += '&p=' + encodeURIComponent(password);
        if (k_shift) {
            var start_mp = '1';
            params += '&m_ip='   + mp_match_server;
            params += '&m_id='   + mp_match_id;
            params += '&m_name=' + mp_match_name; 
            params += '&m_pw='   + mp_match_pass;
            params += '&m_gm='   + mp_match_gamemode;
            params += '&m_max='  + mp_match_maxplayers;
        }
        params += '&mp=' + encodeURIComponent(start_mp);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        try {
            xhr.send(params);
        } catch (err) {
            NewNote("Network error trying to test map");
        }
        xhr.onreadystatechange = () => {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if(xhr.status === 0){
                    NewNote("Web server is not running / is down. Try launching it using CMD instead of doubling clicking it.", note_bad);
                    return
                }

                if (xhr.status != 200) {
                    NewNote("Map test error: " + xhr.responseText, note_bad);
                }
            }
        };
    } else NewNote('Map can be tested only after being saved.', note_neutral);
}
var check_mode = false;

function CheckMap() {
    NewNote('This feature is under development and doing nothing useful at this moment.', note_neutral);
    check_mode = !check_mode;
    if (check_mode) NewNote('Check mode enabled.', note_passive);
    else NewNote('Check mode disabled.', note_passive);
    if (check_mode) BuildCheckTraces();
    else ClearCheckTraces();
    need_redraw = true;
}
var redirect_once = true;

function RedirectTester() {
    if (redirect_once) {
        redirect_once = false;
        var flashMovie = getFlashMovieObject("swfobj");
        flashMovie.sendTextToFlash('rt:' + mapid + ':sp');
    }
}

function PreviewDone() {}
window.onload = maxWindow;

function maxWindow() {
    need_redraw = true;
    window.moveTo(0, 0);
    if (document.all) {
        top.window.resizeTo(screen.availWidth, screen.availHeight);
    } else if (document.layers || document.getElementById) {
        if (top.window.outerHeight < screen.availHeight || top.window.outerWidth < screen.availWidth) {
            top.window.outerHeight = screen.availHeight;
            top.window.outerWidth = screen.availWidth;
        }
    }
}

function ClearCheckTraces() {
    waypoints = new Array();
    connections = new Array();
    box = new Array();
    water = new Array();
    pusher = new Array();
    player = new Array();
    teleport = new Array();
}
var waypoints = new Array();
var connections = new Array();
var box = new Array();
var water = new Array();
var pusher = new Array();
var player = new Array();
var teleport = new Array();
var CONNECTION_NOT_REACHABLE = 0;
var CONNECTION_WALK = 1;
var CONNECTION_JUMP = 2;
var CONNECTION_JUMP_SWORDS = 3;
var CONNECTION_JUMP_BOOST = 4;
var CONNECTION_TELEPORT = 5;
var CONNECTION_SAFEFALL = 6;
var CONNECTION_RUN_JUMP = 7;
var CONNECTION_UNSAFE_FALL = 8;

function Dist2D(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}

function FindObject(val, search_class) {
    if (isNaN(val) && val.charAt(0) == '#') {
        for (var si = 0; si < es.length; si++)
            if (es[si].exists)
                if (es[si]._class == search_class) {
                    if (es[si].pm.uid == val) return si;
                }
    } else {
        var inco = 0;
        for (var si = 0; si < es.length; si++)
            if (es[si].exists)
                if (es[si]._class == search_class) {
                    if (inco == val) return si;
                    inco++;
                }
    }
    return -1;
}

function BuildCheckTraces() {
    ClearCheckTraces();
    var step_size = 20;
    for (var i = 0; i < es.length; i++)
        if (es[i].exists) {
            if (es[i]._class == 'box' || es[i]._class == 'door') {
                box[box.length] = {
                    x1: es[i].pm.x,
                    y1: es[i].pm.y,
                    x2: es[i].pm.x + es[i].pm.w,
                    y2: es[i].pm.y + es[i].pm.h
                };
            } else if (es[i]._class == 'pushf') {
                pusher[pusher.length] = {
                    x1: es[i].pm.x,
                    y1: es[i].pm.y,
                    x2: es[i].pm.x + es[i].pm.w,
                    y2: es[i].pm.y + es[i].pm.h,
                    damage: es[i].pm.damage,
                    stable: es[i].pm.stab == 0 && Dist2D(es[i].pm.tox, es[i].pm.toy, 0, 0.5) < 1
                };
            } else if (es[i]._class == 'water') {
                water[water.length] = {
                    x1: es[i].pm.x,
                    y1: es[i].pm.y,
                    x2: es[i].pm.x + es[i].pm.w,
                    y2: es[i].pm.y + es[i].pm.h,
                    damage: es[i].pm.damage
                };
            } else if (es[i]._class == 'player') {
                player[player.length] = {
                    x: es[i].pm.x,
                    y: es[i].pm.y,
                    team: es[i].pm.team,
                    hea: es[i].pm.hea,
                    hmax: es[i].pm.hmax
                };
            } else if (es[i]._class == 'region') {
                if (es[i].pm.use_on != 0) {
                    var target_trigger = FindObject(es[i].pm.use_target, 'trigger');
                    var destination = -1;
                    if (target_trigger != -1)
                        for (var i2 = 1; i2 <= 10; i2++) {
                            if (es[target_trigger].pm['actions_' + i2 + '_type'] == 30 || es[target_trigger].pm['actions_' + i2 + '_type'] == 31) {
                                if (FindObject(es[target_trigger].pm['actions_' + i2 + '_targetA'], 'region') == i) {
                                    destination = FindObject(es[target_trigger].pm['actions_' + i2 + '_targetB'], 'region');
                                    break;
                                }
                            }
                        }
                    if (destination != -1) {
                        teleport[teleport.length] = {
                            x1: es[i].pm.x,
                            y1: es[i].pm.y,
                            x2: es[i].pm.x + es[i].pm.w,
                            y2: es[i].pm.y + es[i].pm.h,
                            target_x: es[destination].pm.x + es[i].pm.w / 2,
                            target_y: es[destination].pm.y + es[i].pm.h / 2
                        };
                    }
                }
            }
        } if (box.length == 0) {
        NewNote('Checking failed: Unable to detect walls.', note_neutral);
        return;
    }
    var min_x = box[0].x1;
    var min_y = box[0].y1;
    var max_x = box[0].x2;
    var max_y = box[0].y2;
    for (var i = 1; i < box.length; i++) {
        if (box[i].x1 < min_x) min_x = box[i].x1;
        if (box[i].y1 < min_y) min_y = box[i].y1;
        if (box[i].x2 > max_x) max_x = box[i].x2;
        if (box[i].y2 > max_y) max_y = box[i].y2;
    }

    function TracePointAccess(x, y) {
        for (var i = box.length - 1; i >= 0; i--)
            if (x >= box[i].x1)
                if (x <= box[i].x2)
                    if (y >= box[i].y1)
                        if (y <= box[i].y2) return false;
        return true;
    }

    function TracePointAccessNoBorders(x, y) {
        for (var i = box.length - 1; i >= 0; i--)
            if (x > box[i].x1)
                if (x < box[i].x2)
                    if (y > box[i].y1)
                        if (y < box[i].y2) return false;
        return true;
    }

    function CanSpawnAt(x, y) {
        if (x > min_x + 100)
            if (x < max_x - 100)
                if (y > min_y + 100)
                    if (y < max_y - 100) {
                        if (TracePointAccess(x, y - 50))
                            if (TracePointAccess(x - 10, y - 50))
                                if (TracePointAccess(x + 10, y - 50))
                                    if (!TracePointAccess(x, y + 50))
                                        if (!TracePointAccess(x - 10, y + 50))
                                            if (!TracePointAccess(x + 10, y + 50)) {
                                                for (var i = 0; i < water.length; i++)
                                                    if (x > water[i].x1 - 100)
                                                        if (x < water[i].x2 + 100)
                                                            if (y > water[i].y1 - 100)
                                                                if (y < water[i].y2 + 100) return false;
                                                for (var i = 0; i < pusher.length; i++)
                                                    if (x > pusher[i].x1 - 100)
                                                        if (x < pusher[i].x2 + 100)
                                                            if (y > pusher[i].y1 - 100)
                                                                if (y < pusher[i].y2 + 100) return false;
                                                return true;
                                            } return false;
                    } return false;
    }

    function CanStandAt(x, y) {
        for (var i = 0; i < pusher.length; i++)
            if (!pusher[i].stable)
                if (x > pusher[i].x1 - 10)
                    if (x < pusher[i].x2 + 10)
                        if (y > pusher[i].y1)
                            if (y < pusher[i].y2 + 80) return false;
        if (TracePointAccess(x, y))
            for (var i = 0; i < water.length; i++)
                if (x >= water[i].x1)
                    if (x <= water[i].x2)
                        if (y >= water[i].y1)
                            if (y <= water[i].y2) return true;
        if (TracePointAccess(x, y - (step_size / 2)))
            if (!TracePointAccess(x, y + (step_size / 2))) return true;
        return false;
    }

    function FindPointNear(x, y) {
        var best_i = 0;
        var best_di = Dist2D(x, y, waypoints[0].x, waypoints[0].y);
        for (var i = 1; i < waypoints.length; i++) {
            var new_di = Dist2D(x, y, waypoints[i].x, waypoints[i].y);
            if (new_di < best_di) {
                best_i = i;
                best_di = new_di;
            }
        }
        return best_i;
    }

    function GetDamageAt(x, y) {
        var damage = 0;
        for (var i = 0; i < water.length; i++)
            if (x >= water[i].x1)
                if (x <= water[i].x2)
                    if (y >= water[i].y1)
                        if (y <= water[i].y2) {
                            damage = water[i].damage;
                            break;
                        } for (var i = 0; i < pusher.length; i++)
            if (x >= pusher[i].x1 - 10)
                if (x <= pusher[i].x2 + 10)
                    if (y >= pusher[i].y1)
                        if (y <= pusher[i].y2 + 80) damage += pusher[i].damage;
        return damage;
    }

    function TraceWay(x1, y1, x2, y2, allowed_hits) {
        if (x1 == x2 && y1 == y2) return TracePointAccessNoBorders(x1, y1);
        allowed_hits = allowed_hits || 1;
        var traces_made = 0;
        var start_x = x1;
        var start_y = y1;
        var speed_x = x2 - x1;
        var speed_y = y2 - y1;
        var end_x = x2;
        var end_y = y2;
        var hits = 0;
        if (Math.abs(speed_x) > Math.abs(speed_y)) {
            speed_y = speed_y / Math.abs(speed_x) * 5;
            speed_x = speed_x / Math.abs(speed_x) * 5;
        } else {
            speed_x = speed_x / Math.abs(speed_y) * 5;
            speed_y = speed_y / Math.abs(speed_y) * 5;
        }
        var ok1 = false;
        var ok2 = false;
        while (true) {
            if (TracePointAccessNoBorders(start_x, start_y)) {
                start_x += speed_x;
                start_y += speed_y;
                if (speed_x > 0) {
                    if (start_x >= end_x) ok1 = true;
                } else {
                    if (start_x <= end_x) ok1 = true;
                }
                if (speed_y > 0) {
                    if (start_y >= end_y) ok2 = true;
                } else {
                    if (start_y <= end_y) ok2 = true;
                }
                if (ok1 && ok2) {
                    return true;
                }
            } else {
                hits++;
                if (hits > allowed_hits) return false;
                start_x += speed_x;
                start_y += speed_y;
            }
            traces_made++;
            if (traces_made > 1000) {
                NewNote('Checking failed: ' + traces_made + ' traces made with no result (' + x1 + ', ' + y1 + ', ' + x2 + ', ' + y2 + ').', note_neutral);
                return false;
            }
        }
    }

    function GetPossibleConnection(a, b) {
        if (!TraceWay(waypoints[a].x, waypoints[a].y, waypoints[a].x, waypoints[a].y - 50)) return CONNECTION_NOT_REACHABLE;
        if (!TraceWay(waypoints[b].x, waypoints[b].y, waypoints[b].x, waypoints[b].y - 50)) return CONNECTION_NOT_REACHABLE;
        if (Math.abs(waypoints[a].x - waypoints[b].x) <= step_size)
            if (Math.abs(waypoints[a].y - waypoints[b].y) <= step_size) {
                if (TraceWay(waypoints[a].x, waypoints[a].y, waypoints[b].x, waypoints[b].y))
                    if (TraceWay(waypoints[a].x, waypoints[a].y - 50, waypoints[b].x, waypoints[b].y - 50)) return CONNECTION_WALK;
                var high = Math.min(waypoints[a].y, waypoints[b].y);
                if ((TraceWay(waypoints[a].x, waypoints[a].y, waypoints[a].x, high) && TraceWay(waypoints[b].x, waypoints[b].y, waypoints[a].x, high)) || (TraceWay(waypoints[b].x, waypoints[b].y, waypoints[b].x, high) && TraceWay(waypoints[a].x, waypoints[a].y, waypoints[b].x, high)))
                    if (TraceWay(waypoints[a].x, waypoints[a].y - 50, waypoints[b].x, waypoints[b].y - 50)) return CONNECTION_WALK;
            } if (waypoints[b].y > waypoints[a].y + step_size)
            if (waypoints[b].y <= waypoints[a].y + 350)
                if (Math.abs(waypoints[a].x - waypoints[b].x) / Math.pow(Math.abs(waypoints[b].y - waypoints[a].y), 0.5) < 20) {
                    if (TraceWay(waypoints[a].x - 10, waypoints[a].y - 80, waypoints[b].x, waypoints[b].y - 80))
                        if (TraceWay(waypoints[a].x - 10, waypoints[a].y - 50, waypoints[b].x, waypoints[b].y - 50))
                            if (TraceWay(waypoints[a].x + 10, waypoints[a].y - 80, waypoints[b].x, waypoints[b].y - 80))
                                if (TraceWay(waypoints[a].x + 10, waypoints[a].y - 50, waypoints[b].x, waypoints[b].y - 50)) return CONNECTION_SAFEFALL;
                    if (TraceWay(waypoints[a].x - 10, waypoints[a].y - 50, (waypoints[b].x + waypoints[a].x) / 2, (waypoints[b].y + waypoints[a].y * 2) / 3 - 50))
                        if (TraceWay(waypoints[b].x - 10, waypoints[b].y - 50, (waypoints[b].x + waypoints[a].x) / 2, (waypoints[b].y + waypoints[a].y * 2) / 3 - 50))
                            if (TraceWay(waypoints[a].x + 10, waypoints[a].y - 50, (waypoints[b].x + waypoints[a].x) / 2, (waypoints[b].y + waypoints[a].y * 2) / 3 - 50))
                                if (TraceWay(waypoints[b].x + 10, waypoints[b].y - 50, (waypoints[b].x + waypoints[a].x) / 2, (waypoints[b].y + waypoints[a].y * 2) / 3 - 50)) {
                                    if (TraceWay(waypoints[a].x + 40 - 15, waypoints[a].y, waypoints[b].x - 15, waypoints[b].y))
                                        if (TraceWay(waypoints[a].x + 40 + 15, waypoints[a].y, waypoints[b].x + 15, waypoints[b].y))
                                            if (TraceWay(waypoints[a].x + 40, waypoints[a].y - 80, waypoints[b].x, waypoints[b].y - 80)) return CONNECTION_SAFEFALL;
                                    if (TraceWay(waypoints[a].x - 40 - 15, waypoints[a].y, waypoints[b].x - 15, waypoints[b].y))
                                        if (TraceWay(waypoints[a].x - 40 + 15, waypoints[a].y, waypoints[b].x + 15, waypoints[b].y))
                                            if (TraceWay(waypoints[a].x - 40, waypoints[a].y - 80, waypoints[b].x, waypoints[b].y - 80)) return CONNECTION_SAFEFALL;
                                }
                } if (waypoints[a].y > waypoints[b].y)
            if (waypoints[a].y <= waypoints[b].y + 165 - Math.pow(waypoints[a].x - waypoints[b].x, 2) / 500) {
                if (TraceWay(waypoints[a].x - 10, waypoints[a].y - 50, (waypoints[a].x + waypoints[b].x) / 2 - 10, waypoints[a].y - 120))
                    if (TraceWay(waypoints[a].x + 10, waypoints[a].y - 50, (waypoints[a].x + waypoints[b].x) / 2 + 10, waypoints[a].y - 120))
                        if (TraceWay(waypoints[b].x - 20, waypoints[b].y, (waypoints[a].x + waypoints[b].x) / 2, waypoints[a].y - 120) || TraceWay(waypoints[b].x + 20, waypoints[b].y, (waypoints[a].x + waypoints[b].x) / 2, waypoints[a].y - 120)) return CONNECTION_JUMP;
            } if (waypoints[a].y >= waypoints[b].y - 70)
            if (waypoints[a].y <= waypoints[b].y + 70)
                if (Math.abs(waypoints[a].x - waypoints[b].x) <= 200) {
                    if (TraceWay(waypoints[a].x - 10, waypoints[a].y - 80, (waypoints[a].x + waypoints[b].x) / 2, (waypoints[a].y + waypoints[b].y) / 2 - 160))
                        if (TraceWay(waypoints[b].x - 10, waypoints[b].y - 80, (waypoints[a].x + waypoints[b].x) / 2, (waypoints[a].y + waypoints[b].y) / 2 - 160))
                            if (TraceWay(waypoints[a].x - 10, waypoints[a].y - 50, (waypoints[a].x + waypoints[b].x) / 2, (waypoints[a].y + waypoints[b].y) / 2 - 160))
                                if (TraceWay(waypoints[b].x - 10, waypoints[b].y - 50, (waypoints[a].x + waypoints[b].x) / 2, (waypoints[a].y + waypoints[b].y) / 2 - 160))
                                    if (TraceWay(waypoints[a].x + 10, waypoints[a].y - 80, (waypoints[a].x + waypoints[b].x) / 2, (waypoints[a].y + waypoints[b].y) / 2 - 160))
                                        if (TraceWay(waypoints[b].x + 10, waypoints[b].y - 80, (waypoints[a].x + waypoints[b].x) / 2, (waypoints[a].y + waypoints[b].y) / 2 - 160))
                                            if (TraceWay(waypoints[a].x + 10, waypoints[a].y - 50, (waypoints[a].x + waypoints[b].x) / 2, (waypoints[a].y + waypoints[b].y) / 2 - 160))
                                                if (TraceWay(waypoints[b].x + 10, waypoints[b].y - 50, (waypoints[a].x + waypoints[b].x) / 2, (waypoints[a].y + waypoints[b].y) / 2 - 160)) return CONNECTION_RUN_JUMP;
                } if (waypoints[a].y + 100 > waypoints[b].y)
            if (waypoints[a].y <= waypoints[b].y + 200 - Math.pow(waypoints[a].x - waypoints[b].x, 2) / 500) {
                if (TraceWay(waypoints[a].x - 12, waypoints[a].y - 50, (waypoints[a].x + waypoints[b].x) / 2, (waypoints[a].y + waypoints[b].y) / 2 - 180))
                    if (TraceWay(waypoints[a].x + 12, waypoints[a].y - 50, (waypoints[a].x + waypoints[b].x) / 2, (waypoints[a].y + waypoints[b].y) / 2 - 180))
                        if (TraceWay(waypoints[b].x - 20, waypoints[b].y, (waypoints[a].x + waypoints[b].x) / 2, (waypoints[a].y + waypoints[b].y) / 2 - 180) || TraceWay(waypoints[b].x + 20, waypoints[b].y, (waypoints[a].x + waypoints[b].x) / 2, (waypoints[a].y + waypoints[b].y) / 2 - 180)) return CONNECTION_JUMP_SWORDS;
            } if (waypoints[a].y + 100 > waypoints[b].y)
            if (waypoints[a].y <= waypoints[b].y + 265 - Math.pow(waypoints[a].x - waypoints[b].x, 2) / 3000) {
                if (TraceWay(waypoints[a].x - 15, waypoints[a].y - 50, (waypoints[a].x + waypoints[b].x) / 2, (waypoints[a].y + waypoints[b].y) / 2 - 210))
                    if (TraceWay(waypoints[a].x + 15, waypoints[a].y - 50, (waypoints[a].x + waypoints[b].x) / 2, (waypoints[a].y + waypoints[b].y) / 2 - 210))
                        if (TraceWay(waypoints[b].x - 20, waypoints[b].y, (waypoints[a].x + waypoints[b].x) / 2, (waypoints[a].y + waypoints[b].y) / 2 - 210) || TraceWay(waypoints[b].x + 20, waypoints[b].y, (waypoints[a].x + waypoints[b].x) / 2, (waypoints[a].y + waypoints[b].y) / 2 - 210)) return CONNECTION_JUMP_BOOST;
            } if (waypoints[b].y > waypoints[a].y + step_size)
            if (Math.abs(waypoints[a].x - waypoints[b].x) / Math.pow(Math.abs(waypoints[b].y - waypoints[a].y), 0.5) < 20) {
                if (TraceWay(waypoints[a].x - 10, waypoints[a].y - 80, waypoints[b].x, waypoints[b].y - 80))
                    if (TraceWay(waypoints[a].x - 10, waypoints[a].y - 50, waypoints[b].x, waypoints[b].y - 50))
                        if (TraceWay(waypoints[a].x + 10, waypoints[a].y - 80, waypoints[b].x, waypoints[b].y - 80))
                            if (TraceWay(waypoints[a].x + 10, waypoints[a].y - 50, waypoints[b].x, waypoints[b].y - 50)) return CONNECTION_UNSAFE_FALL;
                if (TraceWay(waypoints[a].x - 10, waypoints[a].y - 50, (waypoints[b].x + waypoints[a].x) / 2, (waypoints[b].y + waypoints[a].y * 2) / 3 - 50))
                    if (TraceWay(waypoints[b].x - 10, waypoints[b].y - 50, (waypoints[b].x + waypoints[a].x) / 2, (waypoints[b].y + waypoints[a].y * 2) / 3 - 50))
                        if (TraceWay(waypoints[a].x + 10, waypoints[a].y - 50, (waypoints[b].x + waypoints[a].x) / 2, (waypoints[b].y + waypoints[a].y * 2) / 3 - 50))
                            if (TraceWay(waypoints[b].x + 10, waypoints[b].y - 50, (waypoints[b].x + waypoints[a].x) / 2, (waypoints[b].y + waypoints[a].y * 2) / 3 - 50)) {
                                if (TraceWay(waypoints[a].x + 40 - 15, waypoints[a].y, waypoints[b].x - 15, waypoints[b].y))
                                    if (TraceWay(waypoints[a].x + 40 + 15, waypoints[a].y, waypoints[b].x + 15, waypoints[b].y))
                                        if (TraceWay(waypoints[a].x + 40, waypoints[a].y - 80, waypoints[b].x, waypoints[b].y - 80)) return CONNECTION_UNSAFE_FALL;
                                if (TraceWay(waypoints[a].x - 40 - 15, waypoints[a].y, waypoints[b].x - 15, waypoints[b].y))
                                    if (TraceWay(waypoints[a].x - 40 + 15, waypoints[a].y, waypoints[b].x + 15, waypoints[b].y))
                                        if (TraceWay(waypoints[a].x - 40, waypoints[a].y - 80, waypoints[b].x, waypoints[b].y - 80)) return CONNECTION_UNSAFE_FALL;
                            }
            } return CONNECTION_NOT_REACHABLE;
    }
    for (var _x = min_x; _x < max_x; _x += step_size)
        for (var _y = min_y; _y < max_y; _y += step_size) {
            if (CanStandAt(_x, _y)) waypoints[waypoints.length] = {
                x: _x,
                y: _y,
                spawn_dm: CanSpawnAt(_x, _y),
                spawn_coop: false,
                spawn_coop_team: -1,
                risk_level_dm: 0,
                risk_level_coop: 0,
                damage: GetDamageAt(_x, _y)
            };
        }
    for (var i = 0; i < teleport.length; i++) {
        var _x = (teleport[i].x1 + teleport[i].x2) / 2;
        var _y = teleport[i].y2;
        waypoints[waypoints.length] = {
            x: _x,
            y: _y,
            spawn_dm: CanSpawnAt(_x, _y),
            spawn_coop: false,
            spawn_coop_team: -1,
            risk_level_dm: 0,
            risk_level_coop: 0,
            damage: GetDamageAt(_x, _y)
        };
    }
    for (var i = 0; i < player.length; i++) {
        var my_point = FindPointNear(player[i].x, player[i].y);
        waypoints[my_point].spawn_coop = true;
        if (waypoints[my_point].spawn_coop_team != player[i].team) {
            if (waypoints[my_point].spawn_coop_team == -1) waypoints[my_point].spawn_coop_team = player[i].team;
            else {
                NewNote('Checking failed: Spawn conflict. Oponent players spawned at the same place.', note_neutral);
                return;
            }
        }
    }
    for (var a = 0; a < waypoints.length; a++)
        for (var b = 0; b < waypoints.length; b++)
            if (a != b) {
                var trace_res = GetPossibleConnection(a, b);
                if (trace_res != CONNECTION_NOT_REACHABLE) {
                    connections[connections.length] = {
                        a: a,
                        b: b,
                        method: trace_res
                    };
                }
                if (Math.abs(waypoints[b].x - waypoints[a].x) < 1100)
                    if (Math.abs(waypoints[b].y - waypoints[a].y) < 1100) {
                        var di = Dist2D(waypoints[b].x, waypoints[b].y, waypoints[a].x, waypoints[a].y);
                        if (di < 1100)
                            if (di > 200) {
                                if (TraceWay(waypoints[b].x, waypoints[b].y - 60, waypoints[a].x, waypoints[a].y - 70, 4))
                                    if (!TraceWay(waypoints[a].x, waypoints[a].y - 60, waypoints[b].x, waypoints[b].y - 70, 4)) waypoints[a].risk_level_dm += 100 / (100 + Dist2D(waypoints[b].x, waypoints[b].y, waypoints[a].x, waypoints[a].y)) * 2;
                                if (TraceWay(waypoints[b].x, waypoints[b].y - 60, waypoints[a].x, waypoints[a].y - 40, 4))
                                    if (!TraceWay(waypoints[a].x, waypoints[a].y - 60, waypoints[b].x, waypoints[b].y - 40, 4)) waypoints[a].risk_level_dm += 100 / (100 + Dist2D(waypoints[b].x, waypoints[b].y, waypoints[a].x, waypoints[a].y)) * 2;
                                if (TraceWay(waypoints[b].x, waypoints[b].y - 60, waypoints[a].x, waypoints[a].y - 20, 4))
                                    if (!TraceWay(waypoints[a].x, waypoints[a].y - 60, waypoints[b].x, waypoints[b].y - 20, 4)) waypoints[a].risk_level_dm += 100 / (100 + Dist2D(waypoints[b].x, waypoints[b].y, waypoints[a].x, waypoints[a].y)) * 2;
                            }
                    }
            } for (var i = 0; i < teleport.length; i++) {
        connections[connections.length] = {
            a: FindPointNear((teleport[i].x1 + teleport[i].x2) / 2, (teleport[i].y1 + teleport[i].y2) / 2),
            b: FindPointNear(teleport[i].target_x, teleport[i].target_y),
            method: CONNECTION_TELEPORT
        };
    }
}
window.onerror = function(msg, url, line) {
    if (checkWebKit() === null) alert("This Level Editor is supported only by webkit-based browsers.\n(Google Chrome, Safari, Opera Next)");
};

function LoadSaveData() {
    login               =          localStorage.getItem('username')    || "";
    password            =          localStorage.getItem('password')    || "";
    mapserver_address   =          localStorage.getItem('mapserver')   || "prosuwanted.ru:36320";
    rendermode          = parseInt(localStorage.getItem('rendermode')) || RENDER_MODE_2D;
    editormode          = parseInt(localStorage.getItem('editormode')) || EDITOR_MODE_EXPANDED;

    displayVariableFull = localStorage.getItem('displayVariableFull') === 'true';
    
    mp_match_server     =          localStorage.getItem('mp_server')   || mapserver_address;
    mp_match_name       =          localStorage.getItem('mp_name')     || "Map test match";
    mp_match_id         =          localStorage.getItem('mp_id')       || "_";
    mp_match_pass       =          localStorage.getItem('mp_pw')       || "";
    mp_match_gamemode   = parseInt(localStorage.getItem('mp_gm'))      || GAMEMODE_DM;
    mp_match_maxplayers = parseInt(localStorage.getItem('mp_max'))     || 8;
}

function StoreSaveData() {
    localStorage.setItem('mapserver' , mapserver_address);
    localStorage.setItem('rendermode', rendermode);
    localStorage.setItem('editormode', editormode);
    localStorage.setItem('username'  , login);
    localStorage.setItem('password'  , password);

    localStorage.setItem('displayVariableFull', displayVariableFull);

    localStorage.setItem('mp_server' , mp_match_server);
    localStorage.setItem('mp_name'   , mp_match_name);
    localStorage.setItem('mp_id'     , mp_match_id);
    localStorage.setItem('mp_pw'     , mp_match_pass);
    localStorage.setItem('mp_gm'     , mp_match_gamemode);
    localStorage.setItem('mp_max'    , mp_match_maxplayers);
}

function OpenSettings() {
    ignore_keys = true;
    mrdimlights.style = 'display: block';
    mrsettings.style.display = 'block';
    dim_undo = "mrsettings.style.display = 'none'";
    DrawSettings();
}

const str_to_gamemode = {
    COOP: GAMEMODE_COOP,
    DM:   GAMEMODE_DM,
    TDM:  GAMEMODE_TDM
};
const gamemode_to_str = (o => Object.fromEntries(Object.entries(o).map(a => a.reverse())))(str_to_gamemode);

function SetMatchTestMode(target) {
    for (const btn of mrsettings_gamemodes)
        btn.disabled = btn == target;
}

function MaxPlayersRange(range) {
    mrsettings_testmatch_players_t.innerText = range.value;
}

function DrawSettings() {
    mrsettings_login.value       = login;
    mrsettings_password.value    = password;
    mrsettings_mapserver.value   = mapserver_address;
    mrsettings_r2d.disabled      = rendermode == RENDER_MODE_2D;
    mrsettings_rgl.disabled      = rendermode == RENDER_MODE_GL;
    mrsettings_mode_reg.disabled = editormode == EDITOR_MODE_REGULAR;
    mrsettings_mode_ex.disabled  = editormode == EDITOR_MODE_EXPANDED;

    mrsettings_var_simplified.disabled  = !displayVariableFull
    mrsettings_var_full.disabled        = displayVariableFull

    mrsettings_matchserver.value = mp_match_server;
    mrsettings_testmatch_name.value = mp_match_name;
    mrsettings_testmatch_id.value = mp_match_id;
    mrsettings_testmatch_pw.value = mp_match_pass;
    let gm = gamemode_to_str[mp_match_gamemode];
    for (const btn of mrsettings_gamemodes)
        btn.disabled = gm == btn.value;
    mrsettings_testmatch_players.value = mp_match_maxplayers;
    mrsettings_testmatch_players_t.innerText = mp_match_maxplayers;
}

function ApplySettings() {
    login = mrsettings_login.value;
    password = mrsettings_password.value;
    mapserver_address = mrsettings_mapserver.value;
    let old_rendermode = rendermode;
    var old_editormode = editormode;
    if (mrsettings_r2d.disabled)      rendermode = RENDER_MODE_2D;
    if (mrsettings_rgl.disabled)      rendermode = RENDER_MODE_GL;
    if (mrsettings_mode_reg.disabled) editormode = EDITOR_MODE_REGULAR;
    if (mrsettings_mode_ex.disabled)  editormode = EDITOR_MODE_EXPANDED;

    if (mrsettings_var_simplified.disabled) displayVariableFull = false
    if (mrsettings_var_full.disabled)       displayVariableFull = true

    mp_match_server = mrsettings_matchserver.value;
    mp_match_name = mrsettings_testmatch_name.value;
    mp_match_id = mrsettings_testmatch_id.value;
    mp_match_pass = mrsettings_testmatch_pw.value;
    for (const btn of mrsettings_gamemodes) {
        if (btn.disabled) {
            mp_match_gamemode = str_to_gamemode[btn.value];
            break;
        }
    }
    mp_match_maxplayers = parseInt(mrsettings_testmatch_players.value);
    StoreSaveData();
    if (rendermode != old_rendermode || editormode != old_editormode) {
        NewNote("Warning: to apply all settings, reload the editor.", note_neutral);
    }
    CancelDim();
}

function EnterCredentials() {
    login = prompt("Enter login") || "";
    password = prompt("Enter password") || "";
    localStorage.setItem('username', login);
    localStorage.setItem('password', password);
}

function SetRenderMode(mode) {
    if (mode == '2d') {
        mrsettings_r2d.disabled = true;
        mrsettings_rgl.disabled = false;
    }
    if (mode == 'gl') {
        mrsettings_r2d.disabled = false;
        mrsettings_rgl.disabled = true;
    }
}

function SetEditorMode(mode) {
    if (mode == 'regular') {
        mrsettings_mode_reg.disabled = true;
        mrsettings_mode_ex.disabled  = false;
    }
    if (mode == 'expanded') {
        mrsettings_mode_reg.disabled = false;
        mrsettings_mode_ex.disabled  = true;
    }
}

function SetVarMode(mode) {
    if (mode == 'simplified') {
        mrsettings_var_simplified.disabled = true;
        mrsettings_var_full.disabled  = false;
    }
    if (mode == 'full') {
        mrsettings_var_simplified.disabled = false;
        mrsettings_var_full.disabled = true;
dwadw    }
}

function SetMapName() {
    editing_mapname = false;
    if (mapid_field.validity.valid) mapid = mapid_field.value;
    else mapid_field.value = mapid;
}

function MakeIcon16Node(src) {
    var node = document.createElement('img');
    node.src = '/static/icons16/' + src + '.gif';
    node.width = node.height = 16;
    node.align = 'absmiddle';
    return node;
}

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)

if(urlParams.get('map')){
    LoadMapFromServer(urlParams.get('map'))
} 