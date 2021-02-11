{
    "scan": {
        "analyzer-version-clang": "11.0.0",
        "analyzer-version-coverity": "2020.09",
        "analyzer-version-cppcheck": "2.1",
        "analyzer-version-gcc": "10.2.1",
        "analyzer-version-gcc-analyzer": "10.2.1",
        "analyzer-version-shellcheck": "0.7.1",
        "cov-compilation-unit-count": 26,
        "cov-compilation-unit-ratio": 100,
        "cov-lines-processed": 44162,
        "cov-time-elapsed-analysis": "00:00:18",
        "defect-blacklist": "/usr/share/csmock/defect-blacklist.err",
        "exit-code": 0,
        "host": "cov03.lab.eng.brq.redhat.com",
        "mock-config": "eln-x86_64",
        "project-name": "aide-0.16-16.eln103",
        "store-results-to": "/tmp/tmpuYxcq0/aide-0.16-16.eln103.tar.xz",
        "time-created": "2020-11-16 18:07:59",
        "time-finished": "2020-11-16 18:18:54",
        "tool": "csmock",
        "tool-args": "'/bin/csmock' '-t' 'cppcheck,gcc,shellcheck,clang,coverity' '-r' 'eln-x86_64' '-o' '/tmp/tmpuYxcq0/aide-0.16-16.eln103.tar.xz' '--cov-analyze-java' '--cov-analyze-opts=--security --concurrency' '--use-host-cppcheck' '--gcc-analyze' '--cov-use-instance' '/opt/cov-sa-2020.09' '/tmp/tmpuYxcq0/aide-0.16-16.eln103.src.rpm'",
        "tool-version": "csmock-2.6.0.20201022.141344.g7db3c91.internal-1.el7"
    },
    "defects": [
        {
            "checker": "RESOURCE_LEAK",
            "cwe": 772,
            "imp": 1,
            "function": "do_dbdef",
            "language": "c/c++",
            "key_event_idx": 5,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 811,
                    "event": "path",
                    "message": "Starting defect path here.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 811,
                    "event": "path",
                    "message": "Condition \"*conf_db_url == NULL\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 812,
                    "event": "alloc_fn",
                    "message": "Storage is returned from allocation function \"parse_url\".",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 812,
                    "event": "var_assign",
                    "message": "Assigning: \"u\" = storage returned from \"parse_url(val)\".",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 815,
                    "event": "path",
                    "message": "Switch case default.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 842,
                    "event": "leaked_storage",
                    "message": "Variable \"u\" going out of scope leaks the storage it points to.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "NULL_RETURNS",
            "cwe": 476,
            "function": "get_attribute_values",
            "language": "c/c++",
            "key_event_idx": 6,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 427,
                    "event": "path",
                    "message": "Condition \"line == NULL\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 427,
                    "event": "path",
                    "message": "Condition \"!(line->attr & attr)\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 431,
                    "event": "path",
                    "message": "Condition \"(2097152ULL /* 1ULL << 21 */) & attr\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 435,
                    "event": "path",
                    "message": "Condition \"(8589934592ULL /* 1ULL << 33 */) & attr\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 440,
                    "event": "path",
                    "message": "Condition \"(34359738368ULL /* 1ULL << 35 */) & attr\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 441,
                    "event": "returned_null",
                    "message": "\"get_file_type_string\" returns \"NULL\" (checked 4 out of 5 times).",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 441,
                    "event": "dereference",
                    "message": "Dereferencing a pointer that might be \"NULL\" \"get_file_type_string(line->perm)\" when calling \"strlen\".",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 550,
                    "event": "example_assign",
                    "message": "Example 1: Assigning: \"file_type\" = return value from \"get_file_type_string(((nline == NULL) ? oline : nline)->perm)\".",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 551,
                    "event": "example_checked",
                    "message": "Example 1 (cont.): \"file_type\" has its value checked in \"file_type\".",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 639,
                    "event": "example_assign",
                    "message": "Example 2: Assigning: \"file_type\" = return value from \"get_file_type_string(line->perm)\".",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 640,
                    "event": "example_checked",
                    "message": "Example 2 (cont.): \"file_type\" has its value checked in \"file_type\".",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 649,
                    "event": "example_assign",
                    "message": "Example 3: Assigning: \"file_type\" = return value from \"get_file_type_string(line->perm)\".",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 650,
                    "event": "example_checked",
                    "message": "Example 3 (cont.): \"file_type\" has its value checked in \"file_type\".",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 591,
                    "event": "example_assign",
                    "message": "Example 4: Assigning: \"file_type\" = return value from \"get_file_type_string(((nline == NULL) ? oline : nline)->perm)\".",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 592,
                    "event": "example_checked",
                    "message": "Example 4 (cont.): \"file_type\" has its value checked in \"file_type\".",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "FORWARD_NULL",
            "cwe": 476,
            "function": "conflex",
            "language": "c/c++",
            "key_event_idx": 7,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 5871,
                    "event": "path",
                    "message": "Condition \"!yy_init\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 5879,
                    "event": "path",
                    "message": "Condition \"!yy_start\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 5882,
                    "event": "path",
                    "message": "Condition \"!confin\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 5885,
                    "event": "path",
                    "message": "Condition \"!confout\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 5888,
                    "event": "path",
                    "message": "Condition \"yy_buffer_stack\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 5888,
                    "event": "var_compare_op",
                    "message": "Comparing \"yy_buffer_stack\" to null implies that \"yy_buffer_stack\" might be null.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 5888,
                    "event": "path",
                    "message": "Condition \"!(yy_buffer_stack ? yy_buffer_stack[yy_buffer_stack_top] : NULL)\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 5890,
                    "event": "var_deref_op",
                    "message": "Dereferencing null pointer \"yy_buffer_stack\".",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "FORWARD_NULL",
            "cwe": 476,
            "function": "confrestart",
            "language": "c/c++",
            "key_event_idx": 3,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6975,
                    "event": "path",
                    "message": "Condition \"yy_buffer_stack\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6975,
                    "event": "var_compare_op",
                    "message": "Comparing \"yy_buffer_stack\" to null implies that \"yy_buffer_stack\" might be null.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6975,
                    "event": "path",
                    "message": "Condition \"!(yy_buffer_stack ? yy_buffer_stack[yy_buffer_stack_top] : NULL)\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6977,
                    "event": "var_deref_op",
                    "message": "Dereferencing null pointer \"yy_buffer_stack\".",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "FORWARD_NULL",
            "cwe": 476,
            "function": "conf_switch_to_buffer",
            "language": "c/c++",
            "key_event_idx": 5,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6998,
                    "event": "path",
                    "message": "Condition \"yy_buffer_stack\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6998,
                    "event": "path",
                    "message": "Condition \"(yy_buffer_stack ? yy_buffer_stack[yy_buffer_stack_top] : NULL) == new_buffer\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7001,
                    "event": "path",
                    "message": "Condition \"yy_buffer_stack\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7001,
                    "event": "var_compare_op",
                    "message": "Comparing \"yy_buffer_stack\" to null implies that \"yy_buffer_stack\" might be null.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7001,
                    "event": "path",
                    "message": "Condition \"yy_buffer_stack ? yy_buffer_stack[yy_buffer_stack_top] : NULL\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7009,
                    "event": "var_deref_op",
                    "message": "Dereferencing null pointer \"yy_buffer_stack\".",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "FORWARD_NULL",
            "cwe": 476,
            "function": "confpush_buffer_state",
            "language": "c/c++",
            "key_event_idx": 6,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7140,
                    "event": "path",
                    "message": "Condition \"new_buffer == NULL\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7146,
                    "event": "path",
                    "message": "Condition \"yy_buffer_stack\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7146,
                    "event": "path",
                    "message": "Condition \"yy_buffer_stack ? yy_buffer_stack[yy_buffer_stack_top] : NULL\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7155,
                    "event": "path",
                    "message": "Condition \"yy_buffer_stack\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7155,
                    "event": "var_compare_op",
                    "message": "Comparing \"yy_buffer_stack\" to null implies that \"yy_buffer_stack\" might be null.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7155,
                    "event": "path",
                    "message": "Condition \"yy_buffer_stack ? yy_buffer_stack[yy_buffer_stack_top] : NULL\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7157,
                    "event": "var_deref_op",
                    "message": "Dereferencing null pointer \"yy_buffer_stack\".",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "ARRAY_VS_SINGLETON",
            "cwe": 119,
            "function": "confparse",
            "language": "c/c++",
            "key_event_idx": 9,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_yacc.c",
                    "line": 1217,
                    "event": "path",
                    "message": "Jumping to label \"yysetstate\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_yacc.c",
                    "line": 1234,
                    "event": "path",
                    "message": "Condition \"0\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_yacc.c",
                    "line": 1240,
                    "event": "path",
                    "message": "Condition \"yyss + yystacksize - 1 <= yyssp\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_yacc.c",
                    "line": 1269,
                    "event": "path",
                    "message": "Condition \"10000 <= yystacksize\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_yacc.c",
                    "line": 1272,
                    "event": "path",
                    "message": "Condition \"10000 < yystacksize\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_yacc.c",
                    "line": 1280,
                    "event": "path",
                    "message": "Condition \"!yyptr\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_yacc.c",
                    "line": 1282,
                    "event": "address_of",
                    "message": "Taking address with \"&yyptr->yyss_alloc\" yields a singleton pointer.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_yacc.c",
                    "line": 1282,
                    "event": "assign",
                    "message": "Assigning: \"yyss\" = \"&yyptr->yyss_alloc\".",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_yacc.c",
                    "line": 1285,
                    "event": "path",
                    "message": "Condition \"yyss1 != yyssa\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_yacc.c",
                    "line": 1290,
                    "event": "ptr_arith",
                    "message": "Using \"yyss\" as an array.  This might corrupt or misinterpret adjacent memory locations.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "OVERRUN",
            "cwe": 119,
            "function": "confparse",
            "language": "c/c++",
            "key_event_idx": 10,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_yacc.c",
                    "line": 1185,
                    "event": "assignment",
                    "message": "Assigning: \"yystacksize\" = \"200L\".",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_yacc.c",
                    "line": 1217,
                    "event": "path",
                    "message": "Jumping to label \"yysetstate\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_yacc.c",
                    "line": 1234,
                    "event": "path",
                    "message": "Condition \"0\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_yacc.c",
                    "line": 1240,
                    "event": "path",
                    "message": "Condition \"yyss + yystacksize - 1 <= yyssp\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_yacc.c",
                    "line": 1269,
                    "event": "path",
                    "message": "Condition \"10000 <= yystacksize\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_yacc.c",
                    "line": 1271,
                    "event": "assignment",
                    "message": "Assigning: \"yystacksize\" *= \"2L\". The value of \"yystacksize\" is now 400.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_yacc.c",
                    "line": 1272,
                    "event": "path",
                    "message": "Condition \"10000 < yystacksize\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_yacc.c",
                    "line": 1280,
                    "event": "path",
                    "message": "Condition \"!yyptr\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_yacc.c",
                    "line": 1282,
                    "event": "alias",
                    "message": "Assigning: \"yyss\" = \"&yyptr->yyss_alloc\". \"yyss\" now points to byte 0 of \"yyptr->yyss_alloc\" (which consists of 8 bytes).",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_yacc.c",
                    "line": 1285,
                    "event": "path",
                    "message": "Condition \"yyss1 != yyssa\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_yacc.c",
                    "line": 1298,
                    "event": "illegal_address",
                    "message": "\"yyss + yystacksize - 1\" evaluates to an address that is at byte offset 399 of an array of 8 bytes.",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_yacc.c",
                    "line": 1298,
                    "event": "path",
                    "message": "Condition \"yyss + yystacksize - 1 <= yyssp\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_yacc.c",
                    "line": 1299,
                    "event": "path",
                    "message": "Jumping to label \"yyabortlab\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_yacc.c",
                    "line": 2213,
                    "event": "path",
                    "message": "Jumping to label \"yyreturn\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_yacc.c",
                    "line": 2231,
                    "event": "path",
                    "message": "Condition \"confchar != YYEMPTY\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_yacc.c",
                    "line": 2243,
                    "event": "path",
                    "message": "Condition \"yyssp != yyss\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_yacc.c",
                    "line": 2250,
                    "event": "path",
                    "message": "Condition \"yyss != yyssa\", taking true branch.",
                    "verbosity_level": "2"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writechar",
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 599,
                    "event": "path",
                    "message": "Condition \"i\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 600,
                    "event": "check_return",
                    "message": "Calling \"dofprintf(\" \")\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writechar",
            "language": "c/c++",
            "key_event_idx": 7,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 599,
                    "event": "path",
                    "message": "Condition \"i\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 603,
                    "event": "path",
                    "message": "Condition \"s == NULL\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 607,
                    "event": "path",
                    "message": "Condition \"s[0] == 0\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 611,
                    "event": "path",
                    "message": "Condition \"s[0] == '0'\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 613,
                    "event": "path",
                    "message": "Condition \"retval < 0\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 619,
                    "event": "path",
                    "message": "Condition \"!i\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 619,
                    "event": "path",
                    "message": "Condition \"s[0] == '#'\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 620,
                    "event": "check_return",
                    "message": "Calling \"dofprintf(\"# \")\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writeint",
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 635,
                    "event": "path",
                    "message": "Condition \"a\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 636,
                    "event": "check_return",
                    "message": "Calling \"dofprintf(\" \")\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writelong",
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 646,
                    "event": "path",
                    "message": "Condition \"a\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 647,
                    "event": "check_return",
                    "message": "Calling \"dofprintf(\" \")\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_write_byte_base64",
            "language": "c/c++",
            "key_event_idx": 5,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 665,
                    "event": "path",
                    "message": "Condition \"data\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 665,
                    "event": "path",
                    "message": "Condition \"!len\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 668,
                    "event": "path",
                    "message": "Condition \"data != NULL\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 668,
                    "event": "path",
                    "message": "Condition \"th & attr\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 673,
                    "event": "path",
                    "message": "Condition \"i\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 674,
                    "event": "check_return",
                    "message": "Calling \"dofprintf(\" \")\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_write_time_base64",
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 696,
                    "event": "path",
                    "message": "Condition \"a\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 697,
                    "event": "check_return",
                    "message": "Calling \"dofprintf(\" \")\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writeoct",
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 729,
                    "event": "path",
                    "message": "Condition \"a\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 730,
                    "event": "check_return",
                    "message": "Calling \"dofprintf(\" \")\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writeacl",
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 837,
                    "event": "path",
                    "message": "Condition \"a\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 838,
                    "event": "check_return",
                    "message": "Calling \"dofprintf(\" \")\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writeacl",
            "language": "c/c++",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 837,
                    "event": "path",
                    "message": "Condition \"a\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 841,
                    "event": "path",
                    "message": "Condition \"acl == NULL\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 842,
                    "event": "check_return",
                    "message": "Calling \"dofprintf(\"0\")\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writeacl",
            "language": "c/c++",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 837,
                    "event": "path",
                    "message": "Condition \"a\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 841,
                    "event": "path",
                    "message": "Condition \"acl == NULL\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 844,
                    "event": "check_return",
                    "message": "Calling \"dofprintf(\"POSIX\")\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writeacl",
            "language": "c/c++",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 837,
                    "event": "path",
                    "message": "Condition \"a\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 841,
                    "event": "path",
                    "message": "Condition \"acl == NULL\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 846,
                    "event": "check_return",
                    "message": "Calling \"dofprintf(\",\")\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writeacl",
            "language": "c/c++",
            "key_event_idx": 3,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 837,
                    "event": "path",
                    "message": "Condition \"a\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 841,
                    "event": "path",
                    "message": "Condition \"acl == NULL\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 847,
                    "event": "path",
                    "message": "Condition \"acl->acl_a\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 850,
                    "event": "check_return",
                    "message": "Calling \"dofprintf(\"0\")\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writeacl",
            "language": "c/c++",
            "key_event_idx": 4,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 837,
                    "event": "path",
                    "message": "Condition \"a\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 841,
                    "event": "path",
                    "message": "Condition \"acl == NULL\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 847,
                    "event": "path",
                    "message": "Condition \"acl->acl_a\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 848,
                    "event": "path",
                    "message": "Falling through to end of if statement.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 851,
                    "event": "check_return",
                    "message": "Calling \"dofprintf(\",\")\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writeacl",
            "language": "c/c++",
            "key_event_idx": 5,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 837,
                    "event": "path",
                    "message": "Condition \"a\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 841,
                    "event": "path",
                    "message": "Condition \"acl == NULL\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 847,
                    "event": "path",
                    "message": "Condition \"acl->acl_a\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 848,
                    "event": "path",
                    "message": "Falling through to end of if statement.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 852,
                    "event": "path",
                    "message": "Condition \"acl->acl_d\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 855,
                    "event": "check_return",
                    "message": "Calling \"dofprintf(\"0\")\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writeline_file",
            "language": "c/c++",
            "key_event_idx": 6,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 878,
                    "event": "check_return",
                    "message": "Calling \"db_writechar(line->filename, dbconf->db_out, i)\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writeline_file",
            "language": "c/c++",
            "key_event_idx": 10,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_linkname\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 882,
                    "event": "check_return",
                    "message": "Calling \"db_writechar(line->linkname, dbconf->db_out, i)\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writeline_file",
            "language": "c/c++",
            "key_event_idx": 10,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_bcount\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 886,
                    "event": "check_return",
                    "message": "Calling \"db_writeint(line->bcount, dbconf->db_out, i)\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writeline_file",
            "language": "c/c++",
            "key_event_idx": 10,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_mtime\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 891,
                    "event": "check_return",
                    "message": "Calling \"db_write_time_base64(line->mtime, dbconf->db_out, i)\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writeline_file",
            "language": "c/c++",
            "key_event_idx": 10,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_atime\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 895,
                    "event": "check_return",
                    "message": "Calling \"db_write_time_base64(line->atime, dbconf->db_out, i)\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writeline_file",
            "language": "c/c++",
            "key_event_idx": 10,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_ctime\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 899,
                    "event": "check_return",
                    "message": "Calling \"db_write_time_base64(line->ctime, dbconf->db_out, i)\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writeline_file",
            "language": "c/c++",
            "key_event_idx": 10,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_inode\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 903,
                    "event": "check_return",
                    "message": "Calling \"db_writeint(line->inode, dbconf->db_out, i)\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writeline_file",
            "language": "c/c++",
            "key_event_idx": 10,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_lnkcount\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 907,
                    "event": "check_return",
                    "message": "Calling \"db_writeint(line->nlink, dbconf->db_out, i)\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writeline_file",
            "language": "c/c++",
            "key_event_idx": 10,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_uid\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 911,
                    "event": "check_return",
                    "message": "Calling \"db_writeint(line->uid, dbconf->db_out, i)\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writeline_file",
            "language": "c/c++",
            "key_event_idx": 10,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_gid\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 915,
                    "event": "check_return",
                    "message": "Calling \"db_writeint(line->gid, dbconf->db_out, i)\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writeline_file",
            "language": "c/c++",
            "key_event_idx": 10,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_size\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 919,
                    "event": "check_return",
                    "message": "Calling \"db_writelong(line->size, dbconf->db_out, i)\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writeline_file",
            "language": "c/c++",
            "key_event_idx": 10,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_perm\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 953,
                    "event": "check_return",
                    "message": "Calling \"db_writeoct(line->perm, dbconf->db_out, i)\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writeline_file",
            "language": "c/c++",
            "key_event_idx": 10,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_attr\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1009,
                    "event": "check_return",
                    "message": "Calling \"db_writelong(line->attr, dbconf->db_out, i)\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writeline_file",
            "language": "c/c++",
            "key_event_idx": 11,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_xattrs\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1022,
                    "event": "path",
                    "message": "Condition \"!line->xattrs\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1024,
                    "event": "check_return",
                    "message": "Calling \"db_writelong(0L, dbconf->db_out, i)\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writeline_file",
            "language": "c/c++",
            "key_event_idx": 11,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_xattrs\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1022,
                    "event": "path",
                    "message": "Condition \"!line->xattrs\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1028,
                    "event": "check_return",
                    "message": "Calling \"db_writelong(line->xattrs->num, dbconf->db_out, i)\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writeline_file",
            "language": "c/c++",
            "key_event_idx": 16,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_xattrs\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1022,
                    "event": "path",
                    "message": "Condition \"!line->xattrs\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1031,
                    "event": "path",
                    "message": "Condition \"num < line->xattrs->num\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1040,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1031,
                    "event": "path",
                    "message": "Condition \"num < line->xattrs->num\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1040,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1031,
                    "event": "path",
                    "message": "Condition \"num < line->xattrs->num\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1033,
                    "event": "check_return",
                    "message": "Calling \"dofprintf(\",\")\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writeline_file",
            "language": "c/c++",
            "key_event_idx": 16,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_xattrs\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1022,
                    "event": "path",
                    "message": "Condition \"!line->xattrs\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1031,
                    "event": "path",
                    "message": "Condition \"num < line->xattrs->num\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1040,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1031,
                    "event": "path",
                    "message": "Condition \"num < line->xattrs->num\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1040,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1031,
                    "event": "path",
                    "message": "Condition \"num < line->xattrs->num\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1035,
                    "event": "check_return",
                    "message": "Calling \"dofprintf(\",\")\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writeline_file",
            "language": "c/c++",
            "key_event_idx": 10,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_selinux\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1044,
                    "event": "check_return",
                    "message": "Calling \"db_write_byte_base64((byte *)line->cntx, 0UL, dbconf->db_out, i, 1ULL, 1ULL)\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writeline_file",
            "language": "c/c++",
            "key_event_idx": 10,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_e2fsattrs\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1049,
                    "event": "check_return",
                    "message": "Calling \"db_writelong(line->e2fsattrs, dbconf->db_out, i)\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writeline_file",
            "language": "c/c++",
            "key_event_idx": 10,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_checkmask\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1054,
                    "event": "check_return",
                    "message": "Calling \"db_writeoct(line->attr, dbconf->db_out, i)\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "db_writeline_file",
            "language": "c/c++",
            "key_event_idx": 9,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 876,
                    "event": "path",
                    "message": "Switch case value \"db_filename\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 879,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1065,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 875,
                    "event": "path",
                    "message": "Condition \"i < dbconf->db_out_size\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 1067,
                    "event": "check_return",
                    "message": "Calling \"dofprintf(\"\\n\")\" without checking return value. It wraps a library function that may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "FORWARD_NULL",
            "cwe": 476,
            "function": "db_scan",
            "language": "c/c++",
            "key_event_idx": 7,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1004,
                    "event": "path",
                    "message": "Condition \"!yy_init\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1012,
                    "event": "path",
                    "message": "Condition \"!yy_start\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1015,
                    "event": "path",
                    "message": "Condition \"!dbin\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1018,
                    "event": "path",
                    "message": "Condition \"!dbout\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1021,
                    "event": "path",
                    "message": "Condition \"yy_buffer_stack\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1021,
                    "event": "var_compare_op",
                    "message": "Comparing \"yy_buffer_stack\" to null implies that \"yy_buffer_stack\" might be null.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1021,
                    "event": "path",
                    "message": "Condition \"!(yy_buffer_stack ? yy_buffer_stack[yy_buffer_stack_top] : NULL)\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1023,
                    "event": "var_deref_op",
                    "message": "Dereferencing null pointer \"yy_buffer_stack\".",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "FORWARD_NULL",
            "cwe": 476,
            "function": "dbrestart",
            "language": "c/c++",
            "key_event_idx": 3,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1615,
                    "event": "path",
                    "message": "Condition \"yy_buffer_stack\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1615,
                    "event": "var_compare_op",
                    "message": "Comparing \"yy_buffer_stack\" to null implies that \"yy_buffer_stack\" might be null.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1615,
                    "event": "path",
                    "message": "Condition \"!(yy_buffer_stack ? yy_buffer_stack[yy_buffer_stack_top] : NULL)\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1617,
                    "event": "var_deref_op",
                    "message": "Dereferencing null pointer \"yy_buffer_stack\".",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "FORWARD_NULL",
            "cwe": 476,
            "function": "db_switch_to_buffer",
            "language": "c/c++",
            "key_event_idx": 5,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1638,
                    "event": "path",
                    "message": "Condition \"yy_buffer_stack\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1638,
                    "event": "path",
                    "message": "Condition \"(yy_buffer_stack ? yy_buffer_stack[yy_buffer_stack_top] : NULL) == new_buffer\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1641,
                    "event": "path",
                    "message": "Condition \"yy_buffer_stack\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1641,
                    "event": "var_compare_op",
                    "message": "Comparing \"yy_buffer_stack\" to null implies that \"yy_buffer_stack\" might be null.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1641,
                    "event": "path",
                    "message": "Condition \"yy_buffer_stack ? yy_buffer_stack[yy_buffer_stack_top] : NULL\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1649,
                    "event": "var_deref_op",
                    "message": "Dereferencing null pointer \"yy_buffer_stack\".",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "FORWARD_NULL",
            "cwe": 476,
            "function": "dbpush_buffer_state",
            "language": "c/c++",
            "key_event_idx": 6,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1780,
                    "event": "path",
                    "message": "Condition \"new_buffer == NULL\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1786,
                    "event": "path",
                    "message": "Condition \"yy_buffer_stack\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1786,
                    "event": "path",
                    "message": "Condition \"yy_buffer_stack ? yy_buffer_stack[yy_buffer_stack_top] : NULL\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1795,
                    "event": "path",
                    "message": "Condition \"yy_buffer_stack\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1795,
                    "event": "var_compare_op",
                    "message": "Comparing \"yy_buffer_stack\" to null implies that \"yy_buffer_stack\" might be null.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1795,
                    "event": "path",
                    "message": "Condition \"yy_buffer_stack ? yy_buffer_stack[yy_buffer_stack_top] : NULL\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1797,
                    "event": "var_deref_op",
                    "message": "Dereferencing null pointer \"yy_buffer_stack\".",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "UNREACHABLE",
            "cwe": 561,
            "function": "calc_md",
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 342,
                    "event": "unreachable",
                    "message": "This code cannot be reached: \"{\n  if (update_md(&mdc, buf...\".",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "url_fopen",
            "language": "c/c++",
            "key_event_idx": 3,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/fopen.c",
                    "line": 187,
                    "event": "path",
                    "message": "Condition \"!file\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/fopen.c",
                    "line": 192,
                    "event": "path",
                    "message": "Condition \"file->handle.file = fopen(url, operation)\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/fopen.c",
                    "line": 199,
                    "event": "path",
                    "message": "Condition \"0\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/fopen.c",
                    "line": 199,
                    "event": "check_return",
                    "message": "Calling \"curl_easy_setopt(file->handle.curl, _curl_opt, url)\" without checking return value. This library function may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "url_fopen",
            "language": "c/c++",
            "key_event_idx": 4,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/fopen.c",
                    "line": 187,
                    "event": "path",
                    "message": "Condition \"!file\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/fopen.c",
                    "line": 192,
                    "event": "path",
                    "message": "Condition \"file->handle.file = fopen(url, operation)\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/fopen.c",
                    "line": 199,
                    "event": "path",
                    "message": "Condition \"0\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/fopen.c",
                    "line": 200,
                    "event": "path",
                    "message": "Condition \"0\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/fopen.c",
                    "line": 200,
                    "event": "check_return",
                    "message": "Calling \"curl_easy_setopt(file->handle.curl, _curl_opt, file)\" without checking return value. This library function may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "url_fopen",
            "language": "c/c++",
            "key_event_idx": 5,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/fopen.c",
                    "line": 187,
                    "event": "path",
                    "message": "Condition \"!file\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/fopen.c",
                    "line": 192,
                    "event": "path",
                    "message": "Condition \"file->handle.file = fopen(url, operation)\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/fopen.c",
                    "line": 199,
                    "event": "path",
                    "message": "Condition \"0\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/fopen.c",
                    "line": 200,
                    "event": "path",
                    "message": "Condition \"0\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/fopen.c",
                    "line": 201,
                    "event": "path",
                    "message": "Condition \"0\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/fopen.c",
                    "line": 201,
                    "event": "check_return",
                    "message": "Calling \"curl_easy_setopt(file->handle.curl, _curl_opt, 0L)\" without checking return value. This library function may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "cwe": 252,
            "function": "url_fopen",
            "language": "c/c++",
            "key_event_idx": 6,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/fopen.c",
                    "line": 187,
                    "event": "path",
                    "message": "Condition \"!file\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/fopen.c",
                    "line": 192,
                    "event": "path",
                    "message": "Condition \"file->handle.file = fopen(url, operation)\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/fopen.c",
                    "line": 199,
                    "event": "path",
                    "message": "Condition \"0\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/fopen.c",
                    "line": 200,
                    "event": "path",
                    "message": "Condition \"0\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/fopen.c",
                    "line": 201,
                    "event": "path",
                    "message": "Condition \"0\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/fopen.c",
                    "line": 202,
                    "event": "path",
                    "message": "Condition \"0\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/fopen.c",
                    "line": 202,
                    "event": "check_return",
                    "message": "Calling \"curl_easy_setopt(file->handle.curl, _curl_opt, write_callback)\" without checking return value. This library function may fail and return an error code.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "RESOURCE_LEAK",
            "cwe": 772,
            "imp": 1,
            "function": "add_file_to_tree",
            "language": "c/c++",
            "key_event_idx": 7,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 846,
                    "event": "path",
                    "message": "Condition \"file == NULL\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 852,
                    "event": "path",
                    "message": "Condition \"!node\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 853,
                    "event": "alloc_fn",
                    "message": "Storage is returned from allocation function \"new_seltree_node\".",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 853,
                    "event": "var_assign",
                    "message": "Assigning: \"node\" = storage returned from \"new_seltree_node(tree, file->filename, 0, NULL)\".",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 863,
                    "event": "path",
                    "message": "Switch case value \"1 | 4\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 874,
                    "event": "path",
                    "message": "Condition \"conf->action & (1 /* 1 << 0 */)\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 876,
                    "event": "path",
                    "message": "Falling through to end of if statement.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 881,
                    "event": "leaked_storage",
                    "message": "Variable \"node\" going out of scope leaks the storage it points to.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "RESOURCE_LEAK",
            "cwe": 772,
            "imp": 1,
            "function": "add_file_to_tree",
            "language": "c/c++",
            "key_event_idx": 16,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 846,
                    "event": "path",
                    "message": "Condition \"file == NULL\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 852,
                    "event": "path",
                    "message": "Condition \"!node\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 853,
                    "event": "alloc_fn",
                    "message": "Storage is returned from allocation function \"new_seltree_node\".",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 853,
                    "event": "var_assign",
                    "message": "Assigning: \"node\" = storage returned from \"new_seltree_node(tree, file->filename, 0, NULL)\".",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 863,
                    "event": "path",
                    "message": "Switch case value \"1 << 0\".",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 866,
                    "event": "path",
                    "message": "Breaking from switch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 889,
                    "event": "path",
                    "message": "Condition \"node->checked & (1 /* 1 << 0 */)\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 889,
                    "event": "path",
                    "message": "Condition \"node->checked & (4 /* 1 << 2 */)\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 923,
                    "event": "path",
                    "message": "Condition \"node->old_data != NULL\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 923,
                    "event": "path",
                    "message": "Condition \"file->attr & (134217728ULL /* 1ULL << 27 */)\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 930,
                    "event": "path",
                    "message": "Condition \"db == (1 /* 1 << 0 */)\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 931,
                    "event": "path",
                    "message": "Condition \"moved_node == NULL\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 962,
                    "event": "path",
                    "message": "Condition \"db == (4 /* 1 << 2 */)\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 967,
                    "event": "path",
                    "message": "Condition \"db == (1 /* 1 << 0 */)\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 967,
                    "event": "path",
                    "message": "Condition \"node->old_data != NULL\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 967,
                    "event": "path",
                    "message": "Condition \"file->attr & (536870912ULL /* 1ULL << 29 */)\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 972,
                    "event": "leaked_storage",
                    "message": "Variable \"node\" going out of scope leaks the storage it points to.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "RESOURCE_LEAK",
            "cwe": 772,
            "imp": 1,
            "function": "populate_tree",
            "language": "c/c++",
            "key_event_idx": 16,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1147,
                    "event": "path",
                    "message": "Condition \"conf->action & (1 /* 1 << 0 */)\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1151,
                    "event": "path",
                    "message": "Condition \"conf->action & (4 /* 1 << 2 */)\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1152,
                    "event": "path",
                    "message": "Condition \"(new = db_readline(4 /* 1 << 2 */)) != NULL\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1173,
                    "event": "path",
                    "message": "Condition \"conf->action & (1 /* 1 << 0 */)\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1176,
                    "event": "path",
                    "message": "Condition \"(new = db_readline(256 /* 1 << 8 */)) != NULL\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1180,
                    "event": "path",
                    "message": "Condition \"conf->action & (2 /* 1 << 1 */)\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1181,
                    "event": "path",
                    "message": "Condition \"(old = db_readline(1 /* 1 << 0 */)) != NULL\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1184,
                    "event": "path",
                    "message": "Condition \"(node = get_seltree_node(tree, old->filename)) == NULL\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1185,
                    "event": "alloc_fn",
                    "message": "Storage is returned from allocation function \"new_seltree_node\".",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1185,
                    "event": "var_assign",
                    "message": "Assigning: \"node\" = storage returned from \"new_seltree_node(tree, old->filename, 0, NULL)\".",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1188,
                    "event": "path",
                    "message": "Condition \"add > 0\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1190,
                    "event": "path",
                    "message": "Condition \"conf->limit != NULL\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1190,
                    "event": "path",
                    "message": "Condition \"add < 0\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1196,
                    "event": "path",
                    "message": "Condition \"!initdbwarningprinted\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1201,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1181,
                    "event": "path",
                    "message": "Condition \"(old = db_readline(1 /* 1 << 0 */)) != NULL\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1184,
                    "event": "overwrite_var",
                    "message": "Overwriting \"node\" in \"node = get_seltree_node(tree, old->filename)\" leaks the storage that \"node\" points to.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "RESOURCE_LEAK",
            "cwe": 772,
            "imp": 1,
            "function": "populate_tree",
            "language": "c/c++",
            "key_event_idx": 17,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1147,
                    "event": "path",
                    "message": "Condition \"conf->action & (1 /* 1 << 0 */)\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1151,
                    "event": "path",
                    "message": "Condition \"conf->action & (4 /* 1 << 2 */)\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1152,
                    "event": "path",
                    "message": "Condition \"(new = db_readline(4 /* 1 << 2 */)) != NULL\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1173,
                    "event": "path",
                    "message": "Condition \"conf->action & (1 /* 1 << 0 */)\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1176,
                    "event": "path",
                    "message": "Condition \"(new = db_readline(256 /* 1 << 8 */)) != NULL\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1180,
                    "event": "path",
                    "message": "Condition \"conf->action & (2 /* 1 << 1 */)\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1181,
                    "event": "path",
                    "message": "Condition \"(old = db_readline(1 /* 1 << 0 */)) != NULL\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1184,
                    "event": "path",
                    "message": "Condition \"(node = get_seltree_node(tree, old->filename)) == NULL\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1185,
                    "event": "alloc_fn",
                    "message": "Storage is returned from allocation function \"new_seltree_node\".",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1185,
                    "event": "var_assign",
                    "message": "Assigning: \"node\" = storage returned from \"new_seltree_node(tree, old->filename, 0, NULL)\".",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1188,
                    "event": "path",
                    "message": "Condition \"add > 0\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1190,
                    "event": "path",
                    "message": "Condition \"conf->limit != NULL\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1190,
                    "event": "path",
                    "message": "Condition \"add < 0\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1196,
                    "event": "path",
                    "message": "Condition \"!initdbwarningprinted\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1201,
                    "event": "path",
                    "message": "Jumping back to the beginning of the loop.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1181,
                    "event": "path",
                    "message": "Condition \"(old = db_readline(1 /* 1 << 0 */)) != NULL\", taking false branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1203,
                    "event": "path",
                    "message": "Condition \"conf->action & (1 /* 1 << 0 */)\", taking true branch.",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1206,
                    "event": "leaked_storage",
                    "message": "Variable \"node\" going out of scope leaks the storage it points to.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CONSTANT_EXPRESSION_RESULT",
            "cwe": 569,
            "function": "fread",
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/usr/include/bits/stdio2.h",
                    "line": 294,
                    "event": "pointless_expression",
                    "message": "The expression \"1 /* !0 */ || 1 /* !0 */\" does not accomplish anything because it evaluates to either of its identical operands, \"1 /* !0 */\".",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "/usr/include/bits/stdio2.h",
                    "line": 294,
                    "event": "remediation",
                    "message": "Did you intend the operands to be different?",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 476,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'acl2line'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 485,
                    "column": 18,
                    "event": "warning[-Wanalyzer-possible-null-dereference]",
                    "message": "dereference of possibly-NULL 'ret'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  485 |       ret->acl_a = NULL;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                  ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 458,
                    "column": 5,
                    "event": "note",
                    "message": "(1) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  458 |   if(DB_ACL&line->attr) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 463,
                    "column": 30,
                    "event": "note",
                    "message": "(2) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  463 |     acl_a = acl_get_file(line->fullpath, ACL_TYPE_ACCESS);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                          ~~~~^~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 480,
                    "column": 11,
                    "event": "note",
                    "message": "(3) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  480 |     ret = malloc(sizeof(acl_type));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 485,
                    "column": 18,
                    "event": "note",
                    "message": "(4) 'ret' could be NULL: unchecked value from (3)",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  485 |       ret->acl_a = NULL;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                  ^",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 476,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 487,
                    "column": 18,
                    "event": "warning[-Wanalyzer-possible-null-dereference]",
                    "message": "dereference of possibly-NULL 'ret'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  487 |       ret->acl_a = strdup(tmp);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ~~~~~~~~~~~^~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 458,
                    "column": 5,
                    "event": "note",
                    "message": "(1) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  458 |   if(DB_ACL&line->attr) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 463,
                    "column": 30,
                    "event": "note",
                    "message": "(2) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  463 |     acl_a = acl_get_file(line->fullpath, ACL_TYPE_ACCESS);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                          ~~~~^~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 480,
                    "column": 11,
                    "event": "note",
                    "message": "(3) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  480 |     ret = malloc(sizeof(acl_type));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 484,
                    "column": 8,
                    "event": "note",
                    "message": "(4) following 'false' branch (when 'tmp' is non-NULL)...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  484 |     if (!tmp || !*tmp)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 484,
                    "column": 18,
                    "event": "note",
                    "message": "(5) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  484 |     if (!tmp || !*tmp)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                  ^~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 484,
                    "column": 14,
                    "event": "note",
                    "message": "(6) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  484 |     if (!tmp || !*tmp)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ~~~~~^~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 487,
                    "column": 20,
                    "event": "note",
                    "message": "(7) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  487 |       ret->acl_a = strdup(tmp);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 487,
                    "column": 18,
                    "event": "note",
                    "message": "(8) 'ret' could be NULL: unchecked value from (3)",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  487 |       ret->acl_a = strdup(tmp);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ~~~~~~~~~~~^~~~~~~~~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 476,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'xattr_new'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 543,
                    "column": 14,
                    "event": "warning[-Wanalyzer-possible-null-dereference]",
                    "message": "dereference of possibly-NULL 'ret'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  543 |     ret->num = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ~~~~~~~~~^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 575,
                    "column": 6,
                    "event": "note",
                    "message": "(1) entry to 'xattrs2line'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  575 | void xattrs2line(db_line *line) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 582,
                    "column": 8,
                    "event": "note",
                    "message": "(2) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  582 |     if (!(DB_XATTRS&line->attr))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 586,
                    "column": 9,
                    "event": "note",
                    "message": "(3) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  586 |     if (!xatrs) xatrs = malloc(xsz);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 595,
                    "column": 15,
                    "event": "note",
                    "message": "(4) following 'false' branch (when 'xret != -1')...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  595 |     } else if (xret == -1) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 597,
                    "column": 15,
                    "event": "note",
                    "message": "(5) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  597 |     } else if (xret) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 597,
                    "column": 15,
                    "event": "note",
                    "message": "(6) following 'true' branch (when 'xret != 0')...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 598,
                    "column": 21,
                    "event": "note",
                    "message": "(7) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  598 |         const char *attr = xatrs;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 602,
                    "column": 12,
                    "event": "note",
                    "message": "(8) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  602 |         if (!val) val = malloc(asz);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 604,
                    "column": 18,
                    "event": "note",
                    "message": "(9) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604 |         xattrs = xattr_new();",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                  ^~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 604,
                    "column": 18,
                    "event": "note",
                    "message": "(10) calling 'xattr_new' from 'xattrs2line'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 539,
                    "column": 21,
                    "event": "note",
                    "message": "(11) entry to 'xattr_new'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  539 | static xattrs_type *xattr_new(void) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 542,
                    "column": 11,
                    "event": "note",
                    "message": "(12) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  542 |     ret = malloc(sizeof(xattrs_type));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 543,
                    "column": 14,
                    "event": "note",
                    "message": "(13) 'ret' could be NULL: unchecked value from (12)",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  543 |     ret->num = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ~~~~~~~~~^~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 401,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'xattr_add'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 554,
                    "column": 11,
                    "event": "warning[-Wanalyzer-malloc-leak]",
                    "message": "leak of '<unknown>'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  554 |     ret = malloc(len+1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 575,
                    "column": 6,
                    "event": "note",
                    "message": "(1) entry to 'xattrs2line'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  575 | void xattrs2line(db_line *line) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 582,
                    "column": 8,
                    "event": "note",
                    "message": "(2) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  582 |     if (!(DB_XATTRS&line->attr))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 586,
                    "column": 9,
                    "event": "note",
                    "message": "(3) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  586 |     if (!xatrs) xatrs = malloc(xsz);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 595,
                    "column": 15,
                    "event": "note",
                    "message": "(4) following 'false' branch (when 'xret != -1')...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  595 |     } else if (xret == -1) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 597,
                    "column": 15,
                    "event": "note",
                    "message": "(5) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  597 |     } else if (xret) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 597,
                    "column": 15,
                    "event": "note",
                    "message": "(6) following 'true' branch (when 'xret != 0')...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 598,
                    "column": 21,
                    "event": "note",
                    "message": "(7) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  598 |         const char *attr = xatrs;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 606,
                    "column": 15,
                    "event": "note",
                    "message": "(8) following 'true' branch (when 'xret > 0')...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606 |         while (xret > 0) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 607,
                    "column": 26,
                    "event": "note",
                    "message": "(9) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607 |             size_t len = strlen(attr);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                          ^~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 614,
                    "column": 19,
                    "event": "note",
                    "message": "(10) following 'false' branch (when 'aret != -1')...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  614 |             while (((aret = getxattr(line->fullpath, attr, val, asz)) ==",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 620,
                    "column": 16,
                    "event": "note",
                    "message": "(11) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  620 |             if (aret != -1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 620,
                    "column": 16,
                    "event": "note",
                    "message": "(12) following 'true' branch (when 'aret != -1')...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 621,
                    "column": 17,
                    "event": "note",
                    "message": "(13) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  621 |                 xattr_add(xattrs, attr, val, aret);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 621,
                    "column": 17,
                    "event": "note",
                    "message": "(14) calling 'xattr_add' from 'xattrs2line'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 561,
                    "column": 13,
                    "event": "note",
                    "message": "(15) entry to 'xattr_add'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  561 | static void xattr_add(xattrs_type *xattrs, const char *key, const char",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 563,
                    "column": 8,
                    "event": "note",
                    "message": "(16) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  563 |     if (xattrs->num >= xattrs->sz) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 568,
                    "column": 11,
                    "event": "note",
                    "message": "(17) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  568 |     xattrs->ents[xattrs->num].key = strdup(key);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ~~~~~~^~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 568,
                    "column": 11,
                    "event": "note",
                    "message": "(18) allocated here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 554,
                    "column": 11,
                    "event": "note",
                    "message": "(19) '<unknown>' leaks here; was allocated at (18)",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  554 |     ret = malloc(len+1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 688,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'xzmemdup'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 555,
                    "column": 5,
                    "event": "warning[-Wanalyzer-possible-null-argument]",
                    "message": "use of possibly-NULL 'ret' where non-null expected",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  555 |     memcpy(ret, ptr, len);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 575,
                    "column": 6,
                    "event": "note",
                    "message": "(1) entry to 'xattrs2line'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  575 | void xattrs2line(db_line *line) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 582,
                    "column": 8,
                    "event": "note",
                    "message": "(2) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  582 |     if (!(DB_XATTRS&line->attr))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 586,
                    "column": 9,
                    "event": "note",
                    "message": "(3) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  586 |     if (!xatrs) xatrs = malloc(xsz);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 595,
                    "column": 15,
                    "event": "note",
                    "message": "(4) following 'false' branch (when 'xret != -1')...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  595 |     } else if (xret == -1) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 597,
                    "column": 15,
                    "event": "note",
                    "message": "(5) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  597 |     } else if (xret) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 597,
                    "column": 15,
                    "event": "note",
                    "message": "(6) following 'true' branch (when 'xret != 0')...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 598,
                    "column": 21,
                    "event": "note",
                    "message": "(7) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  598 |         const char *attr = xatrs;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 606,
                    "column": 15,
                    "event": "note",
                    "message": "(8) following 'true' branch (when 'xret > 0')...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606 |         while (xret > 0) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 607,
                    "column": 26,
                    "event": "note",
                    "message": "(9) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607 |             size_t len = strlen(attr);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                          ^~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 614,
                    "column": 19,
                    "event": "note",
                    "message": "(10) following 'false' branch (when 'aret != -1')...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  614 |             while (((aret = getxattr(line->fullpath, attr, val, asz)) ==",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 620,
                    "column": 16,
                    "event": "note",
                    "message": "(11) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  620 |             if (aret != -1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 620,
                    "column": 16,
                    "event": "note",
                    "message": "(12) following 'true' branch (when 'aret != -1')...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 621,
                    "column": 17,
                    "event": "note",
                    "message": "(13) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  621 |                 xattr_add(xattrs, attr, val, aret);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 621,
                    "column": 17,
                    "event": "note",
                    "message": "(14) calling 'xattr_add' from 'xattrs2line'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 561,
                    "column": 13,
                    "event": "note",
                    "message": "(15) entry to 'xattr_add'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  561 | static void xattr_add(xattrs_type *xattrs, const char *key, const char",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 563,
                    "column": 8,
                    "event": "note",
                    "message": "(16) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  563 |     if (xattrs->num >= xattrs->sz) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 568,
                    "column": 11,
                    "event": "note",
                    "message": "(17) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  568 |     xattrs->ents[xattrs->num].key = strdup(key);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ~~~~~~^~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 569,
                    "column": 37,
                    "event": "note",
                    "message": "(18) calling 'xzmemdup' from 'xattr_add'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  569 |     xattrs->ents[xattrs->num].val = xzmemdup(val, vsz);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                     ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 550,
                    "column": 14,
                    "event": "note",
                    "message": "(19) entry to 'xzmemdup'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  550 | static void *xzmemdup(const void *ptr, size_t len) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 554,
                    "column": 11,
                    "event": "note",
                    "message": "(20) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  554 |     ret = malloc(len+1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 555,
                    "column": 5,
                    "event": "note",
                    "message": "(21) argument 1 ('ret') from (20) could be NULL where non-null expected",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  555 |     memcpy(ret, ptr, len);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/do_md.c",
                    "line": 32,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/include/string.h",
                    "line": 43,
                    "column": 14,
                    "event": "note",
                    "message": "argument 1 of 'memcpy' must be non-null",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43 | extern void *memcpy (void *__restrict __dest, const void *__restrict __src,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 476,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/md.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'md2line'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/md.c",
                    "line": 448,
                    "column": 7,
                    "event": "warning[-Wanalyzer-possible-null-dereference]",
                    "message": "dereference of possibly-NULL '<unknown>'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  448 |       memcpy(line->b,md->b,c); \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/md.c",
                    "line": 455,
                    "column": 3,
                    "event": "note",
                    "message": "in expansion of macro 'copyhash'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  455 |   copyhash(DB_MD5,md5,HASH_MD5_LEN);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/md.c",
                    "line": 443,
                    "column": 6,
                    "event": "note",
                    "message": "(1) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  443 |   if (line->attr&a) {          \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/md.c",
                    "line": 455,
                    "column": 3,
                    "event": "note",
                    "message": "in expansion of macro 'copyhash'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  455 |   copyhash(DB_MD5,md5,HASH_MD5_LEN);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/md.c",
                    "line": 444,
                    "column": 5,
                    "event": "note",
                    "message": "(2) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  444 |     error(255,\"Line has %llu\\n\",a); \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/md.c",
                    "line": 455,
                    "column": 3,
                    "event": "note",
                    "message": "in expansion of macro 'copyhash'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  455 |   copyhash(DB_MD5,md5,HASH_MD5_LEN);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/md.c",
                    "line": 445,
                    "column": 8,
                    "event": "note",
                    "message": "(3) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  445 |     if (md->calc_attr&a) {     \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/md.c",
                    "line": 455,
                    "column": 3,
                    "event": "note",
                    "message": "in expansion of macro 'copyhash'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  455 |   copyhash(DB_MD5,md5,HASH_MD5_LEN);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/md.c",
                    "line": 446,
                    "column": 7,
                    "event": "note",
                    "message": "(4) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  446 |       error(255,\"copying %llu\\n\",a); \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/md.c",
                    "line": 455,
                    "column": 3,
                    "event": "note",
                    "message": "in expansion of macro 'copyhash'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  455 |   copyhash(DB_MD5,md5,HASH_MD5_LEN);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/md.c",
                    "line": 446,
                    "column": 7,
                    "event": "note",
                    "message": "(5) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  446 |       error(255,\"copying %llu\\n\",a); \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/md.c",
                    "line": 455,
                    "column": 3,
                    "event": "note",
                    "message": "in expansion of macro 'copyhash'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  455 |   copyhash(DB_MD5,md5,HASH_MD5_LEN);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/md.c",
                    "line": 448,
                    "column": 7,
                    "event": "note",
                    "message": "(6) '<unknown>' could be NULL: unchecked value from (5)",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  448 |       memcpy(line->b,md->b,c); \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/md.c",
                    "line": 455,
                    "column": 3,
                    "event": "note",
                    "message": "in expansion of macro 'copyhash'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  455 |   copyhash(DB_MD5,md5,HASH_MD5_LEN);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 688,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/md.c",
                    "line": 448,
                    "column": 7,
                    "event": "warning[-Wanalyzer-possible-null-argument]",
                    "message": "use of possibly-NULL '<unknown>' where non-null expected",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  448 |       memcpy(line->b,md->b,c); \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/md.c",
                    "line": 456,
                    "column": 3,
                    "event": "note",
                    "message": "in expansion of macro 'copyhash'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  456 |   copyhash(DB_SHA1,sha1,HASH_SHA1_LEN);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/md.c",
                    "line": 443,
                    "column": 6,
                    "event": "note",
                    "message": "(1) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  443 |   if (line->attr&a) {          \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/md.c",
                    "line": 456,
                    "column": 3,
                    "event": "note",
                    "message": "in expansion of macro 'copyhash'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  456 |   copyhash(DB_SHA1,sha1,HASH_SHA1_LEN);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/md.c",
                    "line": 444,
                    "column": 5,
                    "event": "note",
                    "message": "(2) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  444 |     error(255,\"Line has %llu\\n\",a); \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/md.c",
                    "line": 456,
                    "column": 3,
                    "event": "note",
                    "message": "in expansion of macro 'copyhash'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  456 |   copyhash(DB_SHA1,sha1,HASH_SHA1_LEN);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/md.c",
                    "line": 445,
                    "column": 8,
                    "event": "note",
                    "message": "(3) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  445 |     if (md->calc_attr&a) {     \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/md.c",
                    "line": 456,
                    "column": 3,
                    "event": "note",
                    "message": "in expansion of macro 'copyhash'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  456 |   copyhash(DB_SHA1,sha1,HASH_SHA1_LEN);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/md.c",
                    "line": 446,
                    "column": 7,
                    "event": "note",
                    "message": "(4) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  446 |       error(255,\"copying %llu\\n\",a); \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/md.c",
                    "line": 456,
                    "column": 3,
                    "event": "note",
                    "message": "in expansion of macro 'copyhash'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  456 |   copyhash(DB_SHA1,sha1,HASH_SHA1_LEN);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/md.c",
                    "line": 446,
                    "column": 7,
                    "event": "note",
                    "message": "(5) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  446 |       error(255,\"copying %llu\\n\",a); \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/md.c",
                    "line": 456,
                    "column": 3,
                    "event": "note",
                    "message": "in expansion of macro 'copyhash'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  456 |   copyhash(DB_SHA1,sha1,HASH_SHA1_LEN);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/md.c",
                    "line": 448,
                    "column": 7,
                    "event": "note",
                    "message": "(6) argument 1 ('<unknown>') from (5) could be NULL where non-null expected",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  448 |       memcpy(line->b,md->b,c); \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/md.c",
                    "line": 456,
                    "column": 3,
                    "event": "note",
                    "message": "in expansion of macro 'copyhash'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  456 |   copyhash(DB_SHA1,sha1,HASH_SHA1_LEN);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/include/gcrypt.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/include/md.h",
                    "line": 47,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/md.c",
                    "line": 24,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/include/string.h",
                    "line": 43,
                    "column": 14,
                    "event": "note",
                    "message": "argument 1 of 'memcpy' must be non-null",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43 | extern void *memcpy (void *__restrict __dest, const void *__restrict __src,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 476,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'new_seltree_node'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 453,
                    "column": 15,
                    "event": "warning[-Wanalyzer-possible-null-dereference]",
                    "message": "dereference of possibly-NULL 'node'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  453 |   node->childs=NULL;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 452,
                    "column": 18,
                    "event": "note",
                    "message": "(1) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  452 |   node=(seltree*)malloc(sizeof(seltree));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                  ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 453,
                    "column": 15,
                    "event": "note",
                    "message": "(2) 'node' could be NULL: unchecked value from (1)",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  453 |   node->childs=NULL;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "CLANG_WARNING",
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1160,
                    "column": 6,
                    "event": "warning[deadcode.DeadStores]",
                    "message": "Although the value stored to 'node' is used in the enclosing expression, the value is never actually read from 'node'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if((node=get_seltree_node(tree,new->filename))==NULL){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ^    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1160,
                    "column": 6,
                    "event": "note",
                    "message": "Although the value stored to 'node' is used in the enclosing expression, the value is never actually read from 'node'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if((node=get_seltree_node(tree,new->filename))==NULL){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ^    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "CLANG_WARNING",
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1161,
                    "column": 4,
                    "event": "warning[deadcode.DeadStores]",
                    "message": "Value stored to 'node' is never read",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          node=new_seltree_node(tree,new->filename,0,NULL);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ^    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1161,
                    "column": 4,
                    "event": "note",
                    "message": "Value stored to 'node' is never read",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          node=new_seltree_node(tree,new->filename,0,NULL);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ^    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "CLANG_WARNING",
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1163,
                    "column": 6,
                    "event": "warning[deadcode.DeadStores]",
                    "message": "Although the value stored to 'add' is used in the enclosing expression, the value is never actually read from 'add'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if((add=check_rxtree(new->filename,tree,&attr, new->perm))>0){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ^   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1163,
                    "column": 6,
                    "event": "note",
                    "message": "Although the value stored to 'add' is used in the enclosing expression, the value is never actually read from 'add'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if((add=check_rxtree(new->filename,tree,&attr, new->perm))>0){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ^   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "CLANG_WARNING",
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1184,
                    "column": 21,
                    "event": "warning[deadcode.DeadStores]",
                    "message": "Although the value stored to 'node' is used in the enclosing expression, the value is never actually read from 'node'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                if((node=get_seltree_node(tree,old->filename))==NULL){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1184,
                    "column": 21,
                    "event": "note",
                    "message": "Although the value stored to 'node' is used in the enclosing expression, the value is never actually read from 'node'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                if((node=get_seltree_node(tree,old->filename))==NULL){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "CLANG_WARNING",
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1185,
                    "column": 21,
                    "event": "warning[deadcode.DeadStores]",
                    "message": "Value stored to 'node' is never read",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    node=new_seltree_node(tree,old->filename,0,NULL);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/gen_list.c",
                    "line": 1185,
                    "column": 21,
                    "event": "note",
                    "message": "Value stored to 'node' is never read",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    node=new_seltree_node(tree,old->filename,0,NULL);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 476,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 87,
                    "column": 10,
                    "event": "warning[-Wanalyzer-possible-null-dereference]",
                    "message": "dereference of possibly-NULL 'u'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   87 |   u->type=url_unknown;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~~~~^~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 73,
                    "column": 5,
                    "event": "note",
                    "message": "(1) following 'false' branch (when 'val' is non-NULL)...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73 |   if(val==NULL){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 77,
                    "column": 13,
                    "event": "note",
                    "message": "(2) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77 |   u=(url_t*)malloc(sizeof(url_t));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 77,
                    "column": 13,
                    "event": "note",
                    "message": "(3) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 87,
                    "column": 10,
                    "event": "note",
                    "message": "(4) 'u' could be NULL: unchecked value from (3)",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   87 |   u->type=url_unknown;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~~~~^~~~~~~~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 401,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 108,
                    "column": 9,
                    "event": "warning[-Wanalyzer-malloc-leak]",
                    "message": "leak of 'u'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  108 |         free(hostname);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 73,
                    "column": 5,
                    "event": "note",
                    "message": "(1) following 'false' branch (when 'val' is non-NULL)...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73 |   if(val==NULL){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 77,
                    "column": 13,
                    "event": "note",
                    "message": "(2) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77 |   u=(url_t*)malloc(sizeof(url_t));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 77,
                    "column": 13,
                    "event": "note",
                    "message": "(3) allocated here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 87,
                    "column": 10,
                    "event": "note",
                    "message": "(4) assuming 'u' is non-NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   87 |   u->type=url_unknown;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~~~~^~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 88,
                    "column": 3,
                    "event": "note",
                    "message": "(5) following 'true' branch (when 'i != 11')...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88 |   for(i=0;i<url_ntypes;i++){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 89,
                    "column": 8,
                    "event": "note",
                    "message": "(6) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89 |     if(strcmp(val_copy,url_name[i])==0){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 95,
                    "column": 3,
                    "event": "note",
                    "message": "(7) following 'case 0:' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95 |   switch (u->type) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 96,
                    "column": 3,
                    "event": "note",
                    "message": "(8) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96 |   case url_file : {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 97,
                    "column": 7,
                    "event": "note",
                    "message": "(9) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97 |     if(r[0]=='/'&&(r+1)[0]=='/'&&(r+2)[0]=='/'){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 97,
                    "column": 24,
                    "event": "note",
                    "message": "(10) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97 |     if(r[0]=='/'&&(r+1)[0]=='/'&&(r+2)[0]=='/'){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ~~~~~^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 97,
                    "column": 17,
                    "event": "note",
                    "message": "(11) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97 |     if(r[0]=='/'&&(r+1)[0]=='/'&&(r+2)[0]=='/'){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ~~~~~~~~~^~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 97,
                    "column": 39,
                    "event": "note",
                    "message": "(12) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97 |     if(r[0]=='/'&&(r+1)[0]=='/'&&(r+2)[0]=='/'){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                  ~~~~~^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 97,
                    "column": 32,
                    "event": "note",
                    "message": "(13) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97 |     if(r[0]=='/'&&(r+1)[0]=='/'&&(r+2)[0]=='/'){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ~~~~~~~~~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 101,
                    "column": 7,
                    "event": "note",
                    "message": "(14) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101 |     if(r[0]=='/'&&(r+1)[0]=='/'&&(r+2)[0]!='/'){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 101,
                    "column": 7,
                    "event": "note",
                    "message": "(15) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 101,
                    "column": 24,
                    "event": "note",
                    "message": "(16) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101 |     if(r[0]=='/'&&(r+1)[0]=='/'&&(r+2)[0]!='/'){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ~~~~~^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 101,
                    "column": 17,
                    "event": "note",
                    "message": "(17) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101 |     if(r[0]=='/'&&(r+1)[0]=='/'&&(r+2)[0]!='/'){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ~~~~~~~~~^~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 101,
                    "column": 39,
                    "event": "note",
                    "message": "(18) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101 |     if(r[0]=='/'&&(r+1)[0]=='/'&&(r+2)[0]!='/'){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                  ~~~~~^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 101,
                    "column": 32,
                    "event": "note",
                    "message": "(19) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101 |     if(r[0]=='/'&&(r+1)[0]=='/'&&(r+2)[0]!='/'){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ~~~~~~~~~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 102,
                    "column": 28,
                    "event": "note",
                    "message": "(20) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102 |       char*hostname=(char*)malloc(sizeof(char)*MAXHOSTNAMELEN);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                            ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 105,
                    "column": 7,
                    "event": "note",
                    "message": "(21) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105 |       for(i=0;r[0]!='/'&&r[0]!='\\0';r++,i++);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 106,
                    "column": 9,
                    "event": "note",
                    "message": "(22) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106 |       if(r[0]=='\\0'){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 108,
                    "column": 9,
                    "event": "note",
                    "message": "(23) 'u' leaks here; was allocated at (3)",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  108 |         free(hostname);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 688,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 113,
                    "column": 10,
                    "event": "warning[-Wanalyzer-possible-null-argument]",
                    "message": "use of possibly-NULL 'hostname' where non-null expected",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113 |       if(gethostname(hostname,MAXHOSTNAMELEN)==-1){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 73,
                    "column": 5,
                    "event": "note",
                    "message": "(1) following 'false' branch (when 'val' is non-NULL)...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73 |   if(val==NULL){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 77,
                    "column": 13,
                    "event": "note",
                    "message": "(2) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77 |   u=(url_t*)malloc(sizeof(url_t));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 88,
                    "column": 3,
                    "event": "note",
                    "message": "(3) following 'true' branch (when 'i != 11')...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88 |   for(i=0;i<url_ntypes;i++){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 89,
                    "column": 8,
                    "event": "note",
                    "message": "(4) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89 |     if(strcmp(val_copy,url_name[i])==0){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 89,
                    "column": 7,
                    "event": "note",
                    "message": "(5) following 'true' branch (when the strings are equal)...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89 |     if(strcmp(val_copy,url_name[i])==0){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 90,
                    "column": 24,
                    "event": "note",
                    "message": "(6) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90 |       u->type=url_value[i];",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ~~~~~~~~~^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 95,
                    "column": 3,
                    "event": "note",
                    "message": "(7) following 'case 0:' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95 |   switch (u->type) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 96,
                    "column": 3,
                    "event": "note",
                    "message": "(8) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96 |   case url_file : {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 97,
                    "column": 7,
                    "event": "note",
                    "message": "(9) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97 |     if(r[0]=='/'&&(r+1)[0]=='/'&&(r+2)[0]=='/'){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 97,
                    "column": 24,
                    "event": "note",
                    "message": "(10) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97 |     if(r[0]=='/'&&(r+1)[0]=='/'&&(r+2)[0]=='/'){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ~~~~~^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 97,
                    "column": 17,
                    "event": "note",
                    "message": "(11) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97 |     if(r[0]=='/'&&(r+1)[0]=='/'&&(r+2)[0]=='/'){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ~~~~~~~~~^~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 97,
                    "column": 39,
                    "event": "note",
                    "message": "(12) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97 |     if(r[0]=='/'&&(r+1)[0]=='/'&&(r+2)[0]=='/'){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                  ~~~~~^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 97,
                    "column": 32,
                    "event": "note",
                    "message": "(13) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97 |     if(r[0]=='/'&&(r+1)[0]=='/'&&(r+2)[0]=='/'){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ~~~~~~~~~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 101,
                    "column": 7,
                    "event": "note",
                    "message": "(14) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101 |     if(r[0]=='/'&&(r+1)[0]=='/'&&(r+2)[0]!='/'){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 101,
                    "column": 7,
                    "event": "note",
                    "message": "(15) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 101,
                    "column": 24,
                    "event": "note",
                    "message": "(16) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101 |     if(r[0]=='/'&&(r+1)[0]=='/'&&(r+2)[0]!='/'){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ~~~~~^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 101,
                    "column": 17,
                    "event": "note",
                    "message": "(17) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101 |     if(r[0]=='/'&&(r+1)[0]=='/'&&(r+2)[0]!='/'){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ~~~~~~~~~^~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 101,
                    "column": 39,
                    "event": "note",
                    "message": "(18) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101 |     if(r[0]=='/'&&(r+1)[0]=='/'&&(r+2)[0]!='/'){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                  ~~~~~^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 101,
                    "column": 32,
                    "event": "note",
                    "message": "(19) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101 |     if(r[0]=='/'&&(r+1)[0]=='/'&&(r+2)[0]!='/'){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ~~~~~~~~~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 102,
                    "column": 28,
                    "event": "note",
                    "message": "(20) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102 |       char*hostname=(char*)malloc(sizeof(char)*MAXHOSTNAMELEN);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                            ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 102,
                    "column": 28,
                    "event": "note",
                    "message": "(21) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 105,
                    "column": 7,
                    "event": "note",
                    "message": "(22) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105 |       for(i=0;r[0]!='/'&&r[0]!='\\0';r++,i++);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 106,
                    "column": 9,
                    "event": "note",
                    "message": "(23) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106 |       if(r[0]=='\\0'){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 106,
                    "column": 9,
                    "event": "note",
                    "message": "(24) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 111,
                    "column": 16,
                    "event": "note",
                    "message": "(25) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111 |       u->value=strdup(r);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 113,
                    "column": 10,
                    "event": "note",
                    "message": "(26) argument 1 ('hostname') from (21) could be NULL where non-null expected",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113 |       if(gethostname(hostname,MAXHOSTNAMELEN)==-1){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/include/db_config.h",
                    "line": 26,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/include/aide.h",
                    "line": 26,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/include/unistd.h",
                    "line": 891,
                    "column": 12,
                    "event": "note",
                    "message": "argument 1 of 'gethostname' must be non-null",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  891 | extern int gethostname (char *__name, size_t __len) __THROW __nonnull ((1))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^~~~~~~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 476,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 214,
                    "column": 14,
                    "event": "warning[-Wanalyzer-possible-null-dereference]",
                    "message": "dereference of possibly-NULL 'p'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  214 |         *p++ = '%';",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ~~~~~^~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 202,
                    "column": 3,
                    "event": "note",
                    "message": "(1) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  202 |   for (i = 0; *s; s++, i++){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 208,
                    "column": 27,
                    "event": "note",
                    "message": "(2) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  208 |   res = (char *)malloc (i + 1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ~~^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 208,
                    "column": 27,
                    "event": "note",
                    "message": "(3) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 210,
                    "column": 3,
                    "event": "note",
                    "message": "(4) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  210 |   for (p = res; *s; s++){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 211,
                    "column": 9,
                    "event": "note",
                    "message": "(5) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  211 |     if (strchr (URL_UNSAFE, *s)||!ISPRINT((int)*s))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 211,
                    "column": 8,
                    "event": "note",
                    "message": "(6) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  211 |     if (strchr (URL_UNSAFE, *s)||!ISPRINT((int)*s))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 213,
                    "column": 29,
                    "event": "note",
                    "message": "(7) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  213 |         const unsigned char c = *s;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 214,
                    "column": 14,
                    "event": "note",
                    "message": "(8) 'p' could be NULL: unchecked value from (3)",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  214 |         *p++ = '%';",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ~~~~~^~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 476,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 219,
                    "column": 12,
                    "event": "warning[-Wanalyzer-possible-null-dereference]",
                    "message": "dereference of possibly-NULL 'p'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219 |       *p++ = *s;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ~~~~~^~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 202,
                    "column": 3,
                    "event": "note",
                    "message": "(1) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  202 |   for (i = 0; *s; s++, i++){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 208,
                    "column": 27,
                    "event": "note",
                    "message": "(2) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  208 |   res = (char *)malloc (i + 1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ~~^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 208,
                    "column": 27,
                    "event": "note",
                    "message": "(3) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 210,
                    "column": 3,
                    "event": "note",
                    "message": "(4) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  210 |   for (p = res; *s; s++){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 211,
                    "column": 9,
                    "event": "note",
                    "message": "(5) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  211 |     if (strchr (URL_UNSAFE, *s)||!ISPRINT((int)*s))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 211,
                    "column": 8,
                    "event": "note",
                    "message": "(6) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  211 |     if (strchr (URL_UNSAFE, *s)||!ISPRINT((int)*s))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 211,
                    "column": 32,
                    "event": "note",
                    "message": "(7) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  211 |     if (strchr (URL_UNSAFE, *s)||!ISPRINT((int)*s))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 211,
                    "column": 32,
                    "event": "note",
                    "message": "(8) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 44,
                    "column": 35,
                    "event": "note",
                    "message": "(9) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44 | #define ISPRINT(c) (isascii(c) && isprint(c))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                   ^~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 211,
                    "column": 35,
                    "event": "note",
                    "message": "in expansion of macro 'ISPRINT'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  211 |     if (strchr (URL_UNSAFE, *s)||!ISPRINT((int)*s))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                   ^~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 211,
                    "column": 34,
                    "event": "note",
                    "message": "(10) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  211 |     if (strchr (URL_UNSAFE, *s)||!ISPRINT((int)*s))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                  ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 219,
                    "column": 9,
                    "event": "note",
                    "message": "(11) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219 |       *p++ = *s;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ~^~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 219,
                    "column": 12,
                    "event": "note",
                    "message": "(12) 'p' could be NULL: unchecked value from (3)",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219 |       *p++ = *s;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ~~~~~^~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 476,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 222,
                    "column": 6,
                    "event": "warning[-Wanalyzer-possible-null-dereference]",
                    "message": "dereference of possibly-NULL 'p'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222 |   *p = '\\0';",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~^~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 202,
                    "column": 3,
                    "event": "note",
                    "message": "(1) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  202 |   for (i = 0; *s; s++, i++){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 208,
                    "column": 27,
                    "event": "note",
                    "message": "(2) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  208 |   res = (char *)malloc (i + 1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ~~^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 208,
                    "column": 27,
                    "event": "note",
                    "message": "(3) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 210,
                    "column": 3,
                    "event": "note",
                    "message": "(4) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  210 |   for (p = res; *s; s++){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 222,
                    "column": 6,
                    "event": "note",
                    "message": "(5) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222 |   *p = '\\0';",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~^~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 222,
                    "column": 6,
                    "event": "note",
                    "message": "(6) 'p' could be NULL: unchecked value from (3)",
                    "verbosity_level": "2"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 476,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 235,
                    "column": 9,
                    "event": "warning[-Wanalyzer-possible-null-dereference]",
                    "message": "dereference of possibly-NULL 'pc'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  235 |   pc[10]='\\0';",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~~~^~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 231,
                    "column": 13,
                    "event": "note",
                    "message": "(1) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  231 |   pc=(char*)malloc(sizeof(char)*11);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 232,
                    "column": 3,
                    "event": "note",
                    "message": "(2) following 'true' branch (when 'i != 10')...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  232 |   for(i=0;i<10;i++){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 233,
                    "column": 7,
                    "event": "note",
                    "message": "(3) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  233 |     pc[i]='-';",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 232,
                    "column": 3,
                    "event": "note",
                    "message": "(4) following 'false' branch (when 'i == 10')...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  232 |   for(i=0;i<10;i++){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 235,
                    "column": 9,
                    "event": "note",
                    "message": "(5) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  235 |   pc[10]='\\0';",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~~~^~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 235,
                    "column": 9,
                    "event": "note",
                    "message": "(6) 'pc' could be NULL: unchecked value from (1)",
                    "verbosity_level": "2"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 688,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 377,
                    "column": 17,
                    "event": "warning[-Wanalyzer-possible-null-argument]",
                    "message": "use of possibly-NULL 'full' where non-null expected",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377 |                 strncpy(full, homedir, homedir_len);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 370,
                    "column": 8,
                    "event": "note",
                    "message": "(1) following 'true' branch (when 'path' is non-NULL)...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  370 |     if (path != NULL) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 371,
                    "column": 17,
                    "event": "note",
                    "message": "(2) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  371 |         if (path[0] == '~') {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ~~~~^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 371,
                    "column": 12,
                    "event": "note",
                    "message": "(3) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  371 |         if (path[0] == '~') {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 372,
                    "column": 25,
                    "event": "note",
                    "message": "(4) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  372 |             if((homedir=getenv(\"HOME\")) != NULL) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 372,
                    "column": 15,
                    "event": "note",
                    "message": "(5) following 'true' branch (when 'homedir' is non-NULL)...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  372 |             if((homedir=getenv(\"HOME\")) != NULL) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 373,
                    "column": 39,
                    "event": "note",
                    "message": "(6) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  373 |                 path_len = strlen(path+sizeof(char));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                   ~~~~^~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 373,
                    "column": 39,
                    "event": "note",
                    "message": "(7) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 377,
                    "column": 17,
                    "event": "note",
                    "message": "(8) argument 1 ('full') from (7) could be NULL where non-null expected",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377 |                 strncpy(full, homedir, homedir_len);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 25,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/include/string.h",
                    "line": 128,
                    "column": 14,
                    "event": "note",
                    "message": "argument 1 of 'strncpy' must be non-null",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128 | extern char *strncpy (char *__restrict __dest,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 377,
                    "column": 17,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "'strncpy' specified bound depends on the length of the source argument",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377 |                 strncpy(full, homedir, homedir_len);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 374,
                    "column": 31,
                    "event": "note",
                    "message": "length computed here",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  374 |                 homedir_len = strlen(homedir);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 378,
                    "column": 17,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "'strncpy' specified bound depends on the length of the source argument",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  378 |                 strncpy(full+homedir_len, path+sizeof(char), path_len);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/util.c",
                    "line": 373,
                    "column": 28,
                    "event": "note",
                    "message": "length computed here",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  373 |                 path_len = strlen(path+sizeof(char));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                            ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 688,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'read_param'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 187,
                    "column": 17,
                    "event": "warning[-Wanalyzer-possible-null-argument]",
                    "message": "use of possibly-NULL '<unknown>' where non-null expected",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  187 |                 strcpy(conf->limit,optarg);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 506,
                    "column": 5,
                    "event": "note",
                    "message": "(1) entry to 'main'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  506 | int main(int argc,char**argv)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 530,
                    "column": 5,
                    "event": "note",
                    "message": "(2) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  530 |   if(!gcry_check_version(GCRYPT_VERSION)) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 535,
                    "column": 3,
                    "event": "note",
                    "message": "(3) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  535 |   gcry_control(GCRYCTL_INITIALIZATION_FINISHED, 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 539,
                    "column": 6,
                    "event": "note",
                    "message": "(4) calling 'read_param' from 'main'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  539 |   if(read_param(argc,argv)==RETFAIL){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 94,
                    "column": 12,
                    "event": "note",
                    "message": "(5) entry to 'read_param'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   94 | static int read_param(int argc,char**argv)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 121,
                    "column": 7,
                    "event": "note",
                    "message": "(6) following 'false' branch (when 'option != -1')...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121 |     if(option==-1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 123,
                    "column": 5,
                    "event": "note",
                    "message": "(7) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123 |     switch(option)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 183,
                    "column": 16,
                    "event": "note",
                    "message": "(8) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  183 |             if (optarg!=NULL) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 186,
                    "column": 36,
                    "event": "note",
                    "message": "(9) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  186 |                 conf->limit=malloc(strlen(optarg)+1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ^~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 186,
                    "column": 36,
                    "event": "note",
                    "message": "(10) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 187,
                    "column": 17,
                    "event": "note",
                    "message": "(11) argument 1 ('<unknown>') from (10) could be NULL where non-null expected",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  187 |                 strcpy(conf->limit,optarg);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/include/gcrypt.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/include/md.h",
                    "line": 47,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/include/string.h",
                    "line": 125,
                    "column": 14,
                    "event": "note",
                    "message": "argument 1 of 'strcpy' must be non-null",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125 | extern char *strcpy (char *__restrict __dest, const char *__restrict __src)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 476,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'setdefaults_before_config'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 275,
                    "column": 16,
                    "event": "warning[-Wanalyzer-possible-null-dereference]",
                    "message": "dereference of possibly-NULL '<unknown>'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  275 |   conf->defsyms=NULL;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 506,
                    "column": 5,
                    "event": "note",
                    "message": "(1) entry to 'main'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  506 | int main(int argc,char**argv)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 517,
                    "column": 3,
                    "event": "note",
                    "message": "(2) calling 'setdefaults_before_config' from 'main'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  517 |   setdefaults_before_config();",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 264,
                    "column": 13,
                    "event": "note",
                    "message": "(3) entry to 'setdefaults_before_config'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  264 | static void setdefaults_before_config()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 274,
                    "column": 20,
                    "event": "note",
                    "message": "(4) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  274 |   conf=(db_config*)malloc(sizeof(db_config));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 275,
                    "column": 16,
                    "event": "note",
                    "message": "(5) '<unknown>' could be NULL: unchecked value from (4)",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  275 |   conf->defsyms=NULL;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 688,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 277,
                    "column": 7,
                    "event": "warning[-Wanalyzer-possible-null-argument]",
                    "message": "use of possibly-NULL 's' where non-null expected",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  277 |   if (gethostname(s,MAXHOSTNAMELEN)==-1) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 506,
                    "column": 5,
                    "event": "note",
                    "message": "(1) entry to 'main'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  506 | int main(int argc,char**argv)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 517,
                    "column": 3,
                    "event": "note",
                    "message": "(2) calling 'setdefaults_before_config' from 'main'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  517 |   setdefaults_before_config();",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 264,
                    "column": 13,
                    "event": "note",
                    "message": "(3) entry to 'setdefaults_before_config'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  264 | static void setdefaults_before_config()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 268,
                    "column": 18,
                    "event": "note",
                    "message": "(4) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  268 |   char* s=(char*)malloc(sizeof(char)*MAXHOSTNAMELEN+1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 277,
                    "column": 7,
                    "event": "note",
                    "message": "(5) argument 1 ('s') from (4) could be NULL where non-null expected",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  277 |   if (gethostname(s,MAXHOSTNAMELEN)==-1) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/include/db_config.h",
                    "line": 26,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/include/aide.h",
                    "line": 26,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/include/unistd.h",
                    "line": 891,
                    "column": 12,
                    "event": "note",
                    "message": "argument 1 of 'gethostname' must be non-null",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  891 | extern int gethostname (char *__name, size_t __len) __THROW __nonnull ((1))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^~~~~~~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 476,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 331,
                    "column": 24,
                    "event": "warning[-Wanalyzer-possible-null-dereference]",
                    "message": "dereference of possibly-NULL '<unknown>'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  331 |   conf->db_out_order[0]=db_filename;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~~~~~~~~~~~~~~~~~~^~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 506,
                    "column": 5,
                    "event": "note",
                    "message": "(1) entry to 'main'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  506 | int main(int argc,char**argv)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 517,
                    "column": 3,
                    "event": "note",
                    "message": "(2) calling 'setdefaults_before_config' from 'main'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  517 |   setdefaults_before_config();",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 264,
                    "column": 13,
                    "event": "note",
                    "message": "(3) entry to 'setdefaults_before_config'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  264 | static void setdefaults_before_config()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 277,
                    "column": 6,
                    "event": "note",
                    "message": "(4) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  277 |   if (gethostname(s,MAXHOSTNAMELEN)==-1) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 278,
                    "column": 5,
                    "event": "note",
                    "message": "(5) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  278 |     error(0,_(\"Couldn't get hostname\"));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 311,
                    "column": 27,
                    "event": "note",
                    "message": "(6) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  311 |   conf->no_acl_on_symlinks=0; /* zero means don't do ACLs on symlinks */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~~~~~~~~~~~~~~~~~~~~~^~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/aide.c",
                    "line": 331,
                    "column": 24,
                    "event": "note",
                    "message": "(7) '<unknown>' could be NULL: unchecked value from (6)",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  331 |   conf->db_out_order[0]=db_filename;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~~~~~~~~~~~~~~~~~~^~~~~~~~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 688,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'encode_base64'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 167,
                    "column": 3,
                    "event": "warning[-Wanalyzer-possible-null-argument]",
                    "message": "use of possibly-NULL 'retbuf' where non-null expected",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  167 |   memcpy(retbuf,outbuf,pos);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 100,
                    "column": 6,
                    "event": "note",
                    "message": "(1) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100 |   if (!ssize||src==NULL){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 104,
                    "column": 20,
                    "event": "note",
                    "message": "(2) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104 |   outbuf = (char *)malloc(sizeof(char)*B64_BUF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 116,
                    "column": 9,
                    "event": "note",
                    "message": "(3) following 'false' branch (when 'left == 0')...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116 |   while (left != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 166,
                    "column": 41,
                    "event": "note",
                    "message": "(4) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  166 |   retbuf=(char*)malloc(sizeof(char)*(pos+1));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                     ~~~~^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 166,
                    "column": 41,
                    "event": "note",
                    "message": "(5) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 167,
                    "column": 3,
                    "event": "note",
                    "message": "(6) argument 1 ('retbuf') from (5) could be NULL where non-null expected",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  167 |   memcpy(retbuf,outbuf,pos);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/include/string.h",
                    "line": 43,
                    "column": 14,
                    "event": "note",
                    "message": "argument 1 of 'memcpy' must be non-null",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43 | extern void *memcpy (void *__restrict __dest, const void *__restrict __src,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 688,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 167,
                    "column": 3,
                    "event": "warning[-Wanalyzer-possible-null-argument]",
                    "message": "use of possibly-NULL 'outbuf' where non-null expected",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  167 |   memcpy(retbuf,outbuf,pos);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 100,
                    "column": 6,
                    "event": "note",
                    "message": "(1) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100 |   if (!ssize||src==NULL){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 104,
                    "column": 20,
                    "event": "note",
                    "message": "(2) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104 |   outbuf = (char *)malloc(sizeof(char)*B64_BUF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 104,
                    "column": 20,
                    "event": "note",
                    "message": "(3) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 116,
                    "column": 9,
                    "event": "note",
                    "message": "(4) following 'false' branch (when 'left == 0')...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116 |   while (left != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 166,
                    "column": 41,
                    "event": "note",
                    "message": "(5) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  166 |   retbuf=(char*)malloc(sizeof(char)*(pos+1));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                     ~~~~^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 167,
                    "column": 3,
                    "event": "note",
                    "message": "(6) argument 2 ('outbuf') from (3) could be NULL where non-null expected",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  167 |   memcpy(retbuf,outbuf,pos);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/include/string.h",
                    "line": 43,
                    "column": 14,
                    "event": "note",
                    "message": "argument 2 of 'memcpy' must be non-null",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43 | extern void *memcpy (void *__restrict __dest, const void *__restrict __src,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 688,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'decode_base64'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 247,
                    "column": 3,
                    "event": "warning[-Wanalyzer-possible-null-argument]",
                    "message": "use of possibly-NULL 'retbuf' where non-null expected",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  247 |   memcpy(retbuf,outbuf,pos);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 188,
                    "column": 6,
                    "event": "note",
                    "message": "(1) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188 |   if (!ssize||src==NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 194,
                    "column": 20,
                    "event": "note",
                    "message": "(2) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  194 |   outbuf = (byte *)malloc(sizeof(byte)*B64_BUF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 203,
                    "column": 9,
                    "event": "note",
                    "message": "(3) following 'false' branch (when 'left == 0')...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  203 |   while (left != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 246,
                    "column": 41,
                    "event": "note",
                    "message": "(4) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246 |   retbuf=(byte*)malloc(sizeof(byte)*(pos+1));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                     ~~~~^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 246,
                    "column": 41,
                    "event": "note",
                    "message": "(5) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 247,
                    "column": 3,
                    "event": "note",
                    "message": "(6) argument 1 ('retbuf') from (5) could be NULL where non-null expected",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  247 |   memcpy(retbuf,outbuf,pos);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/include/string.h",
                    "line": 43,
                    "column": 14,
                    "event": "note",
                    "message": "argument 1 of 'memcpy' must be non-null",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43 | extern void *memcpy (void *__restrict __dest, const void *__restrict __src,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 688,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 247,
                    "column": 3,
                    "event": "warning[-Wanalyzer-possible-null-argument]",
                    "message": "use of possibly-NULL 'outbuf' where non-null expected",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  247 |   memcpy(retbuf,outbuf,pos);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 188,
                    "column": 6,
                    "event": "note",
                    "message": "(1) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188 |   if (!ssize||src==NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 194,
                    "column": 20,
                    "event": "note",
                    "message": "(2) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  194 |   outbuf = (byte *)malloc(sizeof(byte)*B64_BUF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 194,
                    "column": 20,
                    "event": "note",
                    "message": "(3) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 203,
                    "column": 9,
                    "event": "note",
                    "message": "(4) following 'false' branch (when 'left == 0')...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  203 |   while (left != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 246,
                    "column": 41,
                    "event": "note",
                    "message": "(5) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246 |   retbuf=(byte*)malloc(sizeof(byte)*(pos+1));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                     ~~~~^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 247,
                    "column": 3,
                    "event": "note",
                    "message": "(6) argument 2 ('outbuf') from (3) could be NULL where non-null expected",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  247 |   memcpy(retbuf,outbuf,pos);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/base64.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/include/string.h",
                    "line": 43,
                    "column": 14,
                    "event": "note",
                    "message": "argument 2 of 'memcpy' must be non-null",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43 | extern void *memcpy (void *__restrict __dest, const void *__restrict __src,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 476,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'append_rxlist'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 725,
                    "column": 8,
                    "event": "warning[-Wanalyzer-possible-null-dereference]",
                    "message": "dereference of possibly-NULL 'r'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  725 |   r->rx=rx;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~~^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 724,
                    "column": 15,
                    "event": "note",
                    "message": "(1) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  724 |   r=(rx_rule*)malloc(sizeof(rx_rule));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 725,
                    "column": 8,
                    "event": "note",
                    "message": "(2) 'r' could be NULL: unchecked value from (1)",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  725 |   r->rx=rx;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~~^~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 476,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'do_groupdef'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 757,
                    "column": 10,
                    "event": "warning[-Wanalyzer-possible-null-dereference]",
                    "message": "dereference of possibly-NULL 's'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  757 |   s->name=group;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~~~~^~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 750,
                    "column": 5,
                    "event": "note",
                    "message": "(1) following 'false' branch (when 'r' is NULL)...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  750 |   if((r=list_find(group,conf->groupsyms))){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 756,
                    "column": 13,
                    "event": "note",
                    "message": "(2) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  756 |   s=(symba*)malloc(sizeof(symba));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 756,
                    "column": 13,
                    "event": "note",
                    "message": "(3) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 757,
                    "column": 10,
                    "event": "note",
                    "message": "(4) 's' could be NULL: unchecked value from (3)",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  757 |   s->name=group;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~~~~^~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 476,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'get_conf_key'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 1014,
                    "column": 7,
                    "event": "warning[-Wanalyzer-possible-null-dereference]",
                    "message": "dereference of possibly-NULL 'm'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1014 |   m[0]=0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~^~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 1004,
                    "column": 25,
                    "event": "note",
                    "message": "(1) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1004 |   char* m=(char*)malloc(strlen(aide_key_1)+",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 1014,
                    "column": 7,
                    "event": "note",
                    "message": "(2) 'm' could be NULL: unchecked value from (1)",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1014 |   m[0]=0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~^~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 476,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'get_conf_key_len'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 1045,
                    "column": 7,
                    "event": "warning[-Wanalyzer-possible-null-dereference]",
                    "message": "dereference of possibly-NULL 'm'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1045 |   m[0]=0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~^~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 1035,
                    "column": 25,
                    "event": "note",
                    "message": "(1) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1035 |   char* m=(char*)malloc(strlen(aide_key_1)+",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 1045,
                    "column": 7,
                    "event": "note",
                    "message": "(2) 'm' could be NULL: unchecked value from (1)",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1045 |   m[0]=0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~^~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 476,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'get_db_key'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 1076,
                    "column": 7,
                    "event": "warning[-Wanalyzer-possible-null-dereference]",
                    "message": "dereference of possibly-NULL 'm'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1076 |   m[0]=0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~^~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 1066,
                    "column": 25,
                    "event": "note",
                    "message": "(1) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1066 |   char* m=(char*)malloc(strlen(db_key_1)+",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 1076,
                    "column": 7,
                    "event": "note",
                    "message": "(2) 'm' could be NULL: unchecked value from (1)",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1076 |   m[0]=0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~^~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 476,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'get_db_key_len'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 1107,
                    "column": 7,
                    "event": "warning[-Wanalyzer-possible-null-dereference]",
                    "message": "dereference of possibly-NULL 'm'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1107 |   m[0]=0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~^~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 1097,
                    "column": 25,
                    "event": "note",
                    "message": "(1) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1097 |   char* m=(char*)malloc(strlen(db_key_1)+",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/commandconf.c",
                    "line": 1107,
                    "column": 7,
                    "event": "note",
                    "message": "(2) 'm' could be NULL: unchecked value from (1)",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1107 |   m[0]=0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~^~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 1164,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6895,
                    "column": 16,
                    "event": "warning[-Wunused-function]",
                    "message": "'input' defined but not used",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6895 | #else",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^    ",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "CPPCHECK_WARNING",
            "cwe": 476,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7088,
                    "event": "warning[nullPointer]",
                    "message": "Possible null pointer dereference: b",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CPPCHECK_WARNING",
            "cwe": 476,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7089,
                    "event": "warning[nullPointer]",
                    "message": "Possible null pointer dereference: b",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'db_readline_disk'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 211,
                    "column": 3,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "'strncat' specified bound 1 equals source length",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  211 |   strncat (fullname, \"/\", 1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'name_construct'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 131,
                    "column": 3,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "'strncat' specified bound 1 equals source length",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131 |   strncat (ret, \"/\", 1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'db_disk_init'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 445,
                    "column": 2,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "'strncat' specified bound 1 equals source length",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  445 |  strncat (fullname, \"/\", 1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 476,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'add_child'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 157,
                    "column": 14,
                    "event": "warning[-Wanalyzer-possible-null-dereference]",
                    "message": "dereference of possibly-NULL 'new_r'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  157 |  new_r->attr = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ~~~~~~~~~~~~^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 145,
                    "column": 5,
                    "event": "note",
                    "message": "(1) following 'false' branch (when 'new_r' is NULL)...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  145 |  if (new_r != NULL) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 155,
                    "column": 10,
                    "event": "note",
                    "message": "(2) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  155 |  new_r = malloc (sizeof (seltree));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 155,
                    "column": 10,
                    "event": "note",
                    "message": "(3) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 157,
                    "column": 14,
                    "event": "note",
                    "message": "(4) 'new_r' could be NULL: unchecked value from (3)",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  157 |  new_r->attr = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ~~~~~~~~~~~~^~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 688,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 161,
                    "column": 2,
                    "event": "warning[-Wanalyzer-possible-null-argument]",
                    "message": "use of possibly-NULL '<unknown>' where non-null expected",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  161 |  strncpy(new_r->path, fil->filename, i+1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 145,
                    "column": 5,
                    "event": "note",
                    "message": "(1) following 'false' branch (when 'new_r' is NULL)...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  145 |  if (new_r != NULL) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 155,
                    "column": 10,
                    "event": "note",
                    "message": "(2) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  155 |  new_r = malloc (sizeof (seltree));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 158,
                    "column": 17,
                    "event": "note",
                    "message": "(3) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  158 |  i = strlen (fil->filename);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ~~~^~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 161,
                    "column": 2,
                    "event": "note",
                    "message": "(4) argument 1 ('<unknown>') from (3) could be NULL where non-null expected",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  161 |  strncpy(new_r->path, fil->filename, i+1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/include/string.h",
                    "line": 128,
                    "column": 14,
                    "event": "note",
                    "message": "argument 1 of 'strncpy' must be non-null",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128 | extern char *strncpy (char *__restrict __dest,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 688,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'db_readline_disk'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 210,
                    "column": 3,
                    "event": "warning[-Wanalyzer-possible-null-argument]",
                    "message": "use of possibly-NULL 'fullname' where non-null expected",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  210 |   strncpy(fullname, conf->root_prefix, conf->root_prefix_length+1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 207,
                    "column": 5,
                    "event": "note",
                    "message": "(1) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  207 |  if (!root_handled) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 208,
                    "column": 16,
                    "event": "note",
                    "message": "(2) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  208 |   root_handled = 1;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~~~~~~~~~~^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 208,
                    "column": 16,
                    "event": "note",
                    "message": "(3) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 210,
                    "column": 3,
                    "event": "note",
                    "message": "(4) argument 1 ('fullname') from (3) could be NULL where non-null expected",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  210 |   strncpy(fullname, conf->root_prefix, conf->root_prefix_length+1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/include/string.h",
                    "line": 128,
                    "column": 14,
                    "event": "note",
                    "message": "argument 1 of 'strncpy' must be non-null",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128 | extern char *strncpy (char *__restrict __dest,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 688,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 349,
                    "column": 5,
                    "event": "warning[-Wanalyzer-possible-null-argument]",
                    "message": "use of possibly-NULL 'fullname' where non-null expected",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  349 |     strncpy(fullname, conf->root_prefix, conf->root_prefix_length+1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 222,
                    "column": 7,
                    "event": "note",
                    "message": "(1) following 'false' branch (when 'fil' is NULL)...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222 |    if (fil != NULL) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 228,
                    "column": 3,
                    "event": "note",
                    "message": "(2) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  228 |   free (fullname);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 233,
                    "column": 5,
                    "event": "note",
                    "message": "(3) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  233 |  if (in_this ()) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 318,
                    "column": 9,
                    "event": "note",
                    "message": "(4) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  318 |   if (r == NULL) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 318,
                    "column": 6,
                    "event": "note",
                    "message": "(5) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  318 |   if (r == NULL) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 322,
                    "column": 3,
                    "event": "note",
                    "message": "(6) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  322 |   error (255, \"r->childs %p, r->parent %p, r->checked %i\\n\", r->childs,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  323 |       r->parent, r->checked);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 325,
                    "column": 6,
                    "event": "note",
                    "message": "(7) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  325 |   if ((0 == (r->checked & NODE_CHECKED)) && r->childs != NULL) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 325,
                    "column": 46,
                    "event": "note",
                    "message": "(8) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  325 |   if ((0 == (r->checked & NODE_CHECKED)) && r->childs != NULL) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                             ~^~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 325,
                    "column": 42,
                    "event": "note",
                    "message": "(9) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  325 |   if ((0 == (r->checked & NODE_CHECKED)) && r->childs != NULL) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                          ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 328,
                    "column": 17,
                    "event": "note",
                    "message": "(10) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  328 |    l = r->childs->header->head;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ~~~~~~~~~^~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 330,
                    "column": 10,
                    "event": "note",
                    "message": "(11) following 'true' branch (when 'l' is non-NULL)...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  330 |    while (l != NULL",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 331,
                    "column": 27,
                    "event": "note",
                    "message": "(12) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  331 |        && (((seltree *) (l->data))->checked & NODE_TRAVERSE) != 0) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ~~^~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 331,
                    "column": 8,
                    "event": "note",
                    "message": "(13) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  330 |    while (l != NULL",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  331 |        && (((seltree *) (l->data))->checked & NODE_TRAVERSE) != 0) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 334,
                    "column": 7,
                    "event": "note",
                    "message": "(14) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  334 |    if (l != NULL) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 334,
                    "column": 7,
                    "event": "note",
                    "message": "(15) following 'true' branch (when 'l' is non-NULL)...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 335,
                    "column": 15,
                    "event": "note",
                    "message": "(16) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  335 |     if (l == l->header->tail) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ~^~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 335,
                    "column": 8,
                    "event": "note",
                    "message": "(17) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  335 |     if (l == l->header->tail) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 339,
                    "column": 8,
                    "event": "note",
                    "message": "(18) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  339 |     rr = (seltree *) l->data;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ~~~^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 339,
                    "column": 8,
                    "event": "note",
                    "message": "(19) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 349,
                    "column": 5,
                    "event": "note",
                    "message": "(20) argument 1 ('fullname') from (19) could be NULL where non-null expected",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  349 |     strncpy(fullname, conf->root_prefix, conf->root_prefix_length+1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/include/string.h",
                    "line": 128,
                    "column": 14,
                    "event": "note",
                    "message": "argument 1 of 'strncpy' must be non-null",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128 | extern char *strncpy (char *__restrict __dest,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 688,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'db_disk_init'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 444,
                    "column": 2,
                    "event": "warning[-Wanalyzer-possible-null-argument]",
                    "message": "use of possibly-NULL 'fullname' where non-null expected",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  444 |  strncpy(fullname, conf->root_prefix, conf->root_prefix_length+1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 443,
                    "column": 29,
                    "event": "note",
                    "message": "(1) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  443 |  char* fullname=malloc((conf->root_prefix_length+2)*sizeof(char));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ~~~~^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 444,
                    "column": 2,
                    "event": "note",
                    "message": "(2) argument 1 ('fullname') from (1) could be NULL where non-null expected",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  444 |  strncpy(fullname, conf->root_prefix, conf->root_prefix_length+1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/include/string.h",
                    "line": 128,
                    "column": 14,
                    "event": "note",
                    "message": "argument 1 of 'strncpy' must be non-null",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128 | extern char *strncpy (char *__restrict __dest,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'db_readline_disk'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_disk.c",
                    "line": 350,
                    "column": 5,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "'strncat' specified bound depends on the length of the source argument",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  350 |     strncat(fullname, r->path, strlen(r->path));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 476,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'print_line'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 489,
                    "column": 23,
                    "event": "warning[-Wanalyzer-possible-null-dereference]",
                    "message": "dereference of possibly-NULL 'summary'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  489 |             summary[0]=get_file_type_char((node->checked&NODE_REMOVED?node->old_data:node->new_data)->perm);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 851,
                    "column": 5,
                    "event": "note",
                    "message": "(1) entry to 'gen_report'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  851 | int gen_report(seltree* node) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 863,
                    "column": 12,
                    "event": "note",
                    "message": "(2) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  863 |         if (!conf->syslog_format) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 867,
                    "column": 16,
                    "event": "note",
                    "message": "(3) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  867 |         if(conf->action&(DO_COMPARE|DO_DIFF) || (conf->action&DO_INIT && conf->report_detailed_init) ) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 868,
                    "column": 16,
                    "event": "note",
                    "message": "(4) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  868 |             if (!conf->syslog_format && conf->grouped) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 868,
                    "column": 45,
                    "event": "note",
                    "message": "(5) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  868 |             if (!conf->syslog_format && conf->grouped) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                         ~~~~^~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 868,
                    "column": 38,
                    "event": "note",
                    "message": "(6) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  868 |             if (!conf->syslog_format && conf->grouped) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ~~~~~~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 869,
                    "column": 21,
                    "event": "note",
                    "message": "(7) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  869 |                 if (nadd) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 869,
                    "column": 20,
                    "event": "note",
                    "message": "(8) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  869 |                 if (nadd) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 870,
                    "column": 21,
                    "event": "note",
                    "message": "(9) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  870 |                     error(2,(char*)report_top_format,_(\"Added entries\"));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 871,
                    "column": 21,
                    "event": "note",
                    "message": "(10) calling 'print_report_list' from 'gen_report'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  871 |                     print_report_list(node, NODE_ADDED);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 694,
                    "column": 13,
                    "event": "note",
                    "message": "(11) entry to 'print_report_list'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  694 | static void print_report_list(seltree* node, const int node_status) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 696,
                    "column": 8,
                    "event": "note",
                    "message": "(12) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  696 |     if (node->checked&node_status) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 697,
                    "column": 9,
                    "event": "note",
                    "message": "(13) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  697 |         print_line(node);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 697,
                    "column": 9,
                    "event": "note",
                    "message": "(14) calling 'print_line' from 'print_report_list'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 483,
                    "column": 13,
                    "event": "note",
                    "message": "(15) entry to 'print_line'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  483 | static void print_line(seltree* node) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 484,
                    "column": 7,
                    "event": "note",
                    "message": "(16) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  484 |     if(conf->summarize_changes==1) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 487,
                    "column": 25,
                    "event": "note",
                    "message": "(17) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  487 |         char* summary = malloc ((length+1) * sizeof (char));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 487,
                    "column": 25,
                    "event": "note",
                    "message": "(18) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 488,
                    "column": 12,
                    "event": "note",
                    "message": "(19) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  488 |         if (node->checked&(NODE_ADDED|NODE_REMOVED)) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 489,
                    "column": 57,
                    "event": "note",
                    "message": "(20) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  489 |             summary[0]=get_file_type_char((node->checked&NODE_REMOVED?node->old_data:node->new_data)->perm);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 489,
                    "column": 85,
                    "event": "note",
                    "message": "(21) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  489 |             summary[0]=get_file_type_char((node->checked&NODE_REMOVED?node->old_data:node->new_data)->perm);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 489,
                    "column": 85,
                    "event": "note",
                    "message": "(22) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/compare_db.c",
                    "line": 489,
                    "column": 23,
                    "event": "note",
                    "message": "(23) 'summary' could be NULL: unchecked value from (18)",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  489 |             summary[0]=get_file_type_char((node->checked&NODE_REMOVED?node->old_data:node->new_data)->perm);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 401,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'conf_create_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7055,
                    "column": 9,
                    "event": "warning[-Wanalyzer-malloc-leak]",
                    "message": "leak of '<unknown>'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7055 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 8,
                    "column": 26,
                    "event": "note",
                    "message": "(1) entry to 'conf_create_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    8 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                          ^                 ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7034,
                    "column": 21,
                    "event": "note",
                    "message": "in expansion of macro 'yy_create_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7034 |  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^               ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7039,
                    "column": 5,
                    "event": "note",
                    "message": "(2) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7039 |  b = (YY_BUFFER_STATE) yyalloc( sizeof( struct yy_buffer_state )  );",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7042,
                    "column": 17,
                    "event": "note",
                    "message": "(3) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7042 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^     ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7042,
                    "column": 17,
                    "event": "note",
                    "message": "(4) allocated here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7048,
                    "column": 5,
                    "event": "note",
                    "message": "(5) assuming '<unknown>' is non-NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7048 |  b->yy_ch_buf = (char *) yyalloc( (yy_size_t) (b->yy_buf_size + 2)  );",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7048,
                    "column": 5,
                    "event": "note",
                    "message": "(6) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7051,
                    "column": 22,
                    "event": "note",
                    "message": "(7) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7051 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                      ^  ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 13,
                    "column": 24,
                    "event": "note",
                    "message": "(8) calling 'conf_init_buffer' from 'conf_create_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   13 | #define yy_scan_bytes conf_scan_bytes",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7053,
                    "column": 2,
                    "event": "note",
                    "message": "in expansion of macro 'yy_init_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7053 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ^             ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 13,
                    "column": 24,
                    "event": "note",
                    "message": "(9) entry to 'conf_init_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   13 | #define yy_scan_bytes conf_scan_bytes",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~~~  ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7081,
                    "column": 17,
                    "event": "note",
                    "message": "in expansion of macro 'yy_init_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7081 |  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^             ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 14,
                    "column": 25,
                    "event": "note",
                    "message": "(10) calling 'conf_flush_buffer' from 'conf_init_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   14 | #define yy_init_buffer conf_init_buffer",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7086,
                    "column": 2,
                    "event": "note",
                    "message": "in expansion of macro 'yy_flush_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7086 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ^              ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 14,
                    "column": 25,
                    "event": "note",
                    "message": "(11) entry to 'conf_flush_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   14 | #define yy_init_buffer conf_init_buffer",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~~~~~~~  ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7109,
                    "column": 10,
                    "event": "note",
                    "message": "in expansion of macro 'yy_flush_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7109 |  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^              ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7111,
                    "column": 9,
                    "event": "note",
                    "message": "(12) following 'false' branch (when 'b' is non-NULL)...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7111 | {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7114,
                    "column": 16,
                    "event": "note",
                    "message": "(13) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7114 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^  ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 520,
                    "column": 27,
                    "event": "note",
                    "message": "(14) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  518 |  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                            ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  519 | #define YY_CURRENT_BUFFER ( (yy_buffer_stack) \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  520 |                           ? (yy_buffer_stack)[(yy_buffer_stack_top)] \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7128,
                    "column": 12,
                    "event": "note",
                    "message": "in expansion of macro 'YY_CURRENT_BUFFER'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7128 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^                ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 519,
                    "column": 46,
                    "event": "note",
                    "message": "(15) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  519 | #define YY_CURRENT_BUFFER ( (yy_buffer_stack) \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                              ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7128,
                    "column": 12,
                    "event": "note",
                    "message": "in expansion of macro 'YY_CURRENT_BUFFER'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7128 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^                ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7128,
                    "column": 5,
                    "event": "note",
                    "message": "(16) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7128 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 15,
                    "column": 30,
                    "event": "note",
                    "message": "(17) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   15 | #define yy_flush_buffer conf_flush_buffer",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7129,
                    "column": 3,
                    "event": "note",
                    "message": "in expansion of macro 'yy_load_buffer_state'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7129 |  if ( b == YY_CURRENT_BUFFER )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 14,
                    "column": 25,
                    "event": "note",
                    "message": "(18) returning to 'conf_init_buffer' from 'conf_flush_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   14 | #define yy_init_buffer conf_init_buffer",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7086,
                    "column": 2,
                    "event": "note",
                    "message": "in expansion of macro 'yy_flush_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7086 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ^              ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 520,
                    "column": 27,
                    "event": "note",
                    "message": "(19) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  518 |  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                            ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  519 | #define YY_CURRENT_BUFFER ( (yy_buffer_stack) \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  520 |                           ? (yy_buffer_stack)[(yy_buffer_stack_top)] \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7095,
                    "column": 14,
                    "event": "note",
                    "message": "in expansion of macro 'YY_CURRENT_BUFFER'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7095 |      */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^                ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 519,
                    "column": 46,
                    "event": "note",
                    "message": "(20) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  519 | #define YY_CURRENT_BUFFER ( (yy_buffer_stack) \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                              ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7095,
                    "column": 14,
                    "event": "note",
                    "message": "in expansion of macro 'YY_CURRENT_BUFFER'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7095 |      */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^                ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7100,
                    "column": 68,
                    "event": "note",
                    "message": "(21) following 'false' branch (when 'file' is NULL)...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7100 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                    ^  ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7100,
                    "column": 30,
                    "event": "note",
                    "message": "(22) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7100 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                              ^                                        ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 13,
                    "column": 24,
                    "event": "note",
                    "message": "(23) returning to 'conf_create_buffer' from 'conf_init_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   13 | #define yy_scan_bytes conf_scan_bytes",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7053,
                    "column": 2,
                    "event": "note",
                    "message": "in expansion of macro 'yy_init_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7053 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ^             ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7055,
                    "column": 9,
                    "event": "note",
                    "message": "(24) '<unknown>' leaks here; was allocated at (4)",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7055 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 476,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'conf_init_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7100,
                    "column": 30,
                    "event": "warning[-Wanalyzer-null-dereference]",
                    "message": "dereference of NULL 'b'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7100 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                              ^                                        ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "(1) entry to 'confrestart'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   26 | #define yyout confout",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ^~~        ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6972,
                    "column": 10,
                    "event": "note",
                    "message": "in expansion of macro 'yyrestart'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6972 |  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^        ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6975,
                    "column": 7,
                    "event": "note",
                    "message": "(2) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6975 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 19,
                    "column": 31,
                    "event": "note",
                    "message": "(3) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   19 | #define yypop_buffer_state confpop_buffer_state",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6976,
                    "column": 9,
                    "event": "note",
                    "message": "in expansion of macro 'yyensure_buffer_stack'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6976 |  if ( ! YY_CURRENT_BUFFER ){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~ ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 8,
                    "column": 26,
                    "event": "note",
                    "message": "(4) calling 'conf_create_buffer' from 'confrestart'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    8 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6978,
                    "column": 13,
                    "event": "note",
                    "message": "in expansion of macro 'yy_create_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6978 |   YY_CURRENT_BUFFER_LVALUE =",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 8,
                    "column": 26,
                    "event": "note",
                    "message": "(5) entry to 'conf_create_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    8 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                          ^                 ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7034,
                    "column": 21,
                    "event": "note",
                    "message": "in expansion of macro 'yy_create_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7034 |  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^               ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7039,
                    "column": 5,
                    "event": "note",
                    "message": "(6) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7039 |  b = (YY_BUFFER_STATE) yyalloc( sizeof( struct yy_buffer_state )  );",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7042,
                    "column": 17,
                    "event": "note",
                    "message": "(7) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7042 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^     ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7048,
                    "column": 5,
                    "event": "note",
                    "message": "(8) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7048 |  b->yy_ch_buf = (char *) yyalloc( (yy_size_t) (b->yy_buf_size + 2)  );",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7051,
                    "column": 22,
                    "event": "note",
                    "message": "(9) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7051 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                      ^  ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 13,
                    "column": 24,
                    "event": "note",
                    "message": "(10) calling 'conf_init_buffer' from 'conf_create_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   13 | #define yy_scan_bytes conf_scan_bytes",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7053,
                    "column": 2,
                    "event": "note",
                    "message": "in expansion of macro 'yy_init_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7053 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ^             ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 13,
                    "column": 24,
                    "event": "note",
                    "message": "(11) entry to 'conf_init_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   13 | #define yy_scan_bytes conf_scan_bytes",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~~~  ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7081,
                    "column": 17,
                    "event": "note",
                    "message": "in expansion of macro 'yy_init_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7081 |  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^             ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 14,
                    "column": 25,
                    "event": "note",
                    "message": "(12) calling 'conf_flush_buffer' from 'conf_init_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   14 | #define yy_init_buffer conf_init_buffer",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7086,
                    "column": 2,
                    "event": "note",
                    "message": "in expansion of macro 'yy_flush_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7086 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ^              ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 14,
                    "column": 25,
                    "event": "note",
                    "message": "(13) entry to 'conf_flush_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   14 | #define yy_init_buffer conf_init_buffer",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~~~~~~~  ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7109,
                    "column": 10,
                    "event": "note",
                    "message": "in expansion of macro 'yy_flush_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7109 |  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^              ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7111,
                    "column": 9,
                    "event": "note",
                    "message": "(14) following 'false' branch (when 'b' is non-NULL)...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7111 | {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7114,
                    "column": 16,
                    "event": "note",
                    "message": "(15) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7114 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^  ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 520,
                    "column": 27,
                    "event": "note",
                    "message": "(16) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  518 |  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                            ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  519 | #define YY_CURRENT_BUFFER ( (yy_buffer_stack) \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  520 |                           ? (yy_buffer_stack)[(yy_buffer_stack_top)] \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7128,
                    "column": 12,
                    "event": "note",
                    "message": "in expansion of macro 'YY_CURRENT_BUFFER'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7128 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^                ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7128,
                    "column": 5,
                    "event": "note",
                    "message": "(17) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7128 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7128,
                    "column": 5,
                    "event": "note",
                    "message": "(18) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 15,
                    "column": 30,
                    "event": "note",
                    "message": "(19) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   15 | #define yy_flush_buffer conf_flush_buffer",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7129,
                    "column": 3,
                    "event": "note",
                    "message": "in expansion of macro 'yy_load_buffer_state'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7129 |  if ( b == YY_CURRENT_BUFFER )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 14,
                    "column": 25,
                    "event": "note",
                    "message": "(20) returning to 'conf_init_buffer' from 'conf_flush_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   14 | #define yy_init_buffer conf_init_buffer",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7086,
                    "column": 2,
                    "event": "note",
                    "message": "in expansion of macro 'yy_flush_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7086 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ^              ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 520,
                    "column": 27,
                    "event": "note",
                    "message": "(21) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  518 |  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                            ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  519 | #define YY_CURRENT_BUFFER ( (yy_buffer_stack) \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  520 |                           ? (yy_buffer_stack)[(yy_buffer_stack_top)] \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7095,
                    "column": 14,
                    "event": "note",
                    "message": "in expansion of macro 'YY_CURRENT_BUFFER'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7095 |      */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^                ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 519,
                    "column": 46,
                    "event": "note",
                    "message": "(22) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  519 | #define YY_CURRENT_BUFFER ( (yy_buffer_stack) \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                              ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7095,
                    "column": 14,
                    "event": "note",
                    "message": "in expansion of macro 'YY_CURRENT_BUFFER'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7095 |      */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^                ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7095,
                    "column": 8,
                    "event": "note",
                    "message": "(23) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7095 |      */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7100,
                    "column": 68,
                    "event": "note",
                    "message": "(24) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7100 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                    ^  ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7100,
                    "column": 68,
                    "event": "note",
                    "message": "(25) following 'true' branch (when 'file' is non-NULL)...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7100,
                    "column": 40,
                    "event": "note",
                    "message": "(26) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7100 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                        ^                     ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7100,
                    "column": 68,
                    "event": "note",
                    "message": "(27) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7100 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                    ^  ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7100,
                    "column": 30,
                    "event": "note",
                    "message": "(28) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7100 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                              ^                                        ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 13,
                    "column": 24,
                    "event": "note",
                    "message": "(29) returning to 'conf_create_buffer' from 'conf_init_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   13 | #define yy_scan_bytes conf_scan_bytes",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7053,
                    "column": 2,
                    "event": "note",
                    "message": "in expansion of macro 'yy_init_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7053 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ^             ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 8,
                    "column": 26,
                    "event": "note",
                    "message": "(30) returning to 'confrestart' from 'conf_create_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    8 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6978,
                    "column": 13,
                    "event": "note",
                    "message": "in expansion of macro 'yy_create_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6978 |   YY_CURRENT_BUFFER_LVALUE =",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 13,
                    "column": 24,
                    "event": "note",
                    "message": "(31) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   13 | #define yy_scan_bytes conf_scan_bytes",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6981,
                    "column": 2,
                    "event": "note",
                    "message": "in expansion of macro 'yy_init_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6981 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ^             ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 519,
                    "column": 46,
                    "event": "note",
                    "message": "(32) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  519 | #define YY_CURRENT_BUFFER ( (yy_buffer_stack) \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                              ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6981,
                    "column": 18,
                    "event": "note",
                    "message": "in expansion of macro 'YY_CURRENT_BUFFER'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6981 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                  ^                ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 13,
                    "column": 24,
                    "event": "note",
                    "message": "(33) calling 'conf_init_buffer' from 'confrestart'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   13 | #define yy_scan_bytes conf_scan_bytes",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6981,
                    "column": 2,
                    "event": "note",
                    "message": "in expansion of macro 'yy_init_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6981 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ^             ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 13,
                    "column": 24,
                    "event": "note",
                    "message": "(34) entry to 'conf_init_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   13 | #define yy_scan_bytes conf_scan_bytes",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~~~  ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7081,
                    "column": 17,
                    "event": "note",
                    "message": "in expansion of macro 'yy_init_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7081 |  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^             ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 14,
                    "column": 25,
                    "event": "note",
                    "message": "(35) calling 'conf_flush_buffer' from 'conf_init_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   14 | #define yy_init_buffer conf_init_buffer",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7086,
                    "column": 2,
                    "event": "note",
                    "message": "in expansion of macro 'yy_flush_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7086 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ^              ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 14,
                    "column": 25,
                    "event": "note",
                    "message": "(36) entry to 'conf_flush_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   14 | #define yy_init_buffer conf_init_buffer",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~~~~~~~  ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7109,
                    "column": 10,
                    "event": "note",
                    "message": "in expansion of macro 'yy_flush_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7109 |  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^              ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7111,
                    "column": 9,
                    "event": "note",
                    "message": "(37) following 'true' branch (when 'b' is NULL)...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7111 | {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "(38) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 14,
                    "column": 25,
                    "event": "note",
                    "message": "(39) returning to 'conf_init_buffer' from 'conf_flush_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   14 | #define yy_init_buffer conf_init_buffer",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7086,
                    "column": 2,
                    "event": "note",
                    "message": "in expansion of macro 'yy_flush_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7086 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ^              ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 520,
                    "column": 27,
                    "event": "note",
                    "message": "(40) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  518 |  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                            ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  519 | #define YY_CURRENT_BUFFER ( (yy_buffer_stack) \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  520 |                           ? (yy_buffer_stack)[(yy_buffer_stack_top)] \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7095,
                    "column": 14,
                    "event": "note",
                    "message": "in expansion of macro 'YY_CURRENT_BUFFER'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7095 |      */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^                ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7095,
                    "column": 8,
                    "event": "note",
                    "message": "(41) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7095 |      */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7095,
                    "column": 8,
                    "event": "note",
                    "message": "(42) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7100,
                    "column": 68,
                    "event": "note",
                    "message": "(43) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7100 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                    ^  ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7100,
                    "column": 68,
                    "event": "note",
                    "message": "(44) following 'false' branch (when 'file' is NULL)...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7100,
                    "column": 30,
                    "event": "note",
                    "message": "(45) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7100 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                              ^                                        ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 7100,
                    "column": 30,
                    "event": "note",
                    "message": "(46) dereference of NULL 'b'",
                    "verbosity_level": "2"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 476,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'close_db_attrs'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db.c",
                    "line": 169,
                    "column": 24,
                    "event": "warning[-Wanalyzer-possible-null-dereference]",
                    "message": "dereference of possibly-NULL 'line'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  169 |         line->filename = url_value;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ~~~~~~~~~~~~~~~^~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db.c",
                    "line": 820,
                    "column": 6,
                    "event": "note",
                    "message": "(1) entry to 'db_close'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  820 | void db_close() {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db.c",
                    "line": 858,
                    "column": 22,
                    "event": "note",
                    "message": "(2) calling 'close_db_attrs' from 'db_close'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  858 |   conf->line_db_in = close_db_attrs(conf->mdc_in, (conf->db_in_url)->value);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db.c",
                    "line": 164,
                    "column": 17,
                    "event": "note",
                    "message": "(3) entry to 'close_db_attrs'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  164 | static db_line *close_db_attrs (struct md_container *mdc, char *url_value) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db.c",
                    "line": 166,
                    "column": 8,
                    "event": "note",
                    "message": "(4) following 'true' branch (when 'mdc' is non-NULL)...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  166 |     if (mdc != NULL) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db.c",
                    "line": 167,
                    "column": 9,
                    "event": "note",
                    "message": "(5) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  167 |         close_md(mdc);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db.c",
                    "line": 167,
                    "column": 9,
                    "event": "note",
                    "message": "(6) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db.c",
                    "line": 169,
                    "column": 24,
                    "event": "note",
                    "message": "(7) 'line' could be NULL: unchecked value from (6)",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  169 |         line->filename = url_value;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ~~~~~~~~~~~~~~~^~~~~~~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 476,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'db_char2line'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db.c",
                    "line": 396,
                    "column": 12,
                    "event": "warning[-Wanalyzer-possible-null-dereference]",
                    "message": "dereference of possibly-NULL 'line'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  396 |   line->md5=NULL;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db.c",
                    "line": 374,
                    "column": 27,
                    "event": "note",
                    "message": "(1) this call could return NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  374 |   db_line* line=(db_line*)malloc(sizeof(db_line)*1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db.c",
                    "line": 396,
                    "column": 12,
                    "event": "note",
                    "message": "(2) 'line' could be NULL: unchecked value from (1)",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  396 |   line->md5=NULL;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 1164,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1535,
                    "column": 16,
                    "event": "warning[-Wunused-function]",
                    "message": "'input' defined but not used",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1535 | #else",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^    ",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "CPPCHECK_WARNING",
            "cwe": 476,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1728,
                    "event": "warning[nullPointer]",
                    "message": "Possible null pointer dereference: b",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "CPPCHECK_WARNING",
            "cwe": 476,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1729,
                    "event": "warning[nullPointer]",
                    "message": "Possible null pointer dereference: b",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 401,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'db_create_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1695,
                    "column": 9,
                    "event": "warning[-Wanalyzer-malloc-leak]",
                    "message": "leak of '<unknown>'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1695 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 8,
                    "column": 26,
                    "event": "note",
                    "message": "(1) entry to 'db_create_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    8 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                          ^               ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1674,
                    "column": 21,
                    "event": "note",
                    "message": "in expansion of macro 'yy_create_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1674 |  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^               ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1679,
                    "column": 5,
                    "event": "note",
                    "message": "(2) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1679 |  b = (YY_BUFFER_STATE) yyalloc( sizeof( struct yy_buffer_state )  );",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1682,
                    "column": 17,
                    "event": "note",
                    "message": "(3) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1682 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^     ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1682,
                    "column": 17,
                    "event": "note",
                    "message": "(4) allocated here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1688,
                    "column": 5,
                    "event": "note",
                    "message": "(5) assuming '<unknown>' is non-NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1688 |  b->yy_ch_buf = (char *) yyalloc( (yy_size_t) (b->yy_buf_size + 2)  );",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1688,
                    "column": 5,
                    "event": "note",
                    "message": "(6) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1691,
                    "column": 22,
                    "event": "note",
                    "message": "(7) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1691 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                      ^  ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 13,
                    "column": 24,
                    "event": "note",
                    "message": "(8) calling 'db_init_buffer' from 'db_create_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   13 | #define yy_scan_bytes db_scan_bytes",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1693,
                    "column": 2,
                    "event": "note",
                    "message": "in expansion of macro 'yy_init_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1693 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ^             ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 13,
                    "column": 24,
                    "event": "note",
                    "message": "(9) entry to 'db_init_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   13 | #define yy_scan_bytes db_scan_bytes",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~  ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1721,
                    "column": 17,
                    "event": "note",
                    "message": "in expansion of macro 'yy_init_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1721 |  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^             ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 14,
                    "column": 25,
                    "event": "note",
                    "message": "(10) calling 'db_flush_buffer' from 'db_init_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   14 | #define yy_init_buffer db_init_buffer",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1726,
                    "column": 2,
                    "event": "note",
                    "message": "in expansion of macro 'yy_flush_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1726 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ^              ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 14,
                    "column": 25,
                    "event": "note",
                    "message": "(11) entry to 'db_flush_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   14 | #define yy_init_buffer db_init_buffer",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~~~~~  ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1749,
                    "column": 10,
                    "event": "note",
                    "message": "in expansion of macro 'yy_flush_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1749 |  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^              ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1751,
                    "column": 9,
                    "event": "note",
                    "message": "(12) following 'false' branch (when 'b' is non-NULL)...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1751 | {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1754,
                    "column": 16,
                    "event": "note",
                    "message": "(13) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1754 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^  ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 520,
                    "column": 27,
                    "event": "note",
                    "message": "(14) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  518 |  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                            ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  519 | #define YY_CURRENT_BUFFER ( (yy_buffer_stack) \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  520 |                           ? (yy_buffer_stack)[(yy_buffer_stack_top)] \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1768,
                    "column": 12,
                    "event": "note",
                    "message": "in expansion of macro 'YY_CURRENT_BUFFER'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1768 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^                ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 519,
                    "column": 46,
                    "event": "note",
                    "message": "(15) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  519 | #define YY_CURRENT_BUFFER ( (yy_buffer_stack) \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                              ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1768,
                    "column": 12,
                    "event": "note",
                    "message": "in expansion of macro 'YY_CURRENT_BUFFER'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1768 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^                ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1768,
                    "column": 5,
                    "event": "note",
                    "message": "(16) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1768 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 15,
                    "column": 30,
                    "event": "note",
                    "message": "(17) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   15 | #define yy_flush_buffer db_flush_buffer",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1769,
                    "column": 3,
                    "event": "note",
                    "message": "in expansion of macro 'yy_load_buffer_state'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1769 |  if ( b == YY_CURRENT_BUFFER )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 14,
                    "column": 25,
                    "event": "note",
                    "message": "(18) returning to 'db_init_buffer' from 'db_flush_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   14 | #define yy_init_buffer db_init_buffer",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1726,
                    "column": 2,
                    "event": "note",
                    "message": "in expansion of macro 'yy_flush_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1726 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ^              ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 520,
                    "column": 27,
                    "event": "note",
                    "message": "(19) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  518 |  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                            ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  519 | #define YY_CURRENT_BUFFER ( (yy_buffer_stack) \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  520 |                           ? (yy_buffer_stack)[(yy_buffer_stack_top)] \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1735,
                    "column": 14,
                    "event": "note",
                    "message": "in expansion of macro 'YY_CURRENT_BUFFER'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1735 |      */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^                ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 519,
                    "column": 46,
                    "event": "note",
                    "message": "(20) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  519 | #define YY_CURRENT_BUFFER ( (yy_buffer_stack) \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                              ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1735,
                    "column": 14,
                    "event": "note",
                    "message": "in expansion of macro 'YY_CURRENT_BUFFER'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1735 |      */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^                ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1740,
                    "column": 68,
                    "event": "note",
                    "message": "(21) following 'false' branch (when 'file' is NULL)...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1740 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                    ^  ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1740,
                    "column": 30,
                    "event": "note",
                    "message": "(22) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1740 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                              ^                                        ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 13,
                    "column": 24,
                    "event": "note",
                    "message": "(23) returning to 'db_create_buffer' from 'db_init_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   13 | #define yy_scan_bytes db_scan_bytes",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1693,
                    "column": 2,
                    "event": "note",
                    "message": "in expansion of macro 'yy_init_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1693 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ^             ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1695,
                    "column": 9,
                    "event": "note",
                    "message": "(24) '<unknown>' leaks here; was allocated at (4)",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1695 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "GCC_ANALYZER_WARNING",
            "cwe": 476,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'db_init_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1740,
                    "column": 30,
                    "event": "warning[-Wanalyzer-null-dereference]",
                    "message": "dereference of NULL 'b'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1740 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                              ^                                        ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 26,
                    "column": 19,
                    "event": "note",
                    "message": "(1) entry to 'dbrestart'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   26 | #define yyout dbout",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ^        ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1612,
                    "column": 10,
                    "event": "note",
                    "message": "in expansion of macro 'yyrestart'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1612 |  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^        ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1615,
                    "column": 5,
                    "event": "note",
                    "message": "(2) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1615 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 19,
                    "column": 31,
                    "event": "note",
                    "message": "(3) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   19 | #define yypop_buffer_state dbpop_buffer_state",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1616,
                    "column": 9,
                    "event": "note",
                    "message": "in expansion of macro 'yyensure_buffer_stack'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1616 |  if ( ! YY_CURRENT_BUFFER ){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~ ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 19,
                    "column": 31,
                    "event": "note",
                    "message": "(4) calling 'dbensure_buffer_stack' from 'dbrestart'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   19 | #define yypop_buffer_state dbpop_buffer_state",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1616,
                    "column": 9,
                    "event": "note",
                    "message": "in expansion of macro 'yyensure_buffer_stack'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1616 |  if ( ! YY_CURRENT_BUFFER ){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~ ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 19,
                    "column": 31,
                    "event": "note",
                    "message": "(5) entry to 'dbensure_buffer_stack'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   19 | #define yypop_buffer_state dbpop_buffer_state",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^~~~~~~~~~~~~~~      ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1827,
                    "column": 13,
                    "event": "note",
                    "message": "in expansion of macro 'yyensure_buffer_stack'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1827 |  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^                    ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1831,
                    "column": 5,
                    "event": "note",
                    "message": "(6) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1831 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 2140,
                    "column": 11,
                    "event": "note",
                    "message": "(7) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2140 | {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^           ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1841,
                    "column": 6,
                    "event": "note",
                    "message": "(8) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1841 |         );",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1844,
                    "column": 3,
                    "event": "note",
                    "message": "(9) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1844 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^                                                                           ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 19,
                    "column": 31,
                    "event": "note",
                    "message": "(10) returning to 'dbrestart' from 'dbensure_buffer_stack'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   19 | #define yypop_buffer_state dbpop_buffer_state",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1616,
                    "column": 9,
                    "event": "note",
                    "message": "in expansion of macro 'yyensure_buffer_stack'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1616 |  if ( ! YY_CURRENT_BUFFER ){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~ ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 8,
                    "column": 26,
                    "event": "note",
                    "message": "(11) calling 'db_create_buffer' from 'dbrestart'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    8 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1618,
                    "column": 13,
                    "event": "note",
                    "message": "in expansion of macro 'yy_create_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1618 |   YY_CURRENT_BUFFER_LVALUE =",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 8,
                    "column": 26,
                    "event": "note",
                    "message": "(12) entry to 'db_create_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    8 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                          ^               ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1674,
                    "column": 21,
                    "event": "note",
                    "message": "in expansion of macro 'yy_create_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1674 |  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^               ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1679,
                    "column": 5,
                    "event": "note",
                    "message": "(13) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1679 |  b = (YY_BUFFER_STATE) yyalloc( sizeof( struct yy_buffer_state )  );",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1682,
                    "column": 17,
                    "event": "note",
                    "message": "(14) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1682 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^     ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1688,
                    "column": 5,
                    "event": "note",
                    "message": "(15) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1688 |  b->yy_ch_buf = (char *) yyalloc( (yy_size_t) (b->yy_buf_size + 2)  );",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1691,
                    "column": 22,
                    "event": "note",
                    "message": "(16) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1691 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                      ^  ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 13,
                    "column": 24,
                    "event": "note",
                    "message": "(17) calling 'db_init_buffer' from 'db_create_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   13 | #define yy_scan_bytes db_scan_bytes",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1693,
                    "column": 2,
                    "event": "note",
                    "message": "in expansion of macro 'yy_init_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1693 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ^             ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 13,
                    "column": 24,
                    "event": "note",
                    "message": "(18) entry to 'db_init_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   13 | #define yy_scan_bytes db_scan_bytes",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~  ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1721,
                    "column": 17,
                    "event": "note",
                    "message": "in expansion of macro 'yy_init_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1721 |  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^             ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 14,
                    "column": 25,
                    "event": "note",
                    "message": "(19) calling 'db_flush_buffer' from 'db_init_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   14 | #define yy_init_buffer db_init_buffer",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1726,
                    "column": 2,
                    "event": "note",
                    "message": "in expansion of macro 'yy_flush_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1726 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ^              ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 14,
                    "column": 25,
                    "event": "note",
                    "message": "(20) entry to 'db_flush_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   14 | #define yy_init_buffer db_init_buffer",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~~~~~  ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1749,
                    "column": 10,
                    "event": "note",
                    "message": "in expansion of macro 'yy_flush_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1749 |  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^              ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1751,
                    "column": 9,
                    "event": "note",
                    "message": "(21) following 'false' branch (when 'b' is non-NULL)...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1751 | {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1754,
                    "column": 16,
                    "event": "note",
                    "message": "(22) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1754 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^  ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 520,
                    "column": 27,
                    "event": "note",
                    "message": "(23) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  518 |  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                            ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  519 | #define YY_CURRENT_BUFFER ( (yy_buffer_stack) \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  520 |                           ? (yy_buffer_stack)[(yy_buffer_stack_top)] \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1768,
                    "column": 12,
                    "event": "note",
                    "message": "in expansion of macro 'YY_CURRENT_BUFFER'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1768 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^                ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 519,
                    "column": 46,
                    "event": "note",
                    "message": "(24) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  519 | #define YY_CURRENT_BUFFER ( (yy_buffer_stack) \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                              ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1768,
                    "column": 12,
                    "event": "note",
                    "message": "in expansion of macro 'YY_CURRENT_BUFFER'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1768 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^                ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1768,
                    "column": 5,
                    "event": "note",
                    "message": "(25) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1768 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "(26) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 14,
                    "column": 25,
                    "event": "note",
                    "message": "(27) returning to 'db_init_buffer' from 'db_flush_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   14 | #define yy_init_buffer db_init_buffer",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1726,
                    "column": 2,
                    "event": "note",
                    "message": "in expansion of macro 'yy_flush_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1726 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ^              ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 520,
                    "column": 27,
                    "event": "note",
                    "message": "(28) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  518 |  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                            ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  519 | #define YY_CURRENT_BUFFER ( (yy_buffer_stack) \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  520 |                           ? (yy_buffer_stack)[(yy_buffer_stack_top)] \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1735,
                    "column": 14,
                    "event": "note",
                    "message": "in expansion of macro 'YY_CURRENT_BUFFER'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1735 |      */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^                ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 519,
                    "column": 46,
                    "event": "note",
                    "message": "(29) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  519 | #define YY_CURRENT_BUFFER ( (yy_buffer_stack) \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                              ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1735,
                    "column": 14,
                    "event": "note",
                    "message": "in expansion of macro 'YY_CURRENT_BUFFER'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1735 |      */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^                ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1735,
                    "column": 8,
                    "event": "note",
                    "message": "(30) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1735 |      */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1736,
                    "column": 25,
                    "event": "note",
                    "message": "(31) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1736 |     if (b != YY_CURRENT_BUFFER){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1740,
                    "column": 68,
                    "event": "note",
                    "message": "(32) following 'true' branch (when 'file' is non-NULL)...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1740 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                    ^  ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1740,
                    "column": 40,
                    "event": "note",
                    "message": "(33) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1740 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                        ^                     ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1740,
                    "column": 68,
                    "event": "note",
                    "message": "(34) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1740 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                    ^  ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1740,
                    "column": 30,
                    "event": "note",
                    "message": "(35) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1740 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                              ^                                        ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 13,
                    "column": 24,
                    "event": "note",
                    "message": "(36) returning to 'db_create_buffer' from 'db_init_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   13 | #define yy_scan_bytes db_scan_bytes",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1693,
                    "column": 2,
                    "event": "note",
                    "message": "in expansion of macro 'yy_init_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1693 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ^             ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 8,
                    "column": 26,
                    "event": "note",
                    "message": "(37) returning to 'dbrestart' from 'db_create_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    8 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1618,
                    "column": 13,
                    "event": "note",
                    "message": "in expansion of macro 'yy_create_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1618 |   YY_CURRENT_BUFFER_LVALUE =",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 13,
                    "column": 24,
                    "event": "note",
                    "message": "(38) following 'true' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   13 | #define yy_scan_bytes db_scan_bytes",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1621,
                    "column": 2,
                    "event": "note",
                    "message": "in expansion of macro 'yy_init_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1621 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ^             ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 519,
                    "column": 46,
                    "event": "note",
                    "message": "(39) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  519 | #define YY_CURRENT_BUFFER ( (yy_buffer_stack) \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                              ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1621,
                    "column": 18,
                    "event": "note",
                    "message": "in expansion of macro 'YY_CURRENT_BUFFER'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1621 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                  ^                ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 13,
                    "column": 24,
                    "event": "note",
                    "message": "(40) calling 'db_init_buffer' from 'dbrestart'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   13 | #define yy_scan_bytes db_scan_bytes",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1621,
                    "column": 2,
                    "event": "note",
                    "message": "in expansion of macro 'yy_init_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1621 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ^             ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 13,
                    "column": 24,
                    "event": "note",
                    "message": "(41) entry to 'db_init_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   13 | #define yy_scan_bytes db_scan_bytes",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~  ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1721,
                    "column": 17,
                    "event": "note",
                    "message": "in expansion of macro 'yy_init_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1721 |  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^             ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 14,
                    "column": 25,
                    "event": "note",
                    "message": "(42) calling 'db_flush_buffer' from 'db_init_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   14 | #define yy_init_buffer db_init_buffer",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1726,
                    "column": 2,
                    "event": "note",
                    "message": "in expansion of macro 'yy_flush_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1726 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ^              ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 14,
                    "column": 25,
                    "event": "note",
                    "message": "(43) entry to 'db_flush_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   14 | #define yy_init_buffer db_init_buffer",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~~~~~  ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1749,
                    "column": 10,
                    "event": "note",
                    "message": "in expansion of macro 'yy_flush_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1749 |  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^              ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1751,
                    "column": 9,
                    "event": "note",
                    "message": "(44) following 'true' branch (when 'b' is NULL)...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1751 | {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "(45) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 14,
                    "column": 25,
                    "event": "note",
                    "message": "(46) returning to 'db_init_buffer' from 'db_flush_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   14 | #define yy_init_buffer db_init_buffer",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1726,
                    "column": 2,
                    "event": "note",
                    "message": "in expansion of macro 'yy_flush_buffer'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1726 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |  ^              ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 520,
                    "column": 27,
                    "event": "note",
                    "message": "(47) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  518 |  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                            ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  519 | #define YY_CURRENT_BUFFER ( (yy_buffer_stack) \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  520 |                           ? (yy_buffer_stack)[(yy_buffer_stack_top)] \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1735,
                    "column": 14,
                    "event": "note",
                    "message": "in expansion of macro 'YY_CURRENT_BUFFER'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1735 |      */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^                ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1735,
                    "column": 8,
                    "event": "note",
                    "message": "(48) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1735 |      */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1735,
                    "column": 8,
                    "event": "note",
                    "message": "(49) following 'false' branch...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1740,
                    "column": 68,
                    "event": "note",
                    "message": "(50) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1740 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                    ^  ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1740,
                    "column": 68,
                    "event": "note",
                    "message": "(51) following 'false' branch (when 'file' is NULL)...",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1740,
                    "column": 30,
                    "event": "note",
                    "message": "(52) ...to here",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1740 | ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                              ^                                        ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1740,
                    "column": 30,
                    "event": "note",
                    "message": "(53) dereference of NULL 'b'",
                    "verbosity_level": "2"
                }
            ]
        },
        {
            "checker": "CLANG_WARNING",
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6784,
                    "column": 52,
                    "event": "warning[unix.Malloc]",
                    "message": "Use of zero-allocated memory",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        YY_CURRENT_BUFFER_LVALUE->yy_ch_buf[(yy_n_chars)] = YY_END_OF_BUFFER_CHAR;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                          ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6903,
                    "column": 7,
                    "event": "note",
                    "message": "Assuming the condition is true",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if ( *(yy_c_buf_p) == YY_END_OF_BUFFER_CHAR )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6903,
                    "column": 2,
                    "event": "note",
                    "message": "Taking true branch",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if ( *(yy_c_buf_p) == YY_END_OF_BUFFER_CHAR )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6909,
                    "column": 8,
                    "event": "note",
                    "message": "Assuming the condition is false",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                if ( (yy_c_buf_p) < &YY_CURRENT_BUFFER_LVALUE->yy_ch_buf[(yy_n_chars)] )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6909,
                    "column": 3,
                    "event": "note",
                    "message": "Taking false branch",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                if ( (yy_c_buf_p) < &YY_CURRENT_BUFFER_LVALUE->yy_ch_buf[(yy_n_chars)] )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6918,
                    "column": 13,
                    "event": "note",
                    "message": "Calling 'yy_get_next_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        switch ( yy_get_next_buffer(  ) )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                 ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6663,
                    "column": 7,
                    "event": "note",
                    "message": "Assuming the condition is false",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if ( (yy_c_buf_p) > &YY_CURRENT_BUFFER_LVALUE->yy_ch_buf[(yy_n_chars) + 1] )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6663,
                    "column": 2,
                    "event": "note",
                    "message": "Taking false branch",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if ( (yy_c_buf_p) > &YY_CURRENT_BUFFER_LVALUE->yy_ch_buf[(yy_n_chars) + 1] )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6667,
                    "column": 7,
                    "event": "note",
                    "message": "Assuming field 'yy_fill_buffer' is not equal to 0",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if ( YY_CURRENT_BUFFER_LVALUE->yy_fill_buffer == 0 )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 524,
                    "column": 34,
                    "event": "note",
                    "message": "expanded from macro 'YY_CURRENT_BUFFER_LVALUE'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define YY_CURRENT_BUFFER_LVALUE (yy_buffer_stack)[(yy_buffer_stack_top)]",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                 ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6667,
                    "column": 2,
                    "event": "note",
                    "message": "Taking false branch",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if ( YY_CURRENT_BUFFER_LVALUE->yy_fill_buffer == 0 )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6691,
                    "column": 15,
                    "event": "note",
                    "message": "Assuming 'i' is >= 'number_to_move'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        for ( i = 0; i < number_to_move; ++i )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6691,
                    "column": 2,
                    "event": "note",
                    "message": "Loop condition is false. Execution continues on line 6695",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        for ( i = 0; i < number_to_move; ++i )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6694,
                    "column": 7,
                    "event": "note",
                    "message": "Assuming field 'yy_buffer_status' is equal to YY_BUFFER_EOF_PENDING",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if ( YY_CURRENT_BUFFER_LVALUE->yy_buffer_status == YY_BUFFER_EOF_PENDING )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 524,
                    "column": 34,
                    "event": "note",
                    "message": "expanded from macro 'YY_CURRENT_BUFFER_LVALUE'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define YY_CURRENT_BUFFER_LVALUE (yy_buffer_stack)[(yy_buffer_stack_top)]",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                 ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6694,
                    "column": 2,
                    "event": "note",
                    "message": "Taking true branch",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if ( YY_CURRENT_BUFFER_LVALUE->yy_buffer_status == YY_BUFFER_EOF_PENDING )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6753,
                    "column": 7,
                    "event": "note",
                    "message": "'yy_n_chars' is equal to 0",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if ( (yy_n_chars) == 0 )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ^~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6753,
                    "column": 2,
                    "event": "note",
                    "message": "Taking true branch",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if ( (yy_n_chars) == 0 )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6755,
                    "column": 8,
                    "event": "note",
                    "message": "Assuming 'number_to_move' is equal to YY_MORE_ADJ",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                if ( number_to_move == YY_MORE_ADJ )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6755,
                    "column": 3,
                    "event": "note",
                    "message": "Taking true branch",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                if ( number_to_move == YY_MORE_ADJ )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6772,
                    "column": 6,
                    "event": "note",
                    "message": "Assuming the condition is true",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if (((yy_n_chars) + number_to_move) > YY_CURRENT_BUFFER_LVALUE->yy_buf_size) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6772,
                    "column": 2,
                    "event": "note",
                    "message": "Taking true branch",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if (((yy_n_chars) + number_to_move) > YY_CURRENT_BUFFER_LVALUE->yy_buf_size) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6777,
                    "column": 8,
                    "event": "note",
                    "message": "Assuming field 'yy_ch_buf' is non-null",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                if ( ! YY_CURRENT_BUFFER_LVALUE->yy_ch_buf )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6777,
                    "column": 3,
                    "event": "note",
                    "message": "Taking false branch",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                if ( ! YY_CURRENT_BUFFER_LVALUE->yy_ch_buf )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/conf_lex.c",
                    "line": 6784,
                    "column": 52,
                    "event": "note",
                    "message": "Use of zero-allocated memory",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        YY_CURRENT_BUFFER_LVALUE->yy_ch_buf[(yy_n_chars)] = YY_END_OF_BUFFER_CHAR;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ^",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "CLANG_WARNING",
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 267,
                    "column": 23,
                    "event": "warning[core.UndefinedBinaryOperatorResult]",
                    "message": "The left operand of '==' is a garbage value",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    if ((*db_order)[i]==db_attr) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                      ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 301,
                    "column": 3,
                    "event": "note",
                    "message": "Control jumps to 'case 4:'  at line 316",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  switch (db) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 328,
                    "column": 5,
                    "event": "note",
                    "message": " Execution continues on line 332",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    break;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 332,
                    "column": 7,
                    "event": "note",
                    "message": "'db_osize' is not equal to NULL",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (db_osize == NULL) return NULL;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 332,
                    "column": 3,
                    "event": "note",
                    "message": "Taking false branch",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (db_osize == NULL) return NULL;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 334,
                    "column": 7,
                    "event": "note",
                    "message": "Assuming the condition is true",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (*db_osize==0) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 334,
                    "column": 3,
                    "event": "note",
                    "message": "Taking true branch",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (*db_osize==0) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 338,
                    "column": 12,
                    "event": "note",
                    "message": "Assuming 'token' is equal to TDBSPEC",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    while((token!=TDBSPEC && token!=TEOF)){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 338,
                    "column": 27,
                    "event": "note",
                    "message": "Left side of '&&' is false",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    while((token!=TDBSPEC && token!=TEOF)){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                          ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 372,
                    "column": 17,
                    "event": "note",
                    "message": "Left side of '&&' is false",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    if(FORCEDBMD&&!gotbegin_db){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 377,
                    "column": 9,
                    "event": "note",
                    "message": "'token' is equal to TDBSPEC",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    if (token!=TDBSPEC) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 377,
                    "column": 5,
                    "event": "note",
                    "message": "Taking false branch",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    if (token!=TDBSPEC) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 420,
                    "column": 9,
                    "event": "note",
                    "message": "Calling 'db_file_read_spec'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    if (db_file_read_spec(db)!=0) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 177,
                    "column": 3,
                    "event": "note",
                    "message": "Control jumps to 'case 4:'  at line 184",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  switch (db) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 188,
                    "column": 5,
                    "event": "note",
                    "message": " Execution continues on line 195",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    break;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 195,
                    "column": 25,
                    "event": "note",
                    "message": "Storing uninitialized value",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  *db_order=(DB_FIELD*) malloc(1*sizeof(DB_FIELD));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        ^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 197,
                    "column": 10,
                    "event": "note",
                    "message": "Assuming the condition is false",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while ((i=db_scan())!=TNEWLINE){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "         ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 197,
                    "column": 3,
                    "event": "note",
                    "message": "Loop condition is false. Execution continues on line 264",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  while ((i=db_scan())!=TNEWLINE){",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 266,
                    "column": 8,
                    "event": "note",
                    "message": "The value 0 is assigned to 'i'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (i=0;i<*db_osize;i++) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "       ^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 266,
                    "column": 12,
                    "event": "note",
                    "message": "Assuming the condition is true",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (i=0;i<*db_osize;i++) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 266,
                    "column": 3,
                    "event": "note",
                    "message": "Loop condition is true.  Entering loop body",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  for (i=0;i<*db_osize;i++) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_file.c",
                    "line": 267,
                    "column": 23,
                    "event": "note",
                    "message": "The left operand of '==' is a garbage value",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    if ((*db_order)[i]==db_attr) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ~~~~~~~~~~~~~~^",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "CLANG_WARNING",
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1053,
                    "column": 19,
                    "event": "warning[core.uninitialized.ArraySubscript]",
                    "message": "Array subscript is undefined",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        YY_CHAR yy_c = yy_ec[YY_SC_TO_UI(*yy_cp)] ;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                       ^     ~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1004,
                    "column": 7,
                    "event": "note",
                    "message": "Assuming 'yy_init' is 0",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if ( !(yy_init) )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ^~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1004,
                    "column": 2,
                    "event": "note",
                    "message": "Taking true branch",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if ( !(yy_init) )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1012,
                    "column": 8,
                    "event": "note",
                    "message": "Assuming 'yy_start' is not equal to 0",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                if ( ! (yy_start) )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1012,
                    "column": 3,
                    "event": "note",
                    "message": "Taking false branch",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                if ( ! (yy_start) )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1015,
                    "column": 8,
                    "event": "note",
                    "message": "Assuming 'dbin' is non-null",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                if ( ! yyin )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1015,
                    "column": 3,
                    "event": "note",
                    "message": "Taking false branch",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                if ( ! yyin )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1018,
                    "column": 8,
                    "event": "note",
                    "message": "Assuming 'dbout' is non-null",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                if ( ! yyout )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1018,
                    "column": 3,
                    "event": "note",
                    "message": "Taking false branch",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                if ( ! yyout )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1021,
                    "column": 10,
                    "event": "note",
                    "message": "Assuming 'yy_buffer_stack' is null",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                if ( ! YY_CURRENT_BUFFER ) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                       ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 518,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'YY_CURRENT_BUFFER'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define YY_CURRENT_BUFFER ( (yy_buffer_stack) \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1021,
                    "column": 10,
                    "event": "note",
                    "message": "'?' condition is false",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 518,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'YY_CURRENT_BUFFER'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define YY_CURRENT_BUFFER ( (yy_buffer_stack) \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1021,
                    "column": 3,
                    "event": "note",
                    "message": "Taking true branch",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                if ( ! YY_CURRENT_BUFFER ) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1024,
                    "column": 5,
                    "event": "note",
                    "message": "Calling 'db_create_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                yy_create_buffer( yyin, YY_BUF_SIZE );",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 8,
                    "column": 26,
                    "event": "note",
                    "message": "expanded from macro 'yy_create_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define yy_create_buffer db_create_buffer",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                         ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1679,
                    "column": 7,
                    "event": "note",
                    "message": "Assuming 'b' is non-null",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if ( ! b )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1679,
                    "column": 2,
                    "event": "note",
                    "message": "Taking false branch",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if ( ! b )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1687,
                    "column": 26,
                    "event": "note",
                    "message": "Calling 'dballoc'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        b->yy_ch_buf = (char *) yyalloc( (yy_size_t) (b->yy_buf_size + 2)  );",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 29,
                    "column": 17,
                    "event": "note",
                    "message": "expanded from macro 'yyalloc'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define yyalloc dballoc",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 2140,
                    "column": 11,
                    "event": "note",
                    "message": "Storing uninitialized value",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        return malloc(size);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ^~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1687,
                    "column": 26,
                    "event": "note",
                    "message": "Returning from 'dballoc'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        b->yy_ch_buf = (char *) yyalloc( (yy_size_t) (b->yy_buf_size + 2)  );",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 29,
                    "column": 17,
                    "event": "note",
                    "message": "expanded from macro 'yyalloc'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define yyalloc dballoc",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1688,
                    "column": 7,
                    "event": "note",
                    "message": "Assuming field 'yy_ch_buf' is non-null",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if ( ! b->yy_ch_buf )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ^~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1688,
                    "column": 2,
                    "event": "note",
                    "message": "Taking false branch",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if ( ! b->yy_ch_buf )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1024,
                    "column": 5,
                    "event": "note",
                    "message": "Returning from 'db_create_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                yy_create_buffer( yyin, YY_BUF_SIZE );",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 8,
                    "column": 26,
                    "event": "note",
                    "message": "expanded from macro 'yy_create_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define yy_create_buffer db_create_buffer",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                         ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1036,
                    "column": 2,
                    "event": "note",
                    "message": "Loop condition is true.  Entering loop body",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        while ( /*CONSTCOND*/1 )                /* loops until end-of-file is reached */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1054,
                    "column": 9,
                    "event": "note",
                    "message": "Assuming the condition is true",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        if ( yy_accept[yy_current_state] )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1054,
                    "column": 4,
                    "event": "note",
                    "message": "Taking true branch",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        if ( yy_accept[yy_current_state] )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1059,
                    "column": 4,
                    "event": "note",
                    "message": "Loop condition is false. Execution continues on line 1066",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        while ( yy_chk[yy_base[yy_current_state] + yy_c] != yy_current_state )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1051,
                    "column": 3,
                    "event": "note",
                    "message": "Loop condition is true. Execution continues on line 1054",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                do",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1054,
                    "column": 9,
                    "event": "note",
                    "message": "Assuming the condition is true",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        if ( yy_accept[yy_current_state] )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1054,
                    "column": 4,
                    "event": "note",
                    "message": "Taking true branch",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        if ( yy_accept[yy_current_state] )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1059,
                    "column": 4,
                    "event": "note",
                    "message": "Loop condition is false. Execution continues on line 1066",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        while ( yy_chk[yy_base[yy_current_state] + yy_c] != yy_current_state )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1051,
                    "column": 3,
                    "event": "note",
                    "message": "Loop condition is true. Execution continues on line 1054",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                do",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1053,
                    "column": 19,
                    "event": "note",
                    "message": "Array subscript is undefined",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        YY_CHAR yy_c = yy_ec[YY_SC_TO_UI(*yy_cp)] ;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                       ^     ~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "CLANG_WARNING",
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1461,
                    "column": 52,
                    "event": "warning[unix.Malloc]",
                    "message": "Use of zero-allocated memory",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        YY_CURRENT_BUFFER_LVALUE->yy_ch_buf[(yy_n_chars)] = YY_END_OF_BUFFER_CHAR;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                          ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1543,
                    "column": 7,
                    "event": "note",
                    "message": "Assuming the condition is true",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if ( *(yy_c_buf_p) == YY_END_OF_BUFFER_CHAR )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1543,
                    "column": 2,
                    "event": "note",
                    "message": "Taking true branch",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if ( *(yy_c_buf_p) == YY_END_OF_BUFFER_CHAR )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1549,
                    "column": 8,
                    "event": "note",
                    "message": "Assuming the condition is false",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                if ( (yy_c_buf_p) < &YY_CURRENT_BUFFER_LVALUE->yy_ch_buf[(yy_n_chars)] )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1549,
                    "column": 3,
                    "event": "note",
                    "message": "Taking false branch",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                if ( (yy_c_buf_p) < &YY_CURRENT_BUFFER_LVALUE->yy_ch_buf[(yy_n_chars)] )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1558,
                    "column": 13,
                    "event": "note",
                    "message": "Calling 'yy_get_next_buffer'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        switch ( yy_get_next_buffer(  ) )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                 ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1340,
                    "column": 7,
                    "event": "note",
                    "message": "Assuming the condition is false",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if ( (yy_c_buf_p) > &YY_CURRENT_BUFFER_LVALUE->yy_ch_buf[(yy_n_chars) + 1] )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1340,
                    "column": 2,
                    "event": "note",
                    "message": "Taking false branch",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if ( (yy_c_buf_p) > &YY_CURRENT_BUFFER_LVALUE->yy_ch_buf[(yy_n_chars) + 1] )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1344,
                    "column": 7,
                    "event": "note",
                    "message": "Assuming field 'yy_fill_buffer' is not equal to 0",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if ( YY_CURRENT_BUFFER_LVALUE->yy_fill_buffer == 0 )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 524,
                    "column": 34,
                    "event": "note",
                    "message": "expanded from macro 'YY_CURRENT_BUFFER_LVALUE'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define YY_CURRENT_BUFFER_LVALUE (yy_buffer_stack)[(yy_buffer_stack_top)]",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                 ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1344,
                    "column": 2,
                    "event": "note",
                    "message": "Taking false branch",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if ( YY_CURRENT_BUFFER_LVALUE->yy_fill_buffer == 0 )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1368,
                    "column": 15,
                    "event": "note",
                    "message": "Assuming 'i' is >= 'number_to_move'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        for ( i = 0; i < number_to_move; ++i )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1368,
                    "column": 2,
                    "event": "note",
                    "message": "Loop condition is false. Execution continues on line 1372",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        for ( i = 0; i < number_to_move; ++i )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1371,
                    "column": 7,
                    "event": "note",
                    "message": "Assuming field 'yy_buffer_status' is equal to YY_BUFFER_EOF_PENDING",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if ( YY_CURRENT_BUFFER_LVALUE->yy_buffer_status == YY_BUFFER_EOF_PENDING )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 524,
                    "column": 34,
                    "event": "note",
                    "message": "expanded from macro 'YY_CURRENT_BUFFER_LVALUE'",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define YY_CURRENT_BUFFER_LVALUE (yy_buffer_stack)[(yy_buffer_stack_top)]",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                 ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1371,
                    "column": 2,
                    "event": "note",
                    "message": "Taking true branch",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if ( YY_CURRENT_BUFFER_LVALUE->yy_buffer_status == YY_BUFFER_EOF_PENDING )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1430,
                    "column": 7,
                    "event": "note",
                    "message": "'yy_n_chars' is equal to 0",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if ( (yy_n_chars) == 0 )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ^~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1430,
                    "column": 2,
                    "event": "note",
                    "message": "Taking true branch",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if ( (yy_n_chars) == 0 )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1432,
                    "column": 8,
                    "event": "note",
                    "message": "Assuming 'number_to_move' is equal to YY_MORE_ADJ",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                if ( number_to_move == YY_MORE_ADJ )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1432,
                    "column": 3,
                    "event": "note",
                    "message": "Taking true branch",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                if ( number_to_move == YY_MORE_ADJ )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1449,
                    "column": 6,
                    "event": "note",
                    "message": "Assuming the condition is true",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if (((yy_n_chars) + number_to_move) > YY_CURRENT_BUFFER_LVALUE->yy_buf_size) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1449,
                    "column": 2,
                    "event": "note",
                    "message": "Taking true branch",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if (((yy_n_chars) + number_to_move) > YY_CURRENT_BUFFER_LVALUE->yy_buf_size) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1454,
                    "column": 8,
                    "event": "note",
                    "message": "Assuming field 'yy_ch_buf' is non-null",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                if ( ! YY_CURRENT_BUFFER_LVALUE->yy_ch_buf )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1454,
                    "column": 3,
                    "event": "note",
                    "message": "Taking false branch",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                if ( ! YY_CURRENT_BUFFER_LVALUE->yy_ch_buf )",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/builddir/build/BUILD/aide-0.16/src/db_lex.c",
                    "line": 1461,
                    "column": 52,
                    "event": "note",
                    "message": "Use of zero-allocated memory",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        YY_CURRENT_BUFFER_LVALUE->yy_ch_buf[(yy_n_chars)] = YY_END_OF_BUFFER_CHAR;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ^",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/aide-attributes.sh",
                    "line": 34,
                    "column": 10,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/aide-attributes.sh",
                    "line": 38,
                    "column": 5,
                    "event": "note[SC2219]",
                    "message": "Instead of 'let expr', prefer (( expr )) .",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/aide-attributes.sh",
                    "line": 48,
                    "column": 17,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/aide-attributes.sh",
                    "line": 51,
                    "column": 21,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/aide-attributes.sh",
                    "line": 60,
                    "column": 18,
                    "event": "note[SC2004]",
                    "message": "$/${} is unnecessary on arithmetic variables.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/aide-attributes.sh",
                    "line": 60,
                    "column": 23,
                    "event": "note[SC2004]",
                    "message": "$/${} is unnecessary on arithmetic variables.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/aide-attributes.sh",
                    "line": 60,
                    "column": 40,
                    "event": "note[SC2004]",
                    "message": "$/${} is unnecessary on arithmetic variables.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/aide-attributes.sh",
                    "line": 60,
                    "column": 45,
                    "event": "note[SC2004]",
                    "message": "$/${} is unnecessary on arithmetic variables.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/aide-attributes.sh",
                    "line": 61,
                    "column": 21,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/aide-attributes.sh",
                    "line": 62,
                    "column": 22,
                    "event": "note[SC2004]",
                    "message": "$/${} is unnecessary on arithmetic variables.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/aide-attributes.sh",
                    "line": 62,
                    "column": 27,
                    "event": "note[SC2004]",
                    "message": "$/${} is unnecessary on arithmetic variables.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/aide-attributes.sh",
                    "line": 62,
                    "column": 42,
                    "event": "note[SC2004]",
                    "message": "$/${} is unnecessary on arithmetic variables.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/aide-attributes.sh",
                    "line": 62,
                    "column": 47,
                    "event": "note[SC2004]",
                    "message": "$/${} is unnecessary on arithmetic variables.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/aide-attributes.sh",
                    "line": 63,
                    "column": 21,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/aide-attributes.sh",
                    "line": 66,
                    "column": 18,
                    "event": "note[SC2004]",
                    "message": "$/${} is unnecessary on arithmetic variables.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/aide-attributes.sh",
                    "line": 66,
                    "column": 23,
                    "event": "note[SC2004]",
                    "message": "$/${} is unnecessary on arithmetic variables.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/gpg2_check.sh",
                    "line": 6,
                    "column": 10,
                    "event": "note[SC2006]",
                    "message": "Use $(...) notation instead of legacy backticked `...`.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/gpg2_check.sh",
                    "line": 7,
                    "column": 55,
                    "event": "note[SC2006]",
                    "message": "Use $(...) notation instead of legacy backticked `...`.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/gpg2_check.sh",
                    "line": 15,
                    "column": 6,
                    "event": "warning[SC2039]",
                    "message": "In POSIX sh, 'pushd' is undefined.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/gpg2_check.sh",
                    "line": 15,
                    "column": 6,
                    "event": "warning[SC2164]",
                    "message": "Use 'pushd ... || exit' or 'pushd ... || return' in case pushd fails.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/gpg2_check.sh",
                    "line": 20,
                    "column": 13,
                    "event": "warning[SC2039]",
                    "message": "In POSIX sh, == in place of = is undefined.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/gpg2_check.sh",
                    "line": 26,
                    "column": 6,
                    "event": "warning[SC2039]",
                    "message": "In POSIX sh, 'popd' is undefined.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/gpg2_check.sh",
                    "line": 26,
                    "column": 6,
                    "event": "warning[SC2164]",
                    "message": "Use 'popd ... || exit' or 'popd ... || return' in case popd fails.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/gpg2_update.sh",
                    "line": 20,
                    "column": 1,
                    "event": "warning[SC2039]",
                    "message": "In POSIX sh, 'pushd' is undefined.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/gpg2_update.sh",
                    "line": 20,
                    "column": 1,
                    "event": "warning[SC2164]",
                    "message": "Use 'pushd ... || exit' or 'pushd ... || return' in case pushd fails.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/gpg2_update.sh",
                    "line": 24,
                    "column": 19,
                    "event": "note[SC2006]",
                    "message": "Use $(...) notation instead of legacy backticked `...`.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/gpg2_update.sh",
                    "line": 24,
                    "column": 30,
                    "event": "note[SC2006]",
                    "message": "Use $(...) notation instead of legacy backticked `...`.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/gpg2_update.sh",
                    "line": 25,
                    "column": 22,
                    "event": "warning[SC2039]",
                    "message": "In POSIX sh, == in place of = is undefined.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/gpg2_update.sh",
                    "line": 25,
                    "column": 27,
                    "event": "warning[SC2166]",
                    "message": "Prefer [ p ] && [ q ] as [ p -a q ] is not well defined.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/gpg2_update.sh",
                    "line": 28,
                    "column": 12,
                    "event": "warning[SC2039]",
                    "message": "In POSIX sh, == in place of = is undefined.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/gpg2_update.sh",
                    "line": 35,
                    "column": 20,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/gpg2_update.sh",
                    "line": 37,
                    "column": 22,
                    "event": "warning[SC2039]",
                    "message": "In POSIX sh, == in place of = is undefined.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/gpg2_update.sh",
                    "line": 39,
                    "column": 2,
                    "event": "warning[SC2039]",
                    "message": "In POSIX sh, [[ ]] is undefined.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/gpg2_update.sh",
                    "line": 41,
                    "column": 12,
                    "event": "warning[SC2039]",
                    "message": "In POSIX sh, == in place of = is undefined.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/gpg2_update.sh",
                    "line": 46,
                    "column": 14,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/gpg2_update.sh",
                    "line": 52,
                    "column": 1,
                    "event": "warning[SC2039]",
                    "message": "In POSIX sh, 'popd' is undefined.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/gpg2_update.sh",
                    "line": 52,
                    "column": 1,
                    "event": "warning[SC2164]",
                    "message": "Use 'popd ... || exit' or 'popd ... || return' in case popd fails.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/gpg_check.sh",
                    "line": 25,
                    "column": 14,
                    "event": "note[SC2002]",
                    "message": "Useless cat. Consider 'cmd < file | ..' or 'cmd file | ..' instead.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/gpg_check.sh",
                    "line": 25,
                    "column": 69,
                    "event": "note[SC2006]",
                    "message": "Use $(...) notation instead of legacy backticked `...`.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/gpg_check.sh",
                    "line": 29,
                    "column": 6,
                    "event": "note[SC2181]",
                    "message": "Check exit code directly with e.g. 'if mycmd;', not indirectly with $?.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/gpg_update.sh",
                    "line": 28,
                    "column": 14,
                    "event": "note[SC2002]",
                    "message": "Useless cat. Consider 'cmd < file | ..' or 'cmd file | ..' instead.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/gpg_update.sh",
                    "line": 28,
                    "column": 71,
                    "event": "note[SC2006]",
                    "message": "Use $(...) notation instead of legacy backticked `...`.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/gpg_update.sh",
                    "line": 32,
                    "column": 6,
                    "event": "note[SC2181]",
                    "message": "Check exit code directly with e.g. 'if mycmd;', not indirectly with $?.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 202,
                    "column": 15,
                    "event": "note[SC2006]",
                    "message": "Use $(...) notation instead of legacy backticked `...`.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 211,
                    "column": 6,
                    "event": "note[SC2006]",
                    "message": "Use $(...) notation instead of legacy backticked `...`.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 220,
                    "column": 10,
                    "event": "note[SC2006]",
                    "message": "Use $(...) notation instead of legacy backticked `...`.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 220,
                    "column": 20,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 229,
                    "column": 18,
                    "event": "note[SC2006]",
                    "message": "Use $(...) notation instead of legacy backticked `...`.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 251,
                    "column": 14,
                    "event": "note[SC2006]",
                    "message": "Use $(...) notation instead of legacy backticked `...`.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 252,
                    "column": 16,
                    "event": "note[SC2006]",
                    "message": "Use $(...) notation instead of legacy backticked `...`.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 252,
                    "column": 21,
                    "event": "note[SC2002]",
                    "message": "Useless cat. Consider 'cmd < file | ..' or 'cmd file | ..' instead.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 253,
                    "column": 14,
                    "event": "note[SC2006]",
                    "message": "Use $(...) notation instead of legacy backticked `...`.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 253,
                    "column": 15,
                    "event": "note[SC2003]",
                    "message": "expr is antiquated. Consider rewriting this using $((..)), ${} or [[ ]].",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 253,
                    "column": 20,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 253,
                    "column": 34,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 256,
                    "column": 13,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 260,
                    "column": 15,
                    "event": "note[SC2006]",
                    "message": "Use $(...) notation instead of legacy backticked `...`.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 263,
                    "column": 11,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 263,
                    "column": 49,
                    "event": "warning[SC2069]",
                    "message": "To redirect stdout+stderr, 2>&1 must be last (or use '{ cmd > file; } 2>&1' to clarify).",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 267,
                    "column": 10,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 272,
                    "column": 18,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 273,
                    "column": 18,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 276,
                    "column": 12,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 276,
                    "column": 20,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 279,
                    "column": 14,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 279,
                    "column": 35,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 280,
                    "column": 12,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 280,
                    "column": 22,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 280,
                    "column": 33,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 280,
                    "column": 62,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 280,
                    "column": 73,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 282,
                    "column": 16,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 282,
                    "column": 29,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 282,
                    "column": 48,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 283,
                    "column": 12,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 283,
                    "column": 25,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 283,
                    "column": 44,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 283,
                    "column": 55,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 283,
                    "column": 68,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 283,
                    "column": 87,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 286,
                    "column": 12,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 286,
                    "column": 22,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 286,
                    "column": 33,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 286,
                    "column": 62,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 286,
                    "column": 75,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 286,
                    "column": 94,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 290,
                    "column": 12,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 290,
                    "column": 16,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 290,
                    "column": 26,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 290,
                    "column": 37,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 291,
                    "column": 12,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 291,
                    "column": 20,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 294,
                    "column": 18,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 294,
                    "column": 37,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 295,
                    "column": 15,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 295,
                    "column": 34,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 297,
                    "column": 12,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 297,
                    "column": 22,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 297,
                    "column": 33,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 297,
                    "column": 58,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 297,
                    "column": 67,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 322,
                    "column": 18,
                    "event": "note[SC2006]",
                    "message": "Use $(...) notation instead of legacy backticked `...`.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 322,
                    "column": 22,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 335,
                    "column": 5,
                    "event": "warning[SC2034]",
                    "message": "log appears unused. Verify use (or export if used externally).",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 339,
                    "column": 15,
                    "event": "note[SC2006]",
                    "message": "Use $(...) notation instead of legacy backticked `...`.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 342,
                    "column": 19,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 348,
                    "column": 27,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 349,
                    "column": 14,
                    "event": "note[SC2181]",
                    "message": "Check exit code directly with e.g. 'if mycmd;', not indirectly with $?.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 352,
                    "column": 23,
                    "event": "note[SC2006]",
                    "message": "Use $(...) notation instead of legacy backticked `...`.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 352,
                    "column": 46,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 356,
                    "column": 24,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 357,
                    "column": 14,
                    "event": "note[SC2181]",
                    "message": "Check exit code directly with e.g. 'if mycmd;', not indirectly with $?.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 360,
                    "column": 20,
                    "event": "note[SC2006]",
                    "message": "Use $(...) notation instead of legacy backticked `...`.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 360,
                    "column": 40,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 364,
                    "column": 25,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 365,
                    "column": 14,
                    "event": "note[SC2181]",
                    "message": "Check exit code directly with e.g. 'if mycmd;', not indirectly with $?.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 368,
                    "column": 28,
                    "event": "note[SC2006]",
                    "message": "Use $(...) notation instead of legacy backticked `...`.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 368,
                    "column": 49,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 374,
                    "column": 12,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 374,
                    "column": 20,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 375,
                    "column": 12,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 375,
                    "column": 20,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 375,
                    "column": 30,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 375,
                    "column": 41,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 376,
                    "column": 12,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 376,
                    "column": 20,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 376,
                    "column": 30,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 376,
                    "column": 41,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 384,
                    "column": 12,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 384,
                    "column": 20,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 397,
                    "column": 9,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 397,
                    "column": 9,
                    "event": "note[SC2002]",
                    "message": "Useless cat. Consider 'cmd < file | ..' or 'cmd file | ..' instead.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 397,
                    "column": 24,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 398,
                    "column": 53,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 407,
                    "column": 9,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 408,
                    "column": 12,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 408,
                    "column": 27,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 409,
                    "column": 12,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 410,
                    "column": 13,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 416,
                    "column": 9,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 418,
                    "column": 20,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 418,
                    "column": 33,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 419,
                    "column": 13,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 419,
                    "column": 28,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 419,
                    "column": 46,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 420,
                    "column": 16,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 420,
                    "column": 29,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 429,
                    "column": 9,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 432,
                    "column": 17,
                    "event": "warning[SC2045]",
                    "message": "Iterating over ls output is fragile. Use globs.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 432,
                    "column": 17,
                    "event": "note[SC2006]",
                    "message": "Use $(...) notation instead of legacy backticked `...`.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 432,
                    "column": 24,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 435,
                    "column": 10,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 435,
                    "column": 18,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 435,
                    "column": 24,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 438,
                    "column": 9,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 438,
                    "column": 24,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 440,
                    "column": 15,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 440,
                    "column": 25,
                    "event": "warning[SC2046]",
                    "message": "Quote this to prevent word splitting.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 440,
                    "column": 25,
                    "event": "note[SC2006]",
                    "message": "Use $(...) notation instead of legacy backticked `...`.",
                    "verbosity_level": "0"
                }
            ]
        },
        {
            "checker": "SHELLCHECK_WARNING",
            "cwe": 398,
            "language": "shell",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "/builddir/build/BUILDROOT/aide-0.16-16.eln103.x86_64/usr/share/doc/aide/contrib/sshaide.sh",
                    "line": 444,
                    "column": 12,
                    "event": "note[SC2086]",
                    "message": "Double quote to prevent globbing and word splitting.",
                    "verbosity_level": "0"
                }
            ]
        }
    ]
}
