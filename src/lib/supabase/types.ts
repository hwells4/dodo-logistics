export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      client_settings: {
        Row: {
          average_work_hours_per_day: number;
          client_id: string;
          created_at: string | null;
          default_break_duration_minutes: number;
          default_breaks_per_day: number;
          default_buffer_minutes: number;
          default_lunch_duration_minutes: number;
          default_shift_end: string;
          default_shift_start: string;
          id: string;
          max_work_hours_per_day: number;
          updated_at: string | null;
        };
        Insert: {
          average_work_hours_per_day?: number;
          client_id: string;
          created_at?: string | null;
          default_break_duration_minutes?: number;
          default_breaks_per_day?: number;
          default_buffer_minutes?: number;
          default_lunch_duration_minutes?: number;
          default_shift_end?: string;
          default_shift_start?: string;
          id?: string;
          max_work_hours_per_day?: number;
          updated_at?: string | null;
        };
        Update: {
          average_work_hours_per_day?: number;
          client_id?: string;
          created_at?: string | null;
          default_break_duration_minutes?: number;
          default_breaks_per_day?: number;
          default_buffer_minutes?: number;
          default_lunch_duration_minutes?: number;
          default_shift_end?: string;
          default_shift_start?: string;
          id?: string;
          max_work_hours_per_day?: number;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "client_settings_client_fkey";
            columns: ["client_id"];
            isOneToOne: true;
            referencedRelation: "clients";
            referencedColumns: ["id"];
          },
        ];
      };
      clients: {
        Row: {
          business_name: string | null;
          email: string | null;
          id: string;
          user_id: string | null;
        };
        Insert: {
          business_name?: string | null;
          email?: string | null;
          id?: string;
          user_id?: string | null;
        };
        Update: {
          business_name?: string | null;
          email?: string | null;
          id?: string;
          user_id?: string | null;
        };
        Relationships: [];
      };
      location_distances: {
        Row: {
          client_id: string;
          drive_distance_miles: number;
          drive_time_minutes: number;
          from_location_id: string;
          id: string;
          last_updated: string | null;
          to_location_id: string;
        };
        Insert: {
          client_id: string;
          drive_distance_miles: number;
          drive_time_minutes: number;
          from_location_id: string;
          id?: string;
          last_updated?: string | null;
          to_location_id: string;
        };
        Update: {
          client_id?: string;
          drive_distance_miles?: number;
          drive_time_minutes?: number;
          from_location_id?: string;
          id?: string;
          last_updated?: string | null;
          to_location_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "location_distances_client_fkey";
            columns: ["client_id"];
            isOneToOne: false;
            referencedRelation: "clients";
            referencedColumns: ["id"];
          },
        ];
      };
      migration: {
        Row: {
          Address: string | null;
          administrative_area: string | null;
          "Cleaned Name": string | null;
          client_id: string | null;
          country: string | null;
          Day: string | null;
          Latitude: number | null;
          locality: string | null;
          Location: string | null;
          Longitude: number | null;
          Order: number | null;
          Person: string | null;
          postal_code: number | null;
          primary: number;
          "Week Number": number | null;
        };
        Insert: {
          Address?: string | null;
          administrative_area?: string | null;
          "Cleaned Name"?: string | null;
          client_id?: string | null;
          country?: string | null;
          Day?: string | null;
          Latitude?: number | null;
          locality?: string | null;
          Location?: string | null;
          Longitude?: number | null;
          Order?: number | null;
          Person?: string | null;
          postal_code?: number | null;
          primary: number;
          "Week Number"?: number | null;
        };
        Update: {
          Address?: string | null;
          administrative_area?: string | null;
          "Cleaned Name"?: string | null;
          client_id?: string | null;
          country?: string | null;
          Day?: string | null;
          Latitude?: number | null;
          locality?: string | null;
          Location?: string | null;
          Longitude?: number | null;
          Order?: number | null;
          Person?: string | null;
          postal_code?: number | null;
          primary?: number;
          "Week Number"?: number | null;
        };
        Relationships: [];
      };
      products: {
        Row: {
          client_id: string;
          created_at: string;
          description: string | null;
          id: string;
          name: string;
          unit_type: string | null;
        };
        Insert: {
          client_id: string;
          created_at?: string;
          description?: string | null;
          id?: string;
          name: string;
          unit_type?: string | null;
        };
        Update: {
          client_id?: string;
          created_at?: string;
          description?: string | null;
          id?: string;
          name?: string;
          unit_type?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "products_client_id_fkey";
            columns: ["client_id"];
            isOneToOne: false;
            referencedRelation: "clients";
            referencedColumns: ["id"];
          },
        ];
      };
      route_service_instances: {
        Row: {
          buffer_minutes: number | null;
          created_at: string | null;
          drive_distance_from_previous: number | null;
          drive_time_from_previous: number | null;
          id: string;
          planned_arrival_time: string | null;
          planned_departure_time: string | null;
          route_id: string;
          service_duration: number | null;
          service_instance_id: string;
          stop_number: number;
          updated_at: string | null;
        };
        Insert: {
          buffer_minutes?: number | null;
          created_at?: string | null;
          drive_distance_from_previous?: number | null;
          drive_time_from_previous?: number | null;
          id?: string;
          planned_arrival_time?: string | null;
          planned_departure_time?: string | null;
          route_id: string;
          service_duration?: number | null;
          service_instance_id: string;
          stop_number: number;
          updated_at?: string | null;
        };
        Update: {
          buffer_minutes?: number | null;
          created_at?: string | null;
          drive_distance_from_previous?: number | null;
          drive_time_from_previous?: number | null;
          id?: string;
          planned_arrival_time?: string | null;
          planned_departure_time?: string | null;
          route_id?: string;
          service_duration?: number | null;
          service_instance_id?: string;
          stop_number?: number;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "route_service_instances_route_fkey";
            columns: ["route_id"];
            isOneToOne: false;
            referencedRelation: "route_full_locations";
            referencedColumns: ["route_id"];
          },
          {
            foreignKeyName: "route_service_instances_route_fkey";
            columns: ["route_id"];
            isOneToOne: false;
            referencedRelation: "routes";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "route_service_instances_service_fkey";
            columns: ["service_instance_id"];
            isOneToOne: false;
            referencedRelation: "service_instances";
            referencedColumns: ["id"];
          },
        ];
      };
      routes: {
        Row: {
          avg_miles_between_stops: number | null;
          client_id: string;
          created_at: string | null;
          day_of_week: string;
          efficiency_score: number | null;
          end_location_id: string | null;
          id: string;
          locations: string[] | null;
          metadata: Json | null;
          parent_route_id: string | null;
          route_type: string;
          start_location_id: string | null;
          status: Database["public"]["Enums"]["route_status"];
          stop_ids: string[] | null;
          technician_id: string;
          total_distance: number | null;
          total_drive_miles: number | null;
          total_drive_minutes: number | null;
          total_drive_time: number | null;
          total_service_time: number | null;
          total_stops: number;
          updated_at: string | null;
          version: number;
          week_number: number;
        };
        Insert: {
          avg_miles_between_stops?: number | null;
          client_id: string;
          created_at?: string | null;
          day_of_week: string;
          efficiency_score?: number | null;
          end_location_id?: string | null;
          id?: string;
          locations?: string[] | null;
          metadata?: Json | null;
          parent_route_id?: string | null;
          route_type: string;
          start_location_id?: string | null;
          status?: Database["public"]["Enums"]["route_status"];
          stop_ids?: string[] | null;
          technician_id: string;
          total_distance?: number | null;
          total_drive_miles?: number | null;
          total_drive_minutes?: number | null;
          total_drive_time?: number | null;
          total_service_time?: number | null;
          total_stops: number;
          updated_at?: string | null;
          version?: number;
          week_number: number;
        };
        Update: {
          avg_miles_between_stops?: number | null;
          client_id?: string;
          created_at?: string | null;
          day_of_week?: string;
          efficiency_score?: number | null;
          end_location_id?: string | null;
          id?: string;
          locations?: string[] | null;
          metadata?: Json | null;
          parent_route_id?: string | null;
          route_type?: string;
          start_location_id?: string | null;
          status?: Database["public"]["Enums"]["route_status"];
          stop_ids?: string[] | null;
          technician_id?: string;
          total_distance?: number | null;
          total_drive_miles?: number | null;
          total_drive_minutes?: number | null;
          total_drive_time?: number | null;
          total_service_time?: number | null;
          total_stops?: number;
          updated_at?: string | null;
          version?: number;
          week_number?: number;
        };
        Relationships: [
          {
            foreignKeyName: "routes_client_id_fkey";
            columns: ["client_id"];
            isOneToOne: false;
            referencedRelation: "clients";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "routes_new_end_location_fkey";
            columns: ["end_location_id"];
            isOneToOne: false;
            referencedRelation: "v_active_locations";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "routes_new_end_location_fkey";
            columns: ["end_location_id"];
            isOneToOne: false;
            referencedRelation: "warehouses";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "routes_new_start_location_fkey";
            columns: ["start_location_id"];
            isOneToOne: false;
            referencedRelation: "v_active_locations";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "routes_new_start_location_fkey";
            columns: ["start_location_id"];
            isOneToOne: false;
            referencedRelation: "warehouses";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "routes_parent_route_id_fkey";
            columns: ["parent_route_id"];
            isOneToOne: false;
            referencedRelation: "route_full_locations";
            referencedColumns: ["route_id"];
          },
          {
            foreignKeyName: "routes_parent_route_id_fkey";
            columns: ["parent_route_id"];
            isOneToOne: false;
            referencedRelation: "routes";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "routes_technician_id_fkey";
            columns: ["technician_id"];
            isOneToOne: false;
            referencedRelation: "technicians";
            referencedColumns: ["id"];
          },
        ];
      };
      routes_backup: {
        Row: {
          avg_miles_between_stops: number | null;
          client_id: string | null;
          created_at: string | null;
          day_of_week: string | null;
          efficiency_score: number | null;
          end_location_id: string | null;
          id: string | null;
          locations: string[] | null;
          metadata: Json | null;
          route_type: string | null;
          start_location_id: string | null;
          status: string | null;
          stop_ids: string[] | null;
          technician_id: string | null;
          total_distance: number | null;
          total_drive_miles: number | null;
          total_drive_minutes: number | null;
          total_drive_time: number | null;
          total_service_time: number | null;
          total_stops: number | null;
          updated_at: string | null;
          week_number: number | null;
        };
        Insert: {
          avg_miles_between_stops?: number | null;
          client_id?: string | null;
          created_at?: string | null;
          day_of_week?: string | null;
          efficiency_score?: number | null;
          end_location_id?: string | null;
          id?: string | null;
          locations?: string[] | null;
          metadata?: Json | null;
          route_type?: string | null;
          start_location_id?: string | null;
          status?: string | null;
          stop_ids?: string[] | null;
          technician_id?: string | null;
          total_distance?: number | null;
          total_drive_miles?: number | null;
          total_drive_minutes?: number | null;
          total_drive_time?: number | null;
          total_service_time?: number | null;
          total_stops?: number | null;
          updated_at?: string | null;
          week_number?: number | null;
        };
        Update: {
          avg_miles_between_stops?: number | null;
          client_id?: string | null;
          created_at?: string | null;
          day_of_week?: string | null;
          efficiency_score?: number | null;
          end_location_id?: string | null;
          id?: string | null;
          locations?: string[] | null;
          metadata?: Json | null;
          route_type?: string | null;
          start_location_id?: string | null;
          status?: string | null;
          stop_ids?: string[] | null;
          technician_id?: string | null;
          total_distance?: number | null;
          total_drive_miles?: number | null;
          total_drive_minutes?: number | null;
          total_drive_time?: number | null;
          total_service_time?: number | null;
          total_stops?: number | null;
          updated_at?: string | null;
          week_number?: number | null;
        };
        Relationships: [];
      };
      service_instance_products: {
        Row: {
          created_at: string | null;
          id: string;
          product_id: string | null;
          quantity: number;
          service_instance_id: string | null;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: string;
          product_id?: string | null;
          quantity?: number;
          service_instance_id?: string | null;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          product_id?: string | null;
          quantity?: number;
          service_instance_id?: string | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "service_instance_products_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "service_instance_products_service_instance_id_fkey";
            columns: ["service_instance_id"];
            isOneToOne: false;
            referencedRelation: "service_instances";
            referencedColumns: ["id"];
          },
        ];
      };
      service_instances: {
        Row: {
          created_at: string | null;
          day_of_week: string | null;
          id: string;
          service_location_id: string | null;
          service_time: number | null;
          service_type_id: string | null;
          status: string | null;
          technician_id: string | null;
          updated_at: string | null;
          week_number: number;
        };
        Insert: {
          created_at?: string | null;
          day_of_week?: string | null;
          id?: string;
          service_location_id?: string | null;
          service_time?: number | null;
          service_type_id?: string | null;
          status?: string | null;
          technician_id?: string | null;
          updated_at?: string | null;
          week_number: number;
        };
        Update: {
          created_at?: string | null;
          day_of_week?: string | null;
          id?: string;
          service_location_id?: string | null;
          service_time?: number | null;
          service_type_id?: string | null;
          status?: string | null;
          technician_id?: string | null;
          updated_at?: string | null;
          week_number?: number;
        };
        Relationships: [
          {
            foreignKeyName: "service_instances_service_location_id_fkey";
            columns: ["service_location_id"];
            isOneToOne: false;
            referencedRelation: "service_locations";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "service_instances_service_type_id_fkey";
            columns: ["service_type_id"];
            isOneToOne: false;
            referencedRelation: "service_types";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "service_instances_technician_id_fkey";
            columns: ["technician_id"];
            isOneToOne: false;
            referencedRelation: "technicians";
            referencedColumns: ["id"];
          },
        ];
      };
      service_locations: {
        Row: {
          address: string;
          administrative_area: string | null;
          cleaned_name: string | null;
          client_id: string;
          comments: string | null;
          coordinates: unknown | null;
          country: string | null;
          created_at: string | null;
          email: string | null;
          hours_friday: string | null;
          hours_monday: string | null;
          hours_saturday: string | null;
          hours_sunday: string | null;
          hours_thursday: string | null;
          hours_tuesday: string | null;
          hours_wednesday: string | null;
          id: string;
          locality: string | null;
          name: string;
          notes: string | null;
          phone: string | null;
          postal_code: string | null;
          raw_preferences: string | null;
          service_frequency: string | null;
          structured_preferences: Json | null;
          user_id: string | null;
          website: string | null;
        };
        Insert: {
          address: string;
          administrative_area?: string | null;
          cleaned_name?: string | null;
          client_id: string;
          comments?: string | null;
          coordinates?: unknown | null;
          country?: string | null;
          created_at?: string | null;
          email?: string | null;
          hours_friday?: string | null;
          hours_monday?: string | null;
          hours_saturday?: string | null;
          hours_sunday?: string | null;
          hours_thursday?: string | null;
          hours_tuesday?: string | null;
          hours_wednesday?: string | null;
          id?: string;
          locality?: string | null;
          name: string;
          notes?: string | null;
          phone?: string | null;
          postal_code?: string | null;
          raw_preferences?: string | null;
          service_frequency?: string | null;
          structured_preferences?: Json | null;
          user_id?: string | null;
          website?: string | null;
        };
        Update: {
          address?: string;
          administrative_area?: string | null;
          cleaned_name?: string | null;
          client_id?: string;
          comments?: string | null;
          coordinates?: unknown | null;
          country?: string | null;
          created_at?: string | null;
          email?: string | null;
          hours_friday?: string | null;
          hours_monday?: string | null;
          hours_saturday?: string | null;
          hours_sunday?: string | null;
          hours_thursday?: string | null;
          hours_tuesday?: string | null;
          hours_wednesday?: string | null;
          id?: string;
          locality?: string | null;
          name?: string;
          notes?: string | null;
          phone?: string | null;
          postal_code?: string | null;
          raw_preferences?: string | null;
          service_frequency?: string | null;
          structured_preferences?: Json | null;
          user_id?: string | null;
          website?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "service_locations_client_id_fkey";
            columns: ["client_id"];
            isOneToOne: false;
            referencedRelation: "clients";
            referencedColumns: ["id"];
          },
        ];
      };
      service_types: {
        Row: {
          client_id: string | null;
          created_at: string | null;
          duration: number;
          id: string;
          name: string;
          updated_at: string | null;
        };
        Insert: {
          client_id?: string | null;
          created_at?: string | null;
          duration: number;
          id?: string;
          name: string;
          updated_at?: string | null;
        };
        Update: {
          client_id?: string | null;
          created_at?: string | null;
          duration?: number;
          id?: string;
          name?: string;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "service_types_client_id_fkey";
            columns: ["client_id"];
            isOneToOne: false;
            referencedRelation: "clients";
            referencedColumns: ["id"];
          },
        ];
      };
      technician_schedules: {
        Row: {
          break_count: number | null;
          break_duration_minutes: number | null;
          client_id: string;
          created_at: string | null;
          day_of_week: Database["public"]["Enums"]["day_of_week"];
          end_location_id: string;
          id: string;
          is_working_day: boolean;
          lunch_duration_minutes: number | null;
          shift_end: string;
          shift_start: string;
          start_location_id: string;
          technician_id: string;
          updated_at: string | null;
        };
        Insert: {
          break_count?: number | null;
          break_duration_minutes?: number | null;
          client_id: string;
          created_at?: string | null;
          day_of_week: Database["public"]["Enums"]["day_of_week"];
          end_location_id: string;
          id?: string;
          is_working_day?: boolean;
          lunch_duration_minutes?: number | null;
          shift_end: string;
          shift_start: string;
          start_location_id: string;
          technician_id: string;
          updated_at?: string | null;
        };
        Update: {
          break_count?: number | null;
          break_duration_minutes?: number | null;
          client_id?: string;
          created_at?: string | null;
          day_of_week?: Database["public"]["Enums"]["day_of_week"];
          end_location_id?: string;
          id?: string;
          is_working_day?: boolean;
          lunch_duration_minutes?: number | null;
          shift_end?: string;
          shift_start?: string;
          start_location_id?: string;
          technician_id?: string;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "technician_schedules_client_fkey";
            columns: ["client_id"];
            isOneToOne: false;
            referencedRelation: "clients";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "technician_schedules_end_loc_fkey";
            columns: ["end_location_id"];
            isOneToOne: false;
            referencedRelation: "v_active_locations";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "technician_schedules_end_loc_fkey";
            columns: ["end_location_id"];
            isOneToOne: false;
            referencedRelation: "warehouses";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "technician_schedules_start_loc_fkey";
            columns: ["start_location_id"];
            isOneToOne: false;
            referencedRelation: "v_active_locations";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "technician_schedules_start_loc_fkey";
            columns: ["start_location_id"];
            isOneToOne: false;
            referencedRelation: "warehouses";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "technician_schedules_tech_fkey";
            columns: ["technician_id"];
            isOneToOne: false;
            referencedRelation: "technicians";
            referencedColumns: ["id"];
          },
        ];
      };
      technicians: {
        Row: {
          client_id: string;
          created_at: string | null;
          email: string | null;
          id: string;
          max_daily_hours: number | null;
          name: string;
          phone: string | null;
          status: string;
          temp_end_location_id: string | null;
          temp_start_location_id: string | null;
          updated_at: string | null;
          user_id: string | null;
        };
        Insert: {
          client_id: string;
          created_at?: string | null;
          email?: string | null;
          id?: string;
          max_daily_hours?: number | null;
          name: string;
          phone?: string | null;
          status?: string;
          temp_end_location_id?: string | null;
          temp_start_location_id?: string | null;
          updated_at?: string | null;
          user_id?: string | null;
        };
        Update: {
          client_id?: string;
          created_at?: string | null;
          email?: string | null;
          id?: string;
          max_daily_hours?: number | null;
          name?: string;
          phone?: string | null;
          status?: string;
          temp_end_location_id?: string | null;
          temp_start_location_id?: string | null;
          updated_at?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "technicians_client_id_fkey";
            columns: ["client_id"];
            isOneToOne: false;
            referencedRelation: "clients";
            referencedColumns: ["id"];
          },
        ];
      };
      user_roles: {
        Row: {
          client_id: string;
          created_at: string | null;
          id: string;
          role: string;
          user_id: string;
        };
        Insert: {
          client_id: string;
          created_at?: string | null;
          id?: string;
          role?: string;
          user_id: string;
        };
        Update: {
          client_id?: string;
          created_at?: string | null;
          id?: string;
          role?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "user_roles_client_id_fkey";
            columns: ["client_id"];
            isOneToOne: false;
            referencedRelation: "clients";
            referencedColumns: ["id"];
          },
        ];
      };
      warehouses: {
        Row: {
          address: string;
          client_id: string;
          coordinates: unknown | null;
          created_at: string | null;
          id: string;
          is_active: boolean | null;
          location_type: string;
          name: string;
          technician_id: string | null;
        };
        Insert: {
          address: string;
          client_id: string;
          coordinates?: unknown | null;
          created_at?: string | null;
          id?: string;
          is_active?: boolean | null;
          location_type: string;
          name: string;
          technician_id?: string | null;
        };
        Update: {
          address?: string;
          client_id?: string;
          coordinates?: unknown | null;
          created_at?: string | null;
          id?: string;
          is_active?: boolean | null;
          location_type?: string;
          name?: string;
          technician_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "locations_client_fkey";
            columns: ["client_id"];
            isOneToOne: false;
            referencedRelation: "clients";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "locations_technician_fkey";
            columns: ["technician_id"];
            isOneToOne: false;
            referencedRelation: "technicians";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      route_full_locations: {
        Row: {
          client_id: string | null;
          day_of_week: string | null;
          efficiency_score: number | null;
          end_address: string | null;
          end_coordinates: unknown | null;
          end_location_type: string | null;
          route_id: string | null;
          route_type: string | null;
          start_address: string | null;
          start_coordinates: unknown | null;
          start_location_type: string | null;
          status: Database["public"]["Enums"]["route_status"] | null;
          technician_id: string | null;
          total_distance: number | null;
          total_drive_time: number | null;
          total_service_time: number | null;
          total_stops: number | null;
          week_number: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "routes_client_id_fkey";
            columns: ["client_id"];
            isOneToOne: false;
            referencedRelation: "clients";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "routes_technician_id_fkey";
            columns: ["technician_id"];
            isOneToOne: false;
            referencedRelation: "technicians";
            referencedColumns: ["id"];
          },
        ];
      };
      v_active_locations: {
        Row: {
          address: string | null;
          client_id: string | null;
          coordinates: unknown | null;
          created_at: string | null;
          id: string | null;
          is_active: boolean | null;
          location_type: string | null;
          name: string | null;
          technician_email: string | null;
          technician_id: string | null;
          technician_name: string | null;
          technician_phone: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "locations_client_fkey";
            columns: ["client_id"];
            isOneToOne: false;
            referencedRelation: "clients";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "locations_technician_fkey";
            columns: ["technician_id"];
            isOneToOne: false;
            referencedRelation: "technicians";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Functions: {
      activate_route: {
        Args: {
          p_route_id: string;
        };
        Returns: undefined;
      };
      add_route_stop: {
        Args: {
          p_route_id: string;
          p_service_instance_id: string;
          p_position: number;
          p_drive_time_from_prev?: number;
          p_drive_distance_from_prev?: number;
        };
        Returns: undefined;
      };
      branch_active_route: {
        Args: {
          p_route_id: string;
          p_modification_type: string;
          p_modification_params: Json;
        };
        Returns: string;
      };
      clean_route_stop_ids: {
        Args: Record<PropertyKey, never>;
        Returns: {
          route_id: string;
          original_stops: number;
          valid_stops: number;
        }[];
      };
      create_default_technician_schedules: {
        Args: {
          p_technician_id: string;
        };
        Returns: undefined;
      };
      create_experimental_route: {
        Args: {
          p_client_id: string;
          p_technician_id: string;
          p_week_number: number;
          p_day_of_week: string;
          p_start_location_id: string;
          p_end_location_id: string;
        };
        Returns: string;
      };
      generate_historical_route_analysis: {
        Args: {
          p_week_number: number;
          p_day_of_week: string;
          p_client_id: string;
        };
        Returns: string[];
      };
      get_available_metrics: {
        Args: Record<PropertyKey, never>;
        Returns: {
          table_name: string;
          column_name: string;
          data_type: string;
          description: string;
        }[];
      };
      get_iso_week: {
        Args: {
          "": string;
        };
        Returns: number;
      };
      get_missing_distances: {
        Args: {
          p_client_id: string;
          p_location_ids: string[];
        };
        Returns: {
          from_id: string;
          to_id: string;
          from_coordinates: unknown;
          to_coordinates: unknown;
        }[];
      };
      get_nearest_warehouse: {
        Args: {
          p_coordinates: unknown;
          p_client_id: string;
        };
        Returns: string;
      };
      get_route_sequence: {
        Args: {
          p_route_id: string;
        };
        Returns: {
          sequence_number: number;
          from_location_id: string;
          to_location_id: string;
          from_coordinates: unknown;
          to_coordinates: unknown;
          from_address: string;
          to_address: string;
          service_instance_id: string;
          has_cached_distance: boolean;
          drive_time_minutes: number;
          drive_distance_miles: number;
        }[];
      };
      get_table_relationships: {
        Args: Record<PropertyKey, never>;
        Returns: {
          schema_name: string;
          table_name: string;
          foreign_table: string;
          constraint_name: string;
          constraint_def: string;
        }[];
      };
      migrate_historical_routes: {
        Args: Record<PropertyKey, never>;
        Returns: undefined;
      };
      migrate_route_data: {
        Args: Record<PropertyKey, never>;
        Returns: undefined;
      };
      migrate_technicians: {
        Args: Record<PropertyKey, never>;
        Returns: undefined;
      };
      modify_route: {
        Args: {
          p_route_id: string;
          p_modification_type: string;
          p_modification_params: Json;
        };
        Returns: string;
      };
      rebuild_routes: {
        Args: Record<PropertyKey, never>;
        Returns: {
          route_id: string;
          technician_id: string;
          week_number: number;
          day_of_week: string;
          stop_count: number;
        }[];
      };
      test_route_functions:
        | {
            Args: {
              p_client_id: string;
            };
            Returns: {
              test_name: string;
              result: string;
              details: string;
            }[];
          }
        | {
            Args: {
              p_client_id: string;
              p_technician_id: string;
            };
            Returns: {
              test_name: string;
              result: string;
              details: string;
            }[];
          };
      test_route_management: {
        Args: {
          p_client_id: string;
          p_technician_id: string;
        };
        Returns: {
          test_name: string;
          result: string;
          details: string;
        }[];
      };
      test_route_validation: {
        Args: {
          p_client_id: string;
          p_technician_id: string;
        };
        Returns: {
          test_name: string;
          result: string;
          details: string;
        }[];
      };
      update_location_distance: {
        Args: {
          p_client_id: string;
          p_from_location_id: string;
          p_to_location_id: string;
          p_drive_time_minutes: number;
          p_drive_distance_miles: number;
        };
        Returns: undefined;
      };
      update_route_metrics: {
        Args: {
          p_route_id: string;
        };
        Returns: undefined;
      };
      validate_data_integrity: {
        Args: Record<PropertyKey, never>;
        Returns: {
          check_name: string;
          status: string;
          details: string;
        }[];
      };
      validate_route_data: {
        Args: {
          p_route_id: string;
        };
        Returns: {
          is_valid: boolean;
          missing_distances: number;
          missing_service_times: number;
        }[];
      };
      validate_route_status_transition:
        | {
            Args: {
              old_status: Database["public"]["Enums"]["route_status"];
              new_status: Database["public"]["Enums"]["route_status"];
            };
            Returns: boolean;
          }
        | {
            Args: {
              p_route_id: string;
              p_new_status: string;
            };
            Returns: boolean;
          };
      verify_technician_migration: {
        Args: Record<PropertyKey, never>;
        Returns: {
          unmapped_count: number;
          total_instances: number;
          success_rate: number;
        }[];
      };
    };
    Enums: {
      day_of_week:
        | "MONDAY"
        | "TUESDAY"
        | "WEDNESDAY"
        | "THURSDAY"
        | "FRIDAY"
        | "SATURDAY"
        | "SUNDAY";
      route_status: "active" | "in_development" | "historical" | "archived";
      schedule_location_type: "warehouse" | "home";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;
