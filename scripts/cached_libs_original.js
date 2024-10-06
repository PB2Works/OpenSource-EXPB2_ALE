var parambox_t, parambox_t2;
var canv = document.getElementById('O0');
var ctx = canv.getContext('2d');
var right_panel = document.getElementById('right_panel');
var left_panel = document.getElementById('left_panel');
var top_panel = document.getElementById('top_panel');
var floattag = document.getElementById('floattag');
var _lsu = 10;
var _lsv = 10;
var lsu = 10;
var lsv = 10;
var es = new Array();
var expert_view = false;
var selgrd = '#FF0';
var selgrd2 = '#FF0';
var selgrd3 = "#FFF";
var selgrd_b = '#0FF';
var selgrd2_b = '#0FF';
var PIC_PHP_SOURCE = 'imgs';
var img_ctrl = new Image();
img_ctrl.src = 'ctrl.gif';
var img_alt = new Image();
img_alt.src = 'alt.gif';
var img_shift = new Image();
img_shift.src = 'shift.gif';
var img_player_hero = new Image();
img_player_hero.src = 'player_hero.png';
var img_player_red = new Image();
img_player_red.src = 'player_red.png';
var img_player_blue = new Image();
img_player_blue.src = 'player_blue.png';
var img_player_cs = new Image();
img_player_cs.src = 'player_cs.png';
var img_unknown = new Image();
img_unknown.src = 'unknown.png';
var img_weapon = new Image();
img_weapon.src = 'weapon.png';
var img_inf = new Image();
img_inf.src = 'inf.png';
var img_song = new Image();
img_song.src = 'song.png';
var img_image = new Image();
img_image.src = 'image.png';
var img_trigger = new Image();
img_trigger.src = 'trigger.png';
var img_timer = new Image();
img_timer.src = 'timer.png';
var img_lamp = new Image();
img_lamp.src = 'lamp.png';
var img_lamp_ambient = new Image();
img_lamp_ambient.src = 'lamp_ambient.png';
var img_region = new Image();
img_region.src = 'panel_board.png';
var img_region_red = new Image();
img_region_red.src = 'panel_board_red.png';
var img_region_blue = new Image();
img_region_blue.src = 'panel_board_blue.png';
var img_quickpick = new Image();
img_quickpick.src = 'quickpick.png';
var img_quickpick2 = new Image();
img_quickpick2.src = 'quickpick2.png';
var img_slct = new Image();
img_slct.onload = function() {
        selgrd = ctx.createPattern(img_slct, "repeat");
    };
var img_slct2 = new Image();
img_slct2.onload = function() {
        selgrd2 = ctx.createPattern(img_slct2, "repeat");
    };
var img_slct3 = new Image();
img_slct3.onload = function() {
        selgrd3 = ctx.createPattern(img_slct3, "repeat");
    };
var img_slct_b = new Image();
img_slct_b.onload = function() {
        selgrd_b = ctx.createPattern(img_slct_b, "repeat");
    };
var img_slct2_b = new Image();
img_slct2_b.onload = function() {
        selgrd2_b = ctx.createPattern(img_slct2_b, "repeat");
    };
var img_put = new Image();
img_put.src = 'put.png';
img_slct.src = 's.gif';
img_slct2.src = 'f.gif';
img_slct3.src = 's_w.gif';
img_slct_b.src = 's_b.gif';
img_slct2_b.src = 'f_b.gif';
var lo_x = new Array();
var lo_y = new Array();
var lo_w = new Array();
var lo_h = new Array();
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
lo_x["image"] = lo_x['song'] = lo_x['inf'] = lo_x['trigger'] = lo_x['timer'] = lo_x['lamp'] = lo_x['decor'] = -16;
lo_y["image"] = lo_y['song'] = lo_y['inf'] = lo_y['trigger'] = lo_y['timer'] = lo_y['lamp'] = lo_y['decor'] = -16;
lo_w["image"] = lo_w['song'] = lo_w['inf'] = lo_w['trigger'] = lo_w['timer'] = lo_w['lamp'] = lo_w['decor'] = 32;
lo_h["image"] = lo_h['song'] = lo_h['inf'] = lo_h['trigger'] = lo_h['timer'] = lo_h['lamp'] = lo_h['decor'] = 32;
lo_x['barrel'] = -12;
lo_y['barrel'] = -20;
lo_w['barrel'] = 25;
lo_h['barrel'] = 41;
var bo_x = new Array();
var bo_y = new Array();
var bo_w = new Array();
var bo_h = new Array();
bo_x['enemy'] = bo_x['player'] = -15;
bo_y['enemy'] = bo_y['player'] = -82;
bo_w['enemy'] = bo_w['player'] = 30;
bo_h['enemy'] = bo_h['player'] = 82;
bo_x['gun'] = -25;
bo_y['gun'] = -7;
bo_w['gun'] = 50;
bo_h['gun'] = 14;
bo_x["image"] = bo_x['song'] = bo_x['inf'] = bo_x['trigger'] = bo_x['timer'] = bo_x['lamp'] = bo_x['decor'] = -16;
bo_y["image"] = bo_y['song'] = bo_y['inf'] = bo_y['trigger'] = bo_y['timer'] = bo_y['lamp'] = bo_y['decor'] = -16;
bo_w["image"] = bo_w['song'] = bo_w['inf'] = bo_w['trigger'] = bo_w['timer'] = bo_w['lamp'] = bo_w['decor'] = 32;
bo_h["image"] = bo_h['song'] = bo_h['inf'] = bo_h['trigger'] = bo_h['timer'] = bo_h['lamp'] = bo_h['decor'] = 32;
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
        }
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
    console.log("ServerRequest [" + operation + "]: " + my_request);
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
param_type[20] = ['m', 'bg_model', 'Material', 'Determines object\'s material', 'bg'];
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
param_type[34] = ['model', 'decor_model', 'Model', 'Decoration model', 'decor'];
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
for (var i = 1; i <= 10; i++) {
    param_type[param_type.length] = ['actions_' + i + '_type', 'trigger_type', 'Action ' + i + ' type', 'Determines type of action ' + i + '', 'trigger'];
    param_type[param_type.length] = ['actions_' + i + '_targetA', 'nochange', '- parameter A', 'Determines parameter A of action ' + i + '', 'trigger'];
    param_type[param_type.length] = ['actions_' + i + '_targetB', 'nochange', '- parameter B', 'Determines parameter B of action ' + i + '', 'trigger'];
}
var CACHED_BGS = {};
var CACHED_DECORS = {};
var CUSTOM_IMAGES_APPROVED = {};
var CACHED_SKY = {};
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
var img_chars_full = new Array();
for (i in special_values_table['char']) {
    img_chars_full[i] = new Image();
    var leading = i + '';
    while (leading.length < 4) leading = '0' + leading;
    img_chars_full[i].src = 'chars_full/char' + leading + '.png';
    special_values_table['char'][i] = '<span style=\'background:url(' + img_chars_full[i].src + '); width: 16px; height: 16px; display: inline-block; background-position: center; background-position-x: 30%; background-position-y: 26%; background-size: 67px;vertical-align: -4px;\'></span> ' + special_values_table['char'][i];
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
special_values_table['region'] = new Array();
special_values_table['region']['[listof]'] = 'region';
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
special_values_table['decor_model'] = new Array();
ServerRequest('a=get_images&for_class=' + 'decor_model' + '&update_const=' + 'all', 'request_consts');
var img_decors = new Array();
for (i in special_values_table['decor_model']) {
    img_decors[i] = new Image();
    img_decors[i].src = PIC_PHP_SOURCE + '/5' + '/' + i + '.png';
}
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
var img_guns = new Array();
for (i in special_values_table['gun_model']) {
    special_values_table['gun_model'][i] = '<img src='+PIC_PHP_SOURCE+'/2/'+i+'.png border=0 width=80 height=20 style=vertical-align:baseline title=\'' + special_values_table['gun_model'][i] + '\'>';
        
    img_guns[i] = new Image();
    img_guns[i].src = PIC_PHP_SOURCE + '/2/' + i + '.png';
}
special_values_table['barrel_model'] = new Array();
special_values_table['barrel_model']['bar_orange'] = "Orange (78 dmg)";
special_values_table['barrel_model']['bar_blue'] = "Blue (117 dmg)";
special_values_table['barrel_model']['bar_red'] = "Red (156 dmg)";
var img_barrels = new Array();
for (i in special_values_table['barrel_model']) {
    special_values_table['barrel_model'][i] = '<img src='+PIC_PHP_SOURCE+'/7/'+i+'.png border=0 width=10 height=16 style=vertical-align:middle title=\'' + special_values_table['barrel_model'][i] + '\'> ' + special_values_table['barrel_model'][i];
    img_barrels[i] = new Image();
    img_barrels[i].src = PIC_PHP_SOURCE + '/7/' + i + '.png';
}
special_values_table['vehicle_model'] = new Array();
special_values_table['vehicle_model']['veh_jeep'] = "Mobile r081-CS";
special_values_table['vehicle_model']['veh_walker'] = "Hound Walker-CS";
special_values_table['vehicle_model']['veh_capsule'] = "Life-Capsule";
special_values_table['vehicle_model']['veh_crate'] = "Crate";
special_values_table['vehicle_model']['veh_drone'] = "Drone";
special_values_table['vehicle_model']['veh_rope'] = "Rope";
special_values_table['vehicle_model']['veh_corvette'] = "Corvette";
var img_vehicles = new Array();
for (i in special_values_table['vehicle_model']) {
    special_values_table['vehicle_model'][i] = '<img src='+PIC_PHP_SOURCE+'/9/'+i+'.png border=0 height=12 style=vertical-align:middle title=\'' + special_values_table['vehicle_model'][i] + '\'> ' + special_values_table['vehicle_model'][i];
    img_vehicles[i] = new Image();
    img_vehicles[i].src = 
        PIC_PHP_SOURCE + '/8/' + i + '.png';
}
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
    special_values_table['box_model'][i] = '<img src='+PIC_PHP_SOURCE+'/3/'+i+'.png border=0 width=16 height=16 style=vertical-align:-4px title=\'' + special_values_table['box_model'][i] + '\'> ' + special_values_table['box_model'][i];
}
special_values_table['draw_in_front'] = [];
special_values_table['draw_in_front'][0] = 'No';
special_values_table['draw_in_front'][1] = 'Yes';
special_values_table['draw_in_front'][2] = 'Yes and glow (decorations only)';
special_values_table['bg_model'] = new Array();
for (var i = -1; i <= 16; i++) {
    let img = new Image();
    img.src = 'bg/' + i + '.jpg';
    img.loaded = false;
    img.onload = function() {
            img.loaded = true;
        };
    CACHED_BGS[i] = img;
}
ServerRequest('a=get_images&for_class=' + 'bg_model' + '&update_const=' + 'all', 'request_consts');
for (var i = 1; i <= 18; i++) {
    let img = new Image();
    img.src = 'sky/' + i + '.jpg';
    img.loaded = false;
    img.onload = function() {
            img.loaded = true;
        };
    CACHED_SKY[i] = img;
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
special_values_table['trigger+none'] = new Array();
special_values_table['trigger+none'][-1] = '- No trigger -';
special_values_table['trigger+none']['[listof]'] = 'trigger';
var mark_pairs = new Array();
var rainbow = ['#5f6887', '#94a4c1', '#efefef', '#ac961b', '#ffff00', '#ffa500', '#ff214b', '#e76565', '#ef51ef', '#d988d9', '#8080ff', '#2cb3f1', '#28c28d', '#00ff00', '#6cff00', '#7fff79', '#474b54', '#ffffff', '#aaaaff', '#aaffaa', '#ffaaaa', '#ffffaa', '#aaaaaa', '#ffaaff', '#aaffff', '#777777', '#555555'];
var next_color = 0;
var tr_type_tags = new Array();
special_values_table['trigger_type'] = new Array();
var last_trigger_type_id;

function addTrigger(trigger_type_id, description, paramA, paramB) {
    last_trigger_type_id = trigger_type_id;
    var parts = description.split(' &#8250; ');
    if (parts.length > 1) {
        if (tr_type_tags[parts[0]] == undefined) {
            if (rainbow[next_color] == undefined) console.log('Out of trigger category colors: ' + next_color);
            tr_type_tags[parts[0]] = rainbow[next_color];
            next_color++;
        }
        parts[0] = '<span style=color:' + tr_type_tags[parts[0]] + '>' + parts[0] + '</span>';
        description = parts.join(' <span style=color:rgba(255,255,255,0.4)>&#8250;</span> ');
    }
    special_values_table['trigger_type'][trigger_type_id] = description;
    mark_pairs['trigger_type_A' + trigger_type_id] = paramA;
    mark_pairs['trigger_type_B' + trigger_type_id] = paramB;
}
var trigger_opcode_aliases = [];

function AddOpcodeAlias(opcode) {
    trigger_opcode_aliases[last_trigger_type_id] = opcode;
}
addTrigger(-1, 'Do nothing', 'nochange', 'nochange');
addTrigger(0, "Movable &#8250; Force Movable 'A' move to region 'B'", 'door', 'region');
AddOpcodeAlias('MovableTo');
addTrigger(1, "Movable &#8250; Change Speed of Movable 'A' to value 'B'", 'door', 'value>=0');
AddOpcodeAlias('SetMovableSpeed');
addTrigger(2, "Region &#8250; Quickly move Region with name 'A' to the position of the region with name 'B'", 'region', 'region');
AddOpcodeAlias('RegionToRegion');
addTrigger(3, "Vehicle &#8250; Change the number of hit points of Vehicle 'A' to 'B' percents", 'vehicle', 'value');
AddOpcodeAlias('ChangeVehHPPerc');
addTrigger(4, "Character &#8250; Change the number of hit points of Character 'A' to 'B' percents", 'character', 'value');
AddOpcodeAlias('ChangeCharHPPerc');
addTrigger(5, "Gravity &#8250; Change the gravity to the value 'A' (Default is 0.5)", 'value', 'nochange');
AddOpcodeAlias('SetGravity');
addTrigger(6, "Region &#8250; Make damage in Region 'B' with power of 'A' hit points", 'value', 'region');
AddOpcodeAlias('DamageRegion');
addTrigger(9, "Scenario &#8250; End mission with reason 'A'", 'string', 'nochange');
AddOpcodeAlias('EndMission');
addTrigger(10, "Region &#8250; Harm the stability with power 'A' of all Characters located at Region with the name 'B'", 'value', 'region');
AddOpcodeAlias('StabilityDamageRegion');
addTrigger(11, "Region &#8250; Kill all Characters at Region 'B' which are not allied to Character 'A'", 'character', 'region');
AddOpcodeAlias('KillUnaliedInRegion');
addTrigger(12, "Region &#8250; Destroy all vehicles in Region 'A'", 'region', 'nochange');
AddOpcodeAlias('DestroyVehsInRegion');
addTrigger(13, "Character &#8250; Put Character 'A' into the Vehicle 'B'", 'character', 'vehicle');
AddOpcodeAlias('PutCharInVeh');
addTrigger(14, "Character &#8250; Move Character 'A' to the region 'B' (if Character alive)", 'character', 'region');
AddOpcodeAlias('MoveCharToReguin');
addTrigger(15, "Gun &#8250; Move Gun 'A' to the Region 'B'", 'gun', 'region');
AddOpcodeAlias('MoveGunToReguin');
addTrigger(16, "Barrel &#8250; Move Barrel 'A' to the Region 'B' (if Barrel not exploded)", 'barrel', 'region');
AddOpcodeAlias('MoveBarrelToReguin');
addTrigger(18, "Region &#8250; Move Region 'A' to the Region 'B' (centres will be located in the same point)", 'region', 'region');
AddOpcodeAlias('RegionToRegionCenter');
addTrigger(19, "Trigger &#8250; Deactivate Trigger 'A'", 'trigger', 'nochange');
AddOpcodeAlias('TriggerDisable');
addTrigger(20, "Trigger &#8250; Activate Trigger 'A'", 'trigger', 'nochange');
AddOpcodeAlias('TriggerEnable');
addTrigger(21, "Trigger &#8250; Set number of remain calls of Trigger 'A' to 0", 'trigger', 'nochange');
AddOpcodeAlias('TriggerSetCalls0');
addTrigger(22, "Trigger &#8250; Set number of remain calls of Trigger 'A' to value 'B'", 'trigger', 'maxcalls');
AddOpcodeAlias('TriggerSetCallsValue');
addTrigger(23, "Character &#8250; Set current hit points of Character 'A' to 'B' hit points (not sets hit points of each limb)", 'character', 'int');
AddOpcodeAlias('SetCharHP');
addTrigger(24, "Region &#8250; Make an explosion with power 'A' at Region 'B'", 'value>=0', 'region');
AddOpcodeAlias('ExplosionRegion');
addTrigger(25, "Timer &#8250; Activate Timer 'A'", 'timer', 'nochange');
AddOpcodeAlias('TimerEnable');
addTrigger(26, "Timer &#8250; Deactivate Timer 'A'", 'timer', 'nochange');
AddOpcodeAlias('TimerDisable');
addTrigger(27, "Timer &#8250; Set the frequency of calls of Timer 'A' to value 'B'", 'timer', 'int');
AddOpcodeAlias('TimerSetFrequency');
addTrigger(28, "Character &#8250; Clone Character 'A' and spawn it in the centre of Region 'B'", 'character', 'region');
AddOpcodeAlias('CloneCharInRegionCentre');
addTrigger(29, "Region &#8250; Force all enemies of Character 'A' who located in region 'B' hunt for Character 'A'", 'character', 'region');
AddOpcodeAlias('ForceRegionHuntForChar');
addTrigger(30, "Region &#8250; Teleport all players from Region 'A' to Region 'B'", 'region', 'region');
AddOpcodeAlias('TeleportFromRegionToRegion');
addTrigger(31, "Region &#8250; Teleport all players from Region 'A' to Region 'B' and invert speed by X axis (used to avoid loop teleportation)", 'region', 'region');
AddOpcodeAlias('TeleportFromRegionToRegionFlip');
addTrigger(32, "Character &#8250; Set ''AI Behavior'' parameter of computer-controlled Character 'A' to value 'B'", 'character', 'botaction');
AddOpcodeAlias('SetAIBehavior');
addTrigger(33, "Character &#8250; Change team of Character 'A' to value 'B'", 'character', 'team');
AddOpcodeAlias('SetCharTeam');
addTrigger(34, "Decoration &#8250; Change model of Decoration 'A' to model named 'B'", 'decor', 'decor_model');
AddOpcodeAlias('SetDecorModel');
addTrigger(35, "Gravitator Area Field &#8250; Set X acceleration of Gravitator Area Field 'A' to value 'B'", 'pushf', 'value');
AddOpcodeAlias('SetPusherAccelX');
addTrigger(36, "Gravitator Area Field &#8250; Set Y acceleration of Gravitator Area Field 'A' to value 'B'", 'pushf', 'value');
AddOpcodeAlias('SetPusherAccelY');
addTrigger(37, "Gravitator Area Field &#8250; Set stability damage of Gravitator Area Field 'A' to value 'B' (0 for disable)", 'pushf', 'value>=0');
AddOpcodeAlias('SetPusherStabilityDmg');
addTrigger(38, "Gravitator Area Field &#8250; Set damage of Gravitator Area Field 'A' to value 'B' (0 for disable)", 'pushf', 'pushf_damage');
AddOpcodeAlias('SetPusherHPDmg');
addTrigger(39, "Gameplay &#8250; Set game speed to 'A' frames per second (default game speed is 30. Does not influence rendering)", 'value>=0', 'nochange');
AddOpcodeAlias('SetGameSpeed');
addTrigger(40, "Gameplay &#8250; Change Strict Casual Mode status", 'enable-disable', 'nochange');
AddOpcodeAlias('SetStrictCasualMode');
special_values_table['enable-disable'] = new Array();
special_values_table['enable-disable'][1] = 'Enable';
special_values_table['enable-disable'][0] = 'Disable';
addTrigger(41, "Sound &#8250; Play sound 'A' from library", 'sound', 'nochange');
AddOpcodeAlias('PlaySound');
special_values_table['sound'] = new Array();
special_values_table['sound']['null'] = '- silence - (for guns only)';
special_values_table['sound']['hp_warn'] = 'Battlesuit - Low health';
special_values_table['sound']['hp_dead'] = 'Battlesuit - Death';
special_values_table['sound']['wea_pickup'] = 'Weapon - Picked up';
special_values_table['sound']['wea2'] = 'Weapon - Impact 1';
special_values_table['sound']['wea1'] = 'Weapon - Impact 2';
special_values_table['sound']['wea_vehminigun'] = 'Vehicle minigun (Drone)';
special_values_table['sound']['wea_sniper'] = 'Sniper Rifle CS-YippeeKiYay';
special_values_table['sound']['wea_shotgun_alt'] = 'Alien Shotgun';
special_values_table['sound']['wea_shotgun'] = 'Shotgun C-01s';
special_values_table['sound']['wea_rifle_alt'] = 'Alien Rifle';
special_values_table['sound']['wea_rifle'] = 'Assault Rifle C-01r';
special_values_table['sound']['wea_real_shotgun_r'] = 'Shotgun CS-DAZ - Reloading';
special_values_table['sound']['wea_real_shotgun'] = 'Shotgun CS-DAZ';
special_values_table['sound']['wea_real_rifle'] = 'Assault Rifle CS-RC';
special_values_table['sound']['wea_rail_alt'] = 'Heavy Railgun v04 CS-OneSOneK';
special_values_table['sound']['wea_pistol2'] = 'Pistol CS-Pro';
special_values_table['sound']['wea_pistol'] = 'Pistol C-01p';
special_values_table['sound']['wea_plasmagun'] = 'Plasmagun CS-Bloom';
special_values_table['sound']['wea_mingun2'] = 'Minigun C-02m';
special_values_table['sound']['wea_mingun'] = 'wea_minigun (unused)';
special_values_table['sound']['wea_impulse'] = 'wea_impulse (unused)';
special_values_table['sound']['wea_evil_shot'] = 'CS-BNG';
special_values_table['sound']['wea_energy'] = 'Ray Gun C-01y';
special_values_table['sound']['wea_defibrillator'] = 'Defibrillator';
special_values_table['sound']['wea_apistol'] = 'Alien Pistol';
special_values_table['sound']['water_splash3'] = 'Water splash 3';
special_values_table['sound']['water_splash2'] = 'Water splash 2';
special_values_table['sound']['water_splash1'] = 'Water splash 1';
special_values_table['sound']['walker_step'] = 'Hound Walker-CS - Step';
special_values_table['sound']['walker_phase2'] = 'Hound Walker-CS - Phase 2';
special_values_table['sound']['walker_phase1'] = 'Hound Walker-CS - Phase 1';
special_values_table['sound']['walker_die'] = 'Hound Walker-CS - Termination';
special_values_table['sound']['wea_vehcannon'] = 'Vehicle Cannon (Hound Walker-CS)';
special_values_table['sound']['usurpation_hurt'] = 'Usurpation Destroyer - Hurt';
special_values_table['sound']['usurpation_dying'] = 'Usurpation Destroyer - Dying';
special_values_table['sound']['usurpation_death3'] = 'Usurpation Destroyer - Death 3';
special_values_table['sound']['usurpation_death2'] = 'Usurpation Destroyer - Death 2';
special_values_table['sound']['usurpation_alert'] = 'Usurpation Destroyer - Alert';
special_values_table['sound']['test_sound'] = 'Vehicle Rocket Launcher (Corvette) - Reloading';
special_values_table['sound']['teleport_spawn'] = 'Teleport';
special_values_table['sound']['team_switch'] = 'Hero change';
special_values_table['sound']['t_switch2'] = 'Panel Board - Activation';
special_values_table['sound']['t_switch1'] = 'Panel Board - Activation 2 (unused)';
special_values_table['sound']['t_switch_denied'] = 'Panel Board - Denied';
special_values_table['sound']['t_door1_stop'] = 'Movable - Start';
special_values_table['sound']['t_door1_start'] = 'Movable - Stop';
special_values_table['sound']['step4'] = 'Footstep 4';
special_values_table['sound']['step3'] = 'Footstep 3';
special_values_table['sound']['step2'] = 'Footstep 2';
special_values_table['sound']['step1'] = 'Footstep 1';
special_values_table['sound']['steel_med'] = 'Vehicle collision - Medium';
special_values_table['sound']['steel_low'] = 'Vehicle collision - Low';
special_values_table['sound']['steel_hor'] = 'Vehicle collision - Friction';
special_values_table['sound']['steel_hard'] = 'Vehicle collision - Hard';
special_values_table['sound']['slow_up'] = 'Battlesuit - Slowmotion disabled';
special_values_table['sound']['slow_down'] = 'Battlesuit - Slowmotion enabled';
special_values_table['sound']['slicer_die'] = 'Civil Security Ghost - Death';
special_values_table['sound']['slicer_alert'] = 'Civil Security Ghost - Alert';
special_values_table['sound']['shnade_offline'] = 'Portable Shield v07 CS-Quarium - Explosion';
special_values_table['sound']['shnade_hit_low'] = 'Portable Shield v07 CS-Quarium - Hit low';
special_values_table['sound']['shnade_hit'] = 'Portable Shield v07 CS-Quarium - Hit hard';
special_values_table['sound']['shnade_explode'] = 'Portable Shield v07 CS-Quarium - Activation';
special_values_table['sound']['shnade_act'] = 'Portable Shield v07 CS-Quarium - Blip';
special_values_table['sound']['ship_incoming'] = 'Ship - Income';
special_values_table['sound']['ship_explosion'] = 'Ship - Explosion';
special_values_table['sound']['reload'] = 'Lite Railgun v01 CS-HShot - Reload';
special_values_table['sound']['wea_rocket_launch'] = 'Rocket Launcher CS-LitBro';
special_values_table['sound']['robo_step4'] = 'Robotic footstep 4';
special_values_table['sound']['robo_step3'] = 'Robotic footstep 3';
special_values_table['sound']['robo_step2'] = 'Robotic footstep 2';
special_values_table['sound']['robo_step1'] = 'Robotic footstep 1';
special_values_table['sound']['robo_bug_launch'] = 'Drone Gun CS-Virus - Shot';
special_values_table['sound']['robo_bug_jump'] = 'Drone Gun CS-Virus - Jump';
special_values_table['sound']['robo_bug_hit'] = 'Drone Gun CS-Virus - Hit';
special_values_table['sound']['rl_reload'] = 'Rocket Launcher CS-LitBro - Reload';
special_values_table['sound']['wea_railgun'] = 'Lite Railgun v01 CS-HShot';
special_values_table['sound']['portnade_explode'] = 'Teleport Grenade v03 CS-PortNade - Detonation';
special_values_table['sound']['portnade_act2'] = 'Teleport Grenade v03 CS-PortNade - Blip';
special_values_table['sound']['plasma_explosion'] = 'Plasma explosion';
special_values_table['sound']['noir_hurt2'] = 'Noir Lime - Hurt 2';
special_values_table['sound']['noir_hurt1'] = 'Noir Lime - Hurt 1';
special_values_table['sound']['noir_die'] = 'Noir Lime - Death';
special_values_table['sound']['nade_throw'] = 'Nade throw';
special_values_table['sound']['mission_done'] = 'Mission complete';
special_values_table['sound']['metal_ver3'] = 'Metal - Hard';
special_values_table['sound']['metal_ver2'] = 'Metal - Medium';
special_values_table['sound']['metal_ver1'] = 'Metal - Low';
special_values_table['sound']['metal_hor'] = 'Metal - Friction';
special_values_table['sound']['metal_hit'] = 'Metal - Hit';
special_values_table['sound']['metal_gib'] = 'Metal - Destruction';
special_values_table['sound']['last_teleport'] = 'Last teleport';
special_values_table['sound']['s_info_off'] = 'Menu button - onMouseDown';
special_values_table['sound']['s_info_act'] = 'Menu button - onClick';
special_values_table['sound']['s_info'] = 'Menu button - onMouseOver';
special_values_table['sound']['hint_disappear'] = 'Hint - Disappear';
special_values_table['sound']['hint_appear'] = 'Hint - Appear';
special_values_table['sound']['wea_gl'] = 'Grenade Launcher CS-SpamThemBaby';
special_values_table['sound']['grenade_act'] = 'Grenade C-00n - Blip';
special_values_table['sound']['grenade'] = 'Grenade bounce';
special_values_table['sound']['glass2'] = 'Barrel - Hit 1';
special_values_table['sound']['glass1'] = 'Barrel - Hit 2';
special_values_table['sound']['g_death1'] = 'Cyber Grub - Death 1';
special_values_table['sound']['g_death2'] = 'Cyber Grub - Death 2';
special_values_table['sound']['g_death3'] = 'Cyber Grub - Death 3';
special_values_table['sound']['g_pain1'] = 'Cyber Grub - Hurt 1';
special_values_table['sound']['g_pain2'] = 'Cyber Grub - Hurt 2';
special_values_table['sound']['g_pain3'] = 'Cyber Grub - Hurt 3';
special_values_table['sound']['g_welcome1'] = 'Cyber Grub - Alert';
special_values_table['sound']['fp_welcome1'] = 'Phoenix Falkok - Alert';
special_values_table['sound']['fp_pain4'] = 'Phoenix Falkok - Hurt 4';
special_values_table['sound']['fp_pain3'] = 'Phoenix Falkok - Hurt 3';
special_values_table['sound']['fp_pain2'] = 'Phoenix Falkok - Hurt 2';
special_values_table['sound']['fp_death3'] = 'Phoenix Falkok - Death 3';
special_values_table['sound']['fp_death2'] = 'Phoenix Falkok - Death 2';
special_values_table['sound']['fp_death1'] = 'Phoenix Falkok - Death 1';
special_values_table['sound']['fail_shot'] = 'Impact shot';
special_values_table['sound']['f_welcome1'] = 'Falkok - Alert';
special_values_table['sound']['f_pain4'] = 'Falkok - Hurt 4';
special_values_table['sound']['f_pain3'] = 'Falkok - Hurt 3';
special_values_table['sound']['f_pain2'] = 'Falkok - Hurt 2';
special_values_table['sound']['f_death3'] = 'Falkok - Death 3';
special_values_table['sound']['f_death2'] = 'Falkok - Death 2';
special_values_table['sound']['f_death1'] = 'Falkok - Death 1';
special_values_table['sound']['explode2'] = 'Explosion 2';
special_values_table['sound']['explode1'] = 'Explosion 1';
special_values_table['sound']['explode_underwater'] = 'Explosion underwater';
special_values_table['sound']['enemy_hurt1'] = 'Usurpation Soldier - Hurt';
special_values_table['sound']['enemy_hurt_3'] = 'Usurpation Soldier - Hurt 3';
special_values_table['sound']['enemy_hurt_2'] = 'Usurpation Soldier - Hurt 2';
special_values_table['sound']['enemy_hurt_1'] = 'Usurpation Soldier - Hurt 1';
special_values_table['sound']['enemy_die1'] = 'Usurpation Soldier - Death';
special_values_table['sound']['enemy_die_4'] = 'Usurpation Soldier - Death 4';
special_values_table['sound']['enemy_die_3'] = 'Usurpation Soldier - Death 3';
special_values_table['sound']['enemy_die_2'] = 'Usurpation Soldier - Death 2';
special_values_table['sound']['enemy_die_1'] = 'Usurpation Soldier - Death 1';
special_values_table['sound']['enemy_alert'] = 'Usurpation Soldier - Alert';
special_values_table['sound']['drone_hurt'] = 'Drone - Hurt';
special_values_table['sound']['drone_die'] = 'Drone - Death';
special_values_table['sound']['corvett_die'] = 'Corvette - Death';
special_values_table['sound']['coolbuddy2'] = 'Coolbuddy logo';
special_values_table['sound']['chat'] = 'Chat message';
special_values_table['sound']['capsule_hit2'] = 'Life-Capsule - Hit 2';
special_values_table['sound']['capsule_hit1'] = 'Life-Capsule - Hit 1';
special_values_table['sound']['box_ver3'] = 'Crate - Hard';
special_values_table['sound']['box_ver2'] = 'Crate - Medium';
special_values_table['sound']['box_ver1'] = 'Crate - Low';
special_values_table['sound']['box_hor'] = 'Crate - Friction';
special_values_table['sound']['box_die'] = 'Crate - Destruction';
special_values_table['sound']['body3'] = 'Body - Hard';
special_values_table['sound']['body2'] = 'Body - Medium';
special_values_table['sound']['body1'] = 'Body - Low';
special_values_table['sound']['body0'] = 'Body - Friction';
special_values_table['sound']['body_fall'] = 'Body - Fall';
special_values_table['sound']['blood_leg_arm'] = 'Body - Limb broke';
special_values_table['sound']['blood_hit_sword'] = 'Body - Hit sword';
special_values_table['sound']['blood_hit'] = 'Body - Hit';
special_values_table['sound']['blood_head2'] = 'Body - Head broke 2';
special_values_table['sound']['blood_head'] = 'Body - Head broke 1';
special_values_table['sound']['blood_body2'] = 'Body - Spine broke 2';
special_values_table['sound']['blood_body'] = 'Body - Spine broke 1';
special_values_table['sound']['sou_blade_swing3'] = 'Swords swing 3';
special_values_table['sound']['sou_blade_swing2'] = 'Swords swing 2';
special_values_table['sound']['sou_blade_swing1'] = 'Swords swing 1';
special_values_table['sound']['explode_bfg'] = 'CS-BNG - Explosion';
special_values_table['sound']['barrel2'] = 'Barrel - Explosion 2';
special_values_table['sound']['barrel'] = 'Barrel - Explosion 1';
special_values_table['sound']['badge_earned'] = 'Achievement';
special_values_table['sound']['android_welcome3'] = 'Android - Alert 3';
special_values_table['sound']['android_welcome2'] = 'Android - Alert 2';
special_values_table['sound']['android_welcome1'] = 'Android - Alert 1';
special_values_table['sound']['android_welcome'] = 'Android - Alert';
special_values_table['sound']['android_hurt'] = 'Android - Hurt';
special_values_table['sound']['android_enemy_down1'] = 'Android - Celebrate';
special_values_table['sound']['android_die_1'] = 'Android - Death 1';
special_values_table['sound']['android_die'] = 'Android - Death';
special_values_table['sound']['silenced'] = 'Silencer shot';
special_values_table['sound']['charged_explosion'] = 'Charged shot';
special_values_table['sound']['hero_death1'] = 'Marine - Death 1';
special_values_table['sound']['hero_death2'] = 'Marine - Death 2';
special_values_table['sound']['hero_pain1'] = 'Marine - Hurt 1';
special_values_table['sound']['hero_pain2'] = 'Marine - Hurt 2';
special_values_table['sound']['hero_pain3'] = 'Marine - Hurt 3';
special_values_table['sound']['hero_pain4'] = 'Marine - Hurt 4';
special_values_table['sound']['hero_welcome1'] = 'Marine - Alert 1';
special_values_table['sound']['hero_welcome2'] = 'Marine - Alert 2';
special_values_table['sound']['hero_welcome3'] = 'Marine - Alert 3';
special_values_table['sound']['marine_death1'] = 'Civil Security - Death 1';
special_values_table['sound']['marine_death2'] = 'Civil Security - Death 2';
special_values_table['sound']['marine_death3'] = 'Civil Security - Death 3';
special_values_table['sound']['marine_dying'] = 'Civil Security - Dying';
special_values_table['sound']['marine_hurt1'] = 'Civil Security - Hurt 1';
special_values_table['sound']['marine_hurt2'] = 'Civil Security - Hurt 2';
special_values_table['sound']['marine_hurt3'] = 'Civil Security - Hurt 3';
special_values_table['sound']['marine_alert'] = 'Civil Security - Alert 1';
special_values_table['sound']['marine_alert2'] = 'Civil Security - Alert 2';
special_values_table['sound']['marine_alert3'] = 'Civil Security - Alert 3';
special_values_table['sound']['marine_alert4'] = 'Civil Security - Alert 4';
special_values_table['sound']['s_gun_rayrifle'] = 'Ray Rifle TCoRR';
special_values_table['sound']['wea_lmg'] = 'LMG';
special_values_table['sound']['wea_ditzy_cs_ik2'] = 'Real rifle alt';
special_values_table['sound']['wea_android_shotgun'] = 'Android shotgun';
special_values_table['sound']['wea_android_sniper'] = 'Android sniper';
special_values_table['sound']['sd_death'] = 'Star Defender - Death';
special_values_table['sound']['sd_welcome2'] = 'Star Defender - Alert';
special_values_table['sound']['sd_hurt2'] = 'Star Defender - Hurt 2';
special_values_table['sound']['sd_hurt1'] = 'Star Defender - Hurt 1';
special_values_table['sound']['hit_frag'] = 'Hit report - frag';
special_values_table['sound']['hit_dmg3'] = 'Hit report - high';
special_values_table['sound']['hit_dmg2'] = 'Hit report - medium';
special_values_table['sound']['hit_dmg'] = 'Hit report - low';
special_values_table['sound']['wea_plasma_smg'] = 'Plasma shotgun';
special_values_table['sound']['wea_android_railgun'] = 'Android railgun';
special_values_table['sound']['wea_bison'] = 'Bison rifle';
special_values_table['sound']['wea_rifle_nade'] = 'C9 impact nade';
special_values_table['sound']['grenade_wet'] = 'Acid grenade bounce';
special_values_table['sound']['wea_acid_gl3'] = 'Acid grenade launcher';
special_values_table['sound']['wea_revolver5'] = 'Revolver';
special_values_table['sound']['wea_alien_rail_sg'] = 'Alien rail shotgun';
special_values_table['sound']['wea_darkstar_rl3'] = 'Smaller rocket';
special_values_table['sound']['wea_auto_sg2'] = 'Fast shotgun';
special_values_table['sound']['wea_rail_toxic2'] = 'Toxic railgun';
special_values_table['sound']['wea_ditzy_energy_rifle'] = 'Energy Rifle';
special_values_table['sound']['wea_roxxar_rifle'] = 'Falkonian Shotgun';
special_values_table['sound']['beam5_recharge'] = 'Reakhohsha Focus Beam recharge (old)';
special_values_table['sound']['beam5_rechargeB'] = 'Reakhohsha Focus Beam recharge (new)';
special_values_table['sound']['beam5'] = 'Reakhohsha Focus Beam';
special_values_table['sound']['beam1_recharge'] = 'Alien Laser/Heater Rifle recharge (old)';
special_values_table['sound']['beam1_rechargeB'] = 'Alien Laser/Heater Rifle recharge (new)';
special_values_table['sound']['beam1'] = 'Alien Laser/Heater Rifle';
special_values_table['sound']['wea_phanx'] = 'PHANX-92 Falconet';
special_values_table['sound']['wea_moonhawk_smg2'] = 'Crossfire CR-42 Ghost';
special_values_table['sound']['crossfire_sentinel_hurt3'] = 'Crossfire Sentinel - Hurt 3';
special_values_table['sound']['crossfire_sentinel_hurt2'] = 'Crossfire Sentinel - Hurt 2';
special_values_table['sound']['crossfire_sentinel_hurt1'] = 'Crossfire Sentinel - Hurt 1';
special_values_table['sound']['crossfire_sentinel_celebrate1'] = 'Crossfire Sentinel - Celebrate 1';
special_values_table['sound']['crossfire_sentinel_celebrate2'] = 'Crossfire Sentinel - Celebrate 2';
special_values_table['sound']['crossfire_sentinel_death2'] = 'Crossfire Sentinel - Death 2';
special_values_table['sound']['crossfire_sentinel_death1'] = 'Crossfire Sentinel - Death 1';
special_values_table['sound']['crossfire_sentinel_dying'] = 'Crossfire Sentinel - Dying';
special_values_table['sound']['crossfire_sentinel_welcome3'] = 'Crossfire Sentinel - Alert 3';
special_values_table['sound']['crossfire_sentinel_welcome2'] = 'Crossfire Sentinel - Alert 2';
special_values_table['sound']['crossfire_sentinel_welcome1'] = 'Crossfire Sentinel - Alert 1';
special_values_table['sound']['crossfire_sentinel_death3'] = 'Crossfire Sentinel - Death';
special_values_table['sound']['vulture_death2'] = 'Vulture - Death 2';
special_values_table['sound']['vulture_death1'] = 'Vulture - Death 1';
special_values_table['sound']['vulture_dying'] = 'Vulture - Dying';
special_values_table['sound']['vulture_hurt4'] = 'Vulture - Hurt 4';
special_values_table['sound']['vulture_hurt3'] = 'Vulture - Hurt 3';
special_values_table['sound']['vulture_hurt2'] = 'Vulture - Hurt 2';
special_values_table['sound']['vulture_hurt1'] = 'Vulture - Hurt 1';
special_values_table['sound']['vulture_celebrate3'] = 'Vulture - Celebrate 3';
special_values_table['sound']['vulture_celebrate2'] = 'Vulture - Celebrate 2';
special_values_table['sound']['vulture_celebrate1'] = 'Vulture - Celebrate 1';
special_values_table['sound']['vulture_welcome3'] = 'Vulture - Alert 3';
special_values_table['sound']['vulture_welcome2'] = 'Vulture - Alert 2';
special_values_table['sound']['vulture_welcome1'] = 'Vulture - Alert 1';
special_values_table['sound']['civilian_male_hurt4'] = 'Civilian - Hurt 4';
special_values_table['sound']['civilian_male_hurt3'] = 'Civilian - Hurt 3';
special_values_table['sound']['civilian_male_hurt2'] = 'Civilian - Hurt 2';
special_values_table['sound']['civilian_male_hurt1'] = 'Civilian - Hurt 1';
special_values_table['sound']['civilian_male_dying2'] = 'Civilian - Dying 2';
special_values_table['sound']['civilian_male_dying1'] = 'Civilian - Dying 1';
special_values_table['sound']['civilian_male_welcome3'] = 'Civilian - Alert 3';
special_values_table['sound']['civilian_male_welcome2'] = 'Civilian - Alert 2';
special_values_table['sound']['civilian_male_welcome1'] = 'Civilian - Alert 1';
special_values_table['sound']['civilian_male_celebrate2'] = 'Civilian - Celebrate 2';
special_values_table['sound']['civilian_male_celebrate1'] = 'Civilian - Celebrate 1';
special_values_table['sound']['civilian_male_death2'] = 'Civilian - Death 2';
special_values_table['sound']['civilian_male_death1'] = 'Civilian - Death 1';
special_values_table['sound']['reakhohsha_welcome1'] = 'Reakhohsha Operative - Alert 1';
special_values_table['sound']['reakhohsha_welcome2'] = 'Reakhohsha Operative - Alert 2';
special_values_table['sound']['reakhohsha_death3'] = 'Reakhohsha Operative - Death';
special_values_table['sound']['reakhohsha_hurt3'] = 'Reakhohsha Operative - Hurt 3';
special_values_table['sound']['reakhohsha_hurt2'] = 'Reakhohsha Operative - Hurt 2';
special_values_table['sound']['reakhohsha_hurt1'] = 'Reakhohsha Operative - Hurt 1';
special_values_table['sound']['android_miner_hurt'] = 'Mining Android - Hurt';
special_values_table['sound']['android_miner_welcome2'] = 'Mining Android - Alert';
special_values_table['sound']['android_miner_enemy_down'] = 'Mining Android - Celebrate';
special_values_table['sound']['android_miner_die'] = 'Mining Android - Death';
addTrigger(42, "Interface &#8250; Show text 'A' in chat with color 'B'", 'string', 'textmsg');
AddOpcodeAlias('ShowText');
special_values_table['textmsg'] = new Array();
special_values_table['textmsg'][0] = 'EXOS';
special_values_table['textmsg'][1] = 'Main Hero (Player\'s nickname is displayed)';
special_values_table['textmsg'][2] = 'Noir Lime';
special_values_table['textmsg'][3] = 'Proxy';
special_values_table['textmsg'][4] = 'Civil Security';
special_values_table['textmsg']['[color]'] = 'Custom color # (hex color code)';
addTrigger(43, "Interface &#8250; Show hint with text 'A'. Leave 'A' as empty to force hint dissapear", 'string', 'nochange');
AddOpcodeAlias('SetHint');
addTrigger(44, "Timer &#8250; Reset current phase of between-call waiting of Timer 'A'", 'timer', 'nochange');
AddOpcodeAlias('ResetTimerPhase');
addTrigger(45, "Gameplay &#8250; Allow or disallow usage of defibrillators by allies with value of parameter 'A'", 'enable-disable', 'nochange');
AddOpcodeAlias('SetAIHeal');
addTrigger(46, "Timer &#8250; Set remain calls number of Timer 'A' to value 'B'", 'timer', 'maxcalls');
AddOpcodeAlias('SetTimerCalls');
addTrigger(48, "Character &#8250; Multiply maximal and current hit points of Character 'A' by 'B' percents. Not for multiplayer", 'character', 'value');
AddOpcodeAlias('MultCharCurrentMaxHPPercent');
addTrigger(49, "Gameplay &#8250; Set Disabling of psi swords to value of parameter 'A'", 'enable-disable', 'nochange');
AddOpcodeAlias('SetSwords');
addTrigger(50, "Scenario &#8250; Mission complete and switch to level with ID 'A'", 'string', 'nochange');
AddOpcodeAlias('NextMap');
addTrigger(51, "Gameplay &#8250; Zoom game camera to 'A' % (percents)", 'value>0', 'nochange');
AddOpcodeAlias('Zoom');
addTrigger(52, "Character &#8250; Change Character 'A' nickname to 'B'", 'character', 'string');
AddOpcodeAlias('SetCharNickname');
addTrigger(53, "Character &#8250; Clone Character 'A' and spawn it in random place in Region 'B'", 'character', 'region');
AddOpcodeAlias('CloneCharToRegionRandomY');
addTrigger(54, "Light &#8250; Turn light 'A' on", 'lamp', 'nochange');
AddOpcodeAlias('LightOn');
addTrigger(55, "Light &#8250; Turn light 'A' off", 'lamp', 'nochange');
AddOpcodeAlias('LightOff');
addTrigger(56, "Region &#8250; Flip X speed for all players in region 'B'", 'nochange', 'region');
AddOpcodeAlias('FlipXVelocityRegion');
addTrigger(57, "Region &#8250; Flip Y speed for all players in region 'B'", 'nochange', 'region');
AddOpcodeAlias('FlipYVelocityRegion');
addTrigger(58, "Character &#8250; Change Character 'A' skin to 'B'", 'character', 'char');
AddOpcodeAlias('SetCharSkin');
addTrigger(59, "Character &#8250; Set Character 'A' current and max hit points to value 'B'", 'character', 'value');
AddOpcodeAlias('SetCharCurrentMaxHPValue');
addTrigger(60, "Character &#8250; Force Character 'A' to drop all weapons", 'character', 'nochange');
AddOpcodeAlias('MakeCharDropGuns');
addTrigger(61, "Character &#8250; Multiply Character 'A' speed by value 'B'", 'character', 'value');
AddOpcodeAlias('MultCharSpeed');
addTrigger(62, "Gun &#8250; Force Gun 'A' spawn 'B' projectiles per shot", 'gun', 'value');
AddOpcodeAlias('SetGunProjectileCount');
addTrigger(63, "Gun &#8250; Change Gun 'A' accuracy to 'B' degress", 'gun', 'value');
AddOpcodeAlias('SetGunAccuracy');
addTrigger(64, "Gun &#8250; Change Gun 'A' projectile power to 'B'", 'gun', 'value');
AddOpcodeAlias('SetGunPower');
addTrigger(65, "Gun &#8250; Convert Gun 'A' projectiles into bullets", 'gun', 'nochange');
AddOpcodeAlias('TurnGunProjectileBullets');
addTrigger(66, "Gun &#8250; Convert Gun 'A' projectiles into rails", 'gun', 'nochange');
AddOpcodeAlias('TurnGunProjectileRails');
addTrigger(67, "Gun &#8250; Convert Gun 'A' projectiles into grenades", 'gun', 'nochange');
AddOpcodeAlias('TurnGunProjectileGrenades');
addTrigger(68, "Gun &#8250; Convert Gun 'A' projectiles into energy", 'gun', 'nochange');
AddOpcodeAlias('TurnGunProjectileEnergy');
addTrigger(69, "Gun &#8250; Convert Gun 'A' projectiles into rockets", 'gun', 'nochange');
AddOpcodeAlias('TurnGunProjectileRockets');
addTrigger(70, "Region &#8250; Teleport player-initiator from Region 'A' to Region 'B'", 'region', 'region');
AddOpcodeAlias('TeleportInitiatorFromTo');
addTrigger(71, "Movable &#8250; Change color of Movable 'A' to HEX color 'B'", 'door', 'string');
AddOpcodeAlias('SetMovableColor');
addTrigger(72, "Region &#8250; Multiply speed of players in Region 'A' by value 'B'", 'region', 'value');
AddOpcodeAlias('MultCharsSpeedsAtRegion');
addTrigger(73, "Gameplay &#8250; Change bullet speed to value 'A' (default value is 60)", 'value', 'nochange');
AddOpcodeAlias('SetBulletSpeed');
addTrigger(74, "Gameplay &#8250; Change bullet penetration factor to value 'A' (default value is 1)", 'value', 'nochange');
AddOpcodeAlias('SetBulletPenetration');
addTrigger(75, "Gameplay &#8250; Change max bullet life value 'A' (default value is 30)", 'value', 'nochange');
AddOpcodeAlias('SetBulletMaxLife');
addTrigger(76, "Gun &#8250; Allow Gun 'A' only for characters", 'gun', 'nochange');
AddOpcodeAlias('SetGunForChars');
addTrigger(77, "Gun &#8250; Allow Gun 'A' only for vehicles", 'gun', 'nochange');
AddOpcodeAlias('SetGunForVehicles');
addTrigger(78, "Gun &#8250; Set Gun 'A' slot to 'B'", 'gun', 'int');
AddOpcodeAlias('SetGunSlot');
addTrigger(79, "Region &#8250; Move Region 'A' to player-initiator", 'region', 'nochange');
AddOpcodeAlias('MoveRegionToCharInitiator');
addTrigger(80, "Region &#8250; Move Region 'A' to player 'B'", 'region', 'character');
AddOpcodeAlias('MoveRegionToChar');
addTrigger(81, "Gun &#8250; Call Trigger 'B' when Gun 'A' fired", 'gun', 'trigger');
AddOpcodeAlias('MakeGunExecTriggerOnFire');
addTrigger(82, "Movable &#8250; Call Trigger 'B' when Movable 'A' got damage", 'door', 'trigger');
AddOpcodeAlias('MakeMovableExecTriggerOnDamage');
addTrigger(83, "Region &#8250; Move Region 'A' relative to current position along X", 'region', 'value');
AddOpcodeAlias('AddRegionPosX');
addTrigger(84, "Region &#8250; Move Region 'B' relative to current position along Y", 'region', 'value');
AddOpcodeAlias('AddRegionPosY');
addTrigger(85, "Movable &#8250; Mute Movable 'A'", 'door', 'nochange');
AddOpcodeAlias('MuteMovable');
addTrigger(86, "Movable &#8250; Unmute Movable 'A'", 'door', 'nochange');
AddOpcodeAlias('UnmuteMovable');
addTrigger(87, "Region &#8250; Move Region 'A' to player-initiator's cursor", 'region', 'nochange');
AddOpcodeAlias('MoveRegionToInitiatorCursor');
addTrigger(88, "Character &#8250; Change Character 'A' mobility factor to 'B'", 'character', 'value');
AddOpcodeAlias('SetCharMobility');
addTrigger(89, "Character &#8250; Change Character 'A' armor type to 'B' (0, 1 or 2)", 'character', 'int');
AddOpcodeAlias('SetCharArmor');
addTrigger(90, "Character &#8250; Change blood color of Character 'A' to HEX color 'B'", 'character', 'string');
AddOpcodeAlias('SetCharBloodColor');
addTrigger(91, "Character &#8250; Set horizontal movement on idle Character 'A' to value 'B' (0, -1 or 1)", 'character', 'int');
addTrigger(92, "Character &#8250; Set vertical movement on idle Character 'A' to value 'B' (0, -1 or 1)", 'character', 'int');
addTrigger(93, "Character &#8250; Set shoot action on idle Character 'A' to value 'B' (0 or 1)", 'character', 'int');
addTrigger(94, "Character &#8250; Force Character 'A' to look at random point in Region 'B'", 'character', 'region');
addTrigger(95, "Trigger execution &#8250; Continue execution of this trigger only if tracing from center of Region 'A' to center of Region 'B' is possible", 'region', 'region');
addTrigger(96, "Trigger execution &#8250; Continue execution of this trigger only if tracing from center of Region 'A' to center of Region 'B' is impossible", 'region', 'region');
addTrigger(97, "Character &#8250; Force Character 'A' to hunt Character 'B'", 'character', 'character');
addTrigger(98, "Region &#8250; Move Region 'A' to Movable 'B'", 'region', 'door');
addTrigger(99, "Trigger execution &#8250; Execute trigger 'A'", 'trigger', 'nochange');
AddOpcodeAlias('ExecTrigger');
addTrigger(100, "Var &#8250; Set variable 'A' value to value 'B'", 'string', 'string');
AddOpcodeAlias('VarSetValue');
addTrigger(101, "Var &#8250; Set variable 'A' value to value 'B' if 'A' is not defined", 'string', 'string');
AddOpcodeAlias('VarSetValueIfUndefined');
addTrigger(102, "Var &#8250; Add value 'B' to value of variable 'A'", 'string', 'string');
AddOpcodeAlias('VarAddValue');
addTrigger(103, "Var &#8250; Multiply value of variable 'A' by value 'B'", 'string', 'string');
AddOpcodeAlias('VarMultValue');
addTrigger(104, "Var &#8250; Add value of variable 'B' to value of variable 'A'", 'string', 'string');
AddOpcodeAlias('VarAddVar');
addTrigger(105, "Var &#8250; Multiply value of variable 'A' by value of variable 'B'", 'string', 'string');
AddOpcodeAlias('VarMultVar');
addTrigger(106, "Var &#8250; Set value of variable 'A' to random number with floating point in range 0..B", 'string', 'string');
AddOpcodeAlias('VarRand1');
addTrigger(107, "Var &#8250; Set value of variable 'A' to random integer number in range 0..B-1", 'string', 'string');
AddOpcodeAlias('VarRandRange');
addTrigger(108, "Var &#8250; Round value of variable 'A'", 'string', 'nochange');
AddOpcodeAlias('VarRound');
addTrigger(109, "Var &#8250; Floor value of variable 'A'", 'string', 'nochange');
AddOpcodeAlias('VarFloor');
addTrigger(110, "Var &#8250; Continue trigger actions execution only if variable 'A' is greater than variable 'B'", 'string', 'string');
AddOpcodeAlias('continue if VarA > VarB ');
addTrigger(111, "Var &#8250; Continue trigger actions execution only if variable 'A' is less than variable 'B'", 'string', 'string');
AddOpcodeAlias('continue if VarA < VarB ');
addTrigger(112, "Var &#8250; Continue trigger actions execution only if variable 'A' equals variable 'B'", 'string', 'string');
AddOpcodeAlias('continue if VarA == VarB ');
addTrigger(113, "Var &#8250; Continue trigger actions execution only if variable 'A' does not equals to variable 'B'", 'string', 'string');
AddOpcodeAlias('continue if VarA != VarB ');
addTrigger(114, "Var &#8250; Continue trigger actions execution only if variable 'A' has greater value than value 'B'", 'string', 'string');
AddOpcodeAlias('continue if VarA > ValueB ');
addTrigger(115, "Var &#8250; Continue trigger actions execution only if value of variable 'A' is less than value 'B'", 'string', 'string');
AddOpcodeAlias('continue if VarA < ValueB ');
addTrigger(116, "Var &#8250; Continue trigger actions execution only if value of variable 'A' equals value 'B'", 'string', 'string');
AddOpcodeAlias('continue if VarA == ValueB ');
addTrigger(117, "Var &#8250; Continue trigger actions execution only if value of variable 'A' does not equals to value 'B'", 'string', 'string');
AddOpcodeAlias('continue if VarA != ValueB ');
addTrigger(118, "Var &#8250; Set value of variable 'A' to value of region 'B' X position of left-top corner point", 'string', 'region');
AddOpcodeAlias('VarSetRegionX');
addTrigger(119, "Var &#8250; Set value of variable 'A' to value of region 'B' Y position of left-top corner point", 'string', 'region');
AddOpcodeAlias('VarSetRegionY');
addTrigger(120, "Var &#8250; Set X position of 'A' region left-top corner point to value of variable 'B'", 'region', 'string');
AddOpcodeAlias('RegionXSetVar');
addTrigger(121, "Var &#8250; Set Y position of 'A' region left-top corner point to value of variable 'B'", 'region', 'string');
AddOpcodeAlias('RegionYSetVar');
addTrigger(122, "Var &#8250; Set value of variable 'A' to hitpoints value of player 'B'", 'string', 'character');
AddOpcodeAlias('VarSetCharHP');
addTrigger(123, "Var &#8250; Skip next trigger action if value of variable 'A' does not equals value 'B'", 'string', 'string');
AddOpcodeAlias('next if VarA == ValueB');
addTrigger(124, "Var &#8250; Set variable 'A' value to remainder after division by value 'B' (only positive numbers)", 'string', 'string');
AddOpcodeAlias('VarSetModuloDivValue');
addTrigger(125, "Var &#8250; Set variable 'A' value to value of variable 'B'", 'string', 'string');
AddOpcodeAlias('VarSetVar');
addTrigger(126, "Var &#8250; Make an explosion with power of value of variable 'A' at Region 'B'", 'string', 'region');
AddOpcodeAlias('ExplosionVarRegion');
addTrigger(127, "Var &#8250; Set variable 'A' value to remainder after division by value of variable 'B' (only positive numbers)", 'string', 'string');
AddOpcodeAlias('VarSetModuloDivVar');
addTrigger(128, "Var &#8250; Force Gun 'A' spawn value of variable 'B' projectiles per shot", 'gun', 'string');
addTrigger(129, "Var &#8250; Change Gun 'A' accuracy to value of variable 'B' degress", 'gun', 'string');
addTrigger(130, "Var &#8250; Change Gun 'A' projectile power to value of variable 'B'", 'gun', 'string');
addTrigger(131, "Var &#8250; Divide variable 'A' by value 'B'", 'string', 'string');
AddOpcodeAlias('VarDivValue');
addTrigger(132, "Var &#8250; Divide variable 'A' by value of variable 'B'", 'string', 'string');
AddOpcodeAlias('VarDivVar');
addTrigger(133, "Var &#8250; Set value of variable 'A' to result of power function with value of variable 'A' and power of value of variable 'B'", 'string', 'string');
AddOpcodeAlias('VarPowVar');
addTrigger(134, "Var &#8250; Set value of variable 'A' to result of power function with value of variable 'A' and power of value 'B'", 'string', 'string');
AddOpcodeAlias('VarPowValue');
addTrigger(135, "Var &#8250; Set value of variable 'A' to result of sin function with value of variable 'B' (in radians) as parameter", 'string', 'string');
AddOpcodeAlias('VarSinVar');
addTrigger(136, "Var &#8250; Set value of variable 'A' to result of cos function with value of variable 'B' (in radians) as parameter", 'string', 'string');
AddOpcodeAlias('VarCosVar');
addTrigger(137, "Var &#8250; Set value of variable 'A' to slot of current player", 'string', 'string');
AddOpcodeAlias('SetACurrentPlayerSlot');
addTrigger(138, "Var &#8250; Set value of variable 'A' to 1 if game is in multiplyer mode and to 0 in else case", 'string', 'string');
AddOpcodeAlias('SetIsMP');
addTrigger(139, "Var &#8250; Set value of variable 'A' to 1 if my player is spectating this match as spectator and to 0 in else case", 'string', 'string');
AddOpcodeAlias('SetIsSpectator');
addTrigger(140, "Var &#8250; Set value of variable 'A' to 1 if LOW PHYSICS setting is enabled and to 0 in else case", 'string', 'string');
AddOpcodeAlias('SetIsLowPhys');
addTrigger(141, "Character &#8250; Damage player 'A' head hitpoints by value 'B'", 'character', 'value');
AddOpcodeAlias('DamageHead');
addTrigger(142, "Character &#8250; Damage player 'A' arms hitpoints by value 'B'", 'character', 'value');
AddOpcodeAlias('DamageArms');
addTrigger(143, "Character &#8250; Damage player 'A' body hitpoints by value 'B'", 'character', 'value');
AddOpcodeAlias('DamageBody');
addTrigger(144, "Character &#8250; Damage player 'A' legs hitpoints by value 'B'", 'character', 'value');
AddOpcodeAlias('DamageLegs');
addTrigger(145, "Var &#8250; Set value of variable 'A' to number of alive players in region 'B'", 'string', 'region');
AddOpcodeAlias('SetCountAliveInRegion');
addTrigger(146, "Var &#8250; Set string-value of variable 'A' to login name of player-initiator", 'string', 'nochange');
AddOpcodeAlias('SetLoginOfInitiator');
addTrigger(147, "Var &#8250; Set string-value of variable 'A' to displayed name of player-initiator", 'string', 'nochange');
AddOpcodeAlias('SetNicknameOfInitiator');
addTrigger(148, "Var &#8250; Set string-value of variable 'A' to multiplayer match name", 'string', 'nochange');
AddOpcodeAlias('SetMPMode');
addTrigger(149, "Var &#8250; Set value of variable 'A' to 1 if string-value of variable 'A' contains string-value 'B' and to 0 in else case", 'string', 'string');
AddOpcodeAlias('SetIsAContainsValueB');
addTrigger(150, "Var &#8250; Set value of variable 'A' to 1 if string-value of variable 'A' contains string-value of variable 'B' and to 0 in else case", 'string', 'string');
AddOpcodeAlias('SetIsAContainsVarB');
addTrigger(151, "Var &#8250; Set value of variable 'A' to length of string-value of variable 'B'", 'string', 'string');
AddOpcodeAlias('CountLength');
addTrigger(152, "Var &#8250; Add string-value of variable 'B' at the end of string-value of variable 'A'", 'string', 'string');
AddOpcodeAlias('AddString');
addTrigger(153, "Var &#8250; Set value of variable 'A' to 1-A", 'string', 'nochange');
AddOpcodeAlias('OneMinusA');
addTrigger(154, "Var &#8250; Set value of variable 'A' to -A", 'string', 'nochange');
AddOpcodeAlias('MinusA');
addTrigger(155, "Var &#8250; Set value of variable 'A' to current frame time", 'string', 'nochange');
AddOpcodeAlias('GetGSPEED');
addTrigger(156, "Trigger &#8250; Set trigger 'A' as player chat message receiver", 'trigger', 'nochange');
AddOpcodeAlias('SetChatInputCallback');
addTrigger(157, "Var &#8250; Set string-value of variable 'A' to login name of player who says text", 'string', 'nochange');
AddOpcodeAlias('GetTalkerLogin');
addTrigger(158, "Var &#8250; Set string-value of variable 'A' to displayed name of player who says text", 'string', 'nochange');
AddOpcodeAlias('GetTalkerNickname');
addTrigger(159, "Var &#8250; Set value of variable 'A' to slot index of player who says text", 'string', 'nochange');
AddOpcodeAlias('GetTalkerID');
addTrigger(160, "Var &#8250; Set string-value of variable 'A' to text being said", 'string', 'nochange');
AddOpcodeAlias('GetChatInput');
addTrigger(161, "Session vars &#8250; Clear all session variables", 'nochange', 'nochange');
addTrigger(162, "Session vars &#8250; Save value of regular variable 'B' to session variable 'A'", 'string', 'string');
addTrigger(163, "Session vars &#8250; Load value for regular variable 'B' from session variable 'A'", 'string', 'string');
addTrigger(164, "Character &#8250; Change head model of Character 'A' to model 'B'", 'character', 'char');
addTrigger(165, "Character &#8250; Change body model of Character 'A' to model 'B'", 'character', 'char');
addTrigger(166, "Character &#8250; Change arms model of Character 'A' to model 'B'", 'character', 'char');
addTrigger(167, "Character &#8250; Change legs model of Character 'A' to model 'B'", 'character', 'char');
addTrigger(168, "Character &#8250; Set Character 'A' color pattern (4 small letters for each body sections, each represents first symbol of color in lowercase. - disables color change for specific section)", 'character', 'string');
addTrigger(169, "URL &#8250; Request webpage with URL stored in variable 'A' and save response to variable 'B' once loaded (variable 'B' will be equal to ''loading...'' for some period of time)", 'string', 'string');
addTrigger(170, "Gun &#8250; Change Gun 'A' speed multiplier to value 'B'", 'gun', 'string');
addTrigger(171, "Var &#8250; Change Gun 'A' speed multiplier to value of variable 'B'", 'gun', 'string');
addTrigger(172, "Gun &#8250; Change Gun 'A' recoil multiplier to value 'B'", 'gun', 'string');
addTrigger(173, "Var &#8250; Change Gun 'A' recoil multiplier to value of variable 'B'", 'gun', 'string');
addTrigger(174, "AI &#8250; Set global AI difficulty (easy = 1, normal = 2, hard = 3)", 'string', 'nochange');
addTrigger(175, "Gun &#8250; Change Gun 'A' projectile model to model with index 'B'", 'gun', 'string');
addTrigger(176, "Var &#8250; Change Gun 'A' projectile model to model with index-value of variable 'B'", 'gun', 'string');
addTrigger(177, "Var &#8250; Set value of variable 'A' to id of type of current multiplayer mode (0 = singleplayer, 1 = DM, 2 = COOP, 3 = TDM)", 'string', 'nochange');
addTrigger(178, "Var &#8250; Save inventory info of Character 'B' to variable 'A'", 'string', 'character');
addTrigger(179, "Var &#8250; Spawn all weapons stored in variable 'A' at position of Character 'B'", 'string', 'character');
addTrigger(180, "Var &#8250; Set value of variable 'A' to player-initiator slot", 'string', 'nochange');
addTrigger(181, "Var &#8250; Set value of variable 'A' to player-killer slot", 'string', 'nochange');
addTrigger(182, "Var &#8250; Set value of variable 'A' to login name of player-killer", 'string', 'nochange');
addTrigger(183, "Var &#8250; Set value of variable 'A' to displayed name of player-killer", 'string', 'nochange');
addTrigger(184, "Var &#8250; Set value of variable 'A' to login name of player with slot 'B'", 'string', 'string');
addTrigger(185, "Var &#8250; Set value of variable 'A' to displayed name of player with slot 'B'", 'string', 'string');
addTrigger(186, "Var &#8250; Set value of variable 'A' to team ID of player with slot 'B'", 'string', 'string');
addTrigger(187, "Var &#8250; Set value of variable 'A' to login name of player with slot-value of variable 'B'", 'string', 'string');
addTrigger(188, "Var &#8250; Set value of variable 'A' to displayed name of player with slot-value of variable 'B'", 'string', 'string');
addTrigger(189, "Var &#8250; Set value of variable 'A' to team ID of player with slot-value of variable 'B'", 'string', 'string');
addTrigger(190, "Interface &#8250; Enable multiplayer frag/death messages", 'nochange', 'nochange');
addTrigger(191, "Interface &#8250; Disable multiplayer frag/death messages", 'nochange', 'nochange');
addTrigger(192, "Environment &#8250; Change sky image", 'sky_model', 'nochange');
addTrigger(193, "Environment &#8250; Change sky color HEX multiplier", 'string', 'nochange');
addTrigger(194, "Gameplay &#8250; Set respawn speed multiplier (defaults to 1, but 1.5 in ranked)", 'string', 'nochange');
addTrigger(195, "Environment &#8250; Change sky color Red multiplier to value of variable 'A'", 'string', 'nochange');
addTrigger(196, "Environment &#8250; Change sky color Green multiplier to value of variable 'A'", 'string', 'nochange');
addTrigger(197, "Environment &#8250; Change sky color Blue multiplier to value of variable 'A'", 'string', 'nochange');
addTrigger(198, "Text-to-speech &#8250; Create Voice object and save it as variable 'A'", 'string', 'nochange');
addTrigger(199, "Text-to-speech &#8250; Set volume 'B' for Voice object 'A'", 'string', 'string');
addTrigger(200, "Text-to-speech &#8250; Set pitch 'B' for Voice object 'A'", 'string', 'string');
addTrigger(201, "Text-to-speech &#8250; Set voice model 'B' for Voice object 'A'", 'string', 'string');
addTrigger(202, "Text-to-speech &#8250; Speak text 'B' with Voice object 'A'", 'string', 'string');
addTrigger(203, "Text-to-speech &#8250; Speak text-value of variable 'B' with Voice object 'A'", 'string', 'string');
addTrigger(204, "Var &#8250; Set value of variable 'A' to result of asin function with value of variable 'B' as parameter", 'string', 'string');
addTrigger(205, "Var &#8250; Set value of variable 'A' to result of acos function with value of variable 'B' as parameter", 'string', 'string');
addTrigger(206, "Var &#8250; Set value of variable 'A' to result of atan2 function with values of variables 'A' and 'B' as parameters", 'string', 'string');
addTrigger(207, "Gameplay &#8250; Enable anonymous mode (disable player overheads, chat messages are not show in chat)", 'nochange', 'nochange');
addTrigger(208, "Gameplay &#8250; Disable anonymous mode (enable player overheads, chat messages are show in chat)", 'nochange', 'nochange');
addTrigger(209, "Gameplay &#8250; Set regeneration speed multiplier to value 'A' (defaults to 1)", 'string', 'nochange');
addTrigger(210, "Gameplay &#8250; Set regeneration speed multiplier to value of variable 'A'", 'string', 'nochange');
addTrigger(211, "Gameplay &#8250; Set regeneration delay multiplier to value 'A' (defaults to 1, but 2 in ranked)", 'string', 'nochange');
addTrigger(212, "Gameplay &#8250; Set regeneration delay multiplier to value of variable 'A'", 'string', 'nochange');
addTrigger(213, "Gameplay &#8250; Set physical player impact damage multiplier to 'A' (default is 1)", 'string', 'nochange');
addTrigger(214, "Gameplay &#8250; Set physical player impact damage threshold to 'A' (higher values increase chance to receive any impact damage. Default for approved maps is 0.9, in else cases it is 1)", 'string', 'nochange');
addTrigger(215, "Gameplay &#8250; Set self-boost force multiplier (default is 1)", 'string', 'nochange');
addTrigger(216, "Gameplay &#8250; Set unstable self-boost force multiplier for HIGH physics setting (default for approved maps is 2.8, in else cases it is 1)", 'string', 'nochange');
addTrigger(217, "Gameplay &#8250; Set unstable self-boost force multiplier for LOW physics setting (default is 1)", 'string', 'nochange');
addTrigger(218, "Gun &#8250; Change Gun 'A' target knockback multiplier to value 'B'", 'gun', 'string');
addTrigger(219, "Gun &#8250; Change Gun 'A' target knockback multiplier to value of variable 'B'", 'gun', 'string');
addTrigger(220, "Character &#8250; Set Character 'A' scale to value 'B'", 'character', 'string');
addTrigger(221, "Character &#8250; Set Character 'A' scale to value of variable 'B'", 'character', 'string');
addTrigger(222, "Character &#8250; Set Character 'A' zoom to value 'B'", 'character', 'string');
addTrigger(223, "Var &#8250; Synchronize value of variable 'A' through overriding value for all connected players (requires Var Sync engine mark)", 'string', 'nochange');
addTrigger(224, "Var &#8250; Synchronize value of variable 'A' through keeping defined value (requires Var Sync engine mark)", 'string', 'nochange');
addTrigger(225, "Var &#8250; Synchronize value of variable 'A' through keeping maximum value (requires Var Sync engine mark)", 'string', 'nochange');
addTrigger(226, "Var &#8250; Synchronize value of variable 'A' through keeping minimum value (requires Var Sync engine mark)", 'string', 'nochange');
addTrigger(227, "Var &#8250; Synchronize value of variable 'A' through keeping longest String value (requires Var Sync engine mark)", 'string', 'nochange');
addTrigger(228, "Trigger &#8250; Call trigger 'A' each time new player joins the match", 'trigger', 'nochange');
addTrigger(229, "Sound &#8250; Play song", 'song+none', 'nochange');
addTrigger(230, "Trigger execution &#8250; Continue trigger actions execution only if value of session variable 'A' was set by map with ID 'B' (list of map IDs can be used, separated with commas without spaces)", 'string', 'string');
addTrigger(231, "Decoration &#8250; Set text placeholder decoration text", 'decor', 'string');
addTrigger(232, "Decoration &#8250; Set decoration HEX color multiplier", 'decor', 'string');
addTrigger(233, "Decoration &#8250; Set decoration scale to value 'B'", 'decor', 'string');
addTrigger(234, "Decoration &#8250; Set decoration scale to value of variable 'B'", 'decor', 'string');
addTrigger(235, "Var &#8250; Set variable 'A' value to of projectile power (this trigger should receive damage from Movable)", 'string', 'nochange');
addTrigger(236, "Var &#8250; Subtract projectile power from value of variable 'A' (this trigger should receive damage from Movable)", 'string', 'nochange');
addTrigger(237, "Gun &#8250; Change Gun 'A' max spread accuracy to value 'B' (in radians)", 'gun', 'string');
addTrigger(238, "Gun &#8250; Change Gun 'A' added spread accuracy to value 'B' (in radians) per shot", 'gun', 'string');
addTrigger(239, "Gun &#8250; Change Gun 'A' subtracted spread accuracy to value 'B' (in radians) over time", 'gun', 'string');
addTrigger(240, "Gameplay &#8250; Set rocket projetiles' speed multiplier to value 'A'", 'string', 'nochange');
addTrigger(241, "Gameplay &#8250; Set grenade projetiles' speed multiplier to value 'A'", 'string', 'nochange');
addTrigger(242, "Gameplay &#8250; Set plasma projetiles' speed multiplier to value 'A'", 'string', 'nochange');
addTrigger(243, "Map preview &#8250; Create Map Preview from Region 'A' (only owner can execute this. Prevent execution for other players in order to prevent lag)", 'region', 'string');
addTrigger(244, "Text-to-speech &#8250; Set rate 'B' for Voice object 'A'", 'string', 'string');
addTrigger(245, "Gameplay &#8250; Lock camera at region 'A' (region size must be 800x400 for zoom of 100%) with intensity multiplier 'B' (0..1)", 'region', 'string');
addTrigger(246, "Gameplay &#8250; Unlock camera from any region", 'nochange', 'nochange');
addTrigger(247, "Var &#8250; Save horizontal movement intention of character 'B' to variable 'A'", 'string', 'character');
addTrigger(248, "Var &#8250; Save vertical movement intention of character 'B' to variable 'A'", 'string', 'character');
addTrigger(249, "Var &#8250; Save shoot intention of character 'B' to variable 'A'", 'string', 'character');
addTrigger(250, "Gameplay &#8250; Enable kinetic module", 'nochange', 'nochange');
addTrigger(251, "Gameplay &#8250; Disable kinetic module", 'nochange', 'nochange');
addTrigger(252, "Var &#8250; Rotate decoration to angle-value of variable 'B' (in degrees)", 'decor', 'string');
addTrigger(253, "Var &#8250; Rotate decoration to angle-value 'B' (in degrees)", 'decor', 'string');
addTrigger(254, "Character &#8250; Attempt healing of player-initiator by 'A' hit points. Stop trigger execution if player-initiator has maximum hit points or died", 'string', 'nochange');
addTrigger(255, "Character &#8250; Heal player 'A' by 'B' hit points", 'character', 'string');
addTrigger(256, "Character &#8250; Heal player 'A' by value of variable 'B' ", 'character', 'string');
addTrigger(257, "Var &#8250; Rotate decoration to angle-value of variable 'B' (in radians)", 'decor', 'string');
addTrigger(258, "Var &#8250; Rotate decoration to angle-value 'B' (in radians)", 'decor', 'string');
addTrigger(259, "Region &#8250; Move region 'A' to cursor of player 'B'", 'region', 'character');
addTrigger(260, "Gun &#8250; Assign sound 'B' as firing sound for weapon 'A'", 'gun', 'sound');
addTrigger(261, "Gameplay &#8250; Allow Time Warp", 'nochange', 'nochange');
addTrigger(262, "Gameplay &#8250; Disallow Time Warp", 'nochange', 'nochange');
addTrigger(263, "Var &#8250; Save energy value to variable 'A' (gameplay)", 'string', 'nochange');
addTrigger(264, "Var &#8250; Load energy value from variable 'A' (gameplay)", 'string', 'nochange');
addTrigger(265, "Var &#8250; Set max energy value to value of variable 'A' (gameplay)", 'string', 'nochange');
addTrigger(266, "Var &#8250; Save current AI difficulty to variable 'A' (easy = 1, normal = 2, hard = 3)", 'string', 'nochange');
addTrigger(267, "Decoration &#8250; Set decoration X scale to value 'B'", 'decor', 'string');
addTrigger(268, "Decoration &#8250; Set decoration Y scale to value 'B'", 'decor', 'string');
addTrigger(270, "Character &#8250; Set intensity scale of entity pushing force for player 'A' (default 0)", 'character', 'string');
AddOpcodeAlias('SetPassivePushIntens');
addTrigger(271, "Character &#8250; Set radius of entity pushing force for player 'A' (default 200)", 'character', 'string');
AddOpcodeAlias('SetPassivePushRadius');
addTrigger(272, "Character &#8250; Set Character 'A' voice preset to 'B'", 'character', 'voice_preset');
AddOpcodeAlias('SetVoicePreset');
addTrigger(273, "Character &#8250; Add ghost effect to Character 'A'", 'character', 'nochange');
AddOpcodeAlias('StartGhost');
addTrigger(274, "Character &#8250; Remove ghost effect from Character 'A'", 'character', 'nochange');
AddOpcodeAlias('StopGhost');
addTrigger(275, "Trigger execution &#8250; Continue trigger actions execution only if loading of custom images has been finished", 'nochange', 'nochange');
addTrigger(276, "Trigger execution &#8250; Continue trigger actions execution only if all custom images have been successfully loaded (any error will prevent execution until map is restarted)", 'nochange', 'nochange');
addTrigger(277, "Var &#8250; Save current number of loaded custom images to variable 'A'", 'string', 'nochange');
addTrigger(278, "Var &#8250; Save number of expected custom images on current level to variable 'A'", 'string', 'nochange');
addTrigger(279, "Region &#8250; Silently teleport player-initiator from Region 'A' to Region 'B'", 'region', 'region');
AddOpcodeAlias('SilentlyTeleportInitiatorFromTo');
addTrigger(280, "Var &#8250; Set variable 'A' to 1 if compromised song should play (if non-dying enemy is hunting player or player is hunting non-dying enemy). Sets to value 0.5 in case if song should be played more quietly (if there are non-dying enemies within radius of 400px). In else case sets to 0", 'string', 'nochange');
addTrigger(281, "Character &#8250; Apply damage-over-time effect to player-initiator with power 'A' and duration 'B' (30 duration = 1 second)", 'string', 'string');
addTrigger(282, "Character &#8250; Remove all effects from player-initiator", 'nochange', 'nochange');
addTrigger(283, "Region &#8250; Spawn damage particles of Character 'A' at the center of Region 'B'", 'character', 'region');
addTrigger(284, "Sound &#8250; Play sound 'A' at Region 'B' (volume and stereo effect won't be updated once sound starts)", 'sound', 'region');
AddOpcodeAlias('PlaySoundAtRegion');
addTrigger(285, "Experience &#8250; Reward player with experience points for level completion (singleplayer)", 'nochange', 'nochange');
addTrigger(286, "Experience &#8250; Reward player-initiator with experience points for level completion (multiplayer)", 'nochange', 'nochange');
addTrigger(287, "Gun &#8250; Override existing Gun 'A' with a new gun with model 'B'", 'gun', 'gun_model');
addTrigger(288, "Trigger &#8250; Bind Trigger 'A' execution to key 'B' press event", 'trigger', 'string');
addTrigger(289, "Trigger &#8250; Bind Trigger 'A' execution to key 'B' release event", 'trigger', 'string');
addTrigger(290, "Var &#8250; Set Character 'A' color pattern to string-value of variable 'B' (4 small letters for each limb, each represents first symbol of color in lowercase)", 'character', 'string');
addTrigger(291, "Gameplay &#8250; Disable automatic disabling of offscreen entities (automatic disabling is enabled by default)", 'nochange', 'nochange');
addTrigger(292, "Gameplay &#8250; Enable automatic disabling of offscreen entities (automatic disabling is enabled by default)", 'nochange', 'nochange');
addTrigger(293, "Decoration &#8250; Mask Decoration 'A' with Decoration 'B' (Flash Player only)", 'decor', 'decor');
addTrigger(294, "Var &#8250; Set value of variable 'A' to value of variable with name of string-value of variable 'B'", 'string', 'string');
AddOpcodeAlias('VarSetValueOfVarNamed');
addTrigger(295, "Var &#8250; Set string-value of variable 'A' to string-value 'B' while replacing all variable names found in string-value with corresponding variable values", 'string', 'string');
AddOpcodeAlias('VarSetStringReplaceVarWithVarValues');
addTrigger(296, "Var &#8250; Override existing Gun 'A' with a new gun with model by string-value of variable 'B'", 'gun', 'string');
addTrigger(297, "Character &#8250; Set jump multiplier for player 'A' to value 'B'", 'character', 'string');
addTrigger(298, "Decoration &#8250; Set decoration 'A' visibility multiplier to value 'B' (0...1)", 'decor', 'string');
addTrigger(299, "Var &#8250; Set decoration 'A' visibility multiplier to value of variable 'B' (0...1)", 'decor', 'string');
addTrigger(300, "Decoration &#8250; Move, rotate and flip Decoration 'A' to position of Gun 'B'", 'decor', 'gun');
addTrigger(301, "Gun &#8250; Set Gun 'A' projectile scale to value 'B'", 'gun', 'string');
addTrigger(302, "Var &#8250; Set Gun 'A' projectile scale to value of variable 'B'", 'gun', 'string');
addTrigger(303, "Gun &#8250; Set Gun 'A' arm 1 hold offset to 'B' (0..1)", 'gun', 'string');
addTrigger(304, "Gun &#8250; Set Gun 'A' arm 2 hold offset to 'B' (0..1)", 'gun', 'string');
addTrigger(305, "Gun &#8250; Set Gun 'A' holstered attachment to 'B' (0 = on leg, 1 = on back)", 'gun', 'string');
addTrigger(306, "Gun &#8250; Set Gun 'A' length to value 'B'", 'gun', 'string');
addTrigger(307, "Gameplay &#8250; Restart map (singleplayer)", 'nochange', 'nochange');
addTrigger(308, "Gameplay &#8250; Reset game termination logic (for example if game is about to end due to player's death)", 'nochange', 'nochange');
addTrigger(309, "Gameplay &#8250; Make all players leave map or multiplayer match", 'nochange', 'nochange');
addTrigger(310, "Gameplay &#8250; Make player-initiator leave map or multiplayer match", 'nochange', 'nochange');
addTrigger(311, "Gameplay &#8250; Make player-killer leave map or multiplayer match", 'nochange', 'nochange');
addTrigger(312, "Character &#8250; Set Character 'A' active weapon slot to 'B'", 'character', 'string');
addTrigger(313, "Character &#8250; Make Character 'A' drop weapon at current slot", 'character', 'nochange');
addTrigger(314, "Var &#8250; Set variable 'A' to 1 if Character 'B' is dying (variable 'A' becomes 0 in else case)", 'string', 'character');
addTrigger(315, "Var &#8250; Set variable 'A' to 1 if Character-initiator is dying (variable 'A' becomes 0 in else case)", 'string', 'nochange');
addTrigger(316, "Var &#8250; Set variable 'A' to 1 if Character-killer is dying (variable 'A' becomes 0 in else case)", 'string', 'nochange');
addTrigger(317, "Character &#8250; Set player-initiator team to 'B'", 'nochange', 'team');
addTrigger(318, "Character &#8250; Make Character 'A' unhittable", 'character', 'nochange');
addTrigger(319, "Character &#8250; Make Character 'A' hittable", 'character', 'nochange');
addTrigger(320, "Character &#8250; Switch singleplayer control to Character 'A'. Set parameter 'B' to 1 if sound needs to be played", 'character', 'string');
addTrigger(321, "Character &#8250; Disallow weapon drop for Character 'A'", 'character', 'nochange');
addTrigger(322, "Character &#8250; Allow weapon drop for Character 'A'", 'character', 'nochange');
addTrigger(323, "Region &#8250; Move Region 'A' to Gun 'B'", 'region', 'gun');
addTrigger(324, "Gun &#8250; Call Trigger 'B' when Gun 'A' was fully reloaded while being held by some character", 'gun', 'trigger');
addTrigger(325, "Var &#8250; Replace variables with their values in string-value of variable 'B' and save result to variable 'A'", 'string', 'string');
addTrigger(326, "Var &#8250; Replace variables with their values in string-value 'B' and save result to variable 'A'", 'string', 'string');
addTrigger(327, "Var &#8250; Set variable 'A' value to random number with floating point in range 0..X, where X is value of variable 'B'", 'string', 'string');
addTrigger(328, "Var &#8250; Set variable 'A' value to random integer number in range 0..X-1, where X is value of variable 'B'", 'string', 'string');
addTrigger(329, "Var &#8250; Set interface visibility multiplier to value of variable 'A' and cursor visibility multiplier to value of variable 'B'", 'string', 'string');
addTrigger(330, "Interface &#8250; Set interface visibility multiplier to value 'A' and cursor visibility multiplier to value 'B'", 'string', 'string');
addTrigger(331, "Var &#8250; Set variable 'A' string-value to string-value of ''Gameplay modifications'' field from match starting screen", 'string', 'nochange');
addTrigger(332, "Var &#8250; Set variable 'A' to value 1 if Gun 'B' is not in owner's active slot, set to value 0 in else case", 'string', 'gun');
addTrigger(333, "Var &#8250; Set variable 'A' to value 1 if Gun 'B' has owner, set to value 0 in else case", 'string', 'gun');
addTrigger(334, "Var &#8250; Set variable 'A' to number of frames passed since last attack of Gun 'B'", 'string', 'gun');
addTrigger(335, "Var &#8250; Set variable 'A' to value 1 if Gun 'B' is ready to fire, set to value 0 in else case", 'string', 'gun');
addTrigger(336, "Var &#8250; Set variable 'A' to X direction of Gun 'B'", 'string', 'gun');
addTrigger(337, "Var &#8250; Set variable 'A' to X direction of Character 'B'", 'string', 'character');
addTrigger(338, "Interface &#8250; Prevent alive players from seeing chat from dead players", 'nochange', 'nochange');
addTrigger(339, "Interface &#8250; Let alive players see chat from dead players", 'nochange', 'nochange');
addTrigger(340, "Interface &#8250; Disable leader board details (such as alive state, score, team)", 'nochange', 'nochange');
addTrigger(341, "Interface &#8250; Enable leader board details (such as alive state, score, team)", 'nochange', 'nochange');
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
    special_values_table['sky_model'][i] = '<img src='+PIC_PHP_SOURCE+'/6/'+i+'.png border=0 width=100 height=50 style=vertical-align:-4px title=\'' + special_values_table['sky_model'][i] + '\'>';
}
var known_class = new Array();
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
known_class[17] = "image";
var known_class_title = new Array();
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
var known_class_savepriorities = new Array();
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
                        ondeath: -1
                    };
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
                    break;
                case 'water':
                    this.pm = {
                        x: 0,
                        y: 0,
                        w: 10,
                        h: 10,
                        damage: 0,
                        friction: true
                    };
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
                        actions_1_type: -1,
                        actions_1_targetA: 0,
                        actions_1_targetB: 0,
                        actions_2_type: -1,
                        actions_2_targetA: 0,
                        actions_2_targetB: 0,
                        actions_3_type: -1,
                        actions_3_targetA: 0,
                        actions_3_targetB: 0,
                        actions_4_type: -1,
                        actions_4_targetA: 0,
                        actions_4_targetB: 0,
                        actions_5_type: -1,
                        actions_5_targetA: 0,
                        actions_5_targetB: 0,
                        actions_6_type: -1,
                        actions_6_targetA: 0,
                        actions_6_targetB: 0,
                        actions_7_type: -1,
                        actions_7_targetA: 0,
                        actions_7_targetB: 0,
                        actions_8_type: -1,
                        actions_8_targetA: 0,
                        actions_8_targetB: 0,
                        actions_9_type: -1,
                        actions_9_targetA: 0,
                        actions_9_targetB: 0,
                        actions_10_type: -1,
                        actions_10_targetA: 0,
                        actions_10_targetB: 0,
                    };
                    break;
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
    this.fixPos = function() {
            this.pm.x = Math.round(this.pm.x / GRID_SNAPPING) * GRID_SNAPPING;
            this.pm.y = Math.round(this.pm.y / GRID_SNAPPING) * GRID_SNAPPING;
            if (this._isresizable) {
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
                                if (Math.max(lmwa, lmdrwa) > Math.min(this.pm.x, this.pm.x + this.pm.w) && Math.min(lmwa, lmdrwa) < Math.max(this.pm.x, this.pm.x + this.pm.w) && Math.max(lmwb, lmdrwb) > Math.min(this.pm.y, this.pm.y + this.pm.h) && Math.min(lmwb, lmdrwb) < Math.max(this.pm.y, this.pm.y + this.pm.h)) {
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
                                if (Math.max(lmwa, lmdrwa) > Math.min(this.pm.x + hit_from_x, this.pm.x + hit_to_x) && Math.min(lmwa, lmdrwa) < Math.max(this.pm.x + hit_from_x, this.pm.x + hit_to_x) && Math.max(lmwb, lmdrwb) > Math.min(this.pm.y + hit_from_y, this.pm.y + hit_to_y) && Math.min(lmwb, lmdrwb) < Math.max(this.pm.y + hit_from_y, this.pm.y + hit_to_y)) {
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
                                if (lmwa >= this.pm.x - borderwidth)
                                    if (lmwa <= this.pm.x + this.pm.w + borderwidth)
                                        if (lmwb >= this.pm.y - borderwidth)
                                            if (lmwb <= this.pm.y + this.pm.h + borderwidth) {
                                                if (lmwa <= this.pm.x + borderwidth) {
                                                    if (lmwb <= this.pm.y + borderwidth) return 'LT';
                                                    else if (lmwb >= this.pm.y + this.pm.h - borderwidth) return 'LB';
                                                    else return 'L';
                                                } else if (lmwa >= this.pm.x + this.pm.w - borderwidth) {
                                                    if (lmwb <= this.pm.y + borderwidth) return 'RT';
                                                    else if (lmwb >= this.pm.y + this.pm.h - borderwidth) return 'RB';
                                                    else return 'R';
                                                }
                                                if (lmwb <= this.pm.y + borderwidth) return 'T';
                                                else if (lmwb >= this.pm.y + this.pm.h - borderwidth) return 'B';
                                                else return 'C';
                                            }
                            } else {
                                if (lmwa >= this.pm.x)
                                    if (lmwa <= this.pm.x + this.pm.w)
                                        if (lmwb >= this.pm.y)
                                            if (lmwb <= this.pm.y + this.pm.h) {
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
                            if (lmwa >= this.pm.x + hit_from_x)
                                if (lmwa <= this.pm.x + hit_to_x)
                                    if (lmwb >= this.pm.y + hit_from_y)
                                        if (lmwb <= this.pm.y + hit_to_y) {
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
    for (var i = 0; i < es.length; i++)
        if (es[i].exists)
            if (es[i].pm.uid != undefined) {
                if (es[i].pm.uid == newname) {
                    unoriginal = true;
                    oldname = newname;
                }
            } if (unoriginal) {
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

function s2w_x(x) {
    return x / lsu * (dis_to_x - dis_from_x) + dis_from_x;
}

function w2s_x(x) {
    return (x - dis_from_x) / (dis_to_x - dis_from_x) * lsu;
}

function s2w_y(y) {
    return y / lsv * (dis_to_y - dis_from_y) + dis_from_y;
}

function w2s_y(y) {
    return (y - dis_from_y) / (dis_to_y - dis_from_y) * lsv;
}

function w2s_w(x) {
    return (x) / (dis_to_x - dis_from_x) * lsu;
}

function w2s_h(y) {
    return (y) / (dis_to_y - dis_from_y) * lsv;
}

function s2w_w(x) {
    return (x) / lsu * (dis_to_x - dis_from_x);
}

function s2w_h(y) {
    return (y) / lsv * (dis_to_y - dis_from_y);
}
var quick_pick = false;
var lqpc = new Array();
var quick_pick_active_param = '';
var quick_pick_ignore_one_click = false;
var quick_pick_fake_over = -1;

function MyDrawImage(img_decide_result, _x1, _y1, _x2, _y2) {
    img_decide_result.crossorigin = "Anonymous";
    if (_x2 < 0) {
        _x2 = -_x2;
        _x1 -= _x2;
    }
    if (_x1 + _x2 > 0)
        if (_x1 < lsu)
            if (_y1 + _y2 > 0)
                if (_y1 < lsv) {
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

    function     ImgTrimThink() {
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

function ldb(_x2, _y2, _w, _h) {
    var _x = Math.round(_x2);
    var _y = Math.round(_y2);
    _w = Math.round(_x2 + _w) - _x;
    _h = Math.round(_y2 + _h) - _y;
    lmfr(_x, _y, 1, _h + 1);
    lmfr(_x + _w, _y, 1, _h + 1);
    lmfr(_x, _y, _w + 1, 1);
    lmfr(_x, _y + _h, _w + 1, 1);
}

function lmfr(_x2, _y2, _w, _h) {
    var _x = Math.round(_x2);
    var _y = Math.round(_y2);
    _w = Math.round(_x2 + _w) - _x;
    _h = Math.round(_y2 + _h) - _y;
    if (_x > lsu) return;
    var _x_add_w = _x + _w;
    if (_x_add_w < 0) return;
    if (_y > lsv) return;
    var _y_add_h = _y + _h;
    if (_y_add_h < 0) return;
    if (_x_add_w > lsu) _w = lsu - _x;
    if (_y_add_h > lsv) _h = lsv - _y;
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

function MyDrawSelection(_x, _y, _w, _h) {
    _x = Math.round(_x);
    _y = Math.round(_y);
    _w = Math.round(_w);
    _h = Math.round(_h);
    var _w_small = _w * 0.25;
    var _h_small = _h * 0.25;
    lmfr(_x, _y, 1, _h_small);
    lmfr(_x + _w, _y, 1, _h_small);
    lmfr(_x, _y + _h * 0.75, 1, _h_small);
    lmfr(_x + _w, _y + _h * 0.75, 1, _h_small);
    lmfr(_x, _y, _w_small, 1);
    lmfr(_x, _y + _h, _w_small, 1);
    lmfr(_x + _w * 0.75, _y, _w_small, 1);
    lmfr(_x + _w * 0.75, _y + _h, _w_small, 1);
}

function lg(_step, alpha) {
    ctx.globalAlpha = alpha / Math.max(zoom, 1);
    var x = w2s_x(Math.floor(s2w_x(0) / _step) * _step);
    var to_x = w2s_x(Math.ceil(s2w_x(lsu) / _step) * _step);
    var step = w2s_w(_step);
    if (step > 2)
        while (x < to_x) {
            lmfr(x, 0, 1, lsv);
            x += step;
        }
    var y = w2s_y(Math.floor(s2w_y(0) / _step) * _step);
    var to_y = w2s_y(Math.ceil(s2w_y(lsv) / _step) * _step);
    step = w2s_h(_step);
    if (step > 2)
        while (y < to_y) {
            lmfr(0, y, lsu, 1);
            y += step;
        }
}
var DOQuad_i;
var DOQuad_active;

function DOQuad(x1, y1, x2, y2) {
    if (!ldrs) {
        var over = false;
        if (ldrs) over = DOQuad_active == DOQuad_i;
        else if (lmwa >= x1)
            if (lmwa < x1 + x2)
                if (lmwb >= y1)
                    if (lmwb < y1 + y2) over = true;
        x1 = w2s_x(x1);
        y1 = w2s_y(y1);
        x2 = w2s_w(x2);
        y2 = w2s_h(y2);
        ctx.globalAlpha = 0.2;
        if (over) ctx.globalAlpha = 0.7;
        lmfr(x1, y1, 1, y2);
        lmfr(x1 + x2, y1, 1, y2);
        lmfr(x1, y1, x2, 1);
        lmfr(x1, y1 + y2, x2, 1);
        if (over) {
            ctx.globalAlpha = 0.3;
            lmfr(x1, y1, x2, y2);
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

function Render() {
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
    lmfr(0, 0, lsu, lsv);
    if (SHOW_TEXTURES) {
        var tex = '1';
        var tex_found = false;
        var scale = 1;
        for (var i = 0; i < es.length; i++)
            if (es[i].exists)
                if (es[i]._class === 'inf') {
                    if (!tex_found)
                        if (es[i].pm.mark === 'sky') {
                            tex = es[i].pm.forteam;
                            tex_found = true;
                        } if (es[i].pm.mark === 'gamescale') {
                        scale = es[i].pm.forteam / 100;
                    }
                } if (CACHED_SKY[tex] != undefined)
            if (CACHED_SKY[tex].loaded) {
                MyDrawImage(CACHED_SKY[tex], 0, 0, lsu, lsv);
                var cx = s2w_x(lsu * 0.5);
                var cy = s2w_y(lsv * 0.5);
                ctx.globalAlpha = 0.25;
                MyDrawImage(CACHED_SKY[tex], w2s_x(cx) - w2s_w(800 * 0.5 / scale), w2s_y(cy) - w2s_h(400 * 0.5 / scale), w2s_w(800 / scale), w2s_h(400 / scale));
                ctx.globalAlpha = 1;
            }
    }
    if (GRID_ALPHA > 0) {
        if (THEME !== THEME_DARK) ctx.fillStyle = '#FFFFFF';
        else ctx.fillStyle = '#888888';
        lg(10, 0.08 * GRID_ALPHA);
        lg(100, 0.32 * GRID_ALPHA);
        lg(300, 0.64 * GRID_ALPHA);
        ctx.globalAlpha = GRID_ALPHA * 0.7;
        lmfr(0, w2s_y(0), lsu, 1);
        lmfr(w2s_x(0), 0, 1, lsv);
    }
    var selects = 0;
    var select_last = -1;
    var lhu = true;
    for (i = 0; i < es.length; i++)
        if (es[i].exists)
            if (es[i].selected) {
                selects++;
                select_last = i;
            } if (selects == 1) {
        if (es[select_last].hit(true) != false) lhu = false;
    } else if (selects > 1) {
        for (i = 0; i < es.length; i++)
            if (es[i].exists)
                if (es[i]._isphysical)
                    if (es[i].selected)
                        if (es[i].hit(false)) lhu = false;
    }
    if (active_tool != 'edit') selects = 0;
    var obviouse_sel = -1;
    if (lhu || k_shift) {
        var i = es.length - 1;
        i = (selects == 1 && k_shift) ? select_last : 0;
        for (var c = 0; c < es.length; c++) {
            i--;
            if (i < 0) i = es.length - 1;
            if (es[i].exists)
                if (MatchLayer(es[i]))
                    if (es[i]._isphysical)
                        if (es[i].hit(false)) {
                            obviouse_sel = i;
                            break;
                        }
        }
    } {
        for (i = 0; i < es.length; i++)
            if (es[i].exists)
                if (es[i]._isphysical) {
                    var relative_alpha = MatchLayer(es[i]) ? 1 : 0.3;
                    if (SHOW_CONNECTIONS)
                        if (es[i].selected) {
                            for (property in es[i].pm)
                                if (property != 'uid') {
                                    var value = es[i].pm[property];
                                    if (typeof value == 'string')
                                        if (value.length > 1)
                                            if (value.charAt(0) === '#') {
                                                for (var i2 = 0; i2 < es.length; i2++)
                                                    if (es[i2].exists)
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
                                } for (var i2 = 0; i2 < es.length; i2++)
                                if (es[i2].exists) {
                                    for (property in es[i2].pm)
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
                        } if (es[i]._isresizable) {
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
                            if (special_values_table['bg_model'][es[i].pm.m] == undefined) ServerRequest('a=get_images&for_class=' + 'bg_model' + '&update_const=' + es[i].pm.m, 'request_consts');
                            if (SHOW_TEXTURES) {
                                if (CACHED_BGS[es[i].pm.m] != undefined)
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
                                        ctx.fillRect(s2w_x(0) - u, s2w_y(0) - v, s2w_w(lsu), s2w_h(lsv));
                                        ctx.restore();
                                        image_drawn = true;
                                    }
                            }
                            ctx.globalAlpha = relative_alpha * 0.1;
                            ctx.fillStyle = '#000';
                            if (es[i].pm.c != undefined)
                                if (es[i].pm.c.length == 7) {
                                    if (image_drawn) {
                                        var old_comp = ctx.globalCompositeOperation;
                                        ctx.globalCompositeOperation = 'multiply';
                                        ctx.globalAlpha = relative_alpha;
                                        ctx.fillStyle = es[i].pm.c;
                                        lmfr(x1, y1, x2, y2);
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
                        lmfr(x1, y1, x2, y2);
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
                        ldb(x1, y1, x2, y2);
                        if (es[i]._class == 'region')
                            if (es[i].pm.use_on == 1 || es[i].pm.use_on == 9 || es[i].pm.use_on == 10) {
                                ctx.globalAlpha = relative_alpha * 0.5;
                                MyDrawImage(es[i].pm.use_on == 1 ? img_region : (es[i].pm.use_on == 9 ? img_region_red : img_region_blue), w2s_x(es[i].pm.x + Math.round(es[i].pm.w / 2 - 41 / 2)), w2s_y(es[i].pm.y + Math.round(es[i].pm.h / 2 - 10 - 31 / 2)), w2s_w(41), w2s_h(31));
                            }
                    } else {
                        if (es[i]._class == 'player' || es[i]._class == 'enemy' || es[i]._class == 'gun' || es[i]._class == 'lamp' || es[i]._class == 'trigger' || es[i]._class == 'timer' || es[i]._class == 'inf' || es[i]._class == 'song' || es[i]._class == "image" || es[i]._class == 'decor' || es[i]._class == 'barrel' || es[i]._class == 'vehicle') {
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
                                if (es[i].pm.model != '0')
                                    if (special_values_table['decor_model'][es[i].pm.model] == undefined) ServerRequest('a=get_images&for_class=' + 'decor_model' + '&update_const=' + es[i].pm.model, 'request_consts');
                                if (CACHED_DECORS[es[i].pm.model] != undefined)
                                    if (CACHED_DECORS[es[i].pm.model].loaded)
                                        if (!CACHED_DECORS[es[i].pm.model].native) {
                                            var x1 = w2s_x(es[i].pm.x + es[i].pm.u);
                                            var y1 = w2s_y(es[i].pm.y + es[i].pm.v);
                                            var x2 = w2s_w(CACHED_DECORS[es[i].pm.model].width);
                                            var y2 = w2s_h(CACHED_DECORS[es[i].pm.model].height);
                                            MyDrawImage(CACHED_DECORS[es[i].pm.model], x1, y1, x2, y2);
                                            image_drawn = true;
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
                            ldb(x1, y1, x2, y2);
                        }
                    }
                }
    }
    var font_time = 0;
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
                if (es[i].selected) {
                    ctx.globalAlpha = 0.2;
                    ctx.fillStyle = selgrd2;
                    lmfr(x1, y1, x2, y2);
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
                if (!space)
                    if (!quick_pick)
                        if (obviouse_sel == i || ((ctrl || alt || m_drag_selection) && (es[i].hit(false) || es[i].hitSelect())))
                            if (MatchLayer(es[i])) {
                                ctx.fillStyle = selgrd3;
                                if (ctrl) ctx.fillStyle = '#AFA';
                                else if (alt) ctx.fillStyle = '#FAA';
                                ctx.globalAlpha = 0.5;
                                ldb(x1, y1, x2, y2);
                            } x1 += 2;
                y1 += 2;
                x2 -= 4;
                y2 -= 4;
                var can_qp = quick_pick && lqpc.indexOf(es[i]._class) != -1;
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
                if (es[i].pm.uid != undefined)
                    if (MatchLayer(es[i]) || can_qp) {
                        if (ENABLE_TEXT) {
                            var capx = x1 + x2 / 2;
                            var capy = y1 + y2 / 2;
                            if (capx < -100) continue;
                            if (capx > lsu) continue;
                            if (capy < -100) continue;
                            if (capy > lsv) continue;
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
                            if (mouse_x > capx - 30)
                                if (mouse_x < capx + 30)
                                    if (mouse_y > capy - 30)
                                        if (mouse_y < capy + 30) {
                                            title_density++;
                                        } ctx.globalAlpha = 1;
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
            } if (font_time > 20) {
        ENABLE_SHADOWS = false;
    }
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
            lmfr(x - 1, y - 10, 2, -1 - waypoints[i].risk_level_dm * w * 2);
            ctx.globalAlpha = waypoints[i].risk_level_dm / 150;
            ctx.fillStyle = '#FF0000';
            lmfr(x - 1, y - 10, 2, -1 - waypoints[i].risk_level_dm * w * 2);
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
            lmfr(x1 - 1, y1 - 1, 2, 2);
        }
    }
    if (!paint_draw_mode)
        if (selects == 1)
            if (!ldis)
                if (!ctrl && !alt)
                    if (!space)
                        if (!k_shift)
                            if (es[select_last]._isresizable) {
                                i = select_last;
                                var h = true;
                                if (!ldrs) h = es[i].hit(true);
                                if (h != false)
                                    if (es[i].exists)
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
                            } if (active_tool != 'edit') {
        ctx.globalAlpha = 1;
        MyDrawImage(img_put, w2s_x(Math.round(lmwa / GRID_SNAPPING) * GRID_SNAPPING) - 15, w2s_y(Math.round(lmwb / GRID_SNAPPING) * GRID_SNAPPING) - 15, 31, 31);
    }
    if (m_drag_selection)
        if (!lmd) {
            var x1 = w2s_x(Math.min(lmdrwa, lmwa));
            var x2 = w2s_w(Math.abs(lmdrwa - lmwa));
            var y1 = w2s_y(Math.min(lmdrwb, lmwb));
            var y2 = w2s_h(Math.abs(lmdrwb - lmwb));
            ctx.fillStyle = "#FFF";
            if (ctrl) ctx.fillStyle = '#AFA';
            else if (alt) ctx.fillStyle = '#FAA';
            ctx.globalAlpha = 0.1;
            lmfr(x1, y1, x2, y2);
            ctx.globalAlpha = 0.8;
            lmfr(x1, y1, 1, y2);
            lmfr(x1 + x2, y1, 1, y2);
            lmfr(x1, y1, x2, 1);
            lmfr(x1, y1 + y2, x2, 1);
        } if (enabletrace) {
        ctx.font = "normal 10px Arial";
        ctx.globalAlpha = 1;
        ctx.fillStyle = "#FFF";
        var from_y = 15;
        if (ConsoleTraceMessages.length * 10 + 15 > lsv - 15) from_y = lsv - 15 - ConsoleTraceMessages.length * 10;
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
    if (history_runer_timer > 0)
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
        } if (canv.style.cursor != curs) canv.style.cursor = curs;
}

function zoom_validate() {
    cx = (dis_from_x + dis_to_x) / 2;
    cy = (dis_from_y + dis_to_y) / 2;
    dis_from_x = cx - lsu * zoom / 2;
    dis_to_x = cx + lsu * zoom / 2;
    dis_from_y = cy - lsv * zoom / 2;
    dis_to_y = cy + lsv * zoom / 2;
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
var lmwa = 0;
var mouse_y = 0;
var lmwb = 0;
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

function lnd(str) {
    forundo_str = str + forundo_str;
}

function ldn(str) {
    forredo_str += str;
}

function lfz(doredo) {
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

function lcz() {
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
    lmwa = s2w_x(mouse_x);
    lmwb = s2w_y(mouse_y);
}
var ctrl = false;
var k_shift = false;
var space = false;
var alt = false;
var mid_btn = false;
var m_drag = false;
var m_drag_x = 0;
var m_drag_y = 0;
var lmdrwa = 0;
var lmdrwb = 0;
var m_drag_screen = false;
var ldis = false;
var m_drag_selection = false;
var ldrs = false;
var ldms = 'C';
var lmd = true;

function m_move(e) {
    if (e != undefined) m_update(e);
    if (lmd) {
        if (Math.abs(mouse_x - m_drag_x) > GRID_SNAPPING * 0.5 || Math.abs(mouse_y - m_drag_y) > GRID_SNAPPING * 0.5) {
            lmd = false;
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
        if (ldis) {
            var x1, y1;
            x1 = Math.round((lmwa - lmdrwa) / GRID_SNAPPING) * GRID_SNAPPING;
            y1 = Math.round((lmwb - lmdrwb) / GRID_SNAPPING) * GRID_SNAPPING;
            for (var i = 0; i < es.length; i++)
                if (es[i].exists)
                    if (MatchLayer(es[i]) || paint_draw_mode)
                        if (es[i].selected)
                            if (es[i]._isphysical) {
                                es[i].pm.x += x1;
                                es[i].pm.y += y1;
                            } lmdrwa += x1;
            lmdrwb += y1;
        }
        if (ldrs) {
            var x1, y1;
            x1 = Math.round((lmwa - lmdrwa) / GRID_SNAPPING) * GRID_SNAPPING;
            y1 = Math.round((lmwb - lmdrwb) / GRID_SNAPPING) * GRID_SNAPPING;
            for (var i = 0; i < es.length; i++)
                if (es[i].exists)
                    if (MatchLayer(es[i]) || paint_draw_mode)
                        if (es[i].selected)
                            if (es[i]._isphysical)
                                if (es[i]._isresizable) {
                                    if (ldms == 'LT' || ldms == 'L' || ldms == 'LB') {
                                        es[i].pm.x += x1;
                                        es[i].pm.w -= x1;
                                    }
                                    if (ldms == 'RT' || ldms == 'R' || ldms == 'RB') {
                                        es[i].pm.w += x1;
                                    }
                                    if (ldms == 'LT' || ldms == 'T' || ldms == 'RT') {
                                        es[i].pm.y += y1;
                                        es[i].pm.h -= y1;
                                    }
                                    if (ldms == 'LB' || ldms == 'B' || ldms == 'RB') {
                                        es[i].pm.h += y1;
                                    }
                                    es[i].fixPos();
                                } lmdrwa += x1;
            lmdrwb += y1;
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
    lmwa = s2w_x(mouse_x);
    lmwb = s2w_y(mouse_y);
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
        lmd = true;
        m_drag_x = mouse_x;
        m_drag_y = mouse_y;
        lmdrwa = lmwa;
        lmdrwb = lmwb;
        m_drag = true;
        m_drag_screen = false;
        m_drag_selection = false;
        ldis = false;
        ldrs = false;
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
                lcz();
                paint_draw_mode = true;
                for (var i = 0; i < es.length; i++)
                    if (es[i].exists)
                        if (es[i].selected) {
                            lnd('es[' + i + '].selected=true;');
                            ldn('es[' + i + '].selected=false;');
                            es[i].selected = false;
                        } var newid = es.length;
                lnd('es[' + newid + '].exists=false;');
                ldn('es[' + newid + '].exists=true;');
                var newbie = es[es.length] = new E(active_tool);
                if ('uid' in newbie.pm) {
                    newbie.pm.uid = RandomizeName(newbie.pm.uid);
                }
                if ('x' in newbie.pm) {
                    ldn('es[' + newid + '].pm.x=' + lmwa + ';');
                    ldn('es[' + newid + '].pm.y=' + lmwb + ';');
                    ldn('es[' + newid + '].selected=true;');
                    ldn('es[' + newid + '].fixPos();');
                    newbie.pm.x = lmwa;
                    newbie.pm.y = lmwb;
                    newbie.selected = true;
                    newbie.fixPos();
                    lmdrwa = newbie.pm.x;
                    lmdrwb = newbie.pm.y;
                    if (newbie._isresizable) {
                        ldn('es[' + newid + '].pm.w=0;');
                        ldn('es[' + newid + '].pm.h=0;');
                        newbie.pm.w = 0;
                        newbie.pm.h = 0;
                        ldrs = true;
                        ldms = 'RB';
                    } else {
                        ldis = true;
                    }
                }
                lfz(false);
                lnd('es[' + newid + '].pm.x=' + lmwa + ';');
                lnd('es[' + newid + '].pm.y=' + lmwb + ';');
                if (newbie._isresizable) {
                    lnd('es[' + newid + '].pm.w=0;');
                    lnd('es[' + newid + '].pm.h=0;');
                }
                need_GUIParams_update = true;
                UpdateGUIObjectsList();
            } else {
                var selects = 0;
                var select_last = -1;
                var lhu = true;
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
                            lhu = false;
                            if (h == 'C') {
                                lcz();
                                lnd('es[' + select_last + '].pm.x=' + es[select_last].pm.x + ';');
                                lnd('es[' + select_last + '].pm.y=' + es[select_last].pm.y + ';');
                                ldis = true;
                            } else {
                                lcz();
                                lnd('es[' + select_last + '].pm.x=' + es[select_last].pm.x + ';');
                                lnd('es[' + select_last + '].pm.y=' + es[select_last].pm.y + ';');
                                lnd('es[' + select_last + '].pm.w=' + es[select_last].pm.w + ';');
                                lnd('es[' + select_last + '].pm.h=' + es[select_last].pm.h + ';');
                                ldrs = true;
                                ldms = h;
                            }
                            if (k_shift) {
                                lcz();
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
                                                                    lnd('es[' + i2 + '].selected=true;');
                                                                    ldn('es[' + i2 + '].selected=false;');
                                                                    es[i2].selected = false;
                                                                } selects = 0;
                                                    lnd('es[' + i + '].selected=false;');
                                                    ldn('es[' + i + '].selected=true;');
                                                    lnd('es[' + i + '].pm.x=' + es[i].x + ';');
                                                    lnd('es[' + i + '].pm.y=' + es[i].y + ';');
                                                    es[i].selected = true;
                                                    need_GUIParams_update = true;
                                                    ldis = true;
                                                    ldrs = false;
                                                    lhu = false;
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
                                                lhu = false;
                                                ldis = true;
                                                ldrs = false;
                                                lhu = false;
                                                lcz();
                                                for (var i2 = 0; i2 < es.length; i2++)
                                                    if (es[i2].exists)
                                                        if (MatchLayer(es[i2]))
                                                            if (es[i2]._isphysical)
                                                                if (es[i2].selected) {
                                                                    lnd('es[' + i2 + '].pm.x=' + es[i2].x + ';');
                                                                    lnd('es[' + i2 + '].pm.y=' + es[i2].y + ';');
                                                                } break;
                                            }
                                        }
                    }
                    if (selects > 0)
                        if (ldis || ldrs) {
                            lcz();
                            for (var i = 0; i < es.length; i++)
                                if (es[i].exists)
                                    if (MatchLayer(es[i]))
                                        if (es[i]._isphysical)
                                            if (es[i].selected) {
                                                lnd('es[' + i + '].pm.x=' + es[i].pm.x + ';');
                                                lnd('es[' + i + '].pm.y=' + es[i].pm.y + ';');
                                                if (ldrs) {
                                                    lnd('es[' + i + '].pm.w=' + es[i].pm.w + ';');
                                                    lnd('es[' + i + '].pm.h=' + es[i].pm.h + ';');
                                                }
                                            }
                        }
                }
                if (lhu) {
                    if (!ctrl && !alt) {
                        lcz();
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
                                                            lnd('es[' + i2 + '].selected=true;');
                                                            ldn('es[' + i2 + '].selected=false;');
                                                            es[i2].selected = false;
                                                        } selects = 0;
                                                lnd('es[' + i + '].pm.x=' + es[i].pm.x + ';');
                                                lnd('es[' + i + '].pm.y=' + es[i].pm.y + ';');
                                                lnd('es[' + i + '].selected=false;');
                                                ldn('es[' + i + '].selected=true;');
                                                es[i].selected = true;
                                                need_GUIParams_update = true;
                                            }
                                            ldis = true;
                                        }
                                    } lfz(false);
                    }
                    if (!ldis)
                        if (!ldrs) {
                            ldis = false;
                            m_drag_selection = true;
                        }
                }
            }
        }
        need_redraw = true;
    }
}

function m_failed(e) {
    if (ldis || ldrs)
        if (!lmd) {
            for (var i = 0; i < es.length; i++)
                if (es[i].exists)
                    if (MatchLayer(es[i]))
                        if (es[i].selected)
                            if (es[i]._isresizable) {
                                es[i].fixWidths();
                                es[i].fixPos();
                                ldn('es[' + i + '].pm.x=' + es[i].pm.x + ';');
                                ldn('es[' + i + '].pm.y=' + es[i].pm.y + ';');
                                if (ldrs) {
                                    ldn('es[' + i + '].pm.w=' + es[i].pm.w + ';');
                                    ldn('es[' + i + '].pm.h=' + es[i].pm.h + ';');
                                }
                            } lfz(false);
            need_GUIParams_update = true;
        } paint_draw_mode = false;
    m_drag_screen = false;
    m_drag_selection = false;
    m_drag = false;
    ldis = false;
    ldrs = false;
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
        lcz();
        for (var i = 0; i < es.length; i++)
            if (es[i].exists)
                if (MatchLayer(es[i])) {
                    if (ctrl) {
                        if (es[i].hitSelect()) {
                            if (!es[i].selected) {
                                lnd('es[' + i + '].selected=false;');
                                ldn('es[' + i + '].selected=true;');
                            }
                            es[i].selected = true;
                            need_GUIParams_update = true;
                        }
                    } else if (alt) {
                        if (es[i].hitSelect()) {
                            if (es[i].selected) {
                                lnd('es[' + i + '].selected=true;');
                                ldn('es[' + i + '].selected=false;');
                            }
                            es[i].selected = false;
                            need_GUIParams_update = true;
                        }
                    } else {
                        var set = es[i].hitSelect();
                        if (es[i].selected != set) {
                            lnd('es[' + i + '].selected=' + es[i].selected + ';');
                            ldn('es[' + i + '].selected=' + set + ';');
                        }
                        need_GUIParams_update = need_GUIParams_update || es[i].selected != set;
                        es[i].selected = set;
                    }
                } lfz(false);
    }
    if (ldis)
        if (!lmd) {
            for (var i = 0; i < es.length; i++)
                if (es[i].exists)
                    if (MatchLayer(es[i]))
                        if (es[i].selected)
                            if (es[i]._isphysical) {
                                es[i].fixPos();
                                ldn('es[' + i + '].pm.x=' + es[i].pm.x + ';');
                                ldn('es[' + i + '].pm.y=' + es[i].pm.y + ';');
                            } lfz(false);
            need_GUIParams_update = true;
        } ldis = false;
    m_drag_screen = false;
    m_drag_selection = false;
    m_drag = false;
    paint_draw_mode = false;
    if (ldrs) {
        for (var i = 0; i < es.length; i++)
            if (es[i].exists)
                if (es[i].selected)
                    if (MatchLayer(es[i]))
                        if (es[i]._isphysical)
                            if (es[i]._isresizable) {
                                es[i].fixWidths();
                                es[i].fixPos();
                                ldn('es[' + i + '].pm.x=' + es[i].pm.x + ';');
                                ldn('es[' + i + '].pm.y=' + es[i].pm.y + ';');
                                ldn('es[' + i + '].pm.w=' + es[i].pm.w + ';');
                                ldn('es[' + i + '].pm.h=' + es[i].pm.h + ';');
                            } lfz(false);
        ldrs = false;
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
    lcz();
    for (var i = 0; i < es.length; i++)
        if (es[i].exists)
            if (es[i].selected)
                if (MatchLayer(es[i])) {
                    ldn('es[' + i + '].selected=es[' + i + '].exists=false;');
                    lnd('es[' + i + '].selected=' + es[i].selected + ';es[' + i + '].exists=' + es[i].exists + ';');
                } lfz(true);
    need_GUIParams_update = true;
    need_redraw = true;
}

function k_down(e) {
    if (OVERLAY_BLOCK) return true;
    var c = e.keyCode ? e.keyCode : e.charCode;
    if (!ignore_keys) {
        if (!letediting && e.target.nodeName != 'TEXTAREA') {
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
                                    lnd('es[' + i + '].pm.x=' + es[i].pm.x + ';');
                                    es[i].pm.x = around + (around - es[i].pm.x);
                                    ldn('es[' + i + '].pm.x=' + around + (around - es[i].pm.x) + ';');
                                    if (es[i]._isresizable) {
                                        lnd('es[' + i + '].pm.w=' + es[i].pm.w + ';');
                                        es[i].pm.w = -es[i].pm.w;
                                        es[i].fixWidths();
                                        ldn('es[' + i + '].pm.w=' + es[i].pm.w + ';');
                                    } else if (es[i].pm.side != undefined) {
                                        lnd('es[' + i + '].pm.side=' + es[i].pm.side + ';');
                                        es[i].pm.side = es[i].pm.side == 1 ? -1 : 1;
                                        ldn('es[' + i + '].pm.side=' + es[i].pm.side + ';');
                                    }
                                } lfz(false);
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
                                    lnd('es[' + i + '].pm.y=' + es[i].pm.y + ';');
                                    es[i].pm.y = around + (around - es[i].pm.y);
                                    ldn('es[' + i + '].pm.y=' + around + (around - es[i].pm.y) + ';');
                                    if (es[i]._isresizable) {
                                        lnd('es[' + i + '].pm.h=' + es[i].pm.h + ';');
                                        es[i].pm.h = -es[i].pm.h;
                                        es[i].fixWidths();
                                        ldn('es[' + i + '].pm.h=' + es[i].pm.h + ';');
                                    }
                                } lfz(false);
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
    if (sessionStorage[ClipName] == undefined) {
        return false;
    }
    clipboard = unserialize(sessionStorage[ClipName]);
    lcz();
    for (var i = 0; i < es.length; i++)
        if (es[i].exists) {
            if (es[i].selected) {
                ldn('es[' + i + '].selected=false;');
                lnd('es[' + i + '].selected=true;');
                es[i].selected = false;
            }
        } var min_x = 0;
    var max_x = 0;
    var min_y = 0;
    var max_y = 0;
    i = 0;
    var from_obj = es.length;
    while (typeof(clipboard[i]) !== 'undefined') {
        var newparam = es.length;
        ldn('es[' + newparam + '].exists=true;');
        lnd('es[' + newparam + '].exists=false;');
        es[newparam] = new E(clipboard[i]._class);
        for (param in clipboard[i]) {
            es[newparam][param] = clipboard[i][param];
        }
        if (typeof(es[newparam].pm.x) !== 'undefined')
            if (typeof(es[newparam].pm.y) !== 'undefined') {
                if (i == 0) {
                    min_x = es[newparam].pm.x;
                    min_y = es[newparam].pm.y;
                    max_x = es[newparam].pm.x;
                    max_y = es[newparam].pm.y;
                    if (typeof(es[newparam].pm.w) !== 'undefined')
                        if (typeof(es[newparam].pm.h) !== 'undefined') {
                            min_x += es[newparam].pm.w / 2;
                            max_x += es[newparam].pm.w / 2;
                            min_y += es[newparam].pm.h / 2;
                            max_y += es[newparam].pm.h / 2;
                        }
                } else {
                    min_x = Math.min(min_x, es[newparam].pm.x);
                    min_y = Math.min(min_y, es[newparam].pm.y);
                    max_x = Math.max(max_x, es[newparam].pm.x);
                    max_y = Math.max(max_y, es[newparam].pm.y);
                    if (typeof(es[newparam].pm.w) !== 'undefined')
                        if (typeof(es[newparam].pm.h) !== 'undefined') {
                            max_x = Math.max(max_x, es[newparam].pm.x + es[newparam].pm.w);
                            max_y = Math.max(max_y, es[newparam].pm.y + es[newparam].pm.h);
                        }
                }
            } i++;
    }
    ldn('m_drag_selected=true;');
    ldn('paint_draw_mode=true;');
    ldn('quick_pick_ignore_one_click=true;');
    lnd('m_drag_selected=false;');
    lnd('paint_draw_mode=false;');
    lnd('quick_pick_ignore_one_click=false;');
    ldis = true;
    paint_draw_mode = true;
    quick_pick_ignore_one_click = true;
    m_drag_x = mouse_x;
    m_drag_y = mouse_y;
    lmdrwa = lmwa;
    lmdrwb = lmwb;
    var lo_x = lmwa - (max_x + min_x) / 2;
    var lo_y = lmwb - (max_y + min_y) / 2;
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
        if (typeof(es[i2].pm.x) !== 'undefined')
            if (typeof(es[i2].pm.y) !== 'undefined') {
                lnd('es[' + i2 + '].pm.x=' + es[i2].pm.x + ';');
                lnd('es[' + i2 + '].pm.y=' + es[i2].pm.y + ';');
                es[i2].pm.x += lo_x;
                es[i2].pm.y += lo_y;
                es[i2].fixPos();
                ldn('es[' + i2 + '].pm.x=' + es[i2].pm.x + ';');
                ldn('es[' + i2 + '].pm.y=' + es[i2].pm.y + ';');
            }
    }
    lfz(false);
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
    return lacl[class_to_layer[elem._class]];
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

function lapa(enablemode) {
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
            return false;
    }
    return true;
}

function letover(obj, enablemode) {
    if (!letediting) {
        ff.blur();
        if (enablemode != 'nochange')
            if (!lapa(enablemode)) {
                var rect = obj.getBoundingClientRect();
                ff.style.left = rect.left + 'px';
                ff.style.top = rect.top + 'px';
                ff.style.width = rect.width + 'px';
                ff.style.height = rect.height + 'px';
                ff.className = 'pa2edit ' + obj.className;
                ff.style.backgroundColor = '#506d95';
                ff.style.borderTop = ff.style.borderLeft = ff.style.borderRight = '1px solid #506d95';
                ff.style.borderBottom = '1px solid #40577a';
                var strinput = obj.innerHTML.replace(/<\/?[^>]+(>|$)/g, '');
                strinput = strinput.split('&amp;').join('&');
                ff.value = strinput;
                ff.style.display = 'block';
                over_obj = obj;
                over_enablemode = enablemode;
            }
    }
}

function letonfocus() {
    if (!letediting) {
        letedit(over_obj, over_enablemode);
    }
    let_focused = true;
}

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
    if (parameter_updated == 'mark' || (parameter_updated.indexOf('actions_') != -1 && parameter_updated.indexOf('_type') != -1)) StreetMagic();
}

function lgprv(pobject) {
    try {
        var text = pobject.innerHTML;
        if (window.DOMParser) {
            parser = new DOMParser();
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

function lcrpl(_str, _what, _with) {
    return String(_str).split(_what).join(_with);
}

function letedit(obj, enablemode) {
    ff_drop.style.display = 'none';
    if (enablemode != 'nochange') {
        var rect = obj.getBoundingClientRect();
        ff.style.left = rect.left + 'px';
        ff.style.top = rect.top + 'px';
        ff.style.width = rect.width + 'px';
        ff.style.height = rect.height + 'px';
        ff.className = 'pa2edit ' + obj.className;
        ff.style.backgroundColor = '#4a7372';
        ff.style.borderColor = '#608b6f';
        var strinput = obj.innerHTML;
        if (strinput == '<nochange>...</nochange>') ff.value = '[leave as is]';
        else if (strinput == '&nbsp;') ff.value = '';
        else ff.value = strinput.split('&amp;').join('&');
        letediting_mode = enablemode;
        lettarget = obj;
        letediting = true;
        var islapa = lapa(enablemode);
        if (islapa) {
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
            var active_param = lgprv(obj);
            quick_pick = false;
            quick_pick_ignore_one_click = false;
            lqpc = new Array();
            quick_pick_active_param = '';
            var he = 3 + 3 + 2;
            for (i in special_values_table[enablemode]) {
                if (i == '[listof]' || i == '[listof2]') {
                    lqpc.push(special_values_table[enablemode][i]);
                    quick_pick = true;
                    quick_pick_ignore_one_click = true;
                    quick_pick_active_param = active_param;
                    quick_pick_fake_over = -1;
                    need_redraw = true;
                    for (i2 = 0; i2 < es.length; i2++)
                        if (es[i2].exists)
                            if (es[i2]._class == special_values_table[enablemode][i]) {
                                he += 3 + 16 + 3;
                                paramsout += '<a href="#" onClick="setletedit(\'' + es[i2].pm.uid + '\', \'' + lcrpl(es[i2].pm.uid, "'", "\\'") + '\', \'' + active_param + '\')" onMouseOver="quick_pick_fake_over=' + i2 + ';" onMouseOut="quick_pick_fake_over=-1;" class="' + (active_param == es[i2].pm.uid ? 'paramactive' : 'paraminbox') + ' paramwide">' + lrp(i2) + '</a>';
                            }
                } else {
                    he += 3 + 16 + 3;
                    paramsout += '<a href="#" onClick="setletedit(\'' + i + '\', \'' + lcrpl(special_values_table[enablemode][i], "'", "\\'") + '\', \'' + active_param + '\')" class="' + (active_param == i ? 'paramactive' : 'paraminbox') + ' paramwide">' + special_values_table[enablemode][i] + '</a>';
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
                if (chvalue == '[leave as is]') {} else {
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
                    else lettarget.innerHTML = chvalue;
                    UpdatePhysicalParam((lettarget.id.replace('pm_', '')), chvalue);
                }
                ff.style.display = 'none';
                letediting = false;
            } else {}
        }
    }
}

function UpdatePhysicalParam(paramname, chvalue) {
    lcz();
    var layer_mismatch = false;
    var list_changes = '';
    for (var elems = 0; elems < es.length; elems++)
        if (es[elems].exists)
            if (es[elems].selected) {
                if (es[elems].pm.hasOwnProperty(paramname)) {
                    if (MatchLayer(es[elems])) {
                        var lup = (typeof(paramname) == 'string') ? '"' + paramname + '"' : paramname;
                        if (typeof(chvalue) == 'number' || chvalue == 0) {
                            lnd('es[' + elems + '].pm[' + lup + '] = ' + es[elems].pm[paramname] + ';');
                            ldn('es[' + elems + '].pm[' + lup + '] = ' + chvalue + ';');
                            es[elems].pm[paramname] = Number(chvalue);
                        } else if (typeof(chvalue) == 'string') {
                            lnd('es[' + elems + '].pm[' + lup + '] = "' + es[elems].pm[paramname] + '";');
                            ldn('es[' + elems + '].pm[' + lup + '] = "' + chvalue + '";');
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
    lfz(false);
}

function UpdatePhysicalParams(paramname_arr, chvalue_arr, forcefully_create_params) {
    lcz();
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
                            var lup = (typeof(paramname) == 'string') ? '"' + paramname + '"' : paramname;
                            if (typeof(chvalue) == 'number' || chvalue == 0) {
                                lnd('es[' + elems + '].pm[' + lup + '] = ' + es[elems].pm[paramname] + ';');
                                ldn('es[' + elems + '].pm[' + lup + '] = ' + chvalue + ';');
                                es[elems].pm[paramname] = Number(chvalue);
                                if (chvalue === delete_addr) ldn('delete es[' + elems + '].pm[' + lup + '];');
                            } else if (typeof(chvalue) == 'string') {
                                lnd('es[' + elems + '].pm[' + lup + '] = "' + es[elems].pm[paramname] + '";');
                                ldn('es[' + elems + '].pm[' + lup + '] = "' + chvalue + '";');
                                es[elems].pm[paramname] = chvalue;
                                if (chvalue === delete_addr) ldn('delete es[' + elems + '].pm[' + lup + '];');
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
    lfz(false);
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
                    if (lqpc.indexOf(es[i]._class) != -1) {
                        if (Math.sqrt(Math.pow(x1 + x2 / 2 - mouse_x, 2) + Math.pow(y1 + y2 / 2 - mouse_y, 2)) < 20 * quick_pick_hit_scale) {
                            setletedit(es[i].pm.uid, lcrpl(es[i].pm.uid), quick_pick_active_param);
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

function tonumerous(str, num) {
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
        if (special_values_table[base][val] != undefined) return (CUSTOM_IMAGES_APPROVED[val] ? '<img src="../images/ap.png" width="11" height="11" style="vertical-align: text-bottom;">' : '<img src="../images/noap.png" width="11" height="11" style="vertical-align: text-bottom;filter: grayscale(1) brightness(4) contrast(0.4);">') + ' ' + special_values_table[base][val];
        return 'Custom Image #' + val;
    }
    switch (base) {
        case 'team':
        case 'team+any': {
            if (special_values_table[base][val] != undefined) return special_values_table[base][val];
            return 'Team ' + val;
        }
        case 'side':
        case 'enable-disable':
        case 'char':
        case 'botaction':
        case 'gun_model':
        case 'bg_model':
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
        default: {
            ConsoleTace('Parameter "' + base + '" is not registered in "GUI"[3]');
            return ERROR_VALUE;
        }
    }
}

function GenParamVal(base, val) {
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

    function     ScheduleParamSet(a, b) {
        direct_update_params.push(a);
        direct_update_values.push(b);
    }

    function     getAllIndexes(arr, val) {
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

function UpdateGUIParams() {
    console.log("update params");
    current_gui_params = new Array();
    unfocusedit();
    ff.style.display = 'none';
    var str = '';
    var selects = 0;
    var sel_by_class = new Array();
    for (i = 0; i < known_class.length; i++) {
        sel_by_class[i] = 0;
    }
    var uids_list = '';
    for (i = 0; i < es.length; i++)
        if (es[i].exists)
            if (es[i].selected) {
                selects++;
                sel_by_class[known_class.indexOf(es[i]._class)]++;
                if (es[i].pm.uid != undefined) {
                    if (uids_list.length > 0) uids_list += ', ';
                    uids_list += '"' + es[i].pm.uid + '"';
                }
            } var full_list = '';
    var classes_selected = 0;
    for (i = 0; i < known_class.length; i++)
        if (sel_by_class[i] > 0) {
            if (full_list.length > 0) full_list += ', ';
            classes_selected++;
            full_list += sel_by_class[i] + ' ' + tonumerous(known_class_title[i], sel_by_class[i]);
        } if (classes_selected > 0) {
        if (classes_selected == 1)
            if (uids_list.length > 0) {
                full_list += ': ' + uids_list;
            } full_list = ' (' + full_list + ')';
        full_list += ' <a href="#" onclick="ForceDeselect()"><img src="noap.png" width="11" height="11" border="0"></a>';
    }
    if (selects == 0) str += '<div id="gui_sel_info" class="gui_sel_info">Nothing selected</div><br><div class="q"></div><br>';
    else if (selects == 1) str += '<div id="gui_sel_info" class="gui_sel_info">' + selects + ' object selected' + full_list + '</div><br><div class="q"></div><br>';
    else str += '<div id="gui_sel_info" class="gui_sel_info">' + selects + ' objects selected' + full_list + '</div><br><div class="q"></div><br>';
    var first_selected_object = null;
    var params_to_display = new Array();
    var paramscount_to_display = new Array();
    var paramsvalue_to_display = new Array();
    var param_associated = new Array();
    for (var i = 0; i < es.length; i++)
        if (es[i].exists)
            if (es[i].selected) {
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
            } if (edit_triggers_as_text && selects == 1 && first_selected_object._class == 'trigger') {
        str += '<div id="rparams">';
        str += '<div style="width:220px;white-space:normal;">This feature should not give you much more freedom, yet you might find it useful to copy/paste/cut trigger actions here.</div><br>';
        str += '<textarea id="opcode_field" class="opcode_field" style="display:block;width:100%;height:400px" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        var code_lines = '';
        code_lines += 'uid: ' + first_selected_object.pm.uid + '\n';
        code_lines += 'enabled: ' + first_selected_object.pm.enabled + '\n';
        code_lines += 'maxcalls: ' + first_selected_object.pm.maxcalls + '\n';
        code_lines += '\n';
        for (var i = 1; first_selected_object.pm['actions_' + i + '_type'] != undefined; i++) {
            if (first_selected_object.pm['actions_' + i + '_type'] == -1) continue;
            if (trigger_opcode_aliases[first_selected_object.pm['actions_' + i + '_type']] == undefined) code_lines += 'op' + first_selected_object.pm['actions_' + i + '_type'];
            else code_lines += trigger_opcode_aliases[first_selected_object.pm['actions_' + i + '_type']];
            code_lines += '( ';
            code_lines += '"' + first_selected_object.pm['actions_' + i + '_targetA'] + '"';
            code_lines += ', ';
            code_lines += '"' + first_selected_object.pm['actions_' + i + '_targetB'] + '"';
            code_lines += ' );\n';
        }
        str += code_lines.split('<').join('&lt;').split('>').join('&gt;');
        str += '</textarea>';
        str += '<a class="tool_btn tool_wid" style="width:100%;height:50px;display:block;line-height:50px;" onmousedown="if ( CompileTrigger() ) UpdateGUIParams();">Apply</a><br>';
    } else {
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
            } else value = '<nochange>...</nochange>';
            current_gui_params.push(param_associated[i]);
            str += pre_temp + param_type[params_to_display[i]][2] + post_temp + param_type[params_to_display[i]][1] + '\')" onMouseOver="letover(this, \'' + param_type[params_to_display[i]][1] + '\')" id="' + 'pm_' + param_type[params_to_display[i]][0] + '">' + value + '</span></div>';
            if (first_selected_object._class == 'trigger')
                if (i >= 4 && (i - 4) % 3 == 0) {
                    str += '<div style="height:2px"></div>';
                } if (i == last_i) {
                pre_temp = '<div class="p_i"><span class="pa1 p_u0 r_lb">';
                post_temp = ':</span><span class="pa2 p_u0 r_rb" onclick="letedit(this, \'';
            } else if (i == 0) {
                pre_temp = '<div class="p_i"><span class="pa1 p_u1">';
                post_temp = ':</span><span class="pa2 p_u2" onclick="letedit(this, \'';
            }
        }
    }
    if (selects == 1 && first_selected_object._class == 'trigger') {
        if (edit_triggers_as_text) str += '<a class="tool_btn tool_wid" style="width:100%;display:block;" onmousedown="edit_triggers_as_text=!edit_triggers_as_text;UpdateGUIParams()">Edit triggers as param list</a>';
        else str += '<a class="tool_btn tool_wid" style="width:100%;display:block;" onmousedown="edit_triggers_as_text=!edit_triggers_as_text;UpdateGUIParams()">Edit triggers as text</a>';
    }
    str += '</div>';
    gui_params.innerHTML = str;
    StreetMagic();
}

function innerHTML_to_value(_html) {
    if (_html.indexOf('&lt;nochange&gt;...&lt;/nochange&gt;') != -1) {
        return '<nochange>...</nochange>';
    }
    var _from = _html.indexOf('<pvalue real = "');
    var _to = _html.indexOf('">');
    if (_from != -1)
        if (_to != -1) return _html.substr(_from + 14, _to - (_from + 14));
    return _html;
}

function StreetMagic() {
    var mark_obj = document.getElementById('pm_mark');
    if (mark_obj != null) {
        var our_case = mark_pairs['mark_' + innerHTML_to_value(mark_obj.innerHTML)];
        var valobj = document.getElementById("pm_forteam");
        if (our_case == undefined) our_case = 'nochange';
        eval('valobj.onclick = function(e){letedit(this, \'' + our_case + '\');}');
        eval('valobj.onmouseover = function(e){letover(this, \'' + our_case + '\');}');
        valobj.innerHTML = GenParamVal(our_case, innerHTML_to_value(valobj.innerHTML));
    }
    for (var i = 1; i <= 10; i++) {
        var mark_obj = document.getElementById('pm_actions_' + i + '_type');
        if (mark_obj != null) {
            var cases = 'A';
            for (var i2 = 0; i2 < 2; i2++) {
                var our_case = mark_pairs['trigger_type_' + cases + innerHTML_to_value(mark_obj.innerHTML)];
                var valobj = document.getElementById('pm_actions_' + i + '_target' + cases);
                if (our_case == undefined) our_case = 'nochange';
                eval('valobj.onclick = function(e){letedit(this, \'' + our_case + '\');}');
                eval('valobj.onmouseover = function(e){letover(this, \'' + our_case + '\');}');
                valobj.innerHTML = GenParamVal(our_case, innerHTML_to_value(valobj.innerHTML));
                cases = 'B';
            }
        } else break;
    }
}

function lrpc(class_id) {
    return '<img src="icons16/' + class_id + '.gif" width=16 height=16 align=absmiddle>';
}

function lrp(obj_i) {
    return lrpc(es[obj_i]._class) + ' ' + (es[obj_i].pm.uid == undefined ? known_class2known_class_title(es[obj_i]._class) : es[obj_i].pm.uid);
}

function UpdateGUIObjectsList() {
    if (ObjectBox_visible) {
        var pos = gui_objbox.scrollTop;
        var str = '';
        for (var i = 0; i < es.length; i++)
            if (es[i].exists)
                if (MatchLayer(es[i])) {
                    str += '<div id="itsel' + i + '" class="selline' + (es[i].selected ? '1' : '0') + '" onmousedown="selclick(event,' + i + ')">' + lrp(i);
                    if (es[i]._class == 'inf') str += ' (' + special_values_table['engine_mark'][es[i].pm.mark] + ')';
                    str += '</div>';
                } gui_objbox.innerHTML = str;
        gui_objbox.scrollTop = pos;
    }
}
var lacl = new Array();
var name_layers = new Array();
var class_to_layer = new Array();
var possible_tools = new Array();
var possible_tools_descr = new Array();
possible_tools[0] = 'edit';
possible_tools_descr[0] = 'FreeEdit tool';
for (var i = 0; i < known_class.length; i++) {
    if (known_class[i] != "image") {
        possible_tools[possible_tools.length] = known_class[i];
        possible_tools_descr[possible_tools_descr.length] = 'Add ' + known_class_title[i].substring(0, 1).toUpperCase() + known_class_title[i].substring(1);
    }
    lacl[i] = true;
    name_layers[i] = lrpc(known_class[i]) + ' ' + tonumerous(known_class_title[i].substring(0, 1).toUpperCase() + known_class_title[i].substring(1));
    class_to_layer[known_class[i]] = i;
}
possible_tools[possible_tools.length] = 'scale';
possible_tools_descr[possible_tools_descr.length] = 'ScaleSelection tool';
var active_tool;
var last_clicked_layer = 100;

function layerClicked(i) {
    lcz();
    lnd('UpdateTools();');
    lnd('last_clicked_layer=' + last_clicked_layer + ';');
    for (var i2 = 0; i2 < known_class.length; i2++) lnd('active_layers[' + i2 + ']=' + lacl[i2] + ';');
    last_clicked_layer = i;
    if (i == -1) {
        for (var i2 = 0; i2 < known_class.length; i2++) lacl[i2] = true;
    } else if (i == -2) {
        for (var i2 = 0; i2 < known_class.length; i2++) lacl[i2] = false;
    } else if (i == -3) {
        for (var i2 = 0; i2 < known_class.length; i2++) lacl[i2] = false;
        lacl[class_to_layer['bg']] = true;
        lacl[class_to_layer['box']] = true;
        lacl[class_to_layer['lamp']] = true;
        lacl[class_to_layer['water']] = true;
        lacl[class_to_layer['pushf']] = true;
    } else if (i == -4) {
        for (var i2 = 0; i2 < known_class.length; i2++) lacl[i2] = false;
        lacl[class_to_layer['trigger']] = true;
        lacl[class_to_layer['timer']] = true;
        lacl[class_to_layer['inf']] = true;
        lacl[class_to_layer['region']] = true;
        lacl[class_to_layer['door']] = true;
        lacl[class_to_layer['pushf']] = true;
    } else if (i == -5) {
        for (var i2 = 0; i2 < known_class.length; i2++) lacl[i2] = false;
        lacl[class_to_layer['player']] = true;
        lacl[class_to_layer['enemy']] = true;
        lacl[class_to_layer['vehicle']] = true;
        lacl[class_to_layer['decor']] = true;
        lacl[class_to_layer['gun']] = true;
        lacl[class_to_layer['barrel']] = true;
        lacl[class_to_layer['inf']] = true;
    } else if (i == -6) {
        ADVANCED_LAYERS = true;
    } else if (i == -7) {
        ADVANCED_LAYERS = false;
    } else if (ctrl && !alt) {
        lacl[i] = true;
    } else if (alt && !ctrl) {
        lacl[i] = false;
    } else {
        for (var i2 = 0; i2 < known_class.length; i2++) lacl[i2] = false;
        lacl[i] = true;
    }
    for (var i = 0; i < es.length; i++)
        if (es[i].exists)
            if (!MatchLayer(es[i])) {
                if (es[i].selected) {
                    lnd('es[' + i + '].selected=true;');
                    ldn('es[' + i + '].selected=false;');
                    es[i].selected = false;
                }
            } for (var i2 = 0; i2 < known_class.length; i2++) ldn('active_layers[' + i2 + ']=' + lacl[i2] + ';');
    ldn('UpdateTools();');
    ldn('last_clicked_layer=' + last_clicked_layer + ';');
    lfz(false);
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
    if (value < 10 || value % 10 !== 0) console.warn('Grid snapping of value ' + value + ' might work, but it is not guaranteed to work in future versions of Plazma Burst games, including updates for Plazma Burst 2.');
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

function PreviewQualitySet(value) {
    ctx.imageSmoothingEnabled = value;
    need_redraw = true;
    UpdateTools();
    SaveBrowserSettings();
}
if (typeof document.createStyleSheet === 'undefined') {
    document.createStyleSheet = (function() {
            function             createStyleSheet(href) {
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

            function             addRule(selectorText, cssText, index) {
                if (typeof index === 'undefined') index = this.cssRules.length;
                this.insertRule(selectorText + ' {' + cssText + '}', index);
            }
            return createStyleSheet;
        })();
}
document.write('<div id="stars" style="visibility:hidden;z-index:1000;position:fixed;left:0px;top:0px;background-image: url(stars2.jpg);width:100%;height:100%;mix-blend-mode: overlay;pointer-events: none;filter: none;background-repeat: repeat;background-position-y: 0px;background-size: cover;">&nbsp;</div>');
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
ctx.imageSmoothingEnabled = true;
var storage_error_once = true;
try {
    if (localStorage.getItem('GRID_ALPHA') !== null) GRID_ALPHA = parseFloat(localStorage.getItem('GRID_ALPHA'));
    if (localStorage.getItem('GRID_SNAPPING') !== null) GRID_SNAPPING = parseFloat(localStorage.getItem('GRID_SNAPPING'));
    if (localStorage.getItem('SHOW_CONNECTIONS') !== null) SHOW_CONNECTIONS = (localStorage.getItem('SHOW_CONNECTIONS') === 'true');
    if (localStorage.getItem('ADVANCED_LAYERS') !== null) ADVANCED_LAYERS = (localStorage.getItem('ADVANCED_LAYERS') === 'true');
    if (localStorage.getItem('THEME') !== null) THEME = parseFloat(localStorage.getItem('THEME'));
    if (localStorage.getItem('SHOW_TEXTURES') !== null) SHOW_TEXTURES = (localStorage.getItem('SHOW_TEXTURES') === 'true');
    if (localStorage.getItem('ctx.imageSmoothingEnabled') !== null) ctx.imageSmoothingEnabled = (localStorage.getItem('ctx.imageSmoothingEnabled') === 'true');
} catch (e) {
    if (storage_error_once) storage_error_once = false;
    NewNote('Level Editor preferences could not be loaded from browser\'s localStorage.', note_bad);
}
ThemeSet(THEME);

function SaveBrowserSettings() {
    try {
        localStorage.setItem('GRID_ALPHA', GRID_ALPHA);
        localStorage.setItem('GRID_SNAPPING', GRID_SNAPPING);
        localStorage.setItem('SHOW_CONNECTIONS', SHOW_CONNECTIONS);
        localStorage.setItem('ADVANCED_LAYERS', ADVANCED_LAYERS);
        localStorage.setItem('THEME', THEME);
        localStorage.setItem('SHOW_TEXTURES', SHOW_TEXTURES);
        localStorage.setItem('ctx.imageSmoothingEnabled', ctx.imageSmoothingEnabled);
    } catch (e) {
        if (storage_error_once) storage_error_once = false;
        else return;
        NewNote('Level Editor preferences could not be saved to browser\'s localStorage.', note_bad);
    }
}

function UpdateTools() {
    var str = '<span class="gui_sel_info">Tools:<br></span>';
    str += '<div style="height:5px"></div>';
    for (var i = 0; i < possible_tools.length; i++) {
        if (possible_tools[i] == active_tool) str += '<a class="tool_btn2 tool_sm" title="' + possible_tools_descr[i] + '">' + lrpc(possible_tools[i]) + '</a>';
        else str += '<a class="tool_btn tool_sm" title="' + possible_tools_descr[i] + '" onMouseDown="SetActiveTool(' + i + ')">' + lrpc(possible_tools[i]) + '</a>';
        if (i % 2 == 1) str += '<br>';
    }
    str += '<br><div class="q"></div><br><span class="gui_sel_info">Layers:<br></span>';
    str += '<div style="height:5px"></div>';
    if (ADVANCED_LAYERS) str += '<a class="tool_btn tool_wid" onMouseDown="layerClicked(-7);">[ Less ]</a><br>';
    else str += '<a class="tool_btn tool_wid" onMouseDown="layerClicked(-6);">[ More ]</a><br>';
    var seltot = 0;
    for (var i = 0; i < known_class.length; i++) {
        if (lacl[i]) seltot++;
        if (ADVANCED_LAYERS) str += '<a class="tool_btn' + (lacl[i] ? '2' : '') + ' tool_wid" onMouseDown="layerClicked(' + i + ');">' + name_layers[i] + '</a><br>';
    }
    str += '<a class="tool_btn' + (seltot == known_class.length ? '2' : '') + ' tool_wid" onMouseDown="layerClicked(-1);">All</a><br>';
    str += '<a class="tool_btn' + (seltot == 0 ? '2' : '') + ' tool_wid" onMouseDown="layerClicked(-2);">Nothing</a><br>';
    if (!ADVANCED_LAYERS) {
        str += '<a class="tool_btn' + (last_clicked_layer == -3 ? '2' : '') + ' tool_wid" onMouseDown="layerClicked(-3);">Statics</a><br>';
        str += '<a class="tool_btn' + (last_clicked_layer == -4 ? '2' : '') + ' tool_wid" onMouseDown="layerClicked(-4);">Logics</a><br>';
        str += '<a class="tool_btn' + (last_clicked_layer == -5 ? '2' : '') + ' tool_wid" onMouseDown="layerClicked(-5);">Entities</a><br>';
    }
    str += '<div class="q"></div><br><span class="gui_sel_info">Grid opacity:<br></span>';
    str += '<div style="height:5px"></div>';
    str += '<a class="tool_btn' + (GRID_ALPHA == 0 ? '2' : '') + ' tool_wid" onMouseDown="GridAlphaSet(0);" style="width:21px;">&nbsp;</a>';
    str += '<a class="tool_btn' + (GRID_ALPHA == 0.5 ? '2' : '') + ' tool_wid" onMouseDown="GridAlphaSet(0.5);" style="width:21px;">.</a>';
    str += '<a class="tool_btn' + (GRID_ALPHA == 1 ? '2' : '') + ' tool_wid" onMouseDown="GridAlphaSet(1);" style="width:21px;">:</a><br>';
    str += '<div class="q"></div><br><span class="gui_sel_info">Snapping:<br></span>';
    str += '<div style="height:5px"></div>';
    str += '<a class="tool_btn' + (GRID_SNAPPING == 10 ? '2' : '') + ' tool_wid" onMouseDown="GridSnappingSet(10);" style="width:21px;">1</a>';
    str += '<a class="tool_btn' + (GRID_SNAPPING == 50 ? '2' : '') + ' tool_wid" onMouseDown="GridSnappingSet(50);" style="width:21px;">5</a>';
    str += '<a class="tool_btn' + (GRID_SNAPPING == 100 ? '2' : '') + ' tool_wid" onMouseDown="GridSnappingSet(100);" style="width:21px;">10</a><br>';
    str += '<div class="q"></div><br><span class="gui_sel_info">Connections:<br></span>';
    str += '<div style="height:5px"></div>';
    str += '<a class="tool_btn' + (SHOW_CONNECTIONS == false ? '2' : '') + ' tool_wid" onMouseDown="ConnectionShowSet(false);" style="width:32px;">Hide</a>';
    str += '<a class="tool_btn' + (SHOW_CONNECTIONS == true ? '2' : '') + ' tool_wid" onMouseDown="ConnectionShowSet(true);" style="width:32px;">Show</a><br>';
    str += '<div class="q"></div><br><span class="gui_sel_info">Editor theme:<br></span>';
    str += '<div style="height:5px"></div>';
    str += '<a class="tool_btn' + (THEME == THEME_BLUE ? '2' : '') + ' tool_wid" onMouseDown="ThemeSet(THEME_BLUE);" style="width:32px;">Blue</a>';
    str += '<a class="tool_btn' + (THEME == THEME_DARK ? '2' : '') + ' tool_wid" onMouseDown="ThemeSet(THEME_DARK);" style="width:32px;">Dark</a><br>';
    str += '<a class="tool_btn' + (THEME == THEME_PURPLE ? '2' : '') + ' tool_wid" onMouseDown="ThemeSet(THEME_PURPLE);" style="width:32px;">Purple</a>';
    str += '<a class="tool_btn' + (THEME == THEME_GREEN ? '2' : '') + ' tool_wid" onMouseDown="ThemeSet(THEME_GREEN);" style="width:32px;">Green</a><br>';
    str += '<div class="q"></div><br><span class="gui_sel_info">Preview:<br></span>';
    str += '<div style="height:5px"></div>';
    str += '<a class="tool_btn' + (SHOW_TEXTURES == false ? '2' : '') + ' tool_wid" onMouseDown="ShowTexturesSet(false);" style="width:32px;">No</a>';
    str += '<a class="tool_btn' + (SHOW_TEXTURES == true ? '2' : '') + ' tool_wid" onMouseDown="ShowTexturesSet(true);" style="width:32px;">Yes</a><br>';
    str += '<div class="q"></div><br><span class="gui_sel_info">Preview quality:<br></span>';
    str += '<div style="height:5px"></div>';
    str += '<a class="tool_btn' + (ctx.imageSmoothingEnabled == false ? '2' : '') + ' tool_wid" onMouseDown="PreviewQualitySet(false);" style="width:32px;">Low</a>';
    str += '<a class="tool_btn' + (ctx.imageSmoothingEnabled == true ? '2' : '') + ' tool_wid" onMouseDown="PreviewQualitySet(true);" style="width:32px;">High</a><br>';
    tools_box.innerHTML = str;
}

function SetActiveTool(val) {
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
            lcz();
            for (i = 0; i < es.length; i++)
                if (es[i].exists)
                    if (es[i].selected)
                        if (MatchLayer(es[i])) {
                            if (es[i].pm.w != undefined) {
                                ldn('es[' + i + '].pm.w=Math.round(es[' + i + '].pm.w*' + factor + '/10)*10;');
                                lnd('es[' + i + '].pm.w=' + es[i].pm.w + ';');
                                if (es[i].pm.w * factor != Math.round(es[i].pm.w * factor / 10) * 10) roundwell = false;
                            }
                            if (es[i].pm.h != undefined) {
                                ldn('es[' + i + '].pm.h=Math.round(es[' + i + '].pm.h*' + factor + '/10)*10;');
                                lnd('es[' + i + '].pm.h=' + es[i].pm.h + ';');
                                if (es[i].pm.h * factor != Math.round(es[i].pm.h * factor / 10) * 10) roundwell = false;
                            }
                            if (es[i].pm.x != undefined) {
                                ldn('es[' + i + '].pm.x=Math.round(es[' + i + '].pm.x*' + factor + '/10)*10;');
                                lnd('es[' + i + '].pm.x=' + es[i].pm.x + ';');
                                if (es[i].pm.x * factor != Math.round(es[i].pm.x * factor / 10) * 10) roundwell = false;
                            }
                            if (es[i].pm.y != undefined) {
                                ldn('es[' + i + '].pm.y=Math.round(es[' + i + '].pm.y*' + factor + '/10)*10;');
                                lnd('es[' + i + '].pm.y=' + es[i].pm.y + ';');
                                if (es[i].pm.y * factor != Math.round(es[i].pm.y * factor / 10) * 10) roundwell = false;
                            }
                        } lfz(true);
            NewNote('Operation complete:<br><br>Selected objects scaled by ' + factor + ' (' + newscale + '% of original size)', note_passive);
            if (!roundwell) NewNote('Note: Position and/or dimensions of some objects were not scaled properly due to Level Editor rounding rules', note_neutral);
            need_redraw = true;
            UpdateTools();
        }
    }
}
var lsc = -1;

function selclick(e, instance) {
    e = e || window.event;
    if ((e.keyCode || e.which) == 1) {
        if (ctrl || alt) {
            if (ctrl) es[instance].selected = true;
            else if (alt) es[instance].selected = false;
        } else {
            if (k_shift) {
                var from_s = Math.min(instance, lsc);
                var to_s = Math.max(instance, lsc);
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
        if (!k_shift) lsc = instance;
    }
}
var ObjectBox_visible = false;
ShowHideObjectBox();

function ShowHideObjectBox() {
    ObjectBox_visible = !ObjectBox_visible;
    if (ObjectBox_visible) {
        objboxhider.innerHTML = 'Objects list <span style="opacity:0.3">is displayed</span>';
        gui_objbox.style.display = '';
        UpdateGUIObjectsList();
    } else {
        objboxhider.innerHTML = 'Objects list <span style="opacity:0.3">is hidden</span>';
        gui_objbox.style.display = 'none';
    }
}
left_panel.style.WebkitTransition = 'left 0.3s, top 0.3s';
right_panel.style.WebkitTransition = 'right 0.3s, top 0.3s';
top_panel.style.WebkitTransition = 'top 0.3s';
var opacities_active = true;

function UpdateOpacities() {
    if (expert_view) {
        if (mouse_x < 120 || mouse_x > lsu - 120 || mouse_y < 90) {
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
window.onresize = resize;

function resize() {
    _lsu = window.innerWidth;
    _lsv = window.innerHeight;
    ctx.canvas.width = _lsu;
    ctx.canvas.height = _lsv;
    lsu = _lsu;
    lsv = _lsv;
    zoom_validate();
    need_redraw = true;
}
ResetView();
resize();
canv.onselectstart = function() {
        return false;
    };
var canvas_focus = false;
var mapid_field = document.getElementById('mapid_field');
var maprights = document.getElementById('maprights');
var isOSX = (navigator.appVersion.indexOf("Mac") != -1);
var knownmaps = new Array();
var mapid = '';
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

        function         copyTouch(touch, which = -1) {
            if (which === -1) which = touch.which;
            return {
                identifier: touch.identifier,
                pageX: touch.pageX,
                pageY: touch.pageY,
                which: which
            };
        }

        function         ongoingTouchIndexById(idToFind) {
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
    var start = +new Date();
    if (speed_x != 0) {
        var speed_power = zoom * 10 * (k_shift ? 5 : 1);
        dis_from_x += speed_x * speed_power;
        dis_to_x += speed_x * speed_power;
        zoom_validate();
        need_redraw = true;
        lmwa = s2w_x(mouse_x);
        lmwb = s2w_y(mouse_y);
        lmd = false;
        m_move();
    }
    if (speed_y != 0) {
        var speed_power = zoom * 10 * (k_shift ? 5 : 1);
        dis_from_y += speed_y * speed_power;
        dis_to_y += speed_y * speed_power;
        zoom_validate();
        need_redraw = true;
        lmwa = s2w_x(mouse_x);
        lmwb = s2w_y(mouse_y);
        lmd = false;
        m_move();
    }
    if (need_redraw) {
        need_redraw = false;
        Render();
    }
    if (need_GUIParams_update) {
        need_GUIParams_update = false;
        UpdateGUIParams();
        UpdateGUIObjectsList();
    }
    var end = +new Date();
    var diff = end - start;
    timer_panic = (timer_panic + diff) * 0.7;
    if (false)
        if (timer_panic > 100) {
            if (ENABLE_SHADOWS) {
                ENABLE_SHADOWS = false;
                timer_panic = 0;
            } else if (ENABLE_TEXT) {
                ENABLE_TEXT = false;
                timer_panic = 0;
            }
        } setTimeout(ani, 10);
}
setTimeout(ani, 50);
var last_save_time = getTimer();
Render();

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
        if (es[i]._class == 'water') {
            if (p == 'friction')
                if (pars === '' || pars == '1' || pars == true) continue;
        }
        if (es[i]._class == 'decor' || es[i]._class == 'pushf' || es[i]._class == 'region') {
            if (p == 'attach')
                if (pars == '-1' || pars == '') continue;
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
        if (typeof pars == 'string') pars = es[i].pm[p].split('"').join("''");
        loco_2 += ' ' + p + '="' + pars + '"';
    }
    loco_2 += ' />';
    return loco_2;
}

function lcc_(_class) {
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

    function     UseNextOrNew() {
        if (avail_ptr < available_images.length) {
            final_images[final_images.length] = available_images[avail_ptr++];
            return final_images[final_images.length - 1];
        }
        final_images[final_images.length] = new E("image");
        es.push(final_images[final_images.length - 1]);
        return final_images[final_images.length - 1];
    }
    var visite_values = {};

    function     ConsiderValue(v) {
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
        out += lcc_(known_class_savepriorities[i]);
    return out;
}

function SaveThisMap(temp_to_real_compile_data = '', callback = null) {
    var mname = document.getElementById('mapid_field').value;
    var mdata = GetMapData();
    instadownload(mdata, mname + ".xml")
    return;
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
}
var mrdimlights = document.getElementById('mrdimlights');
var mrsave = document.getElementById('mrsave');
var mrcustom_image = document.getElementById('mrcustom_image');
var image_list = document.getElementById('image_list');
var ignore_keys = false;
var dim_undo = '';
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
                    ServerRequest('a=get_images&for_class=' + 'bg_model' + '&upload_image=' + imageDataBase64, 'upload_image');
                };
            img.src = event.target.result;
        };
    reader.readAsDataURL(e.target.files[0]);
}
window.addEventListener("paste", function(e) {
    if (mrcustom_image.style.display == 'block') {
        retrieveImageFromClipboardAsBase64(e, function(imageDataBase64) {
            if (imageDataBase64) {
                ServerRequest('a=get_images&for_class=' + 'bg_model' + '&upload_image=' + imageDataBase64, 'upload_image');
            } else alert('Error? Looks like nothing to paste...');
        });
    }
}, false);

function CancelDim() {
    eval(dim_undo);
    mrdimlights.style.display = 'none';
    ignore_keys = false;
}

function UpdateMapsList() {
    ServerRequest('a=mymaps', 'update_knownmaps');
}

function getTimer() {
    return new Date().getTime();
}
var max_temp_maps = 64;
UpdateMapsList();
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

                function                 LeadZero(v) {
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

        function         compare(a, b) {
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

function StartNewMap() {
    if (!changes_made || confirm('Do you really want to leave this map without saving?') == true) {
        es = new Array();
        mapid = '';
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

function OpenMap() {
    {
        mrdimlights.style.display = 'block';
        mrload.style.display = 'block';
        document.getElementById('mrload_mrfield').focus();
        dim_enter_event = 'mrLoad()';
        ignore_keys = true;
        PutMapsList('map_list_load', 'mrload_mrfield', 'mrLoad()', 'load');
        dim_undo = 'mrload.style.display="none";';
    }
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
    UpdateMapsList();
    PutMapsList('map_list_load', 'mrload_mrfield', 'mrLoad()', 'load');
}

function mrReloadSave() {
    UpdateMapsList();
    PutMapsList('map_list', 'mrsave_mrfield', 'mrSave()', 'save');
}

function OpenPreferences() {
    NewNote('Feature is not available at this moment.', note_neutral);
}

function TestMap() {
    if (!changes_made) {
        ServerRequest('r=' + mapid + '&a=game_overlay', 'game_overlay');
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

    function     TracePointAccess(x, y) {
        for (var i = box.length - 1; i >= 0; i--)
            if (x >= box[i].x1)
                if (x <= box[i].x2)
                    if (y >= box[i].y1)
                        if (y <= box[i].y2) return false;
        return true;
    }

    function     TracePointAccessNoBorders(x, y) {
        for (var i = box.length - 1; i >= 0; i--)
            if (x > box[i].x1)
                if (x < box[i].x2)
                    if (y > box[i].y1)
                        if (y < box[i].y2) return false;
        return true;
    }

    function     CanSpawnAt(x, y) {
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

    function     CanStandAt(x, y) {
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

    function     FindPointNear(x, y) {
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

    function     GetDamageAt(x, y) {
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

    function     TraceWay(x1, y1, x2, y2, allowed_hits) {
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

    function     GetPossibleConnection(a, b) {
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
