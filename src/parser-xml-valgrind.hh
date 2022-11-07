/*
 * Copyright (C) 2021 Red Hat, Inc.
 *
 * This file is part of csdiff.
 *
 * csdiff is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * csdiff is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with csdiff.  If not, see <http://www.gnu.org/licenses/>.
 */

#ifndef H_GUARD_PARSER_XML_VALGRIND_H
#define H_GUARD_PARSER_XML_VALGRIND_H

#include "abstract-tree.hh"

/// tree decoder for valgrind XML output
class ValgrindTreeDecoder: public AbstractTreeDecoder {
    public:
        ValgrindTreeDecoder();
        ~ValgrindTreeDecoder() override;

        bool readNode(Defect *def) override;

        void readRoot(const pt::ptree *root) override;

    private:
        struct Private;
        std::unique_ptr<Private> d;
};

#endif /* H_GUARD_PARSER_XML_VALGRIND_H */
